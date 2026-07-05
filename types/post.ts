export interface Post {
  id: string;
  title: string;
  workspace: string;
  status: "Ideas" | "Filming" | "Editing" | "Scheduled";
  publishDate?: string;
}