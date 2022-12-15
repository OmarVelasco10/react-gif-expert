import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
// import { AddCategory, GifGrid} "./components/"

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);

    console.log(categories);

    const onAddCategory = ( newCategory ) => {
        console.log("Click me");

        if( categories.includes(newCategory)) return;
         setCategories([newCategory,...categories]);
        // setCategories( cat => [...cat,'Valorant']);
        //probando
        console.log(newCategory);
    }
  return (
    <>
       
        <h1>GifExpertApp</h1>

       
        <AddCategory 
        onNewCategory = { event => onAddCategory( event )}
        // setCategories = { setCategories }
        />

      

        
        {categories.map( category => (
                <GifGrid key={ category } category= { category }/>
            ))
        }
           
    </>
    
  )
}
