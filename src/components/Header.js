import {Link, NavLink} from "react-router-dom"
import { useCart } from "../context/CartContext";
import "./Header.css";
import Logo from "../assets/logo.png";

export const Header = () => {
 const {cartList} = useCart();
  return (
    <header className="">
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopping Cart Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  )
}
