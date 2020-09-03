import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import '@testing-library/dom';
import { RealRef } from '../../../components/04-useRef/RealRef';


describe('Pruebas en <RealRef />', () => {

    const wrapper = shallow( <RealRef /> );
    
    test('debe mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'MultipleCustomHooks' ).exists() ).toBe(false);
        console.log( wrapper.html());
    });
    
    test('debe de mostrar el componente <MultipleCustomHooks />', () => {
        wrapper.find('button').simulate('click');
        expect( wrapper.find( 'MultipleCustomHooks' ).exists() ).toBe(true);
    });
})
