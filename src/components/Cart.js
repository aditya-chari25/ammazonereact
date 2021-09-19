import React from "react";
import './Card.css';
import {data} from './Data';


const Cart = (props) => {
   
    return(
        
        <div class = "pad1">
           <div class="head"> CART (SHOPPED ITEMS) </div>
            <div class="flex-container12 center">
            <div class = "grids">
            {
            
            data.filter(data=>data.key).map((pro,i)=> {
               if(props.count1(i) !==0)
                return(
                    <div >
            <div className = "card">
            <div className = "cardbody">
                    <img src = {pro.imageURL} alt="hello" className="img" />
                    <p className="assure">AMMAZONE<br/> ASSURANCE</p> 
                   
                    <p className = "title">{pro.title}</p> 
                    <p className="description"> {pro.description}</p>
                    <p className="price1"> You pay: ₹ { props.pay(i)}</p>
                    <p className="order">Cart:{props.count(i)}</p>
                </div>
               

                
            </div>
            
            </div>
                );
                
                    })}
                    </div>
                    <p className="no">The total cost to pay: {props.total()}</p>
                    </div>
        </div>

    );
}

export default Cart;