import { MdFmdGood , MdOutlineMonetizationOn  } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AppliedJobsDetails = ({job}) => {
    console.log(job)
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job ;
    return (
        <div className="flex justify-between gap-8 my-16">
            <div className="flex gap-5 ">
<div className="flex items-center justify-center px-8 bg-gray-100">
    <img className="" src={logo} alt="" />
</div>
<div>
<div className="">
          <h2 className="font-bold">{job_title}</h2>
          <p className="font-bold text-cyan-500">{company_name}</p>
          <div>
            <button className="mr-3 rounded-md px-6 py-1 border-cyan-500 border-2  text-cyan-500 font-semibold">{remote_or_onsite}</button>
            <button className="mr-3 rounded-md px-6 py-1 border-cyan-500 border-2  text-cyan-500 font-semibold">{job_type}</button>
          </div>
          <div className="flex gap-5 mt-1 text-gray-500">
            <h2 className="flex gap-1 items-center"><MdFmdGood className="text-2xl"></MdFmdGood> {location} </h2>
            <h2 className="flex gap-1 items-center"><MdOutlineMonetizationOn  className="text-2xl"></MdOutlineMonetizationOn > {salary} </h2>
          </div>
          <div className="card-actions">
          
          </div>
        </div>
</div>
            </div>
           <div>
           <NavLink to={`/job/${id}`}> <button  className="btn bg-cyan-500 text-white font-bold mt-2">View Details</button></NavLink>
           </div>
        </div>
    );
};

export default AppliedJobsDetails;