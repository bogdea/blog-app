import { database } from "@/lib/firebase";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { PostProps } from "@/types/post";

const Post = () => {
  const [post, setPost] = useState<PostProps>();
  const { postId } = useParams();

  useEffect(() => {
    const postRef = ref(database, `posts/${postId}`);

    get(postRef).then((snapshot) => {
      setPost(snapshot.val());
    });
  }, [postId]);

  return (
    <div>
      {post ? (
        <div id={post.id}>
          <h1>{post.title}</h1>
          <p>{post.title}</p>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default Post;
