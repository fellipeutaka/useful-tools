import ky from "ky";

import { REPOSITORY_NAME, REPOSITORY_OWNER } from "~/constants/repository-info";

type ApiResponse = {
  stargazers_count: number;
};

export async function getGitHubStars() {
  try {
    const response = await ky(
      `https://api.github.com/repos/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`,
      {
        next: {
          revalidate: 60, // 1 minute
        },
      },
    );

    const { stargazers_count } = await response.json<ApiResponse>();

    return stargazers_count;
  } catch (error) {
    return null;
  }
}
