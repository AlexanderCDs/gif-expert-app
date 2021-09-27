/**
 * @author: alexandercd
 * @date: 27/septiembre/2021
 * @description: 
**/
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Test useFetchGifs', () => {
    test('should return state init', async() => {
        const category = 'Goku';
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        const { data, loading } = result.current;
        await waitForNextUpdate();

       
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });

    test('should return array images and loading in false', async() => {
        const category = 'Goku';
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();

        const { data, loading } = result.current;  
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    });
     
});
