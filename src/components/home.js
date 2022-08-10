import {Link} from "react-router-dom"
import axios from 'axios'
import React,{useState, useEffect} from "react";
import ProductRow from "./product-row";
function Home(){
        const [product,setProduct]=useState([]);
        
        useEffect(()=>{
            loadProducts();
        },
        []
        )

        const loadProducts = async()=>{
            const result = await axios.get("http://localhost:8080/products-backend/view-products.php")
            setProduct(result.data.records)
            // console.log(result)
        }
      
        const handleDelete = ()=>{
          let productSkus = []
          product.forEach((p)=>{
            if(p.select){
              productSkus.push(p.sku)
            }
          })
          productSkus.forEach((sku)=>{
            axios.delete("http://localhost:8080/products-backend/delete-products.php",{data:{sku:sku}})
            .then((data)=>{
              console.log(data)
              loadProducts();
            })
            console.log(productSkus)
          })
          // axios.delete("http://localhost:8080/products-backend/delete-products.php","testsku")
        }
    return(
    <>
    <nav>
        <h1 className="text-center text-info">Products</h1>
        <div className="buttons">
          <Link to="add-product" className="btn btn-success" id="add">
            ADD
          </Link>
          <a className="btn btn-danger" onClick={()=>{handleDelete()}} id="delete">
            MASS DELETE
          </a>
        </div>
      </nav>
      <br></br>
      <hr></hr>
      <div className="container">
        <div className="row gy-3">
            {/* Mapping through database product entries */}
           <ProductRow product={product} setProduct={setProduct}/>
           {/* {product.map(product=>(
          <div className="col-md-3" key={product.sku}>
            <div className="card">
              <div className="card-body">
                <input type="checkbox" 
                // value={product.sku} name={product.sku} onChange={(e)=>{product.select=e.target.checked
                // setProduct(product)}}
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
           ))} */}

        </div>
      </div>
      </>
)
}
export default Home;