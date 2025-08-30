import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PostProps } from "@/types/post";

const PostCard = (props: PostProps) => {
  return (
    <Card key={props.id} id={props.id} className="h-full">
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
