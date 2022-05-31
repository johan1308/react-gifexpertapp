import React, { useState } from 'react';
import PropTypes from "prop-types";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=()=>{

    
    const [categories, setCategories] = useState(['cristiano ronaldo'])

   const handleAdd= ()=>{
        setCategories([...categories,'naruto'])
    }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category=>(
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    ))
                }
            </ol>
            
        </>
    )



}

export default GifExpertApp