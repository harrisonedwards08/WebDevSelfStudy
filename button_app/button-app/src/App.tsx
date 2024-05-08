import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import {Button} from './components/button'; // Import the Button component
import { Clicked } from './components/clicked';

function App() {

  const [count,setCount] = React.useState(0);
  //this is a state!! it is false by default. setIsClicked is the setter function
  const [isClicked, setIsClicked] = useState(false);

  //this is a function!! sets the state of isClicked to true when called
  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="App">
      <header className="App-header">
  

        {/* //This is passing a prop to the button component!! not the function */}
        <Button handleClick1 = {(event) => 
          console.log('clicked',
          event,

          //calling that function!!!
          handleClick(),
          setCount(count+1))} 

          text = "Click !"/>


            {/* //if isClicked is true, render the Clicked component */}
        {isClicked && <Clicked />}

        <p>{count}</p>
        </header>

    </div>
  );
}

export default App;
