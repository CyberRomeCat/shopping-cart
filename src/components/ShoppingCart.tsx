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
  return (
    <div className="all-items">
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

const Item = () => {
  return (
    <div className="item">
      <img src="" className="item-img" height={80} width={150} />
      <div className="info-and-quantity">
        <div className="item-info">
          <div className="item-name">Dress</div>
          <div className="item-price">15$</div>
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
      <button className="checkout">CHECKOUT!</button>
    </div>
  );
};

export default Shoppingcart;
