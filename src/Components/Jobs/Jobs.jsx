import { Helmet } from "react-helmet-async";


const Jobs = () => {
    return (
        <div>
             <Helmet>
                <title>Career Hub | Jobs</title>
            </Helmet>
            <h1 className="text-center text-3xl text-cyan-950 font-bold py-10">All Jobs</h1>
        </div>
    );
};

export default Jobs;