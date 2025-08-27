import type { HeroProps } from "@/types/hero";
import { Button } from "./ui/button";

const Hero = (props: HeroProps) => {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-medium md:text-4xl">{props.title}</h1>
      <p className="md:text-lg">{props.subtitle}</p>
      <Button onClick={props.onClick} variant={"default"}>
        {props.ctaLabel}
      </Button>
    </div>
  );
};

export default Hero;
