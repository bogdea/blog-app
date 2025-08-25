import Logo from "./ui/Logo";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <Logo brand="blog" />

      <div className="flex items-center space-x-3">
        <DesktopMenu />
        <MobileMenu />
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
