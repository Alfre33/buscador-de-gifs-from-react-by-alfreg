import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['Real madrid']);
    // console.log(categories);

    const onAddCaterory = (onNewCategory) => {
        if(categories.includes(onNewCategory)) return;
        // console.log(onNewCategory)
        // setcategories([setcategories,...categories])
        setcategories([onNewCategory,...categories])
    };

  return (
   <>
   <h1>Primera app</h1>

    <AddCategory 
    onNewCategory={onAddCaterory}
    />

    {
    categories.map((category) => (
        <GifGrid 
            key={category}
            category={category}
        />
    ))
    }
   </>
  )
}
