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
              As an Employer of Record (EOR), what does the EOR Agency
              specialize in?
            </h1>
            <p className="text-white leading-snug text-justify mb-4">
              At the EOR Agency, our primary focus is to alleviate the
              administrative burden from your company. We offer various
              solutions to achieve this goal. By assuming responsibility for the
              global employment of your staff, we aim to save you valuable time,
              money, and resources.
            </p>
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
        <div className="w-1/2 flex my-10 justify-between px-2 z-10">
          <div className="w-full flex flex-col justify-center items-start text-justify pr-10">
            <h1 className="text-xl uppercase mb-5 text-green-900 tracking-wider">
              About Us
            </h1>
            <h1 className="text-5xl font-bold mb-5 text-gray-800">
              ABOUT EOR Agency
            </h1>
            <p className="mb-5 text-[15px] text-gray-700/80">
              Our company culture stands out for its sociability, where diverse
              languages and cultures converge. While German serves as our
              primary internal communication language, we&apos;re proficient in
              English, German, Spanish, Indonesian, and Polish. We&apos;re also
              working on incorporating Czech, Slovenian, French, and Filipino
              languages. Situated at our main headquarters in Kranenburg, our
              foremost goal is to ensure the well-being of our internal staff.
            </p>
            <p className="text-[15px] text-gray-700/80 mb-5">
              We firmly believe that a happy team leads to positive outcomes for
              both our clients and end-users, fostering a harmonious work
              atmosphere. Given the diverse backgrounds of our young
              professionals, it&apos;s crucial to respect each other&apos;s
              values and ethics. We uphold equality among all team members,
              rejecting any notion of hierarchy. This inclusive environment
              makes our workplace welcoming and enjoyable.
            </p>
            <p className="text-[15px] text-gray-700/80">
              At EOR Agency, we prioritize professionalism while also embracing
              honesty, integrity, and accountability. We make time for
              light-hearted moments, such as our weekly casual Friday afternoon
              drinks and biannual staff outings. Ultimately, our staff is our
              greatest asset!
            </p>
          </div>
        </div>
      </div>
      {/* @Services */}
      <div>
        <h1 className="text-4xl font-extrabold text-center py-10">
          Services we offer
        </h1>
        <div className="flex pb-10 space-x-24 flex-wrap items-center justify-center">
          <div className="w-72 text-center flex space-y-6 flex-col items-center justify-center">
            <Image
              src="/icons_website-01.png"
              alt="Icon 1"
              width={100}
              height={24}
            />
            <h1 className="font-bold text-2xl">Employer of record services</h1>
            <p className="text-sm leading-7">
              Utilize our Employer of Record solutions to legally hire
              international staff without the requirement of establishing a
              foreign entity.
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
              We offer assistance in ensuring compliant and timely payment for
              your staff members. Leveraging our expertise and top-notch
              software, we guarantee efficient completion of the task.
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
            <h1 className="text-5xl font-bold">Milan van den Bosch</h1>
            <p className="text-xl leading-8 font-bold mt-5">
              +31 6 37 35 02 85
            </p>
            <p className="text-xl leading-8 font-bold mt-2">
              milan@thisworks.nl
            </p>
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
      {/* @Newsletter */}
      <div className="relative flex items-center">
        {/* Blue Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#1a1164]" />

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
              Want to learn more?
            </h1>
            <p className="text-sm text-gray-200 mb-4">
              Reach out today to book a free consultation with our expert team.{" "}
              <br />
              Get helpful insights and start your journey to success.
            </p>
            <div className="flex space-x-5">
              <div className="flex flex-col space-y-6 mt-6">
                <label htmlFor="email">Company name</label>
                <label htmlFor="email">Email address</label>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className="px-4 text-black h-10 rounded-lg mt-4"
                />
                <input
                  type="email"
                  className="px-4 text-black h-10 rounded-lg mt-3.5"
                />
              </div>
            </div>
            <p className="mt-8">
              By submitting this form you agree to the{" "}
              <span className="text-orange-600">privacy statement.</span>
            </p>
            <button className="uppercase mt-8 py-2 px-16 bg-orange-600 rounded-md text-white font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
