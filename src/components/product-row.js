import React from "react";

function ProductRow(props){
    return  props.product.map(product=>(
        <div className="col-md-3" key={product.sku}>
          <div className="card">
            <div className="card-body">
              <input type="checkbox" 
              onChange={e=>{
                let value=e.target.checked;
                props.setProduct(props.product.map(d=>{
                    if(d.sku === product.sku){
                        d.select = value;
                    }
                    return d
                }))
              }}
               className="delete-checkbox"></input>
              <h5 className="card-title">{product.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{product.sku}</h6>
              <p className="card-text">
                Specs:
              </p>
              <p className="card-text">
                ${product.price}
              </p>
            </div>
          </div>
         </div>
         ))

}

export default ProductRow;