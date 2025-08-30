import { push, ref, set } from "firebase/database";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { auth, database } from "@/lib/firebase";
import { useState } from "react";

const CreatePostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const authorId = auth.currentUser?.uid;

  function createPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const postListRef = ref(database, "posts");
    const newPostRef = push(postListRef);

    set(newPostRef, {
      id: newPostRef.key,
      authorId: authorId,
      title: title,
      content: content,
      createdAt: Date.now(),
    });
  }

  return (
    <form className="space-y-4" onSubmit={createPost}>
      <div className="space-y-2">
        <Label htmlFor="post-title">post title</Label>
        <Input
          id="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="post-body">password</Label>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <Button className="w-full" type="submit">
        create post
      </Button>
    </form>
  );
};

export default CreatePostForm;
