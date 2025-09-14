import RecentActivities from "./RecentActivities";

function Profile() {
  return (
    <>
      <div className="grid grid-cols-12 gap-1">
        <div className="flex flex-col gap-5 col-span-12 border border-gray-300 bg-white p-5 rounded-lg md:flex-row md:h-full xl:col-span-7">
          <img className="w-full rounded-2xl md:w-96"
            src="/portfolio_profile.jpg" />
          <p className="text-[10px]">
            heya! <span className="bg-black text-white">i'm Tuazon, Austine Audrey</span> a Filipino Software Engineer in the making and a 2nd Year BS Information Technology student at Pampanga State University.
          </p>
        </div>
        <div className="col-span-12 xl:col-span-5">
          <RecentActivities />
        </div>
      </div>
    </>
  );
}

export default Profile