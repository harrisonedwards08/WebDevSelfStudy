import {useContext} from 'react';
import {UserContext} from './UserContext';


export const User1 = () => {
    const userContext = useContext(UserContext);
    const handleLogin = () => {
        if (userContext){
            userContext.setUser({
                name: 'harry',
                email: 'harry@example.com'
            })
        }

    }
    const handleLogout = () => {
        if (userContext){
            userContext.setUser(null)
        }
        console.log('User logged out');
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {userContext?.user?.name}</div> 
            <div>User email is {userContext?.user?.email}</div> 

        </div>
    )}