import React from "react";
import Header from "./Header";
import UserInfo from "./UserInfo";
import StatCard from "./StatCard";
import Quote from "./Quote";
import DateCard from "./DateCard";
import WorkoutPlan from "./WorkoutPlan";
import Footer from "./Footer";
import "../index.css";

function MyComponent() {
  const stats = [
    { label: "ЖИН", value: "60 КГ" },
    { label: "ЖИН", value: "60 КГ" },
    { label: "ЖИН", value: "60 КГ" },
  ];

  const dates = [
    { day: "Да", date: "10" },
    { day: "Мяг", date: "11" },
    { day: "Лха", date: "12" },
    { day: "Пүр", date: "13" },
    { day: "Ба", date: "14" },
    { day: "Бя", date: "15" },
  ];

  return (
    <main className="flex flex-col items-center pt-8 mx-auto w-full bg-black max-w-[480px] rounded-[30px]">
      <Header />
      <section className="flex overflow-hidden relative flex-col mt-2.5 w-full shadow-sm aspect-[1.05] blur-[2px] max-w-[375px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36307fd6ea050ab289674377523eae2a557d1a9e7fbe39e1aba6d86f0a868425?apiKey=7802387887ed4d09b4ca1b755a09be21&&apiKey=7802387887ed4d09b4ca1b755a09be21"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col px-6 py-3 w-full rounded-3xl bg-zinc-800 bg-opacity-70">
          <UserInfo />
          <div className="flex gap-5 justify-center items-start px-2.5 pb-2 mt-3 text-center">
            {stats.map((stat, index) => (
              <StatCard key={index} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
        <Quote />
      </section>
      <div className="flex gap-3.5 justify-end self-stretch px-5 mt-9 w-full text-white">
        {dates.map((date, index) => (
          <DateCard
            key={index}
            day={date.day}
            date={date.date}
            isActive={index === 4}
          />
        ))}
      </div>
      <WorkoutPlan />
      <Footer />
    </main>
  );
}

export default MyComponent;
