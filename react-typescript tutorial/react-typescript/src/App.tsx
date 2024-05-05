
import React from 'react';
import './App.css';


import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Button } from './components/button';
import { Heading } from './components/heading';
import { Oscar } from './components/oscar';
import { Status } from './components/status';
import { Input } from './components/input';
import { Container } from './components/container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';

import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import {Box2} from './components/context/Box2';

import {UserContextProvider} from './components/context/UserContext';
import {User1} from './components/context/User1';
import { MutableRef } from './components/ref/MutableRef';
import { DomRef } from './components/ref/DomRef';
import { useRef } from 'react';
import { Counter1 } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';

function App() {

  
const inputRef = useRef<HTMLInputElement>(null);

const [count, setCount] = React.useState(0)
  return (
    <div className="App">

      <Button handleClick = {(event,id) => {

        //click id passed to console
      console.log('clicked',event, setCount(count+1),id)
    }}    
      text= 'click me'/>
            <h1>{count} clicks</h1>


      <Input value = '' handleChange={event => console.log(event)}/>


      {/* //passing styles and text as props */}
      <Container styles={{border:'5px solid violet', padding:'1rem'}} text='ayo'/>

      <LoggedIn/>
      <User/> 
      
      <Counter payload={5}/>

      <ThemeContextProvider>
        <Box/>
        <Box2/>
      </ThemeContextProvider>

      <UserContextProvider>
        <User1/>
      </UserContextProvider>


      <MutableRef/>

      <div>

        <h1>Dom Ref</h1>
        <DomRef ref={inputRef}/>
        <button onClick = {() => {
          inputRef.current?.focus()
        }}>Focus Input</button>
      </div>


        <h1>Counter Class</h1>
      <Counter1 message = 'My Count is ' />

      <h1>Private Profile</h1>
      <Private isLoggedIn = {true} Component = {Profile}/>


      <List items = {['a','b','c']} onClick = {(item) => {
       
      } }/>

      <List items = {[1,2,3,34]} onClick = {(item) => {
       
      } }/>


      


      </div>


  )

};


export default App;

