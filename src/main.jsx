import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './ComponentFile/HomeFile/Home'
import NotFound from './ComponentFile/FileNotFoundFile/NotFound'
import AboutUs from './ComponentFile/AboutUsFile/AboutUs'
import Statistics from './ComponentFile/StatisticsFile/Statistics'
import ShowDynamicFeatherData from './ComponentFile/DynamicFeatherDataFile/ShowDynamicFeatherData'
// import ApplyedJobs from './ComponentFile/ApplyedJobsFile/ApplyedJobs'
import { asyncLodaerFun } from './ComponentFile/LoderFun/Loder'
import ApplayJobPage from './ComponentFile/ApplyedJobsFile/ApplayJobPage'
// import ApplayJobPage from './ComponentFile/ApplyedJobsFile/ApplayJobPage'

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/", element: <Home></Home>,

      },
      {
        path: "showDitles/:id", element: <ShowDynamicFeatherData></ShowDynamicFeatherData>,
        loader: async () => await fetch("featuradData.json")

      },
      {
        path: "/applayJobPage/showDitles/:id", element: <ShowDynamicFeatherData></ShowDynamicFeatherData>,
        loader: async () => await fetch("featuradData.json")

      },
      { path: "statistics", element: <Statistics></Statistics> },
      {
        path: "applayJobPage", element : <ApplayJobPage></ApplayJobPage>,
      },
      { path: "aboutUs", element: <AboutUs></AboutUs> },
      { path: "*", element: <NotFound></NotFound> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
