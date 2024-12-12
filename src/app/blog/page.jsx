
import PostCard from "@/components/postCard/Postcard";
import styles from "./blog.module.css";
import aboutimage from "../../../public/about.png";
// import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {

  // {next:{revalidate:3600}}) this is for refresh the data after 1 hour (for caching data)
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
      

      {/* // static data for testing */}
      {/* <PostCard post={{title: "Title", body: "Body", id: 1, userId: 1, createdAt: new Date(), img: aboutimage }} /> */}
    </div>
  );
};

export default BlogPage;