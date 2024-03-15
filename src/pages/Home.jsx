import { useState } from "react";
import { useEffect } from "react";

import Product from "../components/Product"; 
import Spinner from "../components/Spinner"; 


const Home = () => {
  
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState("false"); 
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    fetchProductData(); 
  }, [])
  

  async function fetchProductData() {
    setLoading(true); 
    try {
      const res = await fetch(API_URL); 
      const data = await res.json(); 
      setPosts(data); 
      
    } catch (error) {
      <div>Error Occur</div>
      setPosts([]); 
    }
    setLoading(false); 
  }

  return (
    <div>
      {
        loading?<Spinner/>:
        posts.length > 0 ?
        (
          <div>
            {
              posts.map( (post)=>(
                <Product key={post.id} post={post}/>
              ))
            }
          </div>
        ):
        <div>
          <p>No Data Found</p>
        </div>
      }
    </div>
  );
};

export default Home;
