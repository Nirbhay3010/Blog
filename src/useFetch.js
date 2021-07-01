import { useState, useEffect} from "react";

const useFetch = (url) =>{
    const [blogs, setBlogs] = useState(null);
    const [isPending,setIsPending]=useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
          .then(res => {
            if(!res.ok){
              throw Error("Data Not Fetched!")
            }
            return res.json();
          })
          .then(data => {
            setIsPending(false)
            setError(null)
            setBlogs(data);
          })
          .catch( err=>{
            setIsPending(false)
            setError(err.message)
          }
      
          )
      }, [url])
      return {blogs,isPending,error}
}

export default useFetch;