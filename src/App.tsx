import Header from './components/Header';
import React, { createContext, useState } from 'react';
import Shoppingcart from './components/ShoppingCart';
import HomePage from './components/Homepage';
import { useParams } from 'react-router-dom';
import ProductPage from './components/ProductPage';

type ItemType = {
  title: string;
  price: number;
  rate: number;
  count: number;
};

type ShopContextType = {
  shoppingCartItems: ItemType[];
  setShoppingCartItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextType>({
  shoppingCartItems: [],
  setShoppingCartItems: () => {},
  setShowCart: () => {},
  showCart: false,
});

const App = () => {
  const [shoppingCartItems, setShoppingCartItems] = useState<ItemType[]>([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const { page } = useParams();
  console.log(page);

  return (
    <ShopContext.Provider
      value={{ shoppingCartItems, setShoppingCartItems, setShowCart, showCart }}
    >
      <Header />
      {page === 'shop' ? <ProductPage /> : <HomePage />}
      {showCart ? <Shoppingcart /> : <></>}
    </ShopContext.Provider>
  );
};

export default App;
