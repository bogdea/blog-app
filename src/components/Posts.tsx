import { useState, useEffect } from "react";
import Post from "./Post";
import type { PostProps } from "@/types/post";

const Posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-3">
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Posts;
