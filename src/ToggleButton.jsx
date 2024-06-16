import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './ToggleButton.css';

const ToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="toggle-checkbox"
        id="theme-toggle"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label className="toggle-label" htmlFor="theme-toggle">
        <span className="toggle-ball" />
      </label>
    </div>
  );
};

export default ToggleButton;
