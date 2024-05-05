import {useState,useRef,useEffect} from 'react';

export const MutableRef = () => {
    const [timer,setTimer] = useState(0);

    const interValRef = useRef<number | null>(null);


    const stopTimer = () => {
        if (interValRef.current !== null) {
            window.clearInterval(interValRef.current);
            interValRef.current = null;
        }
    }

    const resumeTimer = () => {
        if (interValRef.current === null) {
            interValRef.current = window.setInterval(() => {
                setTimer((timer) => timer + 1)
            }, 1000);
        }
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    }, [])


    return (
        <div> 
            <h1>Mutable Ref: Timer</h1>

            HookTimer - {timer} -
            <button onClick = {() => stopTimer()}>Stop Timer</button>
            <button onClick = {() => resumeTimer()}>Resume Timer</button>

        </div>
    )

}