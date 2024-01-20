import React, { useContext } from 'react'
import './Home.scss'
import Card from '../../companent/Card/Card'
import MainContext from '../../context'
import { Helmet } from 'react-helmet'
import { IoIosReturnRight } from "react-icons/io";
const Home = () => {
  const{item}=useContext(MainContext)
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className='sectionOne' id='sectionOne'>
      <div className='sectionOne_text' id='sectionOne_text'>
        <h1>Select Your New <br /> Perfect Style</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere fugiat temporibus ab <br /> ducimus deserunt officia maxime, reprehenderit  </p>
     <button>Shop Now</button>
      </div>
      <img id='sectionOneImg' src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" />
    </div>
<a href="#sectionOne" className='return'><IoIosReturnRight /></a>
    <div className='sectionSecond' >
      <h3>New Arrivals</h3>
      <div className='sectionSecond_cards' id='sectionSecond_cards'>
        <div className='sectionSecondcard' id='sectionSecondcard'>
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" alt="" />
          <h4>Thermo Ball Etip Gloves</h4>
          <p>$ 45,753</p>
        </div>

        <div className='sectionSecondcard' id='sectionSecondcard'>
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png" alt="" />
          <h4>Thermo Ball Etip Gloves</h4>
          <p>$ 45,753</p>
        </div>

        <div className='sectionSecondcard' id='sectionSecondcard'>
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png" alt="" />
          <h4>Thermo Ball Etip Gloves</h4>
          <p>$ 45,753</p>
        </div>
      </div>
    </div>

<div className="crud" id='crud'>
  
  {item.map((data,index)=>(
    <Card data={data} key={index}/>
  ))}
</div>

<div className='thirdSection' id='thirdSection'>
  <div className='thirdCard' id='thirdCard'>
    <div className='text' id='text'>
      <h3>Watch of Choice</h3>
      <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <button>SHOW WATCHES</button>
    </div>
    <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png" alt="" />
  </div>

  <div className='thirdCard' id='thirdCard'> 
  <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png" alt="" />
    <div className='text2'id='text2' >
      <h3>Watch of Choice</h3>
      <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
    <button>SHOW WATCHES</button>
    </div>
   
  </div>

</div>
    
    </>
  )
}

export default Home