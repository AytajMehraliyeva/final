import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import './Card.scss'
import MainContext from '../../context';
import { Toaster } from 'react-hot-toast';
const Card = ({data,index}) => {
    const{item,addToWishlist, addToBasket}=useContext(MainContext)
  return (
    <div className='card' key={index} id='card'>
        <img src={data.img} alt="" />
        <div className='cardBody' id='cardBody'>
            <h4>{data.name}</h4>
            <p><b>Price: </b>{data.price} Azn </p>
            <Link to={`/${data._id}`}>Learn More</Link> <br />
          <button className='basket' onClick={(e)=>{
            addToBasket(data)}}>Basket</button><br />
           <Toaster/>       
               <FaHeart className='heart' onClick={() => addToWishlist(data) }/> 

        </div>
    </div>
  )
}

export default Card