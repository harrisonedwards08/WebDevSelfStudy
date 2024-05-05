import { Component } from 'react';
import {Login} from './Login';
import {ProfileProps} from './Profile';

type PrivateProps = {
    isLoggedIn: boolean

    // Component is a React component that takes a name prop. 
    // Component itself takes props of type ProfileProps
    Component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn,Component}: PrivateProps) => {
    if (isLoggedIn){
        return <Component name = 'Harry'/>
    } else {
        return <Login/>
    }
}