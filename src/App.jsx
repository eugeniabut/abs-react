import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListing from './components/JobListing'
import ViewAllJobs from './components/ViewAllJobs'
const App = () => {


  return (
    <div>
     <Navbar/>
     <Hero title = "Become a React Dev" subtitle ="Find the React job that fits your skills and needs"/>
     <HomeCards />
     <JobListing/>
     <ViewAllJobs/>

    </div>


  )
}

export default App