import Link from "next/link";
import { FunctionComponent } from "react";
import useClaim from "./hooks/useClaim";

const Claim: FunctionComponent = (): JSX.Element => {
  const { submitSuccess, handleSubmitForm } = useClaim();
  return (
    <div className="relative w-full h-full grid grid-flow-col grid-cols-1 md:grid-cols-2 lg:p-2 bg-offBlack gap-2 md:gap-0 lg:gap-2">
      <div className="relative w-fit h-full row-start-1 col-start-1 bg-viol rounded-xl galaxy:p-4 p-1">
        <div className="relative grid grid-flow-row auto-rows-[auto auto] w-full h-full content-between">
          <div className="relative w-full h-fit row-start-1 grid grid-flow-col auto-cols-[auto auto]">
            <div
              id="synth"
              className="relative w-fit h-fit col-start-1 galaxy:place-self-start place-self-center galaxy:pt-0 pt-3 font-oda text-3xl galaxy:text-5xl"
            >
              SCAN THE DIAL, <br />
              MAKE IT YOURS
            </div>
            <div className="relative w-fit h-fit col-start-1 row-start-2 galaxy:row-start-1 galaxy:col-start-2 grid grid-flow-col auto-cols-[auto auto] gap-0.5 self-center galaxy:justify-self-end justify-self-center galaxy:pt-0 pt-6">
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
          <div className="relative w-fit h-fit row-start-2 text-center galaxy:text-right font-nex text-midWhite text-[6vw] galaxy:pr-0 pr-2 pl-2 pt-3 sm:text-[4vw] md:text-[2.5vw] xl:text-[2.5vw] leading-tight place-self-center galaxy:place-self-end xl:pt-0 galaxy:pt-20 lg:pt-32 md:pl-20 galaxy:pl-28 lg:pb-0 pb-6">
            AN EVER EVOLVING CANVAS YOU CAN USE WITH FRIENDS. SAVE YOUR POSTS
            FROM NOSTALGIC OLD SOCIAL NETWORKS ––––– EVOLVE, SYNTH & DRAFT
            ENTIRELY NEW LOOKS WITH THEM.
          </div>
        </div>
      </div>
      <div className="relative w-full h-full col-start-1 row-start-2 md:row-start-1 md:col-start-2 font-lib text-offBlack">
        <div className="relative w-full h-fit grid grid-flow-row auto-rows-[auto auto] gap-1">
          <div className="relative row-start-1 w-full h-full bg-lime rounded-lg sm:p-1 lg:p-2">
            <div className="relative w-fit h-fit grid grid-flow-col auto-cols-[auto auto] gap-2">
              <div
                id="border"
                className="relative w-fit h-fit col-start-1 text-midWhite p-[0.05em] rounded-lg grid grid-flow-col auto-cols-[auto auto]"
              >
                <div className="relative w-fit h-fit bg-offBlack rounded-lg p-2 col-start-1 place-self-center text-[2.5vw] md:text-sm lg:text-base xl:text-xl">
                  00
                </div>
              </div>
              <div className="relative w-fit h-fit col-start-2 justify-self-start self-center text-[2.5vw] md:text-sm lg:text-base xl:text-xl">
                Download your social archives
              </div>
            </div>
          </div>
          <div className="relative row-start-2 w-full h-full bg-liOr rounded-lg sm:p-1 lg:p-2">
            <div className="relative w-fit h-fit grid grid-flow-col auto-cols-[auto auto] gap-2">
              <div
                id="border"
                className="relative w-fit h-fit col-start-1 text-midWhite p-[0.05em] rounded-lg grid grid-flow-col auto-cols-[auto auto]"
              >
                <div className="relative w-fit h-fit bg-offBlack rounded-lg p-2 col-start-1 place-self-center text-[2.5vw] md:text-sm lg:text-base xl:text-xl">
                  01
                </div>
              </div>
              <div className="relative w-fit h-fit col-start-2 justify-self-start self-center text-[2.5vw] md:text-sm lg:text-base xl:text-xl">
                Save a record of it all for later
              </div>
            </div>
          </div>
          <div className="relative row-start-3 w-full h-full">
            <div className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] gap-1">
              <div
                id="dialtext"
                className="relative w-full h-full place-self-center col-start-1 p-2 galaxy:p-6 text-center rounded-lg grid grid-flow-col auto-cols-[auto auto]"
              >
                <div className="relative w-fit h-fit col-start-1 place-self-center text-sm lg:text-base">
                  DIAL IN <br />
                  FOR EARLY <br />
                  ACCESS
                </div>
              </div>
              <div className="relative w-full h-full col-start-2 bg-baby p-1 galaxy:p-3 lg:p-6 rounded-lg text-center grid grid-flow-col auto-cols-[auto auto] col-span-10">
                <div className="relative h-fit w-full align-middle inline-block col-start-1 place-self-center grid grid-flow-col auto-cols-[auto auto] gap-4">
                  <div className="relative col-start-1 w-fit h-fit grid grid-flow-row auto-rows-[auto auto] font-alva text-midWhite gap-1 place-self-center">
                    <div className="relative w-fit h-fit row-start-1 grid grid-flow-col auto-cols-[auto auto] place-self-end gap-1 pl-3">
                      <div className="relative w-10 h-fit border border-lily col-start-1 place-self-center bg-offBlack text-sm rounded-xl grid grid-flow-col auto-cols-[auto auto] pb-1 place-self-end cursor-pointer active:scale-95">
                        <Link
                          href={"https://inlens.xyz/"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          A
                        </Link>
                      </div>
                      <div className="relative w-10 h-fit border border-lily col-start-2 place-self-center bg-offBlack text-sm rounded-xl grid grid-flow-col auto-cols-[auto auto] pb-1 place-self-end cursor-pointer active:scale-95">
                      <Link
                          href={"https://tweetyai.com/"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          B
                        </Link>
                      </div>
                    </div>
                    <div className="relative w-fit h-fit row-start-2 grid grid-flow-col auto-cols-[auto auto] gap-1 place-self-start">
                      <div className="relative w-10 h-fit border border-lily col-start-1 place-self-center bg-offBlack text-sm rounded-xl grid grid-flow-col auto-cols-[auto auto] pb-1 place-self-end cursor-pointer active:scale-95">
                      <Link
                          href={"https://tweethunter.io/generate-tweets"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          C
                        </Link>
                      </div>
                      <div className="relative w-10 h-fit border border-lily col-start-2 place-self-center bg-offBlack text-sm rounded-xl grid grid-flow-col auto-cols-[auto auto] pb-1 place-self-end cursor-pointer active:scale-95">
                      <Link
                          href={"https://pharmapsychotic.com/tools.html"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          D
                        </Link>
                      </div>
                    </div>
                    <div className="relative w-fit h-fit row-start-3 grid grid-flow-col auto-cols-[auto auto] gap-1 pl-3">
                      <div className="relative w-10 h-fit border border-lily col-start-1 place-self-center bg-offBlack text-sm rounded-xl grid grid-flow-col auto-cols-[auto auto] pb-1 place-self-end cursor-pointer active:scale-95">
                      <Link
                          href={"https://github.com/AUTOMATIC1111/stable-diffusion-webui"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          E
                        </Link>
                      </div>
                      <div className="relative w-10 h-fit border border-lily col-start-2 place-self-center bg-offBlack text-sm rounded-xl grid grid-flow-col auto-cols-[auto auto] pb-1 place-self-end cursor-pointer active:scale-95">
                      <Link
                          href={"https://runwayml.com/"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          F
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="relative col-start-1 row-start-2 md:col-start-2 md:row-start-1 w-fit h-fit font-libB md:text-[1.4vw] text-lef place-self-center text-[3.5vw]">
                    Invite your <br /> friends to a <br /> new timeline
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative row-start-4 w-full h-full bg-liVi rounded-lg sm:p-1 lg:p-2">
            <div className="relative w-fit h-fit grid grid-flow-col auto-cols-[auto auto] gap-2">
              <div
                id="border"
                className="relative w-fit h-fit col-start-1 text-midWhite p-[0.05em] rounded-lg grid grid-flow-col auto-cols-[auto auto]"
              >
                <div className="relative w-fit h-fit bg-offBlack rounded-lg p-2 col-start-1 place-self-center text-[2.5vw] md:text-sm lg:text-base xl:text-xl">
                  10
                </div>
              </div>
              <div className="relative w-fit h-fit col-start-2 justify-self-start self-center text-[2.5vw] md:text-sm lg:text-base xl:text-xl">
                Reflect & evolve for new looks
              </div>
            </div>
          </div>
          <div className="relative row-start-5 w-full h-full text-center text-midWhite font-lib leading-loose pt-2 pb-2 text-[3vw] sm:pt-8 sm:text-[2.5vw] md:text-[1.4vw] lg:text-base xl:text-xl">
            <span className="text-offY">
              HAVEN’T CLAIMED YOUR LENS PROFILE YET?
            </span>
            <br /> ADD YOUR ENS, ETH ADDRESS, BIRD NAME, <br />
            OR EMAIL AND WE’LL SEE WHAT WE CAN DO
          </div>
          <div className="relative row-start-6 w-full h-full bg-offBlack rounded-lg sm:p-1 lg:p-2">
            <form
              className="relative w-full h-full grid grid-flow-row auto-rows-[auto auto] gap-3"
              onSubmit={(e) => handleSubmitForm(e)}
            >
              <div className="relative w-fit h-fit grid grid-flow-col auto-cols-[auto auto] gap-2 sm:gap-7 row-start-1">
                <div
                  id="border"
                  className="relative w-fit h-fit col-start-1 text-midWhite p-[0.05em] rounded-lg grid grid-flow-col auto-cols-[auto auto] place-self-center"
                >
                  <div className="relative w-fit h-fit bg-offBlack rounded-lg p-2 col-start-1 place-self-center text-[2.5vw] md:text-sm lg:text-base xl:text-xl align-middle">
                    11
                  </div>
                </div>
                <div className="relative w-fit w-[65vw] md:w-[30vw] h-full col-start-2 place-self-center grid grid-flow-col auto-cols-[auto auto] rounded-lg">
                  <input
                    className="h-full w-full row-start-1 place-self-center text-xl border border-grayBlue rounded-lg bg-offBlack text-midWhite p-2 text-sm"
                    type="text"
                    name="profileContact"
                    required
                  />
                </div>
              </div>
              <div className="relative row-start-2 w-fit h-fit pl-[3.6vw] lg:pl-[4vw] xl:pl-[1.5vw] place-self-center md:pb-0 pb-10">
                <button
                  type="submit"
                  className={`relative w-fit h-fit text-offY border border-grayBlue p-1 pr-8 pl-8 cursor-pointer hover:bg-grayBlue active:bg-grayBlue active:scale-95 ${
                    submitSuccess && "bg-midGreen"
                  }`}
                >
                  {submitSuccess ? "sent" : "go"}
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
