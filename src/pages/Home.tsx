import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPosts";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex h-[90vh] items-center justify-center text-center">
        <Hero
          title="evidence-based hypertrophy."
          subtitle="learn what really drives muscle growth — no microtears, no myths."
          ctaLabel="start learning"
          onClick={() => {
            navigate("blog");
          }}
        />
      </div>

      <RecentPosts />
    </div>
  );
};

export default Home;
