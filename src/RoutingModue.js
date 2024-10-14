import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import NotesContainer from "./components/NotesContainer";
import ArchiveContainer from "./components/ArchiveContainer";
import TrashContainer from "./components/TrashContainer";
import BookContainer from "./components/BookContainer";
import Grocery from "./components/Grocery";
import { Suspense, useEffect, useState } from "react";
import SidebarContainer from "./components/SidebarContainer";
import Header from "./components/Header"

function RoutingModule() {

    const AuthGuard = ({ Component }) => {
        const navigate = useNavigate()  
        // const status = localStorage.getItem('AuthToken') ? true : false;
        const status = true
        useEffect(() => {
          if(!status) {
              navigate('/', {replace: true})
          // return null
        }
          
      }, [status])
    
        return status ? <>{Component}</> : <></>
      }
    
      const DashboardLayout = () => {
        const [open , setOpen] = useState(false)
        return (
          <>
          <Header toggleDrawer={setOpen} currState={open}/>
          <div style={{display: "flex", marginTop: '100px'}}>
          <SidebarContainer drawerState={open} toggleDrawer={setOpen}/>
          <Outlet/>
          </div>
          </>
        )
      }

    const AppRoutes = createBrowserRouter([
        {
          path: "/",
          element: <LogIn/>
        },
        {
          path: "/signup",
          element: <SignIn/>
        },
        { 
          path: "/dashboard",
          // element: <AuthGuard Component={<DashboardLayout/>}/>,
            element: <DashboardLayout/>,
          children:[
            {path: "", element: <NotesContainer/>},
            {path: "archive", element: <ArchiveContainer/>},
            {path: "trash", element: <TrashContainer/>}
          ],
        },
        {
          path: '/book/:bookId',
          element: <BookContainer/>
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery/>
            </Suspense>
          ),
        },
      ]);

      return(
        <RouterProvider router={AppRoutes} ></RouterProvider>
      )

}

export default RoutingModule