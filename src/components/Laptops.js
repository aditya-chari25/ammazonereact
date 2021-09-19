import React from "react";
import './Card.css';
import {data} from './Data';


const Laptops = (props) => {
   
    return(
        
        <div class = "pad">
             <div class="flex-container12 center">
                 <div class = "head">Laptops</div>
            <div class ="grids">
            { 
            data.filter(data=>data.key>11).map((pro,i)=> {
            
                return(
                    <div>
            <div className = "card">
                <div className = "cardbody">
                    <img src = {pro.imageURL} alt="hello" className="img" />
                    <h2 className = "title">
                        {pro.title}
                    </h2>
                    <p className="description"> {pro.description}</p>
                    <p className="price"> ₹ {pro.price} {props.count} </p>
                </div>
                <button className = "btn" key = {i+11} onClick={() => { 
                    return(
                    props.add(i+11)
                   );}}> Add</button>
                   <button className = "btn1" key = {i+11} onClick={() => { 
                    return(
                    props.sub(i+11)

                   );}}> Remove</button>
               

                <p className="order">Cart : {props.count(i+11)}</p>
            </div>
            
            </div>
                )
                    })}
                   
        </div>
        </div>
        </div>

    );
}

export default  Laptops;