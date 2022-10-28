import Image from "next/image";
import { FunctionComponent } from "react";

const Text: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit bg-midWhite relative grid grid-flow-col auto-cols-[auto auto]">
      <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-fit row-start-1 p-6">
        <div className="relative col-start-1 justify-self-start self-center w-fit h-fit text-offBlack font-coc">
          <b>a social canvas</b>
        </div>
        <div className="relative col-start-2 justify-self-end self-center w-fit h-fit text-offBlack text-deep font-coc">
          <b>where prompts become craft</b>
        </div>
      </div>
      <div id="border" className="relative w-full h-2 row-start-2"></div>
    </div>
  );
};

export default Text;
