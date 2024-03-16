
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = ({props}) => {

  const {cart} = useSelector((state) => state); 
  const [totalAmount, setTotalAmount] = useState(0); 

  useEffect(()=>{
    setTotalAmount( cart.reduce( (acc, curr)=> acc+curr.price , 0) );
  }, [cart])

  return (
    <div >
        {
          cart.length > 0 ?  
          (
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">

                <div className="w-[100%] md:w-[60%] flex flex-col p-2">
                  {
                    cart.map(
                      (item,index)=>{
                        return <CartItem key={item.id} item={item} itemIndex={index}/>
                      })
                  }
                </div>

                <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
                  <div className="flex flex-col justify-between gap-5 p-4 my-10 h-[50%] ">
                    <div className="flex flex-col gap-5">
                      <p className="font-semibold text-xl text-green-800">Your Cart</p>
                      <h2 className="font-semibold text-5xl text-green-700">SUMMARY</h2>
                      <p className="text-xl">
                        <span>Total Items : </span>{cart.length}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-xl font-bold"><span className="text-gray-700 font-semibold">Total Prices : </span> ${totalAmount}</p>
                      <button class="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear 
                                      mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                        Checkout Now
                      </button>
                    </div>

                  </div>
                </div> 

            </div>
          ):
          (
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
              <h1 className="text-gray-700 font-semiboold text-xl mb-2">Your cart is empty</h1>
              <Link to="/">
                  <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white
                                    transition duration-300 ease-linear mt-5 border-2 border-green-600 
                                    font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                    Shop Now
                  </button>
              </Link>
            </div>
            
          )
        }
    </div>
  );
};

export default Cart;
