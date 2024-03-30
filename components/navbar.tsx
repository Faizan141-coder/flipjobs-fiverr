import Image from "next/image";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white px-12 shadow-md flex justify-between">
      <div className="mt-3">
        <Image
          src="/eor_agency.png"
          alt="EOR Agency"
          width={200}
          height={200}
        />
      </div>
      <div className="flex p-9 space-x-10 font-semibold">
        <h1 className="cursor-pointer text-orange-600 hover:text-orange-600 hover:scale-110 transition-transform duration-200">
          Homepage
        </h1>
        <h1 className="cursor-pointer text-green-800 hover:text-orange-600 hover:scale-110 transition-transform duration-200">
          About us
        </h1>
        <h1 className="cursor-pointer text-green-800 hover:text-orange-600 hover:scale-110 transition-transform duration-200">
          Vacancies
        </h1>
        <h1 className="cursor-pointer text-green-800 hover:text-orange-600 hover:scale-110 transition-transform duration-200">
          Housing
        </h1>
        <h1 className="cursor-pointer text-green-800 hover:text-orange-600 hover:scale-110 transition-transform duration-200">
          Contact us
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
