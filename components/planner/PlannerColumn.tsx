import AppCard from "../ui/AppCard";
import Button from "../ui/Button";
import { Post } from "../../types/post";

type Props = {
  title: string;
  posts: Post[];
  onMove: (id: string) => void;
  onSelect: (post: Post) => void;
};

export default function PlannerColumn({
  title,
  posts,
  onMove,
  onSelect,
}: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>

      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => onSelect(post)}
          className="cursor-pointer"
        >
          <AppCard>
            <p className="font-medium">{post.title}</p>

            <p className="mt-2 text-sm text-[#847B72]">
              {post.workspace}
            </p>

            <div
              className="mt-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Button onClick={() => onMove(post.id)}>
                Move →
              </Button>
            </div>
          </AppCard>
        </div>
      ))}
    </div>
  );
}