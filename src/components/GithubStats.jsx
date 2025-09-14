import GithubRepoAndContri from "./GithubRepoAndContri";
import GithubCalendar from "./GithubCalendar";

function GithubStats() {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-2 gap-1">
        <div className="col-span-12 row-span-4 gap-2">
          <GithubRepoAndContri />
        </div>
        <div className="col-span-12 row-span-8">
          <GithubCalendar />
        </div>
      </div>
    </>
  );
}

export default GithubStats