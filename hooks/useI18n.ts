import { useRouter } from "next/router";
import { getMessages, normalizeLocale } from "../lib/i18n";

const useI18n = () => {
  const { locale } = useRouter();
  const currentLocale = normalizeLocale(locale);
  const messages = getMessages(currentLocale);

  return {
    locale: currentLocale,
    messages,
  };
};

export default useI18n;
