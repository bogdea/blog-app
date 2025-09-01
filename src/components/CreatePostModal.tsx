import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreatePostForm from "./CreatePostForm";
import { SquarePlus } from "lucide-react";

const CreatePostModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <SquarePlus />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">create a new post</DialogTitle>
          <DialogDescription className="sr-only">
            add a title and content
          </DialogDescription>
        </DialogHeader>
        <CreatePostForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
