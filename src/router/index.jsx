import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import SignUp from "../pages/SignUp.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layout from "../layout/Layout.jsx";
import SignIn from "../pages/SignIn.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import Flowers from "@/pages/Flowers.jsx";
import Perfums from "@/pages/Perfums.jsx";
import Plants from "@/pages/Plants.jsx";
import Bouquets from "@/pages/Bouquets.jsx";
import Panier from "@/pages/Panier.jsx";
import ClientLogin from "@/pages/ClientLogin.jsx";
import FlowerTable from "@/pages/FlowerTable.jsx";

export const router=createBrowserRouter([
    {
        element :<Layout/>,
        children :[

            {
                path:'/',
                element:<Home />

            },
            {
                path:'/ClientLogin',
                element:<ClientLogin />

            },
            {
                path:'/crudFl',
                element:<FlowerTable />

            },
            {
                path:'/Panier',
                element:<Panier />

            },
            {
                path:'/ContactUs',
                element:<ContactUs />

            },
            {
                path:'/Flowers',
                element:<Flowers />

            },
            {
                path:'/Bouquets',
                element:<Bouquets />

            },
            {
                path:'/Plants',
                element:<Plants />

            },
            {
                path:'/Perfums',
                element:<Perfums />

            },
            {
                path:'/SignUp',
                element:<SignUp />

            },

            {
                path:'/SignIn',
                element:<SignIn />

            },
            {
                path:'*',
                element:<NotFound/>

            },

        ]


    },



])