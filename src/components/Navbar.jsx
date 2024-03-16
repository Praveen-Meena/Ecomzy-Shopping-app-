import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home"; 
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state)=>state); 


  return (
    <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
       <NavLink to="/">
        <div className="ml-5">
          <img alt="Logo" src="../logo.png" className="h-14" />
        </div>
        </NavLink>

        <div className="flex items-center font font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <div>Home</div>
          </NavLink>
          <div className="relative">
            <NavLink to="/cart">
              <FaShoppingCart className="text-2xl hover:fill-lime-600"/>
              {
                cart.length > 0 && <span className="absolute -top-1 -right-2 bg-green-600 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center animate-bounce">
                  {cart.length}
                </span>
              }
            </NavLink>
          </div>
        </div>   

    </nav>
  )
};

export default Navbar;
