import React from "react";
type ChipsProps = {
    name : string;
}
export default function Chips({name} : ChipsProps) {
    return(
      <div className="transition delay-75 duration-500 hover:scale-125 bg-sky-700 w-auto px-2 py-1 text-sm rounded-full text-sky-100 hover:bg-sky-400 hover:text-sky-50">
          {name}
      </div>
    );
}