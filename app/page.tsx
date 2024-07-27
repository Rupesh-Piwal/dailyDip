import Image from "next/image";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Subscribe } from "./components/Subscribe";

export default function Home() {
  return (
    <div className="h-[110vh] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-3xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          {/* Join the waitlist */}
          Dive into Daily Insights
        </h1>
        {/* <p></p> */}
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Stay informed and inspired with handpicked daily highlights, trends,
          and stories.
        </p>
        <div>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-2 py-3 text-neutral-400"
          />
          <Subscribe />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
