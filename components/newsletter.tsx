import Image from 'next/image'

const NewsLetter = () => {
  return (
    <div className="relative flex items-center">
        {/* Blue Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#1a1164]" />

        {/* Content Container */}
        <div className="relative w-full flex justify-between px-8 z-10">
          {/* Image Section */}
          <div className="lg:w-1/2 sm:w-full mr-12 flex justify-center items-center">
            <Image
              src="/flipjob_person.png"
              alt="Hero"
              width={450}
              height={450}
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 sm:w-full flex flex-col justify-center items-start text-white">
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
                  className="px-4 text-black h-10 rounded-lg mt-3"
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
  )
}

export default NewsLetter