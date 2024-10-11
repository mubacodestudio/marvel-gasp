"use client";

import { moviesData } from "@/constant/data";
import VerticalCarousel from "../vertical-carosuel";
import LeftSection from "./left-section";
import VideoFrame from "./video-frame";

const MainComponent = () => {
  return (
    <main className="w-screen h-screen fixed">
      <div className="backdrop-blur-3xl bg-black/50 absolute z-10 inset-0 text-white xl:grid xl:grid-cols-5 justify-center">
        {/* left section */}
        <section className="xl:col-span-2">
          <LeftSection />
        </section>

        {/* carousel */}
        <section className="min-h-screen">
          <VerticalCarousel />
        </section>

        {/* right section */}
        <section className="hidden xl:block w-1/3 xl:col-span-2 p-5">
          <h1>right section</h1>
        </section>
      </div>

      {/* video Layer */}
      <VideoFrame />
    </main>
  );
};

export default MainComponent;
