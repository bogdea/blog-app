import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthModal from "./AuthModal";
import UserDropdown from "./UserDropdown";
import { auth } from "@/auth/firebase";

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
          <DialogContent className="text-center">
            <AuthModal />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default UserButton;
