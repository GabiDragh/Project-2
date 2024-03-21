import React, { createContext, useState, useContext } from 'react';

const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <SharedContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SharedContext.Provider>
  );
};

export const useSharedContext = () => useContext(SharedContext);
