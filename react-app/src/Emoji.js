import React from 'react';

function Emoji(props) {
  return (
    <span role="img" aria-label={props.label}>
      {props.symbol}
    </span>
  );
}

export default Emoji;
