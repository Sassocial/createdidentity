import AppCard from "../ui/AppCard";

type Props = {
  day: string;
  posts: string[];
};

export default function CalendarDay({ day, posts }: Props) {
  return (
    <AppCard>
      <h2 className="font-semibold text-lg">
        {day}
      </h2>

      <div className="mt-4 space-y-2">
        {posts.map((post, index) => (
          <div
            key={index}
            className="rounded-xl bg-[#E6DDD3] p-3"
          >
            {post}
          </div>
        ))}
      </div>
    </AppCard>
  );
}