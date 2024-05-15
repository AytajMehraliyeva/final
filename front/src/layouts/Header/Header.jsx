import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu"
import { TiShoppingCart } from "react-icons/ti"
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
  <header id='head'>
    <div className='header' id='header'>
    <div className='logo' id='logo'>
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
    </div>
    <div className='hidden' id='hidden'>
  <h4>Menu <FaBars /></h4>
    </div>

    <ul id='ul'>
        <Link to={""}><li>Home</li></Link>
        <Link to={'wishlist'}><li>Wishlist</li></Link>
        <Link to={'add'}><li>Add</li></Link>
        <li className='blog'>Blog</li>
        <sup>Hot</sup>
        <li>About</li>
        <li>Contact</li>
        <li>Shop</li>
    </ul>
    <div className='icons' id='icons'>
    <IoSearch />
    <Link to={'register'}><LuUser2 /></Link>
    <Link to={'basket'}><TiShoppingCart  /></Link>
    </div>

    </div>
  </header>
  )
}

export default Header