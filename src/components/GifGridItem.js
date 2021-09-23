/**
 * @author: alexandercd
 * @date: 22/septiembre/2021
 * @description: 
**/
import React from 'react';  

const GifGridItem = ({ title, url}) => {
    return (
        <div className="card animate__animated animate__flipInX"> 
            <div className="image">
                <img 
                    alt={title}
                    title={title}
                    src={url}
                />
            </div>
            <p>{title}</p>
        </div>
    )
} 

export default GifGridItem;