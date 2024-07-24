import React from "react";

function StatCard({ label, value }) {
  return (
    <div className="flex flex-col flex-1 justify-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/53e0b91bbb5a074920541ff1fd819e752e5823f26d76c06cb2b91fc970d2880f?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
        alt=""
        className="self-center w-12 aspect-square"
      />
      <div className="mt-2.5 text-base font-bold tracking-normal text-purple-600">
        {value}
      </div>
      <div className="mt-4 text-sm font-medium tracking-normal leading-5 text-white">
        {label}
      </div>
    </div>
  );
}

export default StatCard;
