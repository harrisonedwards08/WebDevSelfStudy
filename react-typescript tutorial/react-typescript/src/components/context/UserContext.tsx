import {useState, createContext} from 'react';

export type AuthUser = {
    name: string
    email: string
}
type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>

}


type UserContextProviderprops = {
    children: React.ReactNode

}

//create context object from createContext function
//passing an empty object as the default value
export const UserContext = createContext<UserContextType | null> ({} as UserContextType)

export const UserContextProvider = ({children}: UserContextProviderprops) => {
    const[user,setUser] = useState<AuthUser | null> (null)
    return <UserContext.Provider value = {{user,setUser}}>{children}</UserContext.Provider>

    
}