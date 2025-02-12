import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="main">
      <div className="content">
        <h1>Lorem Ipsum fjdkffs fdsfds hdjkas</h1>
        <button>
          <Link to="/shop">Shop</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
