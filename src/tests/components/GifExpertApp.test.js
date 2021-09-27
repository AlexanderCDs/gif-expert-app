/**
 * @author: alexandercd
 * @date: 27/septiembre/2021
 * @description: 
**/
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from '../../components/GifExpertApp';  

describe('Test <GifGrid />', () => { 
    const defaultData = [
        'One Punch',
        'Dragon Ball'
    ]

    test('should show <GifExpertApp /> success', () => { 
        const wrapper = shallow( <GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    }); 

    test('should show list categories', () => { 
        const wrapper = shallow( <GifExpertApp defaultData={defaultData} />);
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( defaultData.length );
    }); 

})
