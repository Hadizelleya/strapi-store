import "./Products.css";
import { useState, useEffect, useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import StoreContext from "../../hooks/StoreContext";
import { addToCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";

function Products() {
  const { filtered } = useContext(StoreContext);
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useFetch(filtered);
  const dispatch = useDispatch();
  useEffect(() => {
    data && setProducts(data);
    console.log(data);
  }, [data]);
  useEffect(() => {
    console.log(filtered);
  }, [filtered]);
  return (
    <>
      <div className="products-title">
        <h1>
          <span>Our</span> Products
        </h1>
      </div>
      <div className="products">
        {loading
          ? "Products are loading..."
          : products.map((product) => {
              return (
                <div className="product-box" key={product.id}>
                  <div className="product">
                    <h2 className="product-title">{product.title}</h2>
                    <div className="product-price">{product.price}$</div>
                    <img
                      className="product-image"
                      src={`http://localhost:1337${product.image.url}`}
                      alt="product"
                    />
                    <div className="product-description">
                      {product.description}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                          image: product.image.url,
                          desc: product.description,
                        })
                      )
                    }
                    className="product-button"
                  >
                    Add To Cart
                  </button>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default Products;
