import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative flex items-center">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center"></div>

        {/* Blue Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#231787] opacity-90"></div>

        {/* Content Container */}
        <div className="relative w-full flex justify-between px-8 z-10">
          {/* Text Section */}
          <div className="w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-white text-4xl leading-snug font-bold mb-4">
              Your job application partner from start to finish. From exchanging
              ideas to contract negotiations, we&apos;re always here for you!
            </h1>
            <button className="uppercase mt-3.5 py-4 px-16 bg-orange-600 rounded-md text-white font-bold">
              View our vacancies
            </button>
          </div>

          {/* Image Section */}
          <div className="w-1/2 mr-12 flex justify-center items-center">
            <Image
              src="/flipjob_person.png"
              alt="Hero"
              width={380}
              height={380}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center bg-gray-200/80">
        {/* Image Section */}
        <div className="w-1/2 mt-20 flex justify-center items-center">
          <Image src="/about-us.jpg" alt="Hero" width={600} height={600} />
        </div>
        {/* Content Container */}
        <div className="w-1/2 flex justify-between px-2 z-10 mt-3">
          <div className="w-full flex flex-col justify-center items-start">
            <h1 className="text-xl uppercase mb-5 text-green-900 tracking-wider">
              About Us
            </h1>
            <h1 className="text-5xl font-bold mb-5 text-gray-800">
              ABOUT Flipjobs
            </h1>
            <p className="mb-5 text-[15px] text-gray-700/80">
              At Flipjobs, we go beyond the conventional approach of a staffing
              agency. As labor intermediaries, we aim for a balance between
              flexibility and stability in our clients’ workforce. While
              legislation imposes specific limitations on hiring and contract
              extensions, we offer companies a pathway to flexibility without
              compromising security.
            </p>
            <p className="text-[15px] text-gray-700/80">
              With our extensive experience in labor mediation, we are a
              reliable partner for both employers and job seekers. Our approach
              is selective; we strive for a match based not only on knowledge
              and skills but also on company culture and core values. At
              Flipjobs, quality always takes precedence over quantity, enabling
              us to establish sustainable and successful collaborations with a
              focus on long-term engagement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
