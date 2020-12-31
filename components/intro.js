import { CMS_NAME, CMS_URL } from "../lib/constants";
import Form from "../components/form";

export default function Intro() {
  return (
    <div className="grid lg:grid-cols-2">
      <div>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 ">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Galleryspace
          </h1>
        </section>
        <section className="flex-col md:flex-row flex items-center md:justify-between  mb-10  ">
          <h4 className="text-gray text-center md:text-left md:text-2xl  mt-5">
            Ditt eget galleri på nett, hvor kunsten
            <br /> din ligger pent og kategorisert.
          </h4>
        </section>

        <Form />

        <section className="mb-12">
          <p>
            Vi vil sende deg tilbakemelding innen 48 timer på vanlige hverdager
          </p>
        </section>
      </div>
      <div className="justify-end grid "></div>
    </div>
  );
}
