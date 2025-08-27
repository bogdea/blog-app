import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AuthForm from "./AuthForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AuthModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">authentication</DialogTitle>
          <DialogDescription className="sr-only">
            sign in or create an account to continue
          </DialogDescription>
        </DialogHeader>

        <AuthForm />
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
