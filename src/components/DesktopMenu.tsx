import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const DesktopMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="space-x-2">
        <NavigationMenuItem>
          <a href="/">home</a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="#">posts</a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopMenu;
