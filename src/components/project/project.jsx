import { DocumentArrowDownIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

function Project({ data }) {
    return (
        <>
            <div className="flex flex-col gap-5 p-5 bg-white rounded-2xl">
                <img className="shadow-lg rounded-lg" src={data.imgPath} />
                <div className="flex flex-col gap-1">
                    <h1 className="text-[14px] font-bold">{data.name} | {data.year}</h1>
                    <p className="text-[11px]" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {
                            data.technologies.map((technology, index) => (
                                <>
                                    <span key={index} className="border border-gray-300 text-[11px] p-1 px-2 rounded-lg">{technology}</span>
                                </>
                            ))
                        }
                    </div>
                    <div className="flex gap-1">
                        {
                            data.repoUrl != '' && <div className="mt-1">
                                <a className="flex gap-1 w-fit bg-black p-2 border text-[11px] font-bold text-white rounded-lg cursor-pointer"
                                    href={data.repoUrl}
                                    target="_blank">
                                    <EyeIcon className="w-4" />
                                    View Repository
                                </a>
                            </div>
                        }
                        {
                            
                            data.url != "" && <div className="mt-1">
                                <a className="flex w-fit bg-black p-2 border text-[11px] font-bold text-white rounded-lg cursor-pointer"
                                    href={data.url}
                                    target="_blank">
                                        {
                                            data.category == "website" && 
                                            <div className="flex gap-1">
                                                <GlobeAltIcon className="w-4" />
                                                Visit Website
                                            </div>    
                                        }
                                        {
                                            data.category == "mobile" && 
                                            <div className="flex gap-1">
                                                <DocumentArrowDownIcon className="w-4" />
                                                See Release
                                            </div>    
                                        }
                                        {
                                            data.category == "model" && 
                                            <div className="flex gap-1">
                                                <DocumentTextIcon className="w-4" />
                                                See Process
                                            </div>    
                                        }
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project