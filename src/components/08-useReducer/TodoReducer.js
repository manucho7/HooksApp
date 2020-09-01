

export const TodoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];
//regresa un nuevo arreglo el filter, por eso no es necesario spread operator
         case 'delete':
             return state.filter( todo => todo.id !== action.payload );

        default:
            return state;
    }

}