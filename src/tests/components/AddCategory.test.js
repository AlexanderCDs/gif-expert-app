/**
 * @author: alexandercd
 * @date: 24/septiembre/2021
 * @description: 
**/
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Test <AddCategory />', () => {
    const value = 'Hola, Goku';  
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    });
    
    test('should show <AddCategory /> success', () => {   
        expect( wrapper ).toMatchSnapshot();
    }); 

    test('should change text into input', () => {
        const input = wrapper.find('input'); 
        input.simulate('change', {target: {value}});
        const changeValue = wrapper.find('input'); 
        expect( changeValue.prop('value').trim() ).toBe( value );
    });
    
    test('should not submit', () => {
        const from = wrapper.find('form');
        from.simulate('submit', {preventDefault(){}});
        expect( setCategories ).not.toHaveBeenCalled();
    });
    
    test('should call setCategories and clean input', () => {
        wrapper.find('input').simulate('change', {target: {value}}); 
        wrapper.find('form').simulate('submit', {preventDefault(){}}); 
        
        expect( setCategories ).toHaveBeenCalled(); 
        expect( setCategories ).toHaveBeenCalledTimes( 1 );
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( wrapper.find('input').prop('value').trim() ).toBe( '' );
    });
    
});
