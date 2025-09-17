import { GlobeAltIcon } from "@heroicons/react/24/outline";

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
                    {
                        data.url != '' && <div className="mt-1">
                            <a className="flex gap-1 w-fit bg-black p-2 border text-[11px] font-bold text-white rounded-lg cursor-pointer"
                                href={data.url}
                                target="_blank">
                                <GlobeAltIcon className="w-4" />
                                Visit Website
                            </a>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Project