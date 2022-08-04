import {Link} from "react-router-dom"
function addProduct(){
    return(
        <>
         <h1 className="text-center text-info">Add a product</h1>
        <div className="buttons">
          <a href="" className="btn btn-success" id="add">
            Save
          </a>
          <Link to=".." className="btn btn-danger" id="delete">
            Cancel
          </Link>
        </div>
        <form className="container col-md-4 my-5" id="product_form">
  <div className="form-group">
    <label>SKU</label>
    <input type="text" className="form-control" id="product_sku" placeholder="Enter SKU"></input>
  </div>
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" id="product_name" placeholder="Enter product name"></input>
  </div>
  <div className="form-group">
    <label>Price</label>
    <input type="text" className="form-control" id="product_price" placeholder="Enter product price"></input>
  </div>
  <div className="form-group">
    <label>Type</label>
    <select className="form-control" id="productType">
      <option>Select product type</option>
      <option>Type 1</option>
      <option>Type 2</option>
      <option>Type 3</option>
    </select>
  </div>
  
</form>
        </>
    )
}

export default addProduct;