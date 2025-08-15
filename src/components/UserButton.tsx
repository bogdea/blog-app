import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthForm from "./AuthForm";
import UserDropdown from "./UserDropdown";
import { auth } from "@/auth/firebase";
import { DialogTitle } from "@radix-ui/react-dialog";

const UserButton = () => {
  const user = auth.currentUser;

  return (
    <div>
      {user ? (
        <UserDropdown />
      ) : (
        <Dialog>
          <DialogTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogTitle className="sr-only">auth modal</DialogTitle>
          <DialogContent className="text-center">
            <DialogDescription className="sr-only">
              auth modal
            </DialogDescription>
            <AuthForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default UserButton;
