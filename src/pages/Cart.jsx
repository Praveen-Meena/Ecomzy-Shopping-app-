
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
    <div>
        {
          cart.length > 0 ? 
          (
            <div>

                <div>
                  {
                    cart.map(
                      (item,index)=>{
                        return <CartItem key={item.id} item={item} itemIndex={index}/>
                      })
                  }
                </div>

                <div>

                  <div>
                    <p>Your Cart</p>
                    <h2>SUMMARY</h2>
                    <p>
                      <span>Total Items : </span>{cart.length}
                    </p>
                  </div>

                  <div>
                    <p><span>Total Prices : </span> {totalAmount}</p>
                    <button>
                      Checkout Now
                    </button>
                  </div>

                </div> 

            </div>
          ):
          (
            <div>
              <div>Your cart is empty</div>
              <Link to="/">
                  <button>
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
