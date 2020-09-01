import React, { useReducer, useEffect } from 'react'
import { TodoReducer } from './TodoReducer';
import { useForm } from '../../hooks/useForm';
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
                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li
                                    key={ todo.id }
                                    className="list-group-item"
                                > 
                                    <p className="text-center"> { i + 1 }. {todo.desc } </p>

                                    <button
                                        className="btn btn-danger"
                                        onClick={ () => handleDelete( todo.id ) }
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
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
