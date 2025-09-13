import Marquee from "react-fast-marquee";

function InterestMarquee() {
  return (
    <>
      <div className="flex gap-1">
        <div className="flex items-center border border-gray-300 bg-white p-5 rounded-lg">
          <h1 className="text-[13px] font-bold">Interest</h1>
        </div>
        <div className="border border-gray-300 bg-white w-full p-1 rounded-lg">
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