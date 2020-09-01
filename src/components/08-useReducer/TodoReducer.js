

export const TodoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];
//regresa un nuevo arreglo el filter, por eso no es necesario spread operator
         case 'delete':
             return state.filter( todo => todo.id !== action.payload );
//el map barre cada uno de los elementos del array y debe de retornar un valor
        case 'toggle':
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo
            );
            
        default:
            return state;
    }

}