import React, { useContext } from 'react'
import MainContext from '../../context'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'
import './Wishlist.scss'

const Wishlist = () => {
  const{wishListItems,removeFromWishlist}=useContext(MainContext)
  return (
    <>
    <Helmet>
        <title>Wishlist</title>
    </Helmet>
    <div className='wishlistCards'>
        {wishListItems?.map((item,index)=>(
            <div className='wishlistCard' key={index}>
                <img src={item.img} alt="" />
          <h3>{item.name}</h3>
            <p> Price: {item.price} Azn</p>
            <button onClick={()=>removeFromWishlist(item._id)}>Deleted</button>
          <Toaster/>
            </div>  
        ))}
    </div></>
  )
}

export default Wishlist