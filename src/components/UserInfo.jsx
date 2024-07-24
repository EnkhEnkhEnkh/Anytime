import React from "react";

function UserInfo() {
  return (
    <div className="flex gap-2.5 text-sm tracking-normal leading-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/38e109f126b7a67c01eb3d8066f3d821df1808455945f86e773264047cb90bf6?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
        alt="User avatar"
        className="shrink-0 aspect-[1.08] w-[67px]"
      />
      <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit">
        <div className="text-stone-300">Тавтай морил!</div>
        <div className="mt-2.5 text-white">Tамир</div>
      </div>
    </div>
  );
}

export default UserInfo;
