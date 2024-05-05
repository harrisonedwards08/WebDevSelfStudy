
//props for Greet function
type GreetProps = {

    //define name and type of prop
    name:string
    //optional messages
    messages?:number
    isAuthenticated:boolean
}
//props passed to function
export const Greet  = (props:GreetProps) => {
    //default messages value = 0. destructure from props into messages
    const {messages = 0} = props
    return (
        <div>
            <h2>{

                //ternary operator. if authenticated, display welcome, else display idk u
                props.isAuthenticated

                //name references props, messages references destructured messages
                ?`Welcome ${props.name} you have ${messages} messages`
                :'idk u'
            }
</h2>

            
        </div>
    )
}