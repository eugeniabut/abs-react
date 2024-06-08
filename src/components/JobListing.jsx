import React from 'react'
import Job from './Job';
import jobs from "./job.json"



const JobListing = () => {

    const recentJob = jobs.slice()
  return (
<section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {jobs.map((job)=> (<Job  key={job.key} job ={job}/> 
          ))}
        </div>
      </div>
    </section>
  );
}
export default JobListing