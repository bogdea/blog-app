import { database } from "@/lib/firebase";
import { get, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import type { PostProps } from "@/types/post";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import EditPostForm from "@/components/EditPostForm";
import { Button } from "@/components/ui/button";

const Post = () => {
  const [post, setPost] = useState<PostProps>();
  const { postId } = useParams();
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const postRef = ref(database, `posts/${postId}`);

    get(postRef).then((snapshot) => {
      setPost(snapshot.val());
    });
  }, [postId]);

  function handleDelete() {
    const postRef = ref(database, `posts/${postId}`);
    remove(postRef).then(() => {
      navigate("/blog");

      toast.success("post deleted");
    });
  }

  return (
    <div className="my-5 rounded-2xl border p-5">
      <Link to={"/blog"} className="mb-5 flex space-x-1">
        <ArrowLeft /> <span className="font-medium">back to posts</span>
      </Link>

      {editMode ? (
        <EditPostForm />
      ) : post ? (
        <div id={post.id}>
          <h1 className="mb-2 text-lg font-semibold">{post.title}</h1>

          <p className="mb-3">{post.content}</p>

          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <Button onClick={() => setEditMode(!editMode)}>edit</Button>
              <Button variant={"destructive"} onClick={handleDelete}>
                delete
              </Button>
            </div>

            <span className="text-muted-foreground block text-right text-sm">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default Post;
