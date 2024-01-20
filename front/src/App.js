import MainContext from "./context";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { useEffect, useState } from "react";
import toast from 'react-hot-toast'
import axios from 'axios'
import Router from "./router/Router";

const router = createBrowserRouter(Router);

function App() {
  const [item, setItem] = useState([]);
  const [error, setError] = useState('');
  const [wishListItems, setWishlistItems] = useState(localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : []);
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');

  const searchItem = item.filter(data => data.name.toLowerCase().trim().includes(search.toLowerCase().trim()));

  const addToWishlist = (item) => {
    const target = wishListItems.find(wishlistItem => wishlistItem._id === item._id);

    if (target) {
      toast.error("Item is already in your wishlist");
    } else {
      setWishlistItems([...wishListItems, item]);
      localStorage.setItem("wishlistItems", JSON.stringify([...wishListItems, item]));
      toast.success(`Product added to your wishlist`);
    }
  };

  const removeFromWishlist = (id) => {
    const item = wishListItems.find(item => item._id === id);
    wishListItems.splice(wishListItems.indexOf(item), 1);
    setWishlistItems([...wishListItems]);
    localStorage.setItem("wishlistItems", JSON.stringify([...wishListItems]));
    toast.success("Item deleted");
  };

  const sortData = (type) => {
    const sortedData = [...item];
    sortedData.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return type === 'asc' ? priceA - priceB : priceB - priceA;
    });
    setItem(sortedData);
    setSort(type);
  };

  const sortByAsc = () => {
    const sortedData = [...item].sort((a, b) => a.name.localeCompare(b.name));
    setItem(sortedData);
  };

  const sortByDesc = () => {
    const sortedData = [...item].sort((a, b) => b.name.localeCompare(a.name));
    setItem(sortedData);
  };

  useEffect(() => {
    axios.get("http://localhost:3020/cards").then(res => {
      setItem(res.data);
      console.log(res.data);
    }).catch(err => {
      setError(err);
    });
  }, []);

  const data = {
    item,
    setItem,
    error,
    setError,
    wishListItems,
    setWishlistItems,
    sort,
    setSort,
    search,
    setSearch,
    sortData,
    sortByAsc,
    sortByDesc,
    searchItem,
    addToWishlist,
    removeFromWishlist
  };
  return (
    <MainContext.Provider value={data}>

 <RouterProvider router={router}/>

 </MainContext.Provider>
  );
}

export default App;
