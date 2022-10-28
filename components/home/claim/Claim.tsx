import { FunctionComponent } from "react";
import useClaim from "./hooks/useClaim";

const Claim: FunctionComponent = (): JSX.Element => {
  const { submitSuccess, handleSubmitForm } = useClaim();
  return (
    <div className="relative w-full h-full grid grid-flow-col grid-cols-2 p-2 bg-offBlack gap-2">
      <div className="relative w-fit h-full col-start-1 bg-viol rounded-xl p-4">
        <div className="relative grid grid-flow-row auto-rows-[auto auto] w-full h-full content-between">
          <div className="relative w-full h-fit row-start-1 grid grid-flow-col auto-cols-[auto auto]">
            <div
              id="synth"
              className="relative w-fit h-fit col-start-1 font-oda text-5xl"
            >
              SYNTH SOMETHING
            </div>
            <div className="relative w-fit h-fit col-start-2 grid grid-flow-col auto-cols-[auto auto] gap-0.5 place-self-end">
              <div className="col-start-1 relative w-full h-fit grid grid-flow-row auto-rows-[auto auto] gap-0.5 place-self-center">
                <div
                  id="dialtext"
                  className="relative w-1 h-2 row-start-1"
                ></div>
                <div
                  id="dialtext"
                  className="relative w-1 h-2 row-start-2"
                ></div>
                <div
                  id="dialtext"
                  className="relative w-1 h-2 row-start-3"
                ></div>
              </div>
              <div className="col-start-2 relative w-full h-full grid grid-flow-row auto-rows-[auto auto] gap-0.5 place-self-start">
                <div
                  id="dialtext"
                  className="relative w-1 h-2 row-start-1"
                ></div>
                <div
                  id="dialtext"
                  className="relative w-1 h-2 row-start-2"
                ></div>
                <div
                  id="dialtext"
                  className="relative w-1 h-2 row-start-3"
                ></div>
                <div
                  id="dialtext"
                  className="relative w-1 h-2 row-start-4"
                ></div>
              </div>
              <div className="col-start-3 relative w-full h-fit grid grid-flow-row auto-rows-[auto auto] gap-0.5 place-self-center">
                <div
                  id="dialtext"
                  className="relative w-1 h-2 row-start-1"
                ></div>
                <div
                  id="dialtext"
                  className="relative w-1 h-2 row-start-2"
                ></div>
                <div
                  id="dialtext"
                  className="relative w-1 h-2 row-start-3"
                ></div>
              </div>
            </div>
          </div>
          <div className="relative w-fit h-fit row-start-2 text-right font-libB text-midWhite text-[2.7vw] xl:text-[2.5vw] leading-tight place-self-end">
            SOME TEXT DESCRIBES THE DRAFT TO SYNTH PROCESS AND FILLS THIS ENTIRE
            SECTION ALL THE WAY TO THE BOTTOM OF THE CARD. BUT ON RESPONSIVE
            MIGHT BE HARD.
          </div>
        </div>
      </div>
      <div className="relative w-full h-full col-start-2 font-lib text-offBlack">
        <div className="relative w-full h-fit grid grid-flow-row auto-rows-[auto auto] gap-1">
          <div className="relative row-start-1 w-full h-full bg-liBl rounded-lg p-2">
            <div className="relative w-fit h-fit grid grid-flow-col auto-cols-[auto auto] gap-2">
              <div
                id="border"
                className="relative w-full h-full col-start-1 text-midWhite p-[0.05em] rounded-lg grid grid-flow-col auto-cols-[auto auto]"
              >
                <div className="relative w-fit h-fit bg-offBlack rounded-lg p-2 col-start-1 place-self-center text-xl">
                  00
                </div>
              </div>
              <div className="relative w-fit h-fit col-start-2 justify-self-start self-center text-xl">
                Thing to do #1
              </div>
            </div>
          </div>
          <div className="relative row-start-2 w-full h-full bg-liOr rounded-lg p-2">
            <div className="relative w-fit h-fit grid grid-flow-col auto-cols-[auto auto] gap-2">
              <div
                id="border"
                className="relative w-full h-full col-start-1 text-midWhite p-[0.05em] rounded-lg grid grid-flow-col auto-cols-[auto auto]"
              >
                <div className="relative w-fit h-fit bg-offBlack rounded-lg p-2 col-start-1 place-self-center text-xl">
                  01
                </div>
              </div>
              <div className="relative w-fit h-fit col-start-2 justify-self-start self-center text-xl">
                Thing to do #2
              </div>
            </div>
          </div>
          <div className="relative row-start-3 w-full h-full">
            <div className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] gap-1">
              <div
                id="dialtext"
                className="relative w-full h-full col-start-1 p-6 text-center rounded-lg"
              >
                DIAL IN <br />
                FOR EARLY <br />
                ACCESS
              </div>
              <div className="relative w-full h-full col-start-2 bg-liDa p-6 rounded-lg text-center grid grid-flow-col auto-cols-[auto auto] col-span-10">
                <div className="relative h-fit w-fit align-middle inline-block col-start-1 place-self-center">
                  SOMETHING ABOUT <br />
                  DOING THESE THNGS
                </div>
              </div>
            </div>
          </div>
          <div className="relative row-start-4 w-full h-full bg-liVi rounded-lg p-2">
            <div className="relative w-fit h-fit grid grid-flow-col auto-cols-[auto auto] gap-2">
              <div
                id="border"
                className="relative w-full h-full col-start-1 text-midWhite p-[0.05em] rounded-lg grid grid-flow-col auto-cols-[auto auto]"
              >
                <div className="relative w-fit h-fit bg-offBlack rounded-lg p-2 col-start-1 place-self-center text-xl">
                  10
                </div>
              </div>
              <div className="relative w-fit h-fit col-start-2 justify-self-start self-center text-xl">
                Thing to do #3
              </div>
            </div>
          </div>
          <div className="relative row-start-5 w-full h-full text-center text-midWhite font-lib leading-loose pt-2 pb-2">
            <span className="text-offY">
              HAVEN’T CLAIMED YOUR LENS PROFILE YET?
            </span>
            <br /> ADD YOUR ENS, ETH ADDRESS, BIRD NAME, <br />
            OR EMAIL AND WE’LL SEE WHAT WE CAN DO
          </div>
          <div className="relative row-start-6 w-full h-full bg-offBlack rounded-lg p-2">
            <form
              className="relative w-full h-full grid grid-flow-row auto-rows-[auto auto] gap-3"
              onSubmit={(e) => handleSubmitForm(e)}
            >
              <div className="relative w-fit h-fit grid grid-flow-col auto-cols-[auto auto] gap-7 row-start-1">
                <div
                  id="border"
                  className="relative w-full h-full col-start-1 text-midWhite p-[0.05em] rounded-lg grid grid-flow-col auto-cols-[auto auto]"
                >
                  <div className="relative w-fit h-fit bg-offBlack rounded-lg p-2 col-start-1 place-self-center text-xl align-middle">
                    11
                  </div>
                </div>
                <div className="relative w-[30vw] h-full col-start-2 place-self-center grid grid-flow-col auto-cols-[auto auto] rounded-lg">
                  <input
                    className="h-full w-full row-start-1 place-self-center text-xl border border-grayBlue rounded-lg bg-offBlack text-midWhite p-2 text-sm"
                    type="text"
                    name="profileContact"
                    required
                  />
                </div>
              </div>
              <div className="relative row-start-2 w-fit h-fit pl-[3.6vw] lg:pl-[4vw] xl:pl-[1.5vw] place-self-center">
              <button
                type="submit"
                className={`relative w-fit h-fit text-offY border border-grayBlue p-1 pr-8 pl-8 cursor-pointer hover:bg-grayBlue active:bg-grayBlue active:scale-95 ${submitSuccess && "bg-midGreen"}`}
              >
                {
                    submitSuccess ? "sent" : "go"
                }
              </button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim;