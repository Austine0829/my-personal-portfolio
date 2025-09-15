import { useState } from "react";
import Projects from "../../components/project/Projects";
import { PROJECTS } from "../../constants/constants";

function Panel() {
	const [pageName, setPageName] = useState(PROJECTS);

	return (
		<>
			<div className='flex gap-1 border border-gray-300 bg-white p-1 rounded-lg'>
				<button className='bg-gray-200 p-2 px-3 text-[13px] font-bold rounded-lg'>Projects</button>
				<button className='bg-gray-200 p-2 px-3 text-[13px] font-bold rounded-lg'>Connect</button>
			</div>
			<div className='flex flex-col h-screen overflow-y-auto w-fit no-scrollbar '>
				{pageName === PROJECTS && <Projects />}
			</div>
		</>);
}

export default Panel