/**
 * @author: alexandercd
 * @date: 22/septiembre/2021
 * @description: 
**/
import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories, placeholder }) => {  
    const [inputValue, setInputValue] = useState(''); 
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories(c => [inputValue, ...c]);
            setInputValue('');
        }
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder={placeholder}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            /> 
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory;