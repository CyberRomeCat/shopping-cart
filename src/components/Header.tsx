import shoppingcart from '../assets/shoppingcart.svg';

const Header = () => {
  return (
    <div className="header">
      <img src="" className="logo" alt="LOGO" />
      <NavigationBar />
    </div>
  );
};

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <a>Menu</a>
      <a>Shop</a>
      <a>
        <img src={shoppingcart} />
      </a>
      <div className="number of items">{0}</div>;
    </div>
  );
};

export default Header;
