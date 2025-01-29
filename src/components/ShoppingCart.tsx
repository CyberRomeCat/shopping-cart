import { useContext } from 'react';
import { ShopContext } from '../App';

const Shoppingcart = () => {
  return (
    <div className="shopping-cart-slide">
      <ShoppingCartHeader />
      <AllItems />
      <AllCosts />
    </div>
  );
};

const ShoppingCartHeader = () => {
  return (
    <div className="shopping-cart-header">
      <img src="" className="cart-logo" height={20} width={20} />
      <div>Shopping Cart</div>
    </div>
  );
};

const AllItems = () => {
  const { shoppingCartItems } = useContext(ShopContext);
  return (
    <div className="all-items">
      {shoppingCartItems.map((item) => {
        return <Item name={item.title} price={item.price} />;
      })}
    </div>
  );
};

const Item = ({ name, price }: { name: string; price: number }) => {
  return (
    <div className="item">
      <img src="" className="item-img" height={80} width={150} />
      <div className="info-and-quantity">
        <div className="item-info">
          <div className="item-name">{name}</div>
          <div className="item-price">{price}</div>
        </div>
        <div className="item-quantity">
          <button>+</button>
          <div>1</div>
          <button>-</button>
        </div>
      </div>
      <div className="trash">trash</div>
    </div>
  );
};

const AllCosts = () => {
  return (
    <div className="allcosts">
      <div className="subtotal">
        <div>SUBTOTAL</div>
        <div>200$</div>
      </div>
      <div className="shipping">
        <div>shipping</div>
        <div>0.99$</div>
      </div>
      <div className="line"></div>
      <div className="total">
        <div>TOTAL</div>
        <div>200.99$$</div>
      </div>
      <button
        className="checkout"
        onClick={() => {
          alert('This is a fake shopping cart for a personal project!');
        }}
      >
        CHECKOUT!
      </button>
    </div>
  );
};

export default Shoppingcart;
