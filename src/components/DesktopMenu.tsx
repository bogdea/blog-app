import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

const DesktopMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <Link to={"/"}>home</Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to={"posts"}>posts</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;
