import { getSupabase } from "./supabase";

export async function getWorkspaces() {
  const supabase = getSupabase();

  const { data, error } = await supabase
    .from("workspaces")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function createWorkspace(name: string) {
  const supabase = getSupabase();

  const { error } = await supabase
    .from("workspaces")
    .insert({
      name,
    });

  if (error) throw error;
}