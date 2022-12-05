import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useClaimResults } from "../../../../types/general.types";

const useClaim = (): useClaimResults => {
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleSubmitForm = async (e: any): Promise<void> => {
    e.preventDefault();
    console.log(e.target);
    try {
      await emailjs.sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}` as string,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}` as string,
        e.target,
        `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}` as string
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
