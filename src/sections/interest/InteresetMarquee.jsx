import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import asyncGetInterest from "../../services/interestService";

function InterestMarquee() {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    async function fetchInterests() {
      try {
        const data = await asyncGetInterest();
        setInterests(data);
      } catch (error) {

      }
    }

    fetchInterests();
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-1">
        <div className="flex justify-center items-center col-span-4 border border-gray-300 bg-white p-5 rounded-lg xl:col-span-2">
          <h1 className="text-[13px] font-bold">Interest</h1>
        </div>
        <div className="border col-span-8 border-gray-300 bg-white p-1 rounded-lg xl:col-span-10">
          <Marquee speed={30}>
            {interests.map((interest, index) => (
              <div key={index} className=" bg-gray-200 p-5 mx-0.5 rounded-lg">
                <span className="text-[10px]">Interest</span>
                <h1 className="text-[13px] font-bold">{interest.name}</h1>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default InterestMarquee