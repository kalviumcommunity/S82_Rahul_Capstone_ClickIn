import React, { useState } from 'react';
import './VendorToggle.css'; // Import custom CSS

const VendorToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-container">
      <span className="toggle-label">Vendor</span>
      <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div className="toggle-dot" />
      </div>
    </div>
  );
};

export default VendorToggle;
