import React from "react";

function DateCard({ day, date, isActive }) {
  const baseClasses =
    "flex flex-col flex-1 items-start px-4 py-5 whitespace-nowrap";
  const activeClasses = isActive ? "text-white" : "bg-zinc-800";

  return (
    <div className={`${baseClasses} ${activeClasses} rounded-xl`}>
      <div className="text-xs leading-5">{day}</div>
      <div className="mt-5 text-sm font-medium leading-5">{date}</div>
    </div>
  );
}

export default DateCard;
