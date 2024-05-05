import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

export const Box2 = () => {
    const theme = useContext(ThemeContext);

return (    
    <>
    <h1>Box1</h1>
        <div style = {{backgroundColor: theme.secondary.main, 
            color:theme.secondary.text, 
            width: theme.otherstyling.width2, 
            margin:theme.otherstyling.margin}}> 
            Created a different component accessing the same theme
            </div>

    
    </>

)

}