import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';    

const TodoList = () => {

    const [tarefas, setTarefas]= useState([])
    const [tarefaText, setTarefaText] = useState('');

    const handleChange = (event) => {
        console.log(event.target.value);
        setTarefaText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTarefas([...tarefas, tarefaText]);
        setTarefaText('');
    }

    return(
        <section className="todoList">
            <h2 className="todo-title">Minhas Tarefas!</h2>
            <form className="todo-register" onSubmit={handleSubmit}>
                <label htmlFor="tarefa">Qual Tarefa deseja adcionar?</label>
                <input type="text" 
                id="tarefa" 
                placeholder="Digite a sua tarefa:"
                value={tarefaText}
                onChange={handleChange}
                />
                <button type="submit">Enviar</button>
            </form>
            <ol className="todos">
               {tarefas.map((tarefa, index) => (
                <TodoItem tarefa={tarefa} key={index}/> 
               ))}
            </ol>
               {/* <button onClick={handleClick}>Adicionar Tarefa</button> */}
        </section>
    )
}

export default TodoList;