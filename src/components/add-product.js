import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Dvd from "../dynamic-selector/Dvd";
import Book from "../dynamic-selector/Book";
import Furniture from "../dynamic-selector/Furniture";
// import {dvdSelector,furnitureSelector,bookSelector} from "./dynamic-selector";
import axios from "axios";
import Product from "../classes/product";
function AddProduct() {
  // For the dynamic dropdown selector
  const [typeState, setTypeState] = useState();

  const [dvd,setDvd]=useState(false);
  const [furniture,setFurniture]=useState(false);
  const [book,setBook]=useState(false);
  useEffect(()=>{
    typeState === "dvd" ? setDvd(true): setDvd(false);
    typeState === "furniture" ? setFurniture(true) : setFurniture(false);
    typeState === "book" ? setBook(true) : setBook(false);

  })

  const handleTypeChange = (e)=>{
    setTypeState(e.target.value)
  }
//  -----------
  const navigate = useNavigate();

  const productObj = new Product();

  const [product, setProduct] = useState(productObj);
  // const {sku,name,price} = product;
  const { sku, name, price, size, height, width, length, weight } = product;
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(product);

    await axios.post(
      "http://localhost:8080/products-backend/insert.php",
      product
    );
    navigate("/");
  };
  return (
    <>
      <h1 className="text-center text-info">Add a product</h1>
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
            className="form-control"
            value={sku}
            onChange={(e) => handleChange(e)}
            name="sku"
            id="sku"
            placeholder="Enter SKU"
            required
          ></input>
        </div>
        <div className="form-group">
          <label className="m-2">Name</label>
          <input
            type="text"
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
            id="price"
            placeholder="Enter product price"
            required
          ></input>
        </div>
        <div className="mt-4">
            <select className="form-select" value={typeState} key={product.sku} onChange={handleTypeChange}>
              <option value="default"></option>
              <option value="dvd">DVD</option>
              <option value="furniture">Furniture</option>
              <option value="book">Book</option>
            </select>
        </div>
        {dvd && <Dvd size={size} handleChange={handleChange} />}
        {furniture && <Furniture height={height} width={width} length={length} handleChange={handleChange}/>}
        {book && <Book weight={weight} handleChange={handleChange} />}
        

        {/* Dynamic selector */}
        {/* <div className="form-group"> 
    <label className="m-2">Type</label>
     <select className="form-control" onChange={(e)=>{
        const selectedType = e.target.value;
        const dvdSelector = ()=>{return <><label className="mt-3">Size</label><input type="number" id="size" value={size} onChange={e=>handleChange(e)} name="size" className="form-control" placeholder="DVD size (MB)" required></input><p className="text-info">Please provide size</p></>}
        const furnitureSelector = ()=>{return <><label  className="mt-3">Height</label><input type="number" id="height" value={height} onChange={e=>handleChange(e)} name="height" className="form-control" placeholder="Height" required></input><label className="mt-1">Width</label><input type="number" id="width" value={width} onChange={e=>handleChange(e)} className="form-control" placeholder="Width"></input><label className="mt-1">Length</label><input type="number" id="length" value={length} onChange={e=>handleChange(e)} className="form-control" placeholder="Length"></input><p className="text-info">Please provide dimensions</p></>}
        const bookSelector = ()=>{return <> <label className="mt-3">Weight</label><input type="number" id="weight" value={weight} onChange={e=>handleChange(e)} className="form-control" placeholder="Weight (KG)" required></input><p className="text-info">Please provide weight</p></>}
        selectedType == "dvd"? setTypeState(dvdSelector):selectedType == "furniture"? setTypeState(furnitureSelector): setTypeState(bookSelector)
       
    }} name="product-type" id="productType">
      <option value="default"></option>
      <option value="dvd">DVD</option>
      <option value="furniture">Furniture</option>
      <option value="book">Book</option>
    </select>
  
    {typeState} 
  </div> */}
      </form>
    </>
  );
}
export default AddProduct;
