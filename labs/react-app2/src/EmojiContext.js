// module 7 slide 33 pt2
import React, { createContext, useState } from 'react';

const EmojiContext = createContext();

const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState('🙂');

  const changeEmoji = (newEmoji) => {
    setEmoji(newEmoji);
  };

  return (
    <EmojiContext.Provider value={{ emoji, changeEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};

export { EmojiContext, EmojiProvider };
