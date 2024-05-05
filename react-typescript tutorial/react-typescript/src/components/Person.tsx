
//importing props from external file
import { PersonProps } from "./person.props"
export const Person = (props:PersonProps) => {
    return <div>{props.name.first} {props.name.last} </div>
}