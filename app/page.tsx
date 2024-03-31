// Table of Contents
// @Top Section
// @About Us
// @Services
// @Contact
// @Review
// @Newsletter

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* @Top Section */}
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
      {/* @About Us */}
      <div className="flex items-center bg-gray-200/80">
        {/* Image Section */}
        <div className="w-1/2 my-20 flex justify-center items-center">
          <Image src="/about-us.jpg" alt="Hero" width={600} height={600} />
        </div>
        {/* Content Container */}
        <div className="w-1/2 flex my-20 justify-between px-2 z-10">
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
            <p className="text-[15px] text-gray-700/80 mb-10">
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
      {/* @Services */}
      <div>
        <h1 className="text-4xl font-extrabold text-center py-20">
          Services we offer
        </h1>
        <div className="flex pb-20 space-x-24 flex-wrap items-center justify-center">
          <div className="w-72 text-center flex space-y-6 flex-col items-center justify-center">
            <Image
              src="/icons_website-01.png"
              alt="Icon 1"
              width={100}
              height={24}
            />
            <h1 className="font-bold text-2xl">Employer of record services</h1>
            <p className="text-sm leading-7">
              Hire staff abroad compliantly without the need to set up a foreign
              entity via our employer of record solutions.
            </p>
          </div>
          <div className="w-[296px] text-center flex space-y-6 flex-col items-center justify-center">
            <Image
              src="/icons_website-03.png"
              alt="Icon 1"
              width={100}
              height={24}
            />
            <h1 className="font-bold text-2xl">Payroll services</h1>
            <p className="text-sm leading-7">
              We can help you with paying out your staff members compliantly and
              in time. Experience combined with the best software in the market.
              We will get the job done.
            </p>
          </div>
          <div className="w-72 text-center flex space-y-6 flex-col items-center justify-center">
            <Image
              src="/icons_website-02.png"
              alt="Icon 1"
              width={100}
              height={24}
            />
            <h1 className="font-bold text-2xl">Work permits</h1>
            <p className="text-sm leading-7">
              Do you need assistance in obtaining work permits for your
              international staff members? We have fast-track solutions as a
              sponsor at the local authorities.
            </p>
          </div>
        </div>
      </div>
      {/* @Contact */}
      <div className="bg-gray-200/80 text-white">
        <div className="flex space-x-10 flex-wrap items-center justify-center">
          <div className="w-[610px] my-24 py-24 px-10 bg-[#f15a23] rounded-lg p-8 flex flex-col">
            <h1 className="text-5xl font-bold">Flip van Griensven</h1>
            <p className="text-xl leading-8 font-bold mt-5">0611837746</p>
            <p className="text-xl leading-8 font-bold mt-2">flip@flipjobs.nl</p>
          </div>
          <div className="w-[610px] bg-[#1a1164] rounded-lg flex px-7 pt-8">
            <div className="relative flex flex-col items-center justify-center">
              <h1 className="text-[26px] font-bold mb-32">
                FOLLOW US ON LINKEDIN
              </h1>
              <Image
                src="/linkedin.png"
                alt="Linkedin"
                width={70}
                height={70}
                className="absolute left-0"
              />
            </div>
            <div className="ml-7">
              <Image
                src="/flipjob_person.png"
                alt="Hero"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      {/* @Review */}
      <div className="bg-gray-200/80 hidden">Review</div>
      {/* @Newsletter */}
      <div className="relative flex items-center">
        {/* Blue Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#1a1164]"></div>

        {/* Content Container */}
        <div className="relative w-full flex justify-between px-8 z-10">
          {/* Image Section */}
          <div className="w-1/2 mr-12 flex justify-center items-center">
            <Image
              src="/flipjob_person.png"
              alt="Hero"
              width={450}
              height={450}
            />
          </div>

          {/* Text Section */}
          <div className="w-1/2 flex flex-col justify-center items-start text-white">
            <h1 className="text-5xl leading-tight font-bold mb-4">
              Looking for accommodation?
            </h1>
            <p className="text-sm text-gray-200">
              Subscribe to our weekly newsletter to stay informed!
            </p>
            <div className="flex space-x-2 mt-10">
              <input
                placeholder="E-mail"
                type="email"
                className="px-4 text-black h-10 rounded-lg mt-3.5"
              />
              <button className="uppercase mt-3.5 py-2 px-16 bg-orange-600 rounded-md text-white font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
