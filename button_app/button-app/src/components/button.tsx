import './styles.css';

// import React, { useState } from 'react';

// export default function Button() {
//   const [message, setMessage] = useState('');

//   const handleClick = () => {
//     setMessage('Button clicked!');
//   };

//   return (
//     <button className="button-link" onClick={handleClick}>
//       Click
//       {message && <p>{message}</p>}
//     </button>
//   );
// }

type ButtonProps ={
  handleClick1: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text:string;
}


export const Button = (props: ButtonProps) => {
  return <button className = 'button-link' onClick={(event) => props.handleClick1(event)}>{props.text}</button>
}