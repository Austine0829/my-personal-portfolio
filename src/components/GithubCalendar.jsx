import { useState, useEffect } from "react";
import ActivityCalendar from "react-activity-calendar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SKELETON_COLOR } from "../constants/constants";

async function fetchYearContributions(username, year, token) {
  const query = `
    {
      user(login: "${username}") {
        contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
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
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));

  const weeks = json.data.user.contributionsCollection.contributionCalendar.weeks;
  console.log(weeks.flatMap(week => week.contributionDays));
  return weeks.flatMap((week) => week.contributionDays);
}

function GithubCalendar() {
  const [contributionData, setContributionData] = useState([]);
  const username = import.meta.env.VITE_GITHUB_USERNAME;

  useEffect(() => {
    const fetchAllYears = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;

        const startYear = 2024;
        const currentYear = new Date().getFullYear();

        let allDays = [];

        for (let year = startYear; year <= currentYear; year++) {
          const yearData = await fetchYearContributions(username, year, token);
          allDays = [...allDays, ...yearData];
        }

        const firstContribution = allDays.find((d) => d.contributionCount > 0);
        const currentDate = new Date();

        let trimmed = allDays;
        if (firstContribution) {
          trimmed = allDays.filter(
            (d) =>
              new Date(d.date) >= new Date(firstContribution.date) &&
              new Date(d.date) <= currentDate
          );
        }

        const formatted = trimmed.map((d) => ({
          date: d.date,
          count: d.contributionCount,
          level:
            d.contributionCount === 0 ? 0 :
              d.contributionCount < 3 ? 1 :
                d.contributionCount < 6 ? 2 :
                  d.contributionCount < 10 ? 3 : 4,
        }));

        setContributionData(formatted);
      } catch (error) {
        console.error("Error fetching contributions:", error);
      }
    };

    fetchAllYears();
  }, []);

  if (!contributionData) {
    return (
      <>
        <Skeleton borderRadius={7}
          height={135}
          baseColor={SKELETON_COLOR} />
      </>
    );
  }

  return (
    <>
      {contributionData.length > 0 ? (
        <div className="border border-gray-300 bg-white p-2 rounded-lg">
          <ActivityCalendar
            data={contributionData}
            blockSize={10}
            blockMargin={3}
            blockRadius={2}
            fontSize={10}
            hideTotalCount
            hideColorLegend
            theme={{
              light: ["#DADADA", "#AAAAAA", "#797979", "#494949", "#181818",],
              dark: ["#DADADA", "#AAAAAA", "#797979", "#494949", "#181818",]
            }}
          />
          <p className="text-[10px] mt-1">{username} Github commits from 2024-16-02 to Present</p>
        </div>
      ) : (
        <Skeleton borderRadius={7}
          height={135}
          baseColor={SKELETON_COLOR} />
      )}
    </>
  );
}

export default GithubCalendar