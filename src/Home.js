import {useState } from 'react';
const Home = () => {
    const[blogs, setBlogs]= useState([
     {title:'My new blog' , body:'Hello there......' , author:'Praveena' , id:'1'},
     {title:'One beautiful day' , body:'One beautiful day......' , author:'Karthe' , id:'2'},
     {title:'That night' , body:'That night....' , author:'Praveena' , id:'3'}   
    ]);
    return ( 
        <div className="home">
        {blogs.map((blog)=> (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>
        ))}
           
        </div>
     );
}
 
export default Home; 