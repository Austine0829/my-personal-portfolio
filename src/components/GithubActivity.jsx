import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SKELETON_COLOR } from "../constants/constants";
import { USERNAME } from "../constants/constants";

function GithubActivity() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const query = `
        {
          user(login: "${USERNAME}") {
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

  if (!info) return (
    <>
      <Skeleton borderRadius={7} height={112} baseColor={SKELETON_COLOR} />
    </>
  );

  const latestRepo = info.latestRepo?.nodes?.[0];
  const lastCommit = latestRepo?.defaultBranchRef?.target;

  return (
    <>
      <div className="flex gap-2 overflow-x-hidden border h-full p-5 rounded-lg bg-white border-gray-300">
        <div className="hidden border w-fit px-2 rounded-lg md:flex bg-white border-gray-300">
          <i className="si si-github text-[50px]"></i>
        </div>
        <div className="flex flex-col justify-center text-center md:justify-start md:text-start">
          <h1 className="text-[10px]">
            Github | {new Date(lastCommit.committedDate).toDateString()}
          </h1>
          <p className="text-[13px] font-bold">
            {latestRepo.name}
          </p>
          <h2 className="text-[10px]" >
            {lastCommit.messageHeadline}
          </h2>
        </div>
      </div>
    </>
  );
}

export default GithubActivity