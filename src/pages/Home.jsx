import { useState } from "react";
import { useEffect } from "react";

import Product from "../components/Product"; 
import Spinner from "../components/Spinner"; 


const Home = () => {
  
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState("false"); 
  const [items, setItems] = useState([]); 
  
  async function fetchProductData() {
    setLoading(true); 
    try {
      const res = await fetch(API_URL); 
      const data = await res.json(); 
      setItems(data); 
      
    } catch (error) {
      <div>Error Occur</div>
      setItems([]); 
    }
    setLoading(false); 
  }

  useEffect(() => {
    fetchProductData(); 
  }, [])

  return (
    <div>
      {
        loading?<Spinner/>:
        items.length > 0 ?
        (
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-2 space-y-10 space-x-5">
            {
              items.map( (item)=>(   
                <Product key={item.id} item={item}/>
              ))
            }
          </div>
        ):
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      }
    </div>
  );
};

export default Home;
