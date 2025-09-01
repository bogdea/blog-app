import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import type { PostProps } from "@/types/post";
import { database } from "@/lib/firebase";
import { onValue, ref } from "firebase/database";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postListRef = ref(database, "posts");

    onValue(postListRef, (snapshot) => {
      const data = snapshot.val();
      setPosts(Object.values(data));
    });
  }, []);

  return (
    <div className="m-auto max-w-[400px]">
      <h2 className="text-muted-foreground my-7 text-center text-xl font-semibold tracking-wide uppercase">
        recent posts
      </h2>

      <div className="space-y-7">
        {posts.slice(0, 3).map((post: PostProps) => (
          <div key={post.id}>
            <PostCard
              id={post.id}
              authorId={post.authorId}
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
