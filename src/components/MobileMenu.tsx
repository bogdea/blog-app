import { NavLink } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex items-center justify-center">
          <SheetHeader>
            <SheetTitle className="sr-only">navigation menu </SheetTitle>
            <SheetDescription className="sr-only">
              use the links inside this menu to navigate between pages
            </SheetDescription>
          </SheetHeader>

          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "font-medium" : "")}
          >
            home
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) => (isActive ? "font-medium" : "")}
          >
            blog
          </NavLink>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
