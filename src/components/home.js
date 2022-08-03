import {Link} from "react-router-dom"
function home(){
return(
    <>
    <nav>
        <h1 className="text-center text-info">Products</h1>
        <div className="buttons">
          <Link to="add-product" className="btn btn-success" id="add">
            Add products
          </Link>
          <a className="btn btn-danger" id="delete">
            Delete selected
          </a>
        </div>
      </nav>
      <br></br>
      <hr></hr>
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <input type="checkbox"></input>
                <h5 className="card-title">Product name</h5>
                <h6 className="card-subtitle mb-2 text-muted">SKU</h6>
                <p className="card-text">
                  Specs:
                </p>
                <p className="card-text">
                  $$$
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <input type="checkbox"></input>
                <h5 className="card-title">Product name</h5>
                <h6 className="card-subtitle mb-2 text-muted">SKU</h6>
                <p className="card-text">
                  Specs:
                </p>
                <p className="card-text">
                  $$$
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <input type="checkbox"></input>
                <h5 className="card-title">Product name</h5>
                <h6 className="card-subtitle mb-2 text-muted">SKU</h6>
                <p className="card-text">
                  Specs:
                </p>
                <p className="card-text">
                  $$$
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </>
)
}
export default home;