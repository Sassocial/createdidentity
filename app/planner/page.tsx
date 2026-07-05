"use client";

import { useState } from "react";

import AppLayout from "../../components/layout/AppLayout";
import PlannerColumn from "../../components/planner/PlannerColumn";
import NewPostForm from "../../components/planner/NewPostForm";
import PostDetails from "../../components/planner/PostDetails";

import { posts as starterPosts } from "../../data/posts";
import { Post } from "../../types/post";

export default function PlannerPage() {
  const [posts, setPosts] =useState<Post[]>(starterPosts);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  function addPost(title: string) {
    setPosts([
      {
        id: crypto.randomUUID(),
        title,
        workspace: "Coppid Beech Hotel",
        status: "Ideas",
      },
      ...posts,
    ]);
  }

  function movePost(id: string) {
    setPosts((currentPosts) =>
      currentPosts.map((post) => {
        if (post.id !== id) return post;

        const nextStatus = {
          Ideas: "Filming",
          Filming: "Editing",
          Editing: "Scheduled",
          Scheduled: "Scheduled",
        } as const;

        return {
          ...post,
          status: nextStatus[post.status],
        };
      })
    );
  }

  return (
    <AppLayout
      title="Content Planner"
      subtitle="Track every piece of content."
    >
      <NewPostForm onAdd={addPost} />

      <div className="space-y-10">
        <PlannerColumn
          title="Ideas"
          posts={posts.filter((p) => p.status === "Ideas")}
          onMove={movePost}
          onSelect={setSelectedPost}
        />

        <PlannerColumn
          title="Filming"
          posts={posts.filter((p) => p.status === "Filming")}
          onMove={movePost}
          onSelect={setSelectedPost}
        />

        <PlannerColumn
          title="Editing"
          posts={posts.filter((p) => p.status === "Editing")}
          onMove={movePost}
          onSelect={setSelectedPost}
        />

        <PlannerColumn
          title="Scheduled"
          posts={posts.filter((p) => p.status === "Scheduled")}
          onMove={movePost}
          onSelect={setSelectedPost}
        />
      </div>

      <div className="mt-10">
        <PostDetails post={selectedPost} />
      </div>
    </AppLayout>
  );
}