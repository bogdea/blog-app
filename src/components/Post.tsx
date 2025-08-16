import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PostProps } from "@/types/post";

const Post = ({ id, title, body }: PostProps) => {
  return (
    <Card id={id}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
};

export default Post;
