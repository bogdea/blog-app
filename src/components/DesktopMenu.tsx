import { NavLink } from "react-router";

const DesktopMenu = () => {
  return (
    <div className="hidden space-x-3 md:block">
      <NavLink to={"/"}>home</NavLink>
      <NavLink to={"/posts"}>posts</NavLink>
    </div>
  );
};

export default DesktopMenu;
