import { useParams } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ref, update } from "firebase/database";
import { database } from "@/lib/firebase";
import { useState } from "react";

const EditPostForm = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleUpdate() {
    const postRef = ref(database, `posts/${postId}`);
    update(postRef, {
      title: title,
      content: content,
    });
  }

  return (
    <form>
      <Input
        className="mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-3"
      />

      <div className="space-x-2">
        <Button variant={"muted"} onClick={window.location.reload}>
          cancel
        </Button>
        <Button onClick={handleUpdate}>save</Button>
      </div>
    </form>
  );
};

export default EditPostForm;
