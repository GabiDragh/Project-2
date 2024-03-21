import React, { createContext, useState, useContext, useRef } from 'react';

const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const weatherButtonRef = useRef(null);


  const triggerWeatherButtonClick = () => {
    weatherButtonRef.current.click();
  };

  return (
    <SharedContext.Provider value={{ inputValue, setInputValue, triggerWeatherButtonClick, weatherButtonRef }}>
      {children}
    </SharedContext.Provider>
  );
};

export const useSharedContext = () => useContext(SharedContext);
