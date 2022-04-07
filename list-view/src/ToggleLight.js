import React from 'react';
import useDarkMode from 'use-dark-mode';

const ToggleLight = () => {
  const darkMode = useDarkMode(false);

  return (
    <>
      <button type="button" onClick={darkMode.disable}>
        Light
      </button>
      <button type="button" onClick={darkMode.enable}>
        Dark
      </button>
    </>
  );
};

export default ToggleLight;
