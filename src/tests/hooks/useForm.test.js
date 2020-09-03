import '@testing-library/dom';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from "../../hooks/useForm";


describe('Pruebas sobre useForm Hook', () => {

    const initialForm = {
        name: 'Manuel',
        email: 'manuel@gmail.com'
    };
    
    test('debe de regresar un formulario por defecto', () => {
        const { result } = renderHook( ()=> useForm( initialForm ) );
        const [ formValues, handleInputChange, reset ] = result.current;
        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange).toBe('function');
        expect( typeof reset ).toBe( 'function' );
    });
    
    test('debe de cambiar el valor del formulario ', () => {
        const { result } = renderHook( ()=> useForm( initialForm ) );
        const [ , handleInputChange ] = result.current;
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });
        const [ formValues ] = result.current;
        expect( formValues ).toEqual( {...initialForm, name: 'Melissa'} );
 
    });
    
    test('debe de re establecer el formulario con reset', () => {
        const { result } = renderHook( ()=> useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;
        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

            reset();

        });
        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );
    });
})
