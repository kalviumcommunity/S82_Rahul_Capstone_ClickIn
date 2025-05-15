import React, { useState } from 'react';
import './GroceryToggle.css'; // Import custom CSS

const GroceryToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-container">
      <span className="toggle-label">Groceries</span>
      <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div className="toggle-dot" />
      </div>
    </div>
  );
};

export default GroceryToggle;
