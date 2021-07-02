import React,{useState} from 'react'
import {useHistory} from "react-router-dom";

function Create() {
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [author, setauthor] = useState('mario');
    const [isPending,setisPending]=useState(false);
    const h=useHistory();

    const handleSubmit = (e) =>
    {
        setisPending(true)
        e.preventDefault();
        const blog={title,body,author};
        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setisPending(false)
            h.push('/')
        }
        )
    }
    return (
        <div className="create">
        <div>
            <h1>Add A Blog</h1>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type="text"
            required
            value={title}
            onChange={(e)=> settitle(e.target.value)}
            ></input>
            <label>Blog Content:</label>
            <textarea required
            value={body}
            onChange={(e)=> setbody(e.target.value)}
            ></textarea>
            <select value={author} onChange={(e)=> setauthor(e.target.value)}>
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            {!isPending && <button type="submit">Add Blog</button>}
            {isPending && <button disabled>Adding Blog</button>}

        </form>
        </div>
        </div>
    )
}

export default Create;
