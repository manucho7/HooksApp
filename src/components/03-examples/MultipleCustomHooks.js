import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
// &&= si existe la data, lo siguiente, extrae posicion 0 de la data
//!!doblenegacion = transformar null en un false
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes ^_^</h1>
            <hr />

            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            loading...
                        </div> 
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{ quote }</p>

                            <footer className="blockquote-footer">
                                 { author }
                            </footer>

                        </blockquote> 
                    )
            }

            <button 
                className="btn btn-primary"
                onClick={ increment }
            >
                Siguiente frase
            </button>

        </div>
    )
}
