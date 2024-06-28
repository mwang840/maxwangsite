import {inter} from "./fonts";
import Chips from "./props";
import ViewImage from "./ViewImage";

type ProjectProps = {
    title: string;
    description: string;
    imageRef: string[];
    chips: string[];
    externalLink: string[];
}

export default function Projects({title, description, imageRef, chips, externalLink}: ProjectProps){
    let imageLinkComponent: JSX.Element;

    if (externalLink === null){
        imageLinkComponent = <></>;
    }
    else{
        imageLinkComponent = <a href={externalLink[0]} rel="noopener noreferrer">
            <span
                            className={`lg:text-2xl md:text-xl sm:text-lg text-md my-4 p-1 border-2 rounded shadow-xl ${inter.className} text-white`}>
                              {externalLink[1]}
                        </span>
        </a>
    }

    return (
        <div className="flex flex-col">
            <p className="text-slate-200 text-md font-semibold">
                {title}
            </p>
            <p className="text-slate-200 text-sm mb-5">
                {description}
            </p>
            <div className="mb-5">
                {imageLinkComponent}
            </div>
            <div className="flex flex-wrap justify-left space-x-5 mb-5">
                {chips.map((string) => (
                    <Chips name={string} key={string}/>
                ))}
            </div>
            <div className="relative justify-center align-middle h-96 my-5">
                <ViewImage images={imageRef}/>
            </div>
        </div>
    );
}
