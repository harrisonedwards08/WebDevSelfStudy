import {Name} from './person.props'

type PersonListProps = {

    //array of objects with multiple properties per object
    // names: {
    //     first: string
    //     last: string
    // }[]

    //replaced above code by calling Name type from person.props.tsx
    names: Name[]
}

export const PersonList = (props:PersonListProps) => {
    return(
        <div>
            
            {/* map through each object in array */}
           {props.names.map(name => {
            return(
                //key for each prop
                <h2 key = {name.first}
                //display first and last name
                >{name.first} {name.last} </h2>
            )
           }
        )
    }

        </div>
    )

}