function Profile() {
  return (
    <>
      <div className="flex flex-col gap-5 border border-gray-300 bg-white p-5 rounded-lg md:flex-row md:h-full">
        <img className="w-full rounded-2xl md:w-96"
          src="/portfolio_profile.jpg" />
        <p className="text-[10px]">
          heya! <span className="bg-black text-white">i'm Tuazon, Austine Audrey</span> a Filipino Software Engineer in the making and a 2nd Year BS Information Technology student at Pampanga State University.
        </p>
      </div>
    </>
  );
}

export default Profile