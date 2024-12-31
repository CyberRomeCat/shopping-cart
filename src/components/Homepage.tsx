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
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">
      <div className="content">
        <h1>Lorem Ipsum fjdkffs fdsfds hdjkas</h1>
        <button>Menu</button>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default HomePage;
