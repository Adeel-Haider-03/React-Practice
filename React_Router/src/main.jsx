import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github,{getInfo} from './components/Github/Github'


// const router= createBrowserRouter([
//   {
//     element:<Layout/>,
//     path:'/',
//     children:[
//       {
//         element:<Home/>,
//         path:"/Home"
//       },
//       {
//         element:<About/>,
//         path:"/About"
//       },
//       {
//         element:<Contact/>,
//         path:"/Contact"
//       },
//       {
//         element:<User/>,
//         path:"/user"
//       },
//       {
//         element:<Github/>,
//         path:"/Github",
//         loader:{getInfo} // not allowed using this syntax
//       }  

//     ]
//   }
// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='Home' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
      loader={getInfo}
      path='Github'
      element={<Github/>}/>

    </Route> 
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
