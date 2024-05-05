import { useState } from "react"



export const LoggedIn = () => {
    //loggedIn state variable initial value false/
    //useState returns an array with two elements: the current state value and a function that lets you update it.
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {

        //set isLoggedIn to true
        //setIsLoggedIn is the setter function for the preceding boolean
        setIsLoggedIn(true)
}
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

return <div> 
    <h1> LoggedIn State</h1>
    <button onClick = {handleLogin} > login </button>
    <button onClick = {handleLogout} > logout </button>

    {/* //ternary operator referencing islogged in state */}
    <div>User is {isLoggedIn ? 'logged in': 'logged out'}</div>
    
    </div>

}