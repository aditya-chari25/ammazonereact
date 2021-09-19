
import './Category.css';
import home from './Assets/home.jpg'
import laptop from './Assets/laptop.png'
import phone from './Assets/phone.png'
import {Link} from 'react-router-dom';



function Home() {

  return (
   
      <div class = "rest">
      <div class = "hello">
       <h1 class = "font"> CATEGORIES</h1>
      </div>
        <ul class="flex-container1 center">
        <li class="flex-item">
        <Link to="/homes"><img src={home} alt="Logo" />
        <p>Home</p></Link>
        </li>
        <li class="flex-item">
        <Link to="/mobilejson"><img src={phone} alt="Logo" />
        <p>Mobile</p>
        <p> Phones</p></Link>
        </li>
        <li class="flex-item">
        <Link to ="/Laptops" >
        <img src={laptop} alt="Logo" />
        <p>Laptops</p></Link>
        </li>
</ul>


     </div>
  );
}

export default Home;