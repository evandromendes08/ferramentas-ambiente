import './Welcome/Welcome.css'

function welcome({nome = 'usuário', sobrenome='Teste'}) {
    //const {nome, sobrenome} = props;
    return(
        <h1>Olá, {nome} {sobrenome}, seja bem vindo!</h1>
    )
}


export default welcome;