import { useContext } from 'react';
import { ShopContext } from '../App';
import { ATCButton } from './ProductPage';

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
        <Item key={item.title} name={item.title} price={item.price} />
      ))}
    </div>
  );
};

const Item = ({ name, price }: { name: string; price: number }) => {
  const { setShoppingCartItems, shoppingCartItems } = useContext(ShopContext);
  function deleteItem() {
    const allItems = shoppingCartItems;
    const newItems = allItems.filter((i) => i.title !== name);
    setShoppingCartItems(newItems);
  }
  return (
    <div className="item">
      <img src="" className="item-img" height={80} width={150} />
      <div className="info-and-quantity">
        <div className="item-info">
          <div className="item-name">{name}</div>
          <div className="item-price">{price}</div>
        </div>
        <div className="item-quantity">
          <ATCButton title={name} price={price} />
        </div>
      </div>
      <button onClick={() => deleteItem()} className="trash">
        trash
      </button>
    </div>
  );
};

const AllCosts = () => {
  const { shoppingCartItems } = useContext(ShopContext);
  const sum = () => {
    const allprices: number[] = [];
    shoppingCartItems.forEach((i) => {
      allprices.push(i.price);
    });
    const sumSubTotal = allprices.reduce((a, c) => a + c, 0);
    const sumTotal = allprices.reduce((a, c) => a + c, 0.99);
    const subtotal = Math.round(sumSubTotal * 100) / 100;
    const total = Math.round(sumTotal * 100) / 100;
    return { subtotal, total };
  };
  return (
    <div className="allcosts">
      <div className="subtotal">
        <div>SUBTOTAL</div>
        <div>{sum().subtotal}$</div>
      </div>
      <div className="shipping">
        <div>shipping</div>
        <div>0.99$</div>
      </div>
      <div className="line"></div>
      <div className="total">
        <div>TOTAL</div>
        <div>{sum().total}$</div>
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
