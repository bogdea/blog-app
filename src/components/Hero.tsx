import type { HeroProps } from "@/types/hero";
import { Button } from "./ui/button";

const Hero = (props: HeroProps) => {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold md:text-4xl">{props.title}</h1>
      <p className="font-semibold md:text-lg">{props.subtitle}</p>
      <Button
        onClick={props.onClick}
        variant={"default"}
        className="tracking-wide"
      >
        {props.ctaLabel}
      </Button>
    </div>
  );
};

export default Hero;
