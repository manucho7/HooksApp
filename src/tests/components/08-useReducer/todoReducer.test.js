import '@testing-library/jest-dom';
import '@testing-library/dom';
import { TodoReducer } from "../../../components/08-useReducer/TodoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
      
        const state = TodoReducer( demoTodos, {});
        expect( state ).toEqual( demoTodos );

    });
    
    test('debe de agregar un Todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };
        const action = {
            type: "add",
            payload: newTodo
        };

        const state = TodoReducer( demoTodos, action );

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual([ ...demoTodos, newTodo ]);
    });

    test('debe de borrar un Todo', () => {
        
        const action = {
            type: 'delete',
            payload: 1
        }

        const state = TodoReducer( demoTodos, action );
        expect( state.length ).toBe(1);
        expect( state ).toEqual( [ demoTodos[1] ] );
    });
    
    test('debe de hacer el toggle del Todo', () => {
        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = TodoReducer( demoTodos, action );
        expect( state[0].done ).toBe(true);
        expect( state[1] ).toEqual( demoTodos[1] );
        
    });

})
