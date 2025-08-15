import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { auth } from "@/auth/firebase";
import { signOut } from "firebase/auth";
import { toast } from "sonner";

const UserDropdown = () => {
  function handleSignOut() {
    signOut(auth).then(() => {
      toast.success("signed out");
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>my account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>profile</DropdownMenuItem>
        <DropdownMenuItem>
          <Button className="w-full" onClick={handleSignOut}>
            sign out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
