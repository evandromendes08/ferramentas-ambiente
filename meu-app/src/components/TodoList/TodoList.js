import { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';    
import TodoForm from '../TodoForm/TodoForm.js';

const TodoList = () => {
    const [tarefas, setTarefas]= useState([]);

    const addTodo = (tarefaTextChildren) => {
        setTarefas([...tarefas, tarefaTextChildren])
    }

    return(
        <section className="todoList">
            <h2 className="todo-title">Minhas Tarefas!</h2>
            <TodoForm onAdd={addTodo}/>
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