import Image from "next/image";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <div className="bg-offBlack w-full h-36 opacity-70 relative grid grid-flow-col auto-cols-[auto auto]">
      <div className="relative col-start-1 opacity-100 justify-self-end self-center pr-6 w-fit h-fit">
        <Image
          width={120}
          height={70}
          alt="receiver"
          src="/images/receiver.png"
          priority
        />
      </div>
    </div>
  );
};

export default Footer;
