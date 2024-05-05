import {useState} from 'react'


//type authUser is an object with two properties: name and email
type authUser = {
    name: string
    email: string
}

export const User = () => {

    //usestate hook. user is state variable, setUser is the setter
    //useState can be type null or type authUser
    const [user,setUser] = useState<null | authUser >(null)
    const handleLogin = () => {
//upon login, setUser is called with an object!! {} containing name and email
//this is reason for ({}) in setUser
        setUser({
            name: 'harry',
            email: 'harry@example.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <h1> User State</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {user ? 'logged in' : 'logged out'}</div>
            <br></br>
            {/* ternary operator. if user !null, display user email else empty string */}
            <div>{user ? `User email is ${user.email}` : ''}</div>
        </div>
    )

}