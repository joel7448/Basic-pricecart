import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./card";
import Lists from "./lists";
import { useState } from "react";

function App() {
const product=[
    {
      title: "Air Conditioner",
      price: "500",
      id: 1,
    },
    {
      title: "Television",
      price: "450",
      id: 2,
    },
    {
      title: "Refrigerator",
      price: "400",
      id: 3,
    },
    {
      title: "Air Cooler",
      price: "100",
      id: 4,
    },
    {
      title: "Fan",
      price: "750",
      id: 5,
    },
    {
      title: "Furniture",
      price: "750",
      id: 6,
    },
  ];

 const [total,price]=useState(0);
 const [cart,add]=useState([]);

  let items = (id)=>{

var index=product.findIndex((obj)=>obj.id===id)
var pro=product[index];
pro.incart=true;
    add([...cart,pro]);
    price(+total+ +product[index].price);
    
   
  }

  
  let d = (id)=>{
    var index=cart.findIndex((obj)=>obj.id===id)
   
    price(total-cart[index].price);
       cart.splice(index,1);
       
   add([...cart]) ;
  
          
      }





  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {product.map((product) => {
              return <Card cartitems={cart} name={product} addtocart={items}></Card>;
            })}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="row">
            <h2>My Cart 🛒</h2>
            <div className="col-lg-12">
              <ol>
                {
                cart.map((i)=>{return (<Lists itemname={i} del={d} > </Lists>)})
                }
                </ol>
              <h3>Total : ${total}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
