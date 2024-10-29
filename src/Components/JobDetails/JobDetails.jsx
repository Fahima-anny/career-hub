import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineStickyNote2 , MdOutlineEmail , MdPhone  , MdOutlineMonetizationOn , MdFmdGood } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApply } from "../Utility/localStorage";
import { Helmet } from "react-helmet-async";



const JobDetails = () => {

const jobs = useLoaderData() ;

const {id} = useParams() ;

// console.log('id:',id,'jobs',jobs)

const idInt = parseInt(id)

const job = jobs.find( job => job.id === idInt )

const {job_description,contact_information,salary,job_title,job_responsibility,educational_requirements,experiences} = job ;

const handleApplyNow = () => {
    saveJobApply(idInt) ;
    toast('You have applied for the job successfully')
}

// console.log(job)

    return (
        <div className="grid grid-cols-3 gap-5">
             <Helmet>
                <title>Career Hub | Applied Jobs</title>
            </Helmet>
           <div className="col-span-2 space-y-5">
           <p className="text-gray-500">
                <span className="text-black font-semibold">Job Description: </span> {job_description}
            </p>
           <p className="text-gray-500">
                <span className="text-black font-semibold">Job Responsibility: </span> {job_responsibility}
            </p>
           <p className="text-gray-500">
                <span className="text-black font-semibold block">Educational Requirements: </span> {educational_requirements}
            </p>
           <p className="text-gray-500">
                <span className="text-black font-semibold block">Experiences: </span> {experiences}
            </p>
           </div>
           <div className="">
            <div className="bg-cyan-100 p-4 rounded space-y-1">
 <h3 className="text-black font-semibold border-b-2 py-3 mb-3 border-cyan-500">Job Details:</h3>

<div className="flex items-center gap-1 font-semibold text-gray-500">
    <MdOutlineMonetizationOn className="text-xl"></MdOutlineMonetizationOn>
    <h4 className="text-black font-semibold">Salary:</h4>
    {salary}
</div>
<div className="flex items-center gap-1 font-semibold text-gray-500">
    <MdOutlineStickyNote2  className="text-xl"></MdOutlineStickyNote2 >
    <h4 className="text-black font-semibold">Job Title:</h4>
    {job_title}
</div>
 
 <h3 className="text-black font-semibold border-b-2 py-3 mb-3 border-cyan-500">Contact Information:</h3>
 <div className="flex items-center gap-1 font-semibold text-gray-500">
    <MdPhone   className="text-xl"></MdPhone  >
    <h4 className="text-black font-semibold">Phone:</h4>
    {contact_information.phone}
</div>
<div className="flex items-center gap-1 font-semibold text-gray-500">
    <MdOutlineEmail   className="text-xl"></MdOutlineEmail  >
    <h4 className="text-black font-semibold">Email:</h4>
    {contact_information.email}
</div>
<div className="flex gap-1 font-semibold text-gray-500">
    <MdFmdGood  className="text-2xl"></MdFmdGood >
    <h4 className="text-black font-semibold">Address: <span className="text-gray-500">{contact_information.address}</span></h4>
    
</div>
            </div>
            <button className="bg-cyan-500 hover:bg-cyan-400 duration-500 rounded py-3 w-full text-white font-semibold mt-4" onClick={handleApplyNow}>Apply Now</button>
            <ToastContainer />
           </div>
        </div>
    );
};

export default JobDetails;