import "./Home.css";
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home=()=> {

const {blogs,isPending,error} = useFetch('http://localhost:8000/blogs')

    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs} title={"Blog List"} />}
        </div>
    );
}
export default Home;