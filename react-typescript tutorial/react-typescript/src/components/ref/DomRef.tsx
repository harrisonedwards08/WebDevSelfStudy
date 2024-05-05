import {useRef, useEffect, forwardRef } from 'react';


// export const DomRef = () => {


// // reference an input element or null if it doesn't exist
//     const inputRef = useRef<HTMLInputElement>(null)

//     useEffect(() => {
//         inputRef.current?.focus()

//     }, [])
    
//   return (
//     <div>
//         <input type = 'text' ref = {inputRef}/>
      
//     </div>
//   )
// }


export const DomRef = forwardRef<HTMLInputElement>((props, ref) => {
    useEffect(() => {
      (ref as React.RefObject<HTMLInputElement>).current?.focus();
    }, [ref]);
  
    return (
      <div>
        <input type='text' ref={ref} />
      </div>
    );
  });