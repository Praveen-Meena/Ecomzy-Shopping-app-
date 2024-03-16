import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

import { toast } from "react-hot-toast";
// import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({item, itemIndex}) => {

const dispatch = useDispatch(); 
  
const removeFromCart = () => {
  dispatch(remove(item.id)); 
  toast.error("Item Remove from Cart");
}
  return (
    <div className="flex items-center justify-between p-2 md:p-5 mt-2 mb-2 md:mx-5 border-b-2 border-slate-500">
        <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">

          <div className="w-[20%]">
            <img src={item.image} alt="ProductImage" />
          </div>
          <div className="w-[100%] md:w-[70%] md:ml-10 space-y-5 self-start ">
            <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
            <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg text-green-600">${item.price}</p>
              <div
                className="bg-red-200 group hover:transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                onClick={removeFromCart}>
                <MdOutlineDeleteOutline />
              </div>
            </div>
          </div>

        </div>
    </div>
  );
};

export default CartItem;
