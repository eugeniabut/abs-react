import React from 'react'
import Card from './Card'

const HomeCards = () => {
  return (

    <section className="py-4">
    <Card>
    <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Browse our React jobs and start your career today
          </p>
          <a
            href="/jobs.html"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </a>
    </Card> 

    <Card bg = "bg-indigo-100">
    <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <a
            href="/add-job.html"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            Add Job
          </a>
    </Card>
   
   

  </section>
  )
}

export default HomeCards