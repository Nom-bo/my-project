import React from 'react'

const page = () => {
  return(
    <div><figure className="bg-cyan-100 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="/noman.jpg" alt="noman" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “I am Noman Aslam working as a Freelancer on Upwork and Fiverr.
          My core services are lead generation and data entry and also woeking as
          project manager with local clients”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Noman Aslam
        </div>
        <div>
          Freelancer, Fiverr
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page