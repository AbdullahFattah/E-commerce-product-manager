import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Dvd from "../dynamic-selector/Dvd";
import Book from "../dynamic-selector/Book";
import Furniture from "../dynamic-selector/Furniture";
import axios from "axios";
import Product from "../classes/product";
function AddProduct() {
  // For the dynamic dropdown selector
  const [typeState, setTypeState] = useState();
  const [selectMessage, setSelectMessage] = useState(
    <label>Select product type</label>
  );
  const [dvd, setDvd] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [book, setBook] = useState(false);
  useEffect(() => {
    typeState === "dvd" ? setDvd(true) : setDvd(false);
    typeState === "furniture" ? setFurniture(true) : setFurniture(false);
    typeState === "book" ? setBook(true) : setBook(false);
  }, [typeState]);

  const handleTypeChange = (e) => {
    setTypeState(e.target.value);
  };

  const navigate = useNavigate();

  const productObj = new Product();

  const [product, setProduct] = useState(productObj);

  const { sku, name, price, size, height, width, length, weight } = product;
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (typeState !== "default" && typeState !== undefined) {
      await axios.post("https://****.herokuapp.com/insert.php", product);
      navigate("/");
    } else {
      setSelectMessage(
        <label className="text-danger">Product type is required!</label>
      );
    }
  };
  return (
    <>
      <h1 className="text-center">Add a product</h1>
      <form
        className="container col-md-4 my-5"
        onSubmit={(e) => handleSubmit(e)}
        id="product_form"
      >
        <div className="buttons">
          <input
            className="btn btn-success"
            name="submit"
            type="submit"
            value="Save"
            id="add"
          />
          <Link to=".." className="btn btn-danger" id="delete">
            Cancel
          </Link>
        </div>
        <div className="form-group">
          <label className="m-2">SKU</label>
          <input
            type="text"
            pattern="[a-zA-Z0-9]{1,40}"
            className="form-control"
            value={sku}
            onChange={(e) => handleChange(e)}
            required
            name="sku"
            id="sku"
            placeholder="Enter SKU (No spaces allowed)"
          ></input>
        </div>
        <div className="form-group">
          <label className="m-2">Name</label>
          <input
            type="text"
            pattern="[A-Z a-z0-9]{1,30}"
            className="form-control"
            value={name}
            onChange={(e) => handleChange(e)}
            name="name"
            id="name"
            placeholder="Enter product name"
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="m-2">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => handleChange(e)}
            name="price"
            min={1}
            id="price"
            placeholder="Enter product price"
            required
          ></input>
        </div>
        <div className="mt-4">
          <label className="m-2">{selectMessage}</label>
          <select
            className="form-select"
            id="productType"
            value={typeState}
            key={product.sku}
            onChange={handleTypeChange}
          >
            <option value="default"></option>
            <option value="dvd">DVD</option>
            <option value="furniture">Furniture</option>
            <option value="book">Book</option>
          </select>
        </div>
        {dvd && <Dvd size={size} handleChange={handleChange} />}
        {furniture && (
          <Furniture
            height={height}
            width={width}
            length={length}
            handleChange={handleChange}
          />
        )}
        {book && <Book weight={weight} handleChange={handleChange} />}
      </form>
    </>
  );
}
export default AddProduct;
