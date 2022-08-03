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
        </>
    )
}

export default addProduct;