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
  const [original,setOriginal]=useState([])
  const [wishListItems, setWishlistItems] = useState(localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : []);
  const [sort, setSort] = useState('asc');
  const [search, setSearch] = useState('');
  const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);

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

  const sortData = (ana) => {
    const sortedData = [...item];
    sortedData.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return ana === 'asc' ? priceA - priceB : priceB - priceA;
    });
    setItem(sortedData);
    setSort(ana);
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

  
  const addToBasket=(product)=>{
    const target=basket.find((baskets)=>baskets.product._id===product._id)
  
    if(target){
      target.count+=1
      target.totalPrice=parseFloat((target.product.price * target.count).toFixed(2))
      setBasket([...basket])
      localStorage.setItem('basket', JSON.stringify([...basket]))
      alert('Product add basket')
    }else{
      const baskets={
        product:product,
        count:1,
        totalPrice:product.price
      }
      setBasket([...basket,baskets])
      localStorage.setItem('basket', JSON.stringify([...basket,baskets]))
      alert('Product add basket')
    }
  }
  
  
  const handleBasketDelete = (id) => {
    let deletedBasket = basket.find(item => item.product._id == id)
     basket.splice(basket.indexOf(deletedBasket), 1)
     setBasket([...basket])
     localStorage.setItem('basket', JSON.stringify([...basket]))
    
  }
  
  const decrementCounter = (baskets) => {
    const targetIndex = basket.findIndex((item) => item.product._id === baskets.product._id);
  
    if (targetIndex !== -1) {
      const updatedBasket = [...basket];
      const target = updatedBasket[targetIndex];
  
      if (target.count > 1) {
        target.count -= 1;
        target.totalPrice =parseFloat(( target.product.price * target.count).toFixed(2));
      } else {
        updatedBasket.splice(targetIndex, 1);
      }
  
      setBasket(updatedBasket);
      localStorage.setItem('basket', JSON.stringify(updatedBasket));
    }
  };
  
  
  



  const data = {
    item,
    setItem,
    error,
    setError,
    wishListItems,
    setWishlistItems,
    sort,
    setSort,
    original,
    setOriginal,
    // notSort,
    search,
    setSearch,
    sortData,
    sortByAsc,
    sortByDesc,
    searchItem,
    addToWishlist,
    removeFromWishlist,
    basket, 
    setBasket,
    addToBasket,
    handleBasketDelete,
    decrementCounter
  };
  return (
    <MainContext.Provider value={data}>

 <RouterProvider router={router}/>

 </MainContext.Provider>
  );
}

export default App;
