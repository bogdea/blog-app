import Logo from "./ui/Logo";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import { auth } from "@/lib/firebase";
import AuthModal from "./AuthModal";
import CreatePostModal from "./CreatePostModal";

const Navbar = () => {
  return (
    <div className="sticky top-0 right-0 flex h-16 items-center justify-between bg-white">
      <Logo brand="hipertrophy." />
      <div className="flex items-center space-x-3">
        <DesktopMenu />
        {auth.currentUser ? <CreatePostModal /> : null}

        <MobileMenu />

        {auth.currentUser ? <UserMenu /> : <AuthModal />}
      </div>
    </div>
  );
};

export default Navbar;
