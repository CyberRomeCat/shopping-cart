const SelectedPage = ({ name }: { name: string }) => {
  return (
    <div className="main-selected-page">
      <MainHeaderRow nameTitle={name} />
      <AllProductList />
    </div>
  );
};

const MainHeaderRow = ({ nameTitle }: { nameTitle: string }) => {
  return (
    <div className="main-header-row">
      <div className="selected-page-name">{nameTitle}</div>
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
  return (
    <div className="all-product-list">
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="product-list">
      <img src="" className="product-image" height={200} width={400} />
      <div className="product-name">Dress</div>
      <div className="pl-detail-row">
        <div className="price">15$</div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default SelectedPage;
