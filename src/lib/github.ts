const GITHUB_USERNAME = "lnt-h";
const GITHUB_API_VERSION = "2026-03-10";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

type GitHubProfileResponse = {
  login: string;
  avatar_url: string;
  html_url: string;
};

type GitHubEventResponse = {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload?: { ref?: string };
};

export type GitHubActivity = {
  type: string;
  repository: string;
  branch?: string;
  occurredAt: string;
  repositoryUrl: string;
  profileUrl: string;
  avatarUrl: string;
  username: string;
};

export type GitHubActivityResult =
  | { status: "available"; activity: GitHubActivity }
  | { status: "empty"; profileUrl: string }
  | { status: "error"; profileUrl: string };

const githubHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": GITHUB_API_VERSION,
};

export async function getGitHubActivity(): Promise<GitHubActivityResult> {
  try {
    const [profileResponse, eventsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers: githubHeaders,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`, {
        headers: githubHeaders,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!profileResponse.ok || !eventsResponse.ok) {
      return { status: "error", profileUrl: GITHUB_PROFILE_URL };
    }

    const profile = (await profileResponse.json()) as GitHubProfileResponse;
    const events = (await eventsResponse.json()) as GitHubEventResponse[];
    const latestEvent = events
      .filter((event) => event.created_at && event.repo?.name)
      .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))[0];

    if (!latestEvent) {
      return { status: "empty", profileUrl: profile.html_url || GITHUB_PROFILE_URL };
    }

    return {
      status: "available",
      activity: {
        type: latestEvent.type,
        repository: latestEvent.repo.name,
        branch: latestEvent.payload?.ref?.replace("refs/heads/", ""),
        occurredAt: latestEvent.created_at,
        repositoryUrl: `https://github.com/${latestEvent.repo.name}`,
        profileUrl: profile.html_url || GITHUB_PROFILE_URL,
        avatarUrl: profile.avatar_url,
        username: profile.login,
      },
    };
  } catch {
    return { status: "error", profileUrl: GITHUB_PROFILE_URL };
  }
}
