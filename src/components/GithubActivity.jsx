import { useState, useEffect } from "react";

function GithubActivity() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const query = `
        {
          user(login: "Austine0829") {
            publicRepos: repositories(privacy: PUBLIC) {
              totalCount
            }
            latestRepo: repositories(first: 1, orderBy: {field: PUSHED_AT, direction: DESC}) {
              nodes {
                name
                pushedAt
                url
                defaultBranchRef {
                  name
                  target {
                    ... on Commit {
                      messageHeadline
                      committedDate
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });

      const json = await response.json();
      console.log("🔍 Full API response:", JSON.stringify(json, null, 2));
      setInfo(json.data.user);
    };

    fetchGitHubData();
  }, []);

  if (!info) return <p>Loading...</p>;

  const repoCount = info.publicRepos?.totalCount ?? 0;
  const latestRepo = info.latestRepo?.nodes?.[0];
  const lastCommit = latestRepo?.defaultBranchRef?.target;

  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-x-hidden border h-full p-5 rounded-lg">
        <h1 className="text-[clamp(.2rem,2.5vw,1rem)]">
          Github | {new Date(lastCommit.committedDate).toDateString()}
        </h1>
        <p className="text-[clamp(.8rem,3vw,1rem)] text-center font-bold">
          {latestRepo.name}
        </p>
        <h2 className="text-[clamp(.6rem,2.5vw,1rem)] text-center" >
          {lastCommit.messageHeadline}
        </h2>
      </div>
    </>
  );
}

export default GithubActivity