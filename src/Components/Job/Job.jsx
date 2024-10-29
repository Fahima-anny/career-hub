import { MdFmdGood , MdOutlineMonetizationOn  } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Job = ({job}) => {

const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job ;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={logo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="mr-3 rounded-md px-6 py-3 border-cyan-500 border-2  text-cyan-500 font-bold">{remote_or_onsite}</button>
            <button className="mr-3 rounded-md px-6 py-3 border-cyan-500 border-2  text-cyan-500 font-bold">{job_type}</button>
          </div>
          <div className="flex gap-5">
            <h2 className="flex gap-1 items-center"><MdFmdGood className="text-2xl"></MdFmdGood> {location} </h2>
            <h2 className="flex gap-1 items-center"><MdOutlineMonetizationOn  className="text-2xl"></MdOutlineMonetizationOn > {salary} </h2>
          </div>
          <div className="card-actions">
           <NavLink to={`/job/${id}`}> <button  className="btn bg-cyan-500 text-white font-bold mt-3">View Details</button></NavLink>
          </div>
        </div>
      </div>
    );
};

export default Job;