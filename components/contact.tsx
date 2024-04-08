import Image from 'next/image'

const Contact = () => {
  return (
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
  )
}

export default Contact