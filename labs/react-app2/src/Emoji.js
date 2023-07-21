//module 7 slide 33
import React, { useState } from 'react';

const Emoji = () => {
  const [emoji, setEmoji] = useState('🙂');

  const handleClick = () => {
    setEmoji('😃');
  };

  return (
    <div>
      <h2>Emoji Component</h2>
      <p>{emoji}</p>
      <button onClick={handleClick}>Change Emoji</button>
    </div>
  );
};

export default Emoji;



// module 7 slide 33 pt2
/*
import React, { useContext } from 'react';
import { EmojiContext } from './EmojiContext';

const Emoji = () => {
  const { emoji, changeEmoji } = useContext(EmojiContext);

  const handleClick = () => {
    const newEmoji = emoji === '🙂' ? '😃' : '🙂';
    changeEmoji(newEmoji);
  };

  return (
    <div>
      <h2>Emoji Component</h2>
      <p>{emoji}</p>
      <button onClick={handleClick}>Change Mood</button>
    </div>
  );
};

export default Emoji; */
