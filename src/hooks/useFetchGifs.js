import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const getImages=async ()=>{
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }
  
    // getGifs(category);
    useEffect(()=>{
      getImages();
    },[]);

  return {
    images , // images: images si una llave tiene el mismo nombre en su valor se puede solo pasar el valor
    isLoading:isLoading
  }
}
