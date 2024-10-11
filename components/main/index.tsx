"use client";

import { moviesData } from "@/constant/data";
import VerticalCarousel from "../vertical-carosuel";
import LeftSection from "./left-section";
import VideoFrame from "./video-frame";

const MainComponent = () => {
  return (
    <main className="w-screen h-screen fixed">
      <div className="backdrop-blur-3xl bg-black/50 p-5 absolute z-10 inset-0 xl:flex items-center justify-between text-white">
        {/* left section */}
        <LeftSection />

        {/* carousel */}
        <section className="w-1/2 min-h-screen">
          <VerticalCarousel />
        </section>

        {/* right section */}
        <section className="hidden xl:block w-1/3">
          <h1>right section</h1>
        </section>
      </div>

      {/* video Layer */}
      <VideoFrame />
    </main>
  );
};

export default MainComponent;
