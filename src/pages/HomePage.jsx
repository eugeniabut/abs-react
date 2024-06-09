import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListing from '../components/JobListing'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero title = "Become a React Dev" subtitle ="Find the React job that fits your skills and needs"/>
     <HomeCards />
     <JobListing isHome = {true} />
     <ViewAllJobs/>
    </>
  )
}

export default HomePage