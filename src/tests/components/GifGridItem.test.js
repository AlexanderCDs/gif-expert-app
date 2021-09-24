/**
 * @author: alexandercd
 * @date: 24/septiembre/2021
 * @description: 
**/
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Test <GifGridItem />', () => { 
    const title = 'Un título';
    const img = 'https://localhost/mi-imagen.jpg';
    let wrapper = shallow( <GifGridItem />);

    beforeEach( () => {
        wrapper = shallow( <GifGridItem title={title} url={img} />);
    });
    
    test('should show <GifGridItem /> success', () => {  
        expect( wrapper ).toMatchSnapshot();
    });

    test('should have paragraph with title', () => {
        const paragraph = wrapper.find('p');
        expect( paragraph.text().trim() ).toBe( title );
    });

    test('should have image with alt and src', () => {
        const image = wrapper.find('img'); 
        expect( image.prop('src') ).toBe( img );
        expect( image.prop('alt') ).toBe( title );
    });

    test('should have animate__flipInX', () => {
        const div = wrapper.find('div').at(0);  
        const className = div.prop('className'); 
        expect( className.includes('animate__flipInX') ).toBe( true );
    });
     
});
