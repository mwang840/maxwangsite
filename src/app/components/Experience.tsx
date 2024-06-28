type ExperienceProps = {
    start : string;
    end : string;
    title : string;
    jobTitle : string;
    description : string;
}
export default function Experience({start, end, title, jobTitle, description} : ExperienceProps) {
    return(
        <div className="transition duration-500 bg-transparent hover:bg-slate-900 px-6 rounded py-4 flex flex-col">
            <p className="text-slate-200 text-sm">
                {start} — {end}
            </p>
            <p className="text-slate-200 font-bold text-lg mb-4">
                {title}
            </p>
            <p className="text-slate-200 font-bold text-md">
                {jobTitle}
            </p>
            <p className="text-slate-200 text-sm">
                {description}
            </p>
        </div>
    );
}