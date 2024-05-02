import './styles.css';

import React, { useState } from 'react';

export default function Button() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Button clicked!');
  };

  return (
    <button className="button-link" color="blue" text-white px-4 py-2 onClick={handleClick}>
      Click
      {message && <p>{message}</p>}
    </button>
  );
}

