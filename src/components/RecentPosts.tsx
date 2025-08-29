import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import type { PostProps } from "@/types/post";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <div>
      <h1 className="my-5 text-center text-xl font-medium">recent posts</h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
        {posts.slice(0, 3).map((post: PostProps) => (
          <div key={post.id}>
            <PostCard id={post.id} title={post.title} body={post.body} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
