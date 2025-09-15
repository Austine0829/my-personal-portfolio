import Marquee from "react-fast-marquee";

function InterestMarquee() {
  return (
    <>
      <div className="grid grid-cols-12 gap-1">
        <div className="flex justify-center items-center col-span-4 border border-gray-300 bg-white p-5 rounded-lg xl:col-span-2">
          <h1 className="text-[13px] font-bold">Interest</h1>
        </div>
        <div className="border col-span-8 border-gray-300 bg-white p-1 rounded-lg xl:col-span-10">
          <Marquee>
            <div className="bg-gray-200 p-5 rounded-lg">
              <span className="text-[10px]">Interest</span>
              <h1 className="text-[13px] font-bold">Web Development</h1>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default InterestMarquee