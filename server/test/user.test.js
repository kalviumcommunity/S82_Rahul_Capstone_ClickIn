import request from 'supertest';
import app from '../app';  // Import your Express app

describe('User API tests', () => {
  
  // Test for fetching all users
  it('should fetch all users', async () => {
    const response = await request(app).get('/api/users');  // Adjust your endpoint if needed
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ name: expect.any(String) })]));
  });

  // Test for fetching a single user by ID (you can mock this for testing)
  it('should fetch a user by ID', async () => {
    const userId = 1;  // Example user ID, adjust this based on your data
    const response = await request(app).get(`/api/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');  // Adjust according to your user schema
  });

  // Test for creating a new user
  it('should create a new user', async () => {
    const newUser = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    };

    const response = await request(app)
      .post('/api/users')
      .send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('name', 'John Doe');
    expect(response.body).toHaveProperty('email', 'john@example.com');
  });

  // Test for updating a user
  it('should update a user by ID', async () => {
    const userId = 1;  // Adjust with an actual user ID
    const updatedUser = {
      name: 'John Doe Updated',
    };

    const response = await request(app)
      .put(`/api/users/${userId}`)
      .send(updatedUser);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', 'John Doe Updated');
  });

  // Test for deleting a user
  it('should delete a user by ID', async () => {
    const userId = 1;  // Adjust with an actual user ID
    const response = await request(app).delete(`/api/users/${userId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'User deleted successfully');
  });
});
