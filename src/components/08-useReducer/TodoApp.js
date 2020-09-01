import React, { useReducer, useEffect } from 'react'
import { TodoReducer } from './TodoReducer';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import './styles.css';



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(TodoReducer, [], init);

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });
//efecto grabara cualquier cambio que suceda en el localstorage
//cada vez que la dependencia todos cambie, vuelve a disparar el efecto
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch( action );
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );
        reset();
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className="row">

                <div className="col-7">
                   <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                   />
                </div>

                <div className="col-5">
                    <h4>
                        Agregar TODO
                    </h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input 
                            className="form-control"
                            type="text"
                            name="description"
                            placeholder="Aprender ...."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
