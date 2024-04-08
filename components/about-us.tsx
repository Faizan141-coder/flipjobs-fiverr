import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className="flex items-center bg-gray-200/80">
        {/* Image Section */}
        <div className="lg:w-1/2 sm:w-full my-20 flex justify-center items-center">
          <Image src="/about-us.jpg" alt="Hero" width={600} height={600} />
        </div>
        {/* Content Container */}
        <div className="lg:w-1/2 sm:w-full flex my-10 justify-between px-2 z-10">
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
  )
}

export default AboutUs