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
      // Directory changed
      "http://localhost:4000/view_products.php"
    );
    setProduct(result.data.records);
    // console.log(result)
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
        .delete("http://localhost:4000/delete.php", {
          data: { sku: sku },
        })
        .then((data) => {
          console.log(data);
          loadProducts();
        });
      console.log(productSkus);
    });
  };
  return (
    <>
      <nav>
        <h1 className="text-center text-info">Products</h1>
        <div className="buttons">
          <Link to="add-product" className="btn btn-success" id="add">
            ADD
          </Link>
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
