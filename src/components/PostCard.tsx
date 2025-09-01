import { Card, CardContent } from "@/components/ui/card";
import type { PostProps } from "@/types/post";
import { useNavigate } from "react-router";

const PostCard = (props: PostProps) => {
  const navigate = useNavigate();

  return (
    <Card
      key={props.id}
      id={props.id}
      onClick={() => navigate(`/post/${props.id}`)}
      className="cursor-pointer"
    >
      <CardContent className="space-y-3 text-left">
        <h3 className="font-semibold">{props.title.slice(0, 100) + "..."}</h3>
        <p>{props.content.slice(0, 100) + "..."}</p>
      </CardContent>
    </Card>
  );
};

export default PostCard;
