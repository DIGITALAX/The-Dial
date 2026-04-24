import Link from "next/link";
import { FunctionComponent } from "react";
import { LOCALE_SWITCHER_OPTIONS } from "../../lib/i18n";
import useI18n from "../../hooks/useI18n";
import { useRouter } from "next/router";

const LanguageSwitcher: FunctionComponent = (): JSX.Element => {
  const { asPath } = useRouter();
  const { locale, messages } = useI18n();

  return (
    <div className="relative w-fit h-fit grid grid-flow-row auto-rows-[auto auto] justify-self-end self-start p-3 pt-4">
      <div className="relative w-fit h-fit text-[10px] sm:text-xs font-lib text-offBlack justify-self-end">
        {messages.language.switchLabel}
      </div>
      <div className="relative w-fit h-fit mt-1 grid grid-flow-col auto-cols-[auto auto] gap-1">
        {LOCALE_SWITCHER_OPTIONS.map((option) => (
          <Link
            key={option.locale}
            href={asPath}
            locale={option.locale}
            className={`relative w-fit h-fit px-2 py-1 text-[10px] sm:text-xs border border-offBlack/40 font-lib ${
              locale === option.locale
                ? "bg-offBlack text-midWhite"
                : "bg-midWhite text-offBlack hover:bg-mustard"
            }`}
          >
            {option.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
