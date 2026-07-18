import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      ) : (
        <h2>No Products Found</h2>
      )}
    </div>
  );
};

export default ProductList;