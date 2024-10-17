import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
   const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

   return ( 
      <div className="home">
         <h2>Homepage</h2>
         {error && <div>Error fetch data</div>}
         {isPending && <div>loading...</div>}
         { blogs && <BlogList blogs={blogs} title="All Blog"/>}
         {/* { blogs && <BlogList blogs={blogs} title="All Blog" handleDelete={handleDelete}/>} */}
         {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blog"/> */}
      </div>
    );
}
 
export default Home;