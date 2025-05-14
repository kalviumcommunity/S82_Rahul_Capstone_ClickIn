import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(undefined);

// Mock database of users
const mockUsers = [
  {
    id: "1",
    name: "Customer Demo",
    email: "customer@example.com",
    password: "password123",
    role: "customer",
    location: "110001"
  },
  {
    id: "2",
    name: "Vendor Demo",
    email: "vendor@example.com",
    password: "password123",
    role: "vendor",
    location: "110001"
  },
  {
    id: "3",
    name: "Delivery Demo",
    email: "delivery@example.com",
    password: "password123",
    role: "delivery",
    location: "110001"
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUserJSON = localStorage.getItem("instait_user");
    if (savedUserJSON) {
      try {
        const savedUser = JSON.parse(savedUserJSON);
        setUser(savedUser);
      } catch (error) {
        console.error("Failed to parse saved user:", error);
        localStorage.removeItem("instait_user");
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("instait_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("instait_user");
    }
  }, [user]);

  const login = async (email, password, role) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const foundUser = mockUsers.find(
      u =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password &&
        u.role === role
    );

    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return true;
    }

    return false;
  };

  const register = async (name, email, password, role) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (mockUsers.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return false;
    }

    const newUser = {
      id: `${mockUsers.length + 1}`,
      name,
      email,
      password,
      role,
      location: "110001"
    };

    mockUsers.push(newUser);

    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);

    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const setUserLocation = (location) => {
    if (user) {
      setUser({
        ...user,
        location
      });
    }
  };

  const authContextValue = {
    user,
    isAuthenticated: !!user,
    role: user?.role || null,
    login,
    register,
    logout,
    setUserLocation
  };

  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
