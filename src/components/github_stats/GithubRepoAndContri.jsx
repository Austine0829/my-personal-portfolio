import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SKELETON_COLOR } from "../../constants/constants";
import { USERNAME } from "../../constants/constants";

function GithubRepoAndContri() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const query = `
      {
        user(login: "${USERNAME}") {
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

  if (!info) return (
    <>
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-4">
          <Skeleton borderRadius={7}
            height={95}
            baseColor={SKELETON_COLOR} />
        </div>
        <div className="col-span-4">
          <Skeleton borderRadius={7}
            height={95}
            baseColor={SKELETON_COLOR} />
        </div>
        <div className="col-span-4">
          <Skeleton borderRadius={7}
            height={95}
            baseColor={SKELETON_COLOR} />
        </div>
      </div>
    </>
  );

  const repoCount = info.publicRepos?.totalCount ?? 0;
  const totalContributions = info.contributionsCollection?.contributionCalendar?.totalContributions ?? 0;

  return (
    <>
      <div className="grid grid-cols-12 gap-1">
        <div className="flex flex-col gap-1 items-center text-center border border-gray-300 bg-white p-5 col-span-4 rounded-lg">
          <img className="w-8" src="/github.svg" alt="a black outlined cat" />
          <span className="text-[13px] font-bold">Github Stats</span>
        </div>
        <div className="flex flex-col justify-center items-center text-center border border-gray-300 bg-white p-5 col-span-4 rounded-lg">
          <span className="text-[13px] font-bold">{repoCount}</span>
          <span className="text-[10px]">Repositories</span>
        </div>
        <div className="flex flex-col justify-center items-center text-center border border-gray-300 bg-white p-5 col-span-4 rounded-lg">
          <span className="text-[13px] font-bold">{totalContributions}</span>
          <span className="text-[10px]">Contributions</span>
        </div>
      </div>
    </>
  );
}

export default GithubRepoAndContri