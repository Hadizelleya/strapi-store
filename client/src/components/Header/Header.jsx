import { useContext, useState } from "react";
import "./Header.css";
import { BsCartFill } from "react-icons/bs";
import { GiMonclerJacket } from "react-icons/gi";
import StoreContext from "../../hooks/StoreContext";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaRedoAlt } from "react-icons/fa";
import { removeFromCart, resetCart } from "../../redux/cartReducer";
function Header() {
  const products = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();
  const { categories } = useContext(StoreContext);
  const [showcart, setshowCart] = useState(false);
  const handleShowCartMenu = () => {
    !showcart ? setshowCart(true) : setshowCart(false);
  };

  return (
    <div className="section-navbar">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">
            <GiMonclerJacket />
          </span>
          <h2 className="logo-title">Luxe Loom</h2>
        </div>
        <ul className="menu">
          <li>
            <a className="menu-item" href="">
              Home
            </a>
          </li>
          <li>
            <a className="menu-item" href="">
              About
            </a>
          </li>
          <li className="drop-down">
            <a className="menu-item" href="">
              Categories
            </a>
            <div className="drop-down-menu">
              {categories.map((category) => {
                return (
                  <div key={category.id} className="drop-down-menu-item">
                    <a className="drop-down-menu-item-link" href="#">
                      {category.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </li>
          <li>
            <a className="menu-item" href="">
              Contact
            </a>
          </li>
        </ul>
        <div className="cart-box">
          <BsCartFill
            className="cart"
            onClick={() => {
              products.length > 0 && handleShowCartMenu();
            }}
          />
          <div className="cart-counter-box">
            <div className="cart-counter">{products.length}</div>
          </div>
          {showcart || products.length > 0 ? (
            <ul className="cart-menu">
              {products.map((product) => {
                return (
                  <li key={product.id} className="cart-item">
                    <img
                      src={import.meta.env.VITE_APP_URL + product.image}
                      alt=""
                      className="cart-item-image"
                    />
                    <h4 className="cart-item-title">{product.title}</h4>
                    <p className="cart-item-price">{product.price}$</p>
                    <span
                      className="delete-item"
                      onClick={() =>
                        dispatch(
                          removeFromCart({
                            id: product.id,
                          })
                        )
                      }
                    >
                      <FaTrash />
                    </span>
                  </li>
                );
              })}
              <span
                className="reset-cart"
                onClick={() => dispatch(resetCart())}
              >
                <FaRedoAlt />
              </span>
            </ul>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
