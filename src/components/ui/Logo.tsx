import { Link } from "react-router";
import type { LogoProps } from "../../types/logo";

const Logo = (props: LogoProps) => {
  return (
    <Link
      className="cursor-pointer text-lg font-medium transition md:text-xl"
      to={"/"}
    >
      {props.brand}
    </Link>
  );
};

export default Logo;
