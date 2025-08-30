import PostCard from "@/components/PostCard";
import { database } from "@/lib/firebase";
import type { PostProps } from "@/types/post";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postListRef = ref(database, "posts");

    onValue(postListRef, (snapshot) => {
      const data = snapshot.val();
      setPosts(Object.values(data));
    });
  }, []);

  return (
    <div className="my-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
      {posts.map((post: PostProps) => (
        <PostCard
          key={post.id}
          id={post.id}
          authorId={post.authorId}
          title={post.title}
          content={post.content}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
};

export default Posts;
