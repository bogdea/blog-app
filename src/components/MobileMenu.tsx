import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

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
                <a href="/">home</a>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-lg">
                <a href="#">posts</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
