import { NavLink } from "react-router";

const DesktopMenu = () => {
  return (
    <div className="mr-5 hidden space-x-3 md:block">
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
    </div>
  );
};

export default DesktopMenu;
