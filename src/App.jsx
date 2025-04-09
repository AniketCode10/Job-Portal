
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import AppLayout from './layouts/app-layout'
import LandingPage from './pages/Landing'
import OnBoarding from './pages/OnBoarding'
import JobListings from './pages/JobListings'
import JobPage from './pages/Jobs'
import PostJob from './pages/PostJob'
import SavedJobs from './pages/SaveJob'
import MyJobs from './pages/MyJobs'
import { ThemeProvider } from "./components/theme-provider"


const router = createBrowserRouter([
{
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<LandingPage/>
    },
    {
      path:"/onboarding",
      element:<OnBoarding/>
    },
    {
      path:"/jobs",
      element:<JobListings/>
    },
    {
      path:"/job/:id",
      element:<JobPage/>
    },
    {
      path:"/post-job",
      element:<PostJob/>
    },
    {
      path:"/saved-job",
      element:<SavedJobs/>
    },
    {
      path:"/my-jobs",
      element:<MyJobs/>
    }
  ]
}
])


function App() {


  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider  router={router}/>
    </ThemeProvider>
 
  )
}

export default App
