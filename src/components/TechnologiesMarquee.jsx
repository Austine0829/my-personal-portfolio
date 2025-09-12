import Marquee from "react-fast-marquee";

function TechlogiesMarquee() {
  return (
    <>
      <div className="border p-1 rounded-lg">
        <Marquee speed={50}>
          <div className="border p-1 rounded-sm">
            <i className="si si-github me-1"></i>
            <span className="text-[clamp(.8rem,3vw,1rem)] font-bold">Github</span>
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default TechlogiesMarquee