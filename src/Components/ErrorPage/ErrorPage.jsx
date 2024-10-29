import { NavLink, useNavigate } from "react-router-dom";


const ErrorPage = () => {

let navigate = useNavigate() ;

let handleBackBtn = () => {
    navigate(-1)
}

    return (
        <div className="text-center space-y-5 py-20">
            <h1 className="text-6xl text-cyan-700 font-bold">Oops!!!</h1>
            <p  className="text-center text-gray-500">An error has occurred.</p>
            <p className="text-center text-gray-500">Please go back.</p>
            <NavLink onClick={handleBackBtn}><button className="py-3 px-10 rounded-md mt-10 bg-cyan-200 text-xl font-bold">Go Back</button></NavLink>
        </div>
    );
};

export default ErrorPage;