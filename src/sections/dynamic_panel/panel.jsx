import { useState } from "react";
import Projects from "../../components/project/Projects";
import { CONNECT, PROJECTS } from "../../constants/constants";
import Connect from "../../components/connect/Connect"

function NavigationButton({ label, isActive, onClick }) {
	return (
		<>
			<button className={`${isActive ? 'bg-black text-white' : 'bg-gray-200'} p-2 px-3 text-[13px] font-bold rounded-lg cursor-pointer`}
				onClick={onClick}>{label}</button>
		</>
	);
}

function Panel() {
	const [pageName, setPageName] = useState(PROJECTS);

	return (
		<>
			<div className='flex gap-1 border border-gray-300 bg-white p-1 rounded-lg'>
				<NavigationButton label={PROJECTS}
					isActive={pageName === PROJECTS}
					onClick={() => { setPageName(PROJECTS) }} />
				<NavigationButton label={CONNECT}
					isActive={pageName === CONNECT}
					onClick={() => { setPageName(CONNECT) }} />
			</div>
			<div className='flex flex-col overflow-y-auto no-scrollbar '>
				{pageName === PROJECTS && <Projects />}
				{pageName === CONNECT && <Connect />}
			</div>
		</>);
}

export default Panel