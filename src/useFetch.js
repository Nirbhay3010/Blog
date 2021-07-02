import { useState, useEffect} from "react";

const useFetch = (url) =>{
  const abortCont = new AbortController();

    const [blogs, setBlogs] = useState(null);
    const [isPending,setIsPending]=useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url,{ signal: abortCont.signal })
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
            if(err.name !== "AbortError"){
            setIsPending(false)
            setError(err.message)
            }
          }
          )
          return ()=> abortCont.abort();
      }, [url])
      return {blogs,isPending,error}
}

export default useFetch;