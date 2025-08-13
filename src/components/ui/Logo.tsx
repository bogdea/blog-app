import type { LogoProps } from "@/types/logo";

const Logo = ({ brand }: LogoProps) => {
  return (
    <a href="/" className="text-2xl font-medium">
      {brand}
    </a>
  );
};

export default Logo;
