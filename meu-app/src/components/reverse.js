const Reverse = (props) => {
    const reverseText = props.children.split('').reverse().join(); 
    console.log(reverseText);

    return(
        <p>{reverseText}</p>
    )
}

export default Reverse;