/**
 * @author: alexandercd
 * @date: 22/septiembre/2021
 * @description: 
**/
import React, {useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = ({defaultData = []}) => {
    const [categories, setCategories] = useState(defaultData); 
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
                            limit={20}
                        />
                    )
                })}
            </ol>
        </>
    )
} 

export default GifExpertApp;