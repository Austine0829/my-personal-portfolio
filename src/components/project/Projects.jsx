import { useEffect, useState } from "react";
import Project from "./project";
import asyncGetProjects from "../../services/projectsService"

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await asyncGetProjects();

        setProjects(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchProjects();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-1 bg-gray-200 p-1 rounded-lg max-h-[768px]">
        {
          projects.map(project => (
            <Project data={project} />
          ))
        }
      </div>
    </>);
}

export default Projects