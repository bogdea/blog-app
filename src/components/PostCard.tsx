import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PostProps } from "@/types/post";
import { useNavigate } from "react-router";

const PostCard = (props: PostProps) => {
  const navigate = useNavigate();

  return (
    <Card
      key={props.id}
      id={props.id}
      onClick={() => navigate(`/post/${props.id}`)}
      className="h-full"
    >
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{props.content}</p>
      </CardContent>
    </Card>
  );
};

export default PostCard;
