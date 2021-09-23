/**
 * @author: alexandercd
 * @date: 22/septiembre/2021
 * @description: 
**/
import React, {useState, useEffect} from 'react'; 
import GifGridItem from './GifGridItem';
import {getGifs} from '../helpers/getGifs';

const GifGrid = ({ category, limit = 15}) => {
    const [gifs, setGifs] = useState([])
     
    useEffect( () => {
        getGifs(category, limit)
            .then( setGifs );
    }, [category, limit]) 

    return (
        <>
            <h3>{category}</h3>
            <div className="container"> 
                {gifs.map((item) => {
                    return (
                        <GifGridItem 
                            key={item.id} 
                            {...item }
                        />
                    )
                })}
            </div>
        </>
    )
} 

export default GifGrid;