import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';
import '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Pruebas sobre <LoginScreen />', () => {
    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider 
            value={{
                setUser
        }}>
            <LoginScreen /> 
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test('debe de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')();
        expect( setUser ).toHaveBeenCalledWith({
            id: 777,
            name: 'Manusi'
        });
    });
})
