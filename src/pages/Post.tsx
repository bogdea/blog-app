import { database } from "@/lib/firebase";
import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { PostProps } from "@/types/post";
import { ArrowLeft } from "lucide-react";

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
    <div className="my-5 rounded-2xl border p-5">
      <Link to={"/blog"} className="mb-5 flex space-x-1">
        <ArrowLeft /> <span className="font-medium">back to posts</span>
      </Link>

      {post ? (
        <div id={post.id}>
          <h1 className="mb-2 text-lg font-semibold">{post.title}</h1>
          <p className="mb-3">{post.content}</p>
          <span className="text-muted-foreground block text-right text-sm">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default Post;
