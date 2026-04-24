import Image from "next/legacy/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { BsTwitter } from "react-icons/bs";

const Social: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-32 galaxy:h-20 bg-offBlack relative grid grid-flow-col auto-cols-[auto auto] p-6">
      <div className="relative w-fit h-fit justify-self-center galaxy:justify-self-start col-start-1 pb-4 galaxy:pb-0">
        <Image draggable={false}
          src="/images/gridpattern.png"
          alt="DIGITALAX grid pattern"
          width={26}
          height={26}
        />
      </div>
      <div className="galaxy:col-start-2 galaxy:row-start-1 row-start-2 col-start-1 grid grid-flow-col auto-cols-[auto auto] relative h-fit w-fit gap-3 justify-self-center galaxy:justify-self-end">
        <div className="relative w-fit h-fit col-start-1 place-self-end">
          <Link
            href={"https://cypher.digitalax.xyz/autograph/digitalax"}
            target="_blank"
            rel="noreferrer"
          >
            <Image draggable={false}
              src={"/images/mirroricon.png"}
              alt="DIGITALAX mirror"
              width={21}
              height={26}
              priority
              className="h-fit relative pr-1"
            />
          </Link>
        </div>
        <div className="relative w-fit h-fit col-start-2 place-self-end">
          <Link
            href={"https://github.com/digitalax"}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              draggable={false}
              src={"/images/github.png"}
              alt="DIGITALAX github"
              width={29}
              height={28}
              priority
            />
          </Link>
        </div>
        <div className="relative w-fit h-fit col-start-3">
          <Link
            href={"https://chromadin.xyz/autograph/digitalax/"}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              draggable={false}
              src={"/images/lens.png"}
              alt="DIGITALAX lens"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>
        <div className="relative w-fit h-fit col-start-4">
          <Link
            href={"https://twitter.com/digitalax_"}
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter size={30} color={"#0091FF"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Social;
