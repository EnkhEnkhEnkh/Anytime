import React from "react";

function WorkoutPlan() {
  return (
    <section className="flex flex-col justify-center mt-8 w-full rounded-3xl border border-purple-600 border-solid max-w-[371px]">
      <div className="flex gap-5 justify-between px-5 py-4 rounded-3xl">
        <div className="flex flex-col pt-2.5 pl-2">
          <h2 className="text-lg font-bold leading-5 text-white">
            Зөвхөн танд зориулсан <br /> дасгалын төлөвлөгөө <br /> үүсгэцгээе.{" "}
            <br />
          </h2>
          <button className="self-center px-14 py-3.5 mt-3 text-xs font-semibold text-white whitespace-nowrap bg-purple-600 rounded-[50px]">
            Эхлэх
          </button>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6635973d4e3d2eaf223316e8673da5db4cde3ee2d0046f588b2815888c7a180f?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
          alt=""
          className="shrink-0 my-auto border border-purple-600 border-solid aspect-[1.25] stroke-[1px] stroke-purple-600 w-[94px]"
        />
      </div>
    </section>
  );
}

export default WorkoutPlan;
