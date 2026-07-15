import RecentActivities from "./RecentActivities";

function Profile() {
  return (
    <>
      <div className="grid grid-cols-12 gap-1">
        <div className="flex flex-col gap-5 col-span-12 border border-gray-300 bg-white p-5 rounded-lg md:flex-row md:h-full">
          <img className="w-full rounded-2xl md:w-96"
            src="/portfolio_profile.jpg" />
          <p className="text-[10px]">
            A 23-year-old Filipino, <span className="bg-black text-white">multidisciplinary programmer in the making</span>,
            and currently a third-year Bachelor of Science in
            Information Technology student at Pampanga State University (formerly DHVSU). A curiosity-driven programmer, 
            that explores various stuff about technology, programming languages, frameworks, and tools to solve problems, 
            automate processes, and build systems that can just be acquired thru subscriptions, but still chooses to waste it's life and build them for months just to save a penny.
          </p>
        </div>
        <div className="col-span-12">
          <RecentActivities />
        </div>
      </div>
    </>
  );
}

export default Profile
