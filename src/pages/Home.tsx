import Hero from "@/components/Hero";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex h-[90vh] items-center">
        <Hero
          title="Lorem ipsum dolor sit amet."
          subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ut."
          ctaLabel="read posts"
          onClick={() => {
            navigate("posts");
          }}
        />
      </div>
    </div>
  );
};

export default Home;
