import Image from "next/image";
import { getGitHubActivity, type GitHubActivity } from "@/lib/github";

function activityLabel(activity: GitHubActivity) {
  if (activity.type === "PushEvent") return "Pushed to";
  if (activity.type === "CreateEvent") return "Created";
  if (activity.type === "PullRequestEvent") return "Updated a pull request in";
  return "Contributed to";
}

function formatActivityDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recent activity";

  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(date);
}

export function GitHubActivityFallback() {
  return (
    <article className="personality-card github-card github-card-fallback" aria-busy="true">
      <span className="card-label">Recent public activity</span>
      <div className="github-skeleton" aria-hidden="true"><i /><i /><i /></div>
      <p>Loading public GitHub activity…</p>
    </article>
  );
}

export async function GitHubActivityCard() {
  const result = await getGitHubActivity();

  if (result.status !== "available") {
    return (
      <article className="personality-card github-card">
        <span className="card-label">Recent public activity</span>
        <div className="card-center-mark" aria-hidden="true">⌁</div>
        <h3>{result.status === "empty" ? "No recent public events." : "Activity is taking a break."}</h3>
        <p>GitHub data is unavailable right now, but the public profile is still accessible.</p>
        <a className="card-link" href={result.profileUrl} target="_blank" rel="noreferrer">View GitHub <span aria-hidden="true">↗</span></a>
      </article>
    );
  }

  const { activity } = result;
  return (
    <article className="personality-card github-card">
      <span className="card-label">Recent public activity</span>
      <div className="github-profile-row">
        <Image src={activity.avatarUrl} alt="" width={44} height={44} className="github-avatar" />
        <div><strong>@{activity.username}</strong><span>Public GitHub profile</span></div>
      </div>
      <div className="github-activity-copy">
        <span className="github-activity-line" aria-hidden="true"><i /></span>
        <p>{activityLabel(activity)}</p>
        <h3>{activity.repository}</h3>
        <div className="github-event-meta">
          {activity.branch && <span>{activity.branch}</span>}
          <time dateTime={activity.occurredAt}>{formatActivityDate(activity.occurredAt)}</time>
        </div>
      </div>
      <a className="card-link" href={activity.repositoryUrl} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
    </article>
  );
}
