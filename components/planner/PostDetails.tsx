import AppCard from "../ui/AppCard";
import { Post } from "../../types/post";

type Props = {
  post: Post | null;
};

export default function PostDetails({ post }: Props) {
  if (!post) {
    return (
      <AppCard>
        <p className="text-[#847B72]">
          Select a post to edit it.
        </p>
      </AppCard>
    );
  }

  return (
    <AppCard>
      <h2 className="text-2xl font-bold">
        {post.title}
      </h2>

      <div className="mt-6 space-y-4">

        <div>
          <p className="text-sm text-[#847B72]">
            Workspace
          </p>

          <p>{post.workspace}</p>
        </div>

        <div>
          <p className="text-sm text-[#847B72]">
            Status
          </p>

          <p>{post.status}</p>
        </div>

        <div>
          <p className="text-sm text-[#847B72]">
            Publish Day
          </p>

          <p>{post.publishDate ?? "Not scheduled"}</p>
        </div>

      </div>
    </AppCard>
  );
}