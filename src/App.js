import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Homes from './components/Homes';
import Mobilejson from './components/Mobilejson';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import {data} from './components/Data.js';
import {useState} from "react";
import Laptops from './components/Laptops';


function App() {
  const [state,setState] = useState(data);
  const [total,setTotal] = useState(0);

  function handleClick (i){
    let temp_state = [...state];

// 2. Make a shallow copy of the element you want to mutate
let temp_element = { ...temp_state[i] };

// 3. Update the property you're interested in
if(temp_element.count>0){
temp_element.count = temp_element.count-1;
temp_element.pay = temp_element.pay - temp_element.price;}

// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
temp_state[i] = temp_element;
setTotal(total-temp_element.price);

// 5. Set the state to our new copy
setState( temp_state );
}

function handleClicksum (i){
    let temp_state = [...state];

// 2. Make a shallow copy of the element you want to mutate
let temp_element = { ...temp_state[i] };

// 3. Update the property you're interested in
temp_element.count = temp_element.count+1;
temp_element.pay = temp_element.pay + temp_element.price;

// 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
temp_state[i] = temp_element;
setTotal(total+temp_element.price)
// 5. Set the state to our new copy
setState( temp_state );
}

function count(i){
  let temp_state = [...state];
  let temp_element = { ...temp_state[i] };
  return(
<div>{temp_element.count}</div>
  );
}

function pay(i){
  let temp_state = [...state];
  let temp_element = { ...temp_state[i] };
  return(
<div>{temp_element.pay}</div>
  );
}

function count1(i){
  let temp_state = [...state];
  let temp_element = { ...temp_state[i] };
  return(
temp_element.count
  );
}

function total1(){
  return(
    <div>{total}</div>
  );
}

  return (

    
    <Router>
    <div class = "grid-container">
      <div class="item1">
         <Navbar />  
      </div>
    <div class="item2">
      <Switch>
        <Route exact path = "/">
     
      <Home /> 
 
      </Route>
      <Route path = "/homes">
        <Homes add = {handleClicksum} sub ={handleClick} count ={count}/>
        </Route>
        <Route exact path = "/mobilejson">
      <Mobilejson add = {handleClicksum} sub ={handleClick} count ={count}/> 
      </Route>
      <Route exact path = "/Cart">
     
      <Cart  count1 ={count1} count = {count} pay = {pay} total={total1}/> 
 
      </Route>

      <Route path = "/laptops">
        <Laptops add = {handleClicksum} sub ={handleClick} count ={count}/>
        </Route>

      </Switch>
    </div>
    <div class="item4"></div>
    </div>
    </Router>
  );
}

export default App;
