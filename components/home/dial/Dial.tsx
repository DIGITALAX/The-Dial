import Image from "next/legacy/image";
import { FunctionComponent } from "react";

const Dial: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative bg-offBlack w-full h-auto grid grid-flow-col auto-cols-[auto auto] p-2">
      <div className="col-start-1 grid grid-flow-row auto-rows-[auto auto] w-full h-fit gap-2">
        <div className="relative row-start-1 w-full h-fit bg-midWhite grid grid-flow-row auto-rows-[auto auto] pb-4">
          <div className="relative w-full h-fit text-center text-offBlack font-nex text-[12vw] row-start-1">
            THE DIAL
          </div>
          <div className="row-start-2 w-full h-fit relative grid grid-flow-col auto-cols-[auto auto] gap-28 justify-center">
            <div className="relative col-start-1 w-full h-full grid grid-flow-row auto-rows-[auto auto]">
              <div
                id="border"
                className="relative w-full h-full p-0.5 rounded-lg"
              >
                <div
                  id="dialtext"
                  className="w-28 h-28 p-1 relative row-start-1 grid grid-flow-col auto-cols-[auto auto]"
                >
                  <div className="relative col-start-1 h-fit w-fit place-self-center font-lib text-center">
                    CLAIM GPU <br />
                    CO•OP <br />
                    TIME
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-start-2 w-full h-full grid grid-flow-row auto-rows-[auto auto]">
              <div
                id="border"
                className="relative w-full h-full p-0.5 rounded-lg"
              >
                <div
                  id="dialtext"
                  className="w-28 h-28 p-1 relative row-start-1 grid grid-flow-col auto-cols-[auto auto] rounded-lg"
                >
                  <div className="relative col-start-1 h-fit w-fit place-self-center font-lib text-center">
                    RUN AS <br />
                    COLAB <br />
                    NOTEBOOK
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-start-3 w-full h-full grid grid-flow-row auto-rows-[auto auto]">
              <div
                id="border"
                className="relative w-full h-full p-0.5 rounded-lg"
              >
                <div
                  id="dialtext"
                  className="w-28 h-28 p-1 relative row-start-1 grid grid-flow-col auto-cols-[auto auto]"
                >
                  <div className="relative col-start-1 h-fit w-fit place-self-center font-lib text-center">
                    RUN <br />
                    LOCAL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative row-start-2 w-full h-5 bg-midWhite"></div>
        <div className="relative row-start-3 w-full h-3 bg-midWhite"></div>
        <div className="relative row-start-4 w-full h-2 bg-midWhite"></div>
        <div className="relative row-start-5 w-full h-1 bg-midWhite"></div>
        <div className="relative row-start-6 w-full h-0.5 bg-midWhite"></div>
      </div>
    </div>
  );
};

export default Dial;
