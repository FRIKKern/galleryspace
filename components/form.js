import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ _id }) {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async data => {
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json"
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>;
  }
  if (hasSubmitted) {
    return (
      <>
        <h2 className="md:text-3xl mt-5">
          Takk for din henvendelse {formData.email} ! 👏
          <br />
        </h2>
      </>
    );
  }

  return (
    <>
      <section className="flex-col md:flex-row flex  ">
        <h2 className="text-center md:text-left md:text-3xl  mt-5">
          Interessert? Legg igjen emailen din her 😍
        </h2>
      </section>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg"
        disabled
      >
        <input ref={register} type="hidden" name="_id" value={_id} />
        <section className=" flex-col md:flex-row flex  mt-4 mb-4 ">
          <input
            name="email"
            type="email"
            ref={register({ required: true })}
            className="block sm:max-w-xs w-full px-4 py-3 text-base appearance-none border border-gray-300 shadow-none bg-white rounded-md placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            placeholder="Skriv din email adresse her"
          ></input>

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input
            type="submit"
            className="mt-4 relative sm:mt-0 sm:h-auto sm:ml-4 block w-full sm:w-auto border border-transparent px-6 py-3 text-base font-semibold leading-snug bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800 transition ease-in-out duration-150 hover:bg-gray-600"
          />
        </section>
      </form>
    </>
  );
}
