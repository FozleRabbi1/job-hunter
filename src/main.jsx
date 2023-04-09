import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './ComponentFile/HomeFile/Home'
import NotFound from './ComponentFile/FileNotFoundFile/NotFound'
import AboutUs from './ComponentFile/AboutUsFile/AboutUs'
import Statistics from './ComponentFile/StatisticsFile/Statistics'

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {
        path: "/", element: <Home></Home>,
        loader: () => fetch("jobCategoriesData.json")
      },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/aboutUs", element: <AboutUs></AboutUs> },
      { path: "*", element: <NotFound></NotFound> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
