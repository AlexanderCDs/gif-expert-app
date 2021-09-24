/**
 * @author: alexandercd
 * @date: 22/septiembre/2021
 * @description: 
**/
import React from 'react'; 
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ({ category, limit = 15}) => {

    const {data: images, loading} = useFetchGifs(category); 
 
    return (
        <>
            <h3>{category}</h3>
            <div className="container"> 
                {loading && (
                    <h3 className="animate__animated animate__flash">Loading...</h3>
                )}
                {images.map((item) => {
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
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;