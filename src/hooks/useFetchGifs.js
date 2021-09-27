/**
 * @author: alexandercd
 * @date: 24/septiembre/2021
 * @description: 
**/
import { useState, useEffect } from 'react';
import{getGifs} from '../helpers/getGifs'; 

export const useFetchGifs = (category, limit) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category, limit)
            .then( data => {
                setstate({
                    data,
                    loading: false
                })
            });
    }, [category, limit])

    return state;
}

