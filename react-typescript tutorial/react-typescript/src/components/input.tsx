//https://www.youtube.com/watch?v=xNSIHFi8o2M&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=6

type InputProps = {
    value: string
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) => {
    return <input type = 'text' value = {props.value} onChange = {props.handleChange}/>
}