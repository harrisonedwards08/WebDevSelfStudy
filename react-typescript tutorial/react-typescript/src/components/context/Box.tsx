import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

export const Box = () => {
    const theme = useContext(ThemeContext);
    return (    
        <>
        <h1>Box</h1>
            <div style = {{backgroundColor: theme.primary.main, 
                color:theme.primary.text, 
                width: theme.otherstyling.width2, 
                margin:theme.otherstyling.margin}}> 
                Theme context
                </div>

        
        </>
    

    )
}