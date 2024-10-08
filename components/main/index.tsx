import LeftSection from "./left-section";
import VideoFrame from "./video-frame";

const MainComponent = () => {
  return (
    <main className="w-screen h-screen relative">
      <div className="backdrop-blur-3xl bg-black/50 p-5 absolute z-10 inset-0 xl:flex items-center justify-between text-white">
        {/* left section */}
        <LeftSection />

        {/* carousel */}
        <section>main</section>

        {/* right section */}
        <section className="hidden xl:block">
          <h1>right section</h1>
        </section>
      </div>

      {/* video Layer */}
      <VideoFrame />
    </main>
  );
};

export default MainComponent;
