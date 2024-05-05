type ButtonProps = {
    //handleClick is a function that takes a React.MouseEvent<HTMLButtonElement> as an argument and returns void
    //id is a number
    handleClick: (event: React.MouseEvent<HTMLButtonElement>,id:number) => void
    text: string

}

export const Button = (props: ButtonProps) => {
    return <button onClick={(event) => props.handleClick(event,1)}> {props.text}</button>
}