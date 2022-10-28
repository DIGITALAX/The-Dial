import Image from "next/legacy/image";
import { FunctionComponent } from "react";

const Display: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-auto bg-offBlack grid grid-flow-row auto-rows-[auto auto]">
      <div className="relative w-full h-full row-start-1">
        <Image
          layout="fill"
          objectFit="cover"
          alt="pixels"
          src="/images/pixels.png"
        />
        <div className="relative w-full h-full grid grid-flow-col grid-cols-3 pt-28 pl-20 pr-20 gap-3">
          <div className="relative w-full h-fit col-start-1 place-self-end pb-3">
            <div id="border" className="relative w-full h-fit rounded-lg p-0.5">
              <div className="relative w-full h-full bg-midGreen grid rounded-lg grid-flow-row auto-rows-[auto auto]">
                <div className="relative w-fit h-fit place-self-center row-start-1  place-self-center rounded-xl p-4 grid grid-flow-row auto-rows-[auto auto]">
                  <div
                    id="border"
                    className="rounded-xl relative w-fit h-fit p-0.5 row-start-1 place-self-center grid grid-flow-row auto-rows-[auto auto]"
                  >
                    <Image
                      width={300}
                      height={300}
                      alt="pixels"
                      src="/images/pixels.png"
                      className="rounded-xl row-start-1 place-self-center"
                    />
                  </div>
                  <div className="relative w-full text-center h-fit justify-self-center row-start-2 font-firaM text-offBlack text-[1vw] pt-7 pb-5">
                    Caption text for the post along with info about keeping a
                    memory of what you’ve drafted and shared.
                    <br />
                    <br />
                    somewhere better than the elongated zuckerverse, etc.
                  </div>
                  <div
                    id="border"
                    className="relative w-fit h-fit rounded-full row-start-3 p-0.5 place-self-end"
                  >
                    <div
                      id="dialtext"
                      className="rounded-full relative w-full h-full p-1 grid grid-flow-col auto-cols-[auto auto] gap-2"
                    >
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-1 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={15}
                              width={20}
                              src="/images/heart.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-2 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={15}
                              width={20}
                              src="/images/mirror.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-3 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={20}
                              width={15}
                              src="/images/evolve.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-4 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={15}
                              width={20}
                              src="/images/burger.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-fit h-full col-start-2 grid grid-flow-row auto-rows-[auto auto] gap-2">
            <div className="relative w-full h-full row-start-1 place-self-end">
              <div
                id="border"
                className="relative w-full h-fit rounded-lg p-0.5"
              >
                <div
                  id="darker"
                  className="relative w-full h-full grid rounded-lg grid-flow-row auto-rows-[auto auto] p-2 pb-4"
                >
                  <div className="relative w-fit h-fit place-self-center row-start-1  place-self-center grid grid-flow-row auto-rows-[auto auto]">
                    <div className="relative w-fit h-fit col-start-1 place-self-center p-10">
                      <Image
                        width={40}
                        height={40}
                        alt="pixels"
                        src="/images/gridpattern.png"
                        className="row-start-1 place-self-center"
                      />
                    </div>

                    <div className="relative w-full text-center h-fit justify-self-center row-start-2 font-coc text-midWhite text-[2.3vw] pt-0 pb-14">
                      SOMETHING YEAH
                      <br />
                      <span className="font-lib text-sm">
                        WHAT TO SAY HERE? 13ºC
                      </span>
                    </div>
                    <div
                    id="border"
                    className="relative w-fit h-fit rounded-full row-start-3 p-0.5 place-self-end"
                  >
                    <div
                      id="dialtext"
                      className="rounded-full relative w-full h-full p-1 grid grid-flow-col auto-cols-[auto auto] gap-2"
                    >
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-1 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={15}
                              width={20}
                              src="/images/heart.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-2 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={15}
                              width={20}
                              src="/images/mirror.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-3 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={20}
                              width={15}
                              src="/images/evolve.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-4 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={15}
                              width={20}
                              src="/images/burger.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full row-start-2 place-self-end">
              <div
                id="border"
                className="relative w-full h-full rounded-lg p-0.5 pb-0 rounded-br-none rounded-bl-none"
              >
                <div className="relative w-full h-full bg-midGreen grid rounded-lg rounded-br-none rounded-bl-none grid-flow-row auto-rows-[auto auto]">
                  <div className="relative w-fit h-full place-self-center row-start-1  place-self-center rounded-xl p-4 pb-0 grid grid-flow-row auto-rows-[auto auto] gap-2">
                    <div
                      id="border"
                      className="rounded-xl relative w-fit h-fit p-0.5 row-start-1 place-self-center grid grid-flow-row auto-rows-[auto auto]"
                    >
                      <Image
                        width={300}
                        height={300}
                        alt="pixels"
                        src="/images/pixels.png"
                        className="rounded-xl row-start-1 place-self-center"
                      />
                    </div>
                    <div
                      id="darker"
                      className="relative w-40 text-center h-6 place-self-center row-start-2 font-firaM text-offBlack"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-fit col-start-3 place-self-end pb-3">
            <div id="border" className="relative w-full h-fit rounded-lg p-0.5">
              <div className="relative w-full h-full bg-flight grid rounded-lg grid-flow-row auto-rows-[auto auto]">
                <div className="relative w-fit h-fit place-self-center row-start-1  place-self-center rounded-xl p-4 grid grid-flow-row auto-rows-[auto auto]">
                  <div className="relative w-full text-center h-fit justify-self-center row-start-1 font-coc text-offBlack text-[2.3vw] pt-0 pb-4 leading-snug">
                    SOMETHING
                    <br />
                    <span className="text-base">
                      ABOUT <br />
                      SOMETHING
                    </span>
                  </div>
                  <div
                    id="border"
                    className="rounded-xl relative w-fit h-fit p-0.5 row-start-2 place-self-center grid grid-flow-row auto-rows-[auto auto]"
                  >
                    <Image
                      width={300}
                      height={200}
                      alt="pixels"
                      src="/images/pixels.png"
                      className="rounded-xl row-start-1 place-self-center"
                    />
                  </div>
                  <div className="relative w-full text-center h-fit justify-self-center row-start-3 font-firaM text-offBlack text-[1vw] pt-7 pb-4">
                    Caption text for the post along with info about keeping a
                    memory of what you’ve drafted and shared.
                  </div>
                  <div
                    id="border"
                    className="relative w-fit h-fit rounded-full row-start-4 p-0.5 place-self-end"
                  >
                    <div
                      id="dialtext"
                      className="rounded-full relative w-full h-full p-1 grid grid-flow-col auto-cols-[auto auto] gap-2"
                    >
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-1 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={15}
                              width={20}
                              src="/images/heart.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-2 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={15}
                              width={20}
                              src="/images/mirror.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-3 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={20}
                              width={15}
                              src="/images/evolve.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] col-start-4 place-self-center p-[0.02vw] rounded-full"
                        id="outside"
                      >
                        <div
                          id="dialtext"
                          className="relative w-fit h-fit col-start-1 place-self-center rounded-full grid grid-flow-col auto-cols-[auto auto] hover:scale-95"
                        >
                          <div className="relative w-6 h-6 place-self-center col-start-1 grid grid-flow-col auto-cols-[auto auto] p-1">
                            <Image
                              height={15}
                              width={20}
                              src="/images/burger.png"
                              alt="heart"
                              className="relative place-self-center col-start-1 w-full h-full cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="border" className="relative w-full h-2 row-start-2"></div>
    </div>
  );
};

export default Display;
