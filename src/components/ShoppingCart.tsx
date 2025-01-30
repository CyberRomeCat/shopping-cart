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

interface Item {
  title: string;
  price: number;
  quantity: number;
}

const AllItems = () => {
  const { shoppingCartItems } = useContext(ShopContext);

  const uniqueItems = shoppingCartItems.reduce<Record<string, Item>>(
    (acc, item) => {
      if (acc[item.title]) {
        acc[item.title].quantity += 1;
      } else {
        acc[item.title] = { ...item, quantity: 1 };
      }
      return acc;
    },
    {}
  );

  return (
    <div className="all-items">
      {Object.values(uniqueItems).map((item: Item) => (
        <Item
          key={item.title}
          name={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

const Item = ({
  name,
  price,
  quantity,
}: {
  name: string;
  price: number;
  quantity: number;
}) => {
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
          <div>{quantity}</div>
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
