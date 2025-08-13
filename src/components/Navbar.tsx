import Logo from "./ui/Logo";

import MobileMenu from "./MobileMenu";
import UserButton from "./UserButton";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <Logo brand="blog" />

      <div className="flex space-x-4">
        <MobileMenu />
        <DesktopMenu />

        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
