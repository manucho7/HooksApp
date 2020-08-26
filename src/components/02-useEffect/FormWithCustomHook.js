import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
//aqui manejamos el estado..objeto que recibe nombre, email
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
//desestructuramos propiedades para no tener que hacer
//formState.name || formState.email
    const { name, email, password } = formValues;

//implementamos efectos    
    useEffect( () => {
        console.log('el email cambio');
    }, [ email ]);

//funcion para el evento del formulario

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete= "off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete= "off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}
