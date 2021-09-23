/**
 * @author: alexandercd
 * @date: 22/septiembre/2021
 * @description: 
**/
import { useState, useEffect } from 'react';
import{getGifs} from '../helpers/getGifs'; 

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category, 10)
            .then( data => {
                setstate({
                    data,
                    loading: false
                })
            });
    }, [category])

    return state;
}

