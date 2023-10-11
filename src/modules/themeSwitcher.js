import React from 'react';

const ThemeSwitcher = ({ switchTheme, isLightTheme }) => {
  return (
    // <button onClick={switchTheme}>{isLightTheme ? 'DARK' : 'LIGHT'}</button>
    <input
      type="checkbox"
      onClick={switchTheme}
      value={isLightTheme ? 'LIGHT' : 'DARK'}
    />
  );
};

export default ThemeSwitcher;
