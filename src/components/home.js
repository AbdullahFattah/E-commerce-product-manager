import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductRow from "./product-row";
function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get(
      "https://sc4ndiw3b.herokuapp.com/view_products.php"
    );
    setProduct(result.data.records);
  };

  const handleDelete = () => {
    let productSkus = [];
    product.forEach((p) => {
      if (p.select) {
        productSkus.push(p.sku);
      }
    });
    productSkus.forEach((sku) => {
      axios
        .delete("https://sc4ndiw3b.herokuapp.com/delete.php", {
          data: { sku: sku },
        })
        .then(() => {
          loadProducts();
        });
    });
  };
  return (
    <>
      <nav>
        <h1 className="text-center">Products</h1>
        <div className="buttons">
          <Link to="add-product" className="btn btn-success" id="add">
            ADD
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className="btn btn-danger"
            onClick={() => {
              handleDelete();
            }}
            id="delete-product-btn"
          >
            MASS DELETE
          </a>
        </div>
      </nav>
      <br></br>
      <hr></hr>
      <div className="container">
        <div className="row gy-3">
          <ProductRow product={product} setProduct={setProduct} />
        </div>
      </div>
    </>
  );
}
export default Home;
