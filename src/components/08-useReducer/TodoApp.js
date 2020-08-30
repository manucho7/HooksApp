import React, { useReducer } from 'react'
import { TodoReducer } from './TodoReducer';

import './styles.css';


const initialState = [{
    id: new Date().getTime(),
    desc: 'aprender React',
    done: false
}];

export const TodoApp = () => {

    const [ todos ] = useReducer(TodoReducer, initialState)

    return (
        <div>
            <h1>TodoApp</h1>
            <hr />

            <ul>

                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola de nuevo</li>

            </ul>
        </div>
    )
}
