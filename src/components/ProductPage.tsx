import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../App';

const ProductPage = () => {
  return (
    <div className="main-product-page">
      <MainHeaderRow />
      <AllProductList />
    </div>
  );
};

const MainHeaderRow = () => {
  return (
    <div className="main-header-row">
      <div className="product-page-name">All Products</div>
      <FilterOption />
    </div>
  );
};

const FilterOption = () => {
  return (
    <div className="filter-option">
      Sort By:<button>Popular</button>
    </div>
  );
};

const AllProductList = () => {
  const [data, setData] = useState<
    { id: number; image: string; title: string; price: number }[]
  >([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="all-product-list">
      {data.map((item) => {
        if (item.id > 9) {
          return null;
        }

        return (
          <ProductList
            key={item.id}
            img={item.image}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

const ProductList = ({
  title,
  img,
  price,
}: {
  title: string;
  img: string;
  price: number;
}) => {
  return (
    <div className="product-list">
      <img
        src={img}
        className="product-image"
        height={200}
        width={400}
        alt={title}
      />
      <div className="product-name">{title}</div>
      <div className="pl-detail-row">
        <div className="price">${price}</div>
        <ATCButton title={title} price={price} />
      </div>
    </div>
  );
};

const ATCButton = ({ title, price }: { title: string; price: number }) => {
  const { setShoppingCartItems, shoppingCartItems } = useContext(ShopContext);

  function addSingleItem() {
    setShoppingCartItems((prevItems) => [
      ...prevItems,
      { title: title, price: price },
    ]);
  }

  function removeSingleItem() {
    const arr = [...shoppingCartItems];
    const index = arr.findIndex((i) => i.title == title);
    if (index !== -1) {
      arr.splice(index, 1);
      setShoppingCartItems(arr);
    }
  }

  function checkDuplicate() {
    const allItems = shoppingCartItems;
    return allItems.filter((i) => i.title == title).length;
  }

  const itemCount = checkDuplicate();

  return (
    <>
      {itemCount > 0 ? (
        <div>
          <button onClick={() => addSingleItem()}>+</button>
          <>{itemCount}</>
          <button onClick={() => removeSingleItem()}>-</button>
        </div>
      ) : (
        <button onClick={() => addSingleItem()} className="add-to-cart-btn">
          {' '}
          Add To Cart
        </button>
      )}
    </>
  );
};

export default ProductPage;
