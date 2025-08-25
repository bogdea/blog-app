import type { LogoProps } from "../../types/logo";

const Logo = (props: LogoProps) => {
  return <h1>{props.brand}</h1>;
};

export default Logo;
