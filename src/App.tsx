import ProductPage from './components/ProductPage';
import Header from './components/Header';
import React, { createContext, useState } from 'react';

type ItemType = {
  title: string;
  price: number;
};

type ShopContextType = {
  shoppingCartItems: ItemType[];
  setShoppingCartItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextType>({
  shoppingCartItems: [],
  setShoppingCartItems: () => {},
});

const App = () => {
  const [shoppingCartItems, setShoppingCartItems] = useState<ItemType[]>([]);

  return (
    <ShopContext.Provider value={{ shoppingCartItems, setShoppingCartItems }}>
      <Header />
      <ProductPage />
    </ShopContext.Provider>
  );
};

export default App;
