import { useEffect, useState } from 'react';

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
      <div className="product-page-name">{'All Products'}</div>
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
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
