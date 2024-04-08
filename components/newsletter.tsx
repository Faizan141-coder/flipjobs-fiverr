import Image from "next/image";
import { Input } from "./ui/input";

const NewsLetter = () => {
  return (
    <div className="relative flex items-center">
      {/* Blue Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#1a1164]" />

      {/* Content Container */}
      <div className="relative w-full flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between px-8 py-10 z-10">
        {/* Image Section */}
        <div className="lg:w-1/2 sm:w-full flex justify-center items-center lg:pr-8 md:pr-5 sm:pr-4 pr-0">
          <Image
            src="/flipjob_person.png"
            alt="Hero"
            width={450}
            height={450}
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 md:w-full lg:text-start md:text-start sm:text-start text-center sm:w-full w-full flex flex-col justify-center items-start text-white">
          <h1 className="text-5xl  leading-tight font-bold mb-4">
            Want to learn more?
          </h1>
          <p className="text-sm text-gray-200 mb-4">
            Reach out today to book a free consultation with our expert team.
            Get helpful insights and start your journey to success.
          </p>
          <div className="flex flex-row w-full space-x-5 lg:flex-row lg:space-x-5 md:space-x-5 sm:space-x-5 md:flex-row sm:flex-row">
            <div className="space-y-3 mt-6">
              <label htmlFor="email">Company name</label>
              <Input
                type="text"
                className="w-full px-3 py-2 border bg-gray-100 text-black rounded-lg placeholder-gray-900 focus:outline-none border-gray-400"
              />
            </div>

            <div className="space-y-3 mt-6">
              <label htmlFor="email">Email address</label>
              <Input
                type="email"
                className="w-full px-3 py-2 border bg-gray-100 text-black rounded-lg placeholder-gray-900 focus:outline-none border-gray-400"
              />
            </div>
          </div>
          <p className="mt-8">
            By submitting this form you agree to the{" "}
            <span className="text-orange-600">privacy statement.</span>
          </p>
          <button className="uppercase mt-8 py-2 px-16 bg-orange-600 rounded-md text-white font-bold lg:w-[200px] md:w-[200px] sm:[200px] w-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
