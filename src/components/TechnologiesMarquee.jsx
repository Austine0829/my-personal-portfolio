import Marquee from "react-fast-marquee";

function TechlogiesMarquee() {
  return (
    <>
      <div className="border border-gray-300 bg-white p-1 rounded-lg">
        <Marquee speed={50}>
          <div className=" bg-gray-200 p-2 rounded-sm">
            <i className="si si-github me-1"></i>
            <span className="text-[13px] font-bold">Github</span>
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default TechlogiesMarquee