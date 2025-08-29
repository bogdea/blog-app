import { push, ref, set } from "firebase/database";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { auth, database } from "@/lib/firebase";
import { useState } from "react";

const CreatePostForm = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const authorId = auth.currentUser?.uid;

  function createPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const postListRef = ref(database, "posts");
    const newPostRef = push(postListRef);

    set(newPostRef, {
      authorId: authorId,
      postTitle: postTitle,
      postBody: postBody,
      createdAt: Date.now(),
    });
  }

  return (
    <form className="space-y-4" onSubmit={createPost}>
      <div className="space-y-2">
        <Label htmlFor="post-title">post title</Label>
        <Input
          id="post-title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="post-body">password</Label>
        <Textarea
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
      </div>

      <Button className="w-full" type="submit">
        create post
      </Button>
    </form>
  );
};

export default CreatePostForm;
