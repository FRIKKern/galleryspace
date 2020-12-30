import { CMS_NAME, CMS_URL } from "../lib/constants";

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
      <section className="flex-col md:flex-row flex items-center md:justify-between  mb-16  ">
        <h4 className="text-center md:text-left md:text-2xl  mt-5">
          Ditt eget galleri på nett, hvor kunsten
          <br /> din ligger pent og kategorisert.
        </h4>
      </section>
      <section className="h-40 flex-col md:flex-row flex  mt-16 ">
        <h2 className="text-center md:text-left md:text-3xl  mt-5">
          Meld interesse
        </h2>
      </section>
    </>
  );
}
