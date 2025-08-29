import PostCard from "@/components/PostCard";
import type { PostProps } from "@/types/post";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <div className="my-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
      {posts.map((post: PostProps) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
};

export default Posts;
