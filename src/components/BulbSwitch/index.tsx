import React, { useState, useEffect } from "react";

import { Container } from "./styles";

interface BulbSwitchProps {
  handleDarkMode: () => void;
  darkMode: boolean;
}

const BulbSwitch: React.FC<BulbSwitchProps> = ({
  handleDarkMode,
  darkMode,
}) => {
  return (
    <Container>
      <div className="switch">
        <input
          type="checkbox"
          defaultChecked={darkMode}
          onChange={handleDarkMode}
          name="toggle"
        />
        <label htmlFor="toggle">
          <i className="bulb">
            <span className="bulb-center"></span>
            <span className="filament-1"></span>
            <span className="filament-2"></span>
            <span className="sparks">
              <i className="spark1"></i>
              <i className="spark2"></i>
              <i className="spark3"></i>
              <i className="spark4"></i>
            </span>
          </i>
        </label>
      </div>
    </Container>
  );
};

export default BulbSwitch;
