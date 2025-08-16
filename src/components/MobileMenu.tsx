import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

const MobileMenu = () => {
  return (
    <div className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex-col space-y-2 text-center">
              <NavigationMenuItem className="text-lg">
                <Link to={"/"}>home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-lg">
                <Link to={"posts"}>posts</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
