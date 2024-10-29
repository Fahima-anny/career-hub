import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs,setJobs] = useState([]) ;
    const [dataLength, setDataLength] = useState(4) ;

    useEffect( () => {
        fetch('jobs.json')
        .then( res => res.json() )
        .then( data => setJobs(data) )
    } , [] )

    return (
        <div>
             <h1 className="text-center text-3xl text-cyan-950 font-bold">Featured Jobs {jobs.length}</h1>
             <p className="text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, dicta?</p>  
             <div className="grid grid-cols-2 gap-10 py-16">
                { jobs.slice(0,dataLength).map( job => <Job key={job.id} job={job} ></Job> ) }
                </div> 
                <div className={ dataLength === jobs.length && 'hidden'}>
                <div className="flex justify-center mb-20"><button onClick={() => setDataLength(jobs.length)} className=" btn bg-cyan-500 text-white font-bold mt-3">View Details</button></div>
                </div>
                </div>
    );
};

export default FeaturedJobs;