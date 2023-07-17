import { getGitHubStars } from "~/utils/getGitHubStars";

export async function Stars() {
  const stars = await getGitHubStars();

  return (
    <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
      {stars} stars on GitHub
    </div>
  );
}
