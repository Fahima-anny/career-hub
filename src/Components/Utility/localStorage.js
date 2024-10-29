const getStoredJobsApplied = () => {
    let storedJobs = localStorage.getItem('JobApplications')
    if(storedJobs){
        return JSON.parse(storedJobs) ;
    }
    else {
        return [] ;
    }
}

const saveJobApply = id => {
let storedJobs = getStoredJobsApplied() ;
let exists = storedJobs.find( jobId => jobId === id )
if(!exists){
    storedJobs.push(id) ;
    localStorage.setItem("JobApplications",JSON.stringify(storedJobs))
}
}

export { getStoredJobsApplied , saveJobApply }  