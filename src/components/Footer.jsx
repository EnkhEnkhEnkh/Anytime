import React from "react";

function Footer() {
  return (
    <footer className="flex overflow-hidden relative flex-col justify-center py-2 mt-32 fill-[var(--sds-color-icon-default-default)] min-h-[75px] w-[428px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9edb5f5399074c56049400ea59893b80d6fa70f694bc4b79c4ec6197342fe328?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <nav className="flex relative gap-5 justify-between items-center py-0.5 pr-11 pl-12 rounded-xl">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dee61e2c5792f1be678de359a9fae40fc9f4380a6b804e41def306aaf970c1dd?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
          alt="Menu icon"
          className="shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <div className="flex flex-col self-stretch px-3 pt-0.5 pb-3.5">
          <div className="flex flex-col items-center px-4 pb-4 bg-stone-900 rounded-[44px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/409654774ed1fe27d919db90802acf5100a7a40eaf3703de5adb8fddf2ca6ad3?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
              alt="Home icon"
              className="w-6 aspect-[5.88]"
            />
          </div>
          <div className="mt-5 text-xs text-center text-purple-600">.</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ac4129e5bab1505b5f75cb1a7a43d73994492d4bac9ad21df15cb00ba7e97b4?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
          alt="Profile icon"
          className="shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      </nav>
    </footer>
  );
}

export default Footer;
