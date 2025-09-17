import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import asyncGetTechnologies from "../../services/technologiesService"

function TechlogiesMarquee() {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    async function fetchTechnologies() {
      try {
        const data = await asyncGetTechnologies();

        setTechnologies(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTechnologies();
  }, []);

  return (
    <>
      <div className="border border-gray-300 bg-white p-1 rounded-lg max-w-screen">
        <Marquee speed={25}>
          {technologies.map((technology, index) => (
            <>
              <div key={index} className=" bg-gray-200 p-2 mx-0.5 rounded-lg">
                <i className={`si si-${technology.logo} me-1`}></i>
                <span className="text-[13px] font-bold">{technology.name}</span>
              </div>
            </>
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default TechlogiesMarquee