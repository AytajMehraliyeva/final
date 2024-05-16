import Add from "../pages/Add/Add"
import Basket from "../pages/Basket/Basket"
import Detail from "../pages/Detail/Detail"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import SiteRoot from "../pages/SiteRoot"
import Wishlist from "../pages/Wishlist/Wishlist"

const Router=[{
path:"/",
element:<SiteRoot/>,

children:[{
    path:"",
    element:<Home/>
},
{
    path:"add",
    element:<Add/>
},

{
    path:":id",
    element:<Detail/>
},

{
    path:"wishlist",
    element:<Wishlist/>
},{
path:"register",
element:<Register/>
},
{
path:"login",
element:<Login/>
},
{
    path:'basket',
    element:<Basket/>
}
]
}]

export default Router