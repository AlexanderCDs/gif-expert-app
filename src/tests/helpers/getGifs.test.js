
import React from 'react';
import '@testing-library/jest-dom'; 
import { getGifs } from '../../helpers/getGifs';


describe('Test GetGifs fetch', () => {
    test('should return 10 elements', async() => {
        const gifs = await getGifs(['Rick and Morty']);
        expect( gifs.length ).toBe( 10 )
    });
    
    test('should return 0 elements', async() => {
        const gifs = await getGifs(['']);
        expect( gifs.length ).toBe( 0 );
    });
});
