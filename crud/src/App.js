import React from 'react';
import './App.css';
 import Home from "./Components/Home/Home";
import Navbar from "./Navbar/Navbar";
 import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
 import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ProductAdmin from "./Components/products/ProductAdmin";
import ProductList from "./Components/products/ProductList";
import UpdateProduct from "./Components/products/UpdateProduct";
import CreateProduct from "./Components/products/CreateProduct";

let App = () => {

    const routes=[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"/products",
                element:<ProductList/>,
            },
            {
                 path:'/admin',
                  element:<ProductAdmin/>   

            },
            {
                path:'/create-product',
                 element:<CreateProduct/>
            } ,
            {
                 path:'/update-product/:id',
                  element:<UpdateProduct/>
            }

        ]
    return(
        <React.Fragment>
           <Router>
               <Navbar/>
               <Routes>
                {
                    routes.map((route)=>{
                        return <Route key={route.path} path={route.path} element={route.element} />
                    })
                }
                   {/* <Route exact path="/" element={<Home/>}/>
                   <Route exact path='/products' element={<ProductList/>}/> */}
                   {/* <Route exact path='/admin' element={<ProductAdmin/>}/> */}
                   {/* <Route exact path='/create-product' element={<CreateProduct/>}/> */}
                   {/* <Route exact path='/update-product/:id' element={<UpdateProduct/>}/> */}
               </Routes>
           </Router>

        </React.Fragment>

    );


    // const router=createBrowserRouter([

    //     {
    //         path:"/",
    //         element:<Navbar/>,

    //     }
    // ])
    // return(
    //     <RouterProvider router={router}/>
    // )





};
export default App;