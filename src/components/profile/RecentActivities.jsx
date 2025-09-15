import GithubActivity from "../GithubActivity";
import LastDotFm from "../LastDotFm";

function RecentActivities() {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-6 gap-1 rounded-lg md:grid-rows-12">
        <div className="flex border border-gray-300 bg-white justify-center items-center p-3 col-span-12 row-span-2 rounded-lg">
          <h1 className="text-[13px] font-bold">Recent Activities</h1>
        </div>
        <div className="col-span-6 row-span-5 md:col-span-12">
          <GithubActivity />
        </div>
        <div className="col-span-6 row-span-5 md:col-span-12">
          <LastDotFm />
        </div>
      </div>
    </>
  );
}

export default RecentActivities