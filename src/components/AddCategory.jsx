import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('Futbol');

    const ChangeInputValue=({target})=>{
        setInputValue(target.value)
    };

    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        //    setcategories((categories)=>[inputValue,...categories]);
        onNewCategory(inputValue.trim())
        setInputValue('')
    };

  return (
   <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Busca tu GIF"
        value={inputValue}
        onChange={ChangeInputValue}
        />
   </form>
  )
}
