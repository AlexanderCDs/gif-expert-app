/**
 * @author: alexandercd
 * @date: 22/septiembre/2021
 * @description: 
**/
import React, {useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Rick And morty']); 
    return (
        <>
            <div className="center">
                <h2>Gif Expert App</h2>
                <AddCategory 
                    placeholder="Ingrese un texto"
                    setCategories={setCategories}
                />
            </div> 
            <ol>
                {categories.map((category, index) => {
                    return (
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />
                    )
                })}
            </ol>
        </>
    )
} 

export default GifExpertApp;