import shoppingcart from '../assets/shoppingcart.svg';
import { useContext } from 'react';
import { ShopContext } from '../App';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <img src="" className="logo" alt="LOGO" />
      <NavigationBar />
    </div>
  );
};

const NavigationBar = () => {
  const { shoppingCartItems, setShowCart, showCart } = useContext(ShopContext);
  return (
    <div className="navigation-bar">
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      <a
        onClick={() => {
          if (showCart) return setShowCart(false);
          return setShowCart(true);
        }}
      >
        <img src={shoppingcart} />
      </a>
      <div className="number of items">{shoppingCartItems.length}</div>;
    </div>
  );
};

export default Header;
