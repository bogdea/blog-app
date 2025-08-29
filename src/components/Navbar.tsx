import Logo from "./ui/Logo";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import { auth } from "@/lib/firebase";
import AuthModal from "./AuthModal";
import CreatePostModal from "./CreatePostModal";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo brand="blog" />

      <div className="flex items-center space-x-3">
        {auth.currentUser ? <CreatePostModal /> : null}

        <DesktopMenu />
        <MobileMenu />

        {auth.currentUser ? <UserMenu /> : <AuthModal />}
      </div>
    </div>
  );
};

export default Navbar;
