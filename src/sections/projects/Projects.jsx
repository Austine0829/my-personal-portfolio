import { GlobeAltIcon } from "@heroicons/react/24/outline";
import overloadImg from "../../assets/projects/overload.png"

function Project() {
  return (
    <>
      <div className="flex flex-col gap-5 p-5 bg-white rounded-2xl">
        <img className="shadow-lg rounded-lg" src={overloadImg} />
        <div className="flex flex-col gap-1">
          <h1 className="text-[14px] font-bold">Overload Gig Merchandise Store | 2025</h1>
          <p className="text-[11px]"> A minimalist focused merchandise store Web Application, built using Vanilla CSS for design, Vanilla JS for interactivity, and deployed via Netlify. Overload Gig Store is made to feature the merchandise of each October Praise that happens every year at First United Methodist, Bancal, Guagua, Pampanga.</p>
          <div className="flex flex-wrap gap-1 mt-1">
            <span className="border border-gray-300 text-[11px] p-1 px-2 rounded-lg">HTML</span>
            <span className="border border-gray-300 text-[11px] p-1 px-2 rounded-lg">CSS</span>
            <span className="border border-gray-300 text-[11px] p-1 px-2 rounded-lg">Javascript</span>
            <span className="border border-gray-300 text-[11px] p-1 px-2 rounded-lg">Netlify</span>
          </div>
          <div className="mt-1">
            <a className="flex gap-1 w-fit bg-black p-2 border text-[11px] text-white rounded-lg cursor-pointer"
              href="https://overloadgigshop.netlify.app/pages/home.html"
              target="_blank">
              <GlobeAltIcon className="w-4" />
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <div className="flex flex-col gap-1 bg-gray-200 p-1 rounded-lg">
        <Project />
        <Project />
        <Project />
      </div>
    </>);
}

export default Projects