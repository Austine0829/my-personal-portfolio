import Project from "./project";

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