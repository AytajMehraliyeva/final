import React from 'react'
import { FaHeart } from "react-icons/fa";
import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <div className='footer' id='footer'>
      <div className='logo' id='logo'>
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
        <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
      </div>
      <ul className='links' id='ul2'>
        <h4>Quick Links</h4>
        <li>About</li>
        <li>Offers&Discount</li>
        <li>Get Coupon</li>
        <li>Contact us</li>
      </ul>
      <ul className='products' id='ul2'>
        <h4>New Products</h4>
        <li>Woman Cloth</li>
        <li>Fashion Accessories</li>
        <li>Man Accessories</li>
        <li>Rubber made Toys</li>
      </ul>

      <ul className='products' id='ul2'>
        <h4>Support</h4>
        <li>Frequently Asked Questions</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Report a Payment Issue</li>
      </ul>
</div>
<p className='copy' id='copy'>Copyright ©2024 All rights reserved | This template is made with  by <span><FaHeart className='heart'/> Colorlib</span></p> 
    </footer>
  )
}

export default Footer