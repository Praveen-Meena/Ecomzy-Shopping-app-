import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home"; 

const Navbar = () => {

  return (
    <div className="flex flex-row justify-between">
       <NavLink to="/">
        <div>
          <img alt="Logo" src="../logo.png" width="200px" height="200px" />
        </div>
        </NavLink>

        <div className="buttons flex">
          <NavLink to="/">
            <div>Home</div>
          </NavLink>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </div>   

    </div>
  )
};

export default Navbar;
