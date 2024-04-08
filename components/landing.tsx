import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="relative flex items-center">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center"></div>

      {/* Blue Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#231787] opacity-90"></div>

      {/* Content Container */}
      <div className="relative w-full flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between px-8 z-10">
        {/* Text Section */}
        <div className="lg:w-1/2 sm:w-full flex flex-col justify-center items-start px-5 py-10">
          <h1 className="text-white lg:text-start md:text-start sm:text-start text-center text-4xl leading-snug font-bold mb-4">
            As an Employer of Record (EOR), what does the EOR Agency specialize
            in?
          </h1>
          <p className="text-white leading-snug text-justify mb-4">
            At the EOR Agency, our primary focus is to alleviate the
            administrative burden from your company. We offer various solutions
            to achieve this goal. By assuming responsibility for the global
            employment of your staff, we aim to save you valuable time, money,
            and resources.
          </p>
          <button className="uppercase mt-3.5 py-4 px-16 bg-orange-600 rounded-md text-white justify-center lg:w-[320px] md:w-[320px] sm:w-[320px] w-full font-bold">
            View our vacancies
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 sm:w-full flex justify-center items-center">
          <Image
            src="/flipjob_person.png"
            alt="Hero"
            width={380}
            height={380}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
