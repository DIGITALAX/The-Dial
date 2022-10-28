import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useClaimResults } from "../../../../types/general.types";

const useClaim = (): useClaimResults => {
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleSubmitForm = async (e: any): Promise<void> => {
    e.preventDefault();
    console.log(e.target)
    try {
      await emailjs.sendForm(
        "service_f7x2sjb",
        "template_92zu5kl",
        e.target,
        "fvUz2_RQo7oeFreDc"
      );
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 4000);
    } catch (err: any) {
      console.error(err.message);
    }
    e.target.reset();
  };

  return {
    submitSuccess,
    handleSubmitForm,
  };
};

export default useClaim;
