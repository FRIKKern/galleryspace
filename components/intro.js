import { CMS_NAME, CMS_URL } from "../lib/constants";
import Newsletter from "./newsletter";

export default function Intro() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 ">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Galleryspace
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Ditt eget moderne nettgalleri.
        </h4>
      </section>
      <section className="flex-col md:flex-row flex items-center md:justify-between  mb-10  ">
        <h4 className="text-center md:text-left md:text-2xl  mt-5">
          Ditt eget galleri på nett, hvor kunsten
          <br /> din ligger pent og kategorisert.
        </h4>
      </section>
      <section className="flex-col md:flex-row flex  ">
        <h2 className="text-center md:text-left md:text-3xl  mt-5">
          Interessert? Legg igjen emailen din her 😍
        </h2>
      </section>

      <section className=" flex-col md:flex-row flex  mt-4 mb-4 ">
        <input
          className="block sm:max-w-xs w-full px-4 py-3 text-base appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          placeholder="Skriv din email adresse her"
        ></input>

        <button className="mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base font-semibold leading-snug bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition ease-in-out duration-150 hover:bg-gray-600">
          Send forespørsel
        </button>
      </section>
      <section className="mb-12">
        <p>
          Vi vil sende deg tilbakemelding innen 48 timer på vanlige hverdager
        </p>
      </section>
      <Newsletter />
    </>
  );
}
