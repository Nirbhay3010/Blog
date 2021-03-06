import { useHistory,useParams } from "react-router-dom";
import useFetch from "./useFetch"


const BlogDetails = () => {
  const { id } = useParams();
  const {blogs,error,isPending} = useFetch("http://localhost:8000/blogs/"+id);
  const h=useHistory();
  const handleDelete=(()=>{
    fetch("http://localhost:8000/blogs/" + blogs.id,{
      method: 'DELETE'
    }).then(()=>
    {
      h.push("/");
    })
  })

  
  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      {error && <div>{ error }</div>}
      {blogs &&(
        <article>
          <h2> { blogs.title }</h2>
          <p>Written by { blogs.author }</p>
          <div>{ blogs.body }</div>
        </article>
        
      )}
      <button onClick={handleDelete}>Delete Blog</button>
    </div>
  );
}
 
export default BlogDetails;