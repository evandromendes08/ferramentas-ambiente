import './Reverse.css'

const Reverse = (props) => {
    const reverseText = props.children.split('').reverse().join(); 
    console.log(reverseText);

    return(
        <p className="reverse-text">{props.children} <span> =  </span> {reverseText}</p>
    )
}

export default Reverse;