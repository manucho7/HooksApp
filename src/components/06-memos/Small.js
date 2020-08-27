import React from 'react'
//memo para memorizar algo, y solo si las props cambian, va 
//a volver a renderizar el componente, caso contrario usa la version
//memorizada cuando tenga que re dibujar algo

export const Small = React.memo(({ value }) => {

    console.log( 'me volvi a llamar' );

    return (
        <small> { value } </small>
    )
});
