import { useLoaderData } from "react-router-dom";
import { getStoredJobsApplied } from "../Utility/localStorage";
import { useEffect, useState } from "react";
import AppliedJobsDetails from "../AppliedJobsDetails/AppliedJobsDetails";
import { Helmet } from "react-helmet-async";


const AppliedJobs = () => {
    let jobs = useLoaderData() ;

    const [jobsApplied,setJobsApplied] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

const handleDisplayJobs = filter => {
    if( filter === 'All' ){
        setDisplayJobs(jobsApplied)
    }
    else if(filter === 'Remote'){
const remoteJobs = jobsApplied.filter( job => job.remote_or_onsite === 'Remote' )
setDisplayJobs(remoteJobs)
    }
    else if(filter === 'Onsite'){
const onsiteJobs = jobsApplied.filter( job => job.remote_or_onsite === 'Onsite' )
setDisplayJobs(onsiteJobs)
    }
}

// console.log(jobs) ;

useEffect( () => {
    const storedJobsId = getStoredJobsApplied() ;
    if(jobs.length > 0 ){
        // rule 1
        // const appliedJobs = jobs.filter( job => storedJobsId.includes(job.id) )

        // rule 2
const appliedJobs = [] ;
for(const id of storedJobsId){
    const job = jobs.find(job=> job.id === id)
    if(job){
        appliedJobs.push(job)
    }
}
setJobsApplied(appliedJobs)
setDisplayJobs(appliedJobs)
        // console.log(storedJobsId,jobs,appliedJobs)
    }
} , [jobs] )


    return (
        <div>
            <Helmet>
                <title>Career Hub | Applied Jobs</title>
            </Helmet>
            <h1 className="text-center text-3xl text-cyan-950 font-bold py-10">Jobs I Applied: </h1>
           <div className="flex justify-end">
           <details className="dropdown">
  <summary className="btn m-1 px-9">Filter by</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a onClick={() => handleDisplayJobs('All')}>All</a></li>
    <li><a onClick={() => handleDisplayJobs('Remote')}>Remote</a></li>
    <li><a onClick={() => handleDisplayJobs('Onsite')}>Onsite</a></li>
  </ul>
</details>
           </div>
            <div>
                {
                displayJobs.map( (job,idx) => <AppliedJobsDetails key={idx} job={job}></AppliedJobsDetails> )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;