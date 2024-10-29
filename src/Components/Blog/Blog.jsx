import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (
        <div>
             <Helmet>
                <title>Career Hub | Blog</title>
            </Helmet>
            <h1 className="text-center text-3xl text-cyan-950 font-bold py-10">Blogs</h1>

        </div>
    );
};

export default Blog;