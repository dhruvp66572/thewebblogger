import styles from "./home.module.css";
import PostCard from "@/components/postCard/Postcard";
import { getPosts } from "@/lib/data";

const Home = async () => {

  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Home;