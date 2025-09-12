import { useState, useEffect } from "react";

function GithubRepoAndContri() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const query = `
      {
        user(login: "${import.meta.env.VITE_GITHUB_USERNAME}") {
          publicRepos: repositories(privacy: PUBLIC) {
            totalCount
          }
          contributionsCollection {
            contributionCalendar {
              totalContributions
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
  const totalContributions = info.contributionsCollection?.contributionCalendar?.totalContributions ?? 0;

  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        <div className="flex flex-col text-center border p-5 col-span-4 rounded-lg">
          <i className="si si-github text-2xl"></i>
          <span className="text-[clamp(.8rem,2vw,1rem)] font-bold">Github Stats</span>
        </div>
        <div className="flex flex-col justify-center items-center text-center border p-5 col-span-4 rounded-lg">
          <span className="text-[clamp(.8rem,2vw,1rem)] font-bold">{repoCount}</span>
          <span className="text-[clamp(.7rem,2vw,1rem)]">Repositories</span>
        </div>
        <div className="flex flex-col justify-center items-center text-center border p-5 col-span-4 rounded-lg">
          <span className="text-[clamp(.8rem,2vw,1rem)] font-bold">{totalContributions}</span>
          <span className="text-[clamp(.7rem,2vw,1rem)]">Contributions</span>
        </div>
      </div>
    </>
  );
}

export default GithubRepoAndContri