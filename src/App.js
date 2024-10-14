import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Route, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
// import InvalidRoute from "./components/InvalidRoute";
import SignIn from "./components/SignIn";
import LogIn from "./components/LogIn";
import Header from "./components/Header";
import SidebarContainer from "./components/SidebarContainer";
import ArchiveContainer from "./components/ArchiveContainer";
import TrashContainer from "./components/TrashContainer";
import BookContainer from "./components/BookContainer";
import RoutingModule from "./RoutingModue";
// import AuthGuard from "./AuthGuard";
const Grocery = lazy(() => import("./components/Grocery"));


const App = () => {
  
  

// const AppRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <LogIn/>
//   },
//   {
//     path: "/signup",
//     element: <SignIn/>
//   },
//   { 
//     path: "/dashboard",
//     element: <AuthGuard Component={<DashboardLayout/>}/>,
      
//     children:[
//       {path: "", element: <Dashboard/>},
//       {path: "archive", element: <ArchiveContainer/>},
//       {path: "trash", element: <TrashContainer/>}
//     ],
//   },
//   {
//     path: '/book/:bookId',
//     element: <BookContainer />
//   },
//   {
//     path: "/grocery",
//     element: (
//       <Suspense fallback={<h1>Loading...</h1>}>
//         <Grocery />
//       </Suspense>
//     ),
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
 return <RoutingModule />
}

export default App