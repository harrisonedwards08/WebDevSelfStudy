type ContainerProps = {
    styles: React.CSSProperties
    text: string
}

//destructured props to get styles
export const Container = ({styles,text}:ContainerProps) => {
    return (

        //style passed as props affect the div
        <div style = {styles} >
            {text}
        </div>
    )
}