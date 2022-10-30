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
        <div className="relative w-full h-full grid grid-flow-col grid-cols-1 md:grid-cols-3 xl:pt-28 md:pt-4 lg:pt-20 lg:pl-20 lg:pr-20 gap-3 pb-3 md:pb-0">
          <div className="relative w-full h-fit row-start-1 col-start-1 place-self-end md:pb-3">
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
                  <div className="relative w-full text-center h-fit justify-self-center row-start-2 font-firaM text-offBlack p-5 md:pt-7 md:p-0 text-[4vw] md:text-[1vw] pt-7 pb-14 md:pb-5">
                    Throwback to a time when the information superhighway would
                    revolutionize the way we shop, socialize and work.
                    <br />
                    <br />
                    <span className="text-lili">
                      A place beyond the elon-gated ‘verse.
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
          <div className="relative w-full md:w-fit h-full col-start-1 md:col-start-2 grid grid-flow-row auto-rows-[auto auto] gap-2">
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

                    <div className="relative w-full text-center h-fit justify-self-center row-start-2 font-coc text-midWhite grid grid-flow-row auto-rows-[auto auto]  pt-0 pb-14">
                      <div className="row-start-1 text-center place-self-center relative w-fit h-fit text-[6vw] md:text-[2.3vw]">
                        SEAMLESS TRANSFER
                      </div>
                      <div className="row-start-2 relative w-fit h-fit font-lib text-[4vw] sm:text-sm leading-snug pt-10 md:pt-7 md:p-0 p-10 md:pb-0 pb-14">
                        THE SIMPLEST THREADS CAN TURN SO WILD, WHILE WE HOP FROM
                        NETWORK TO NETWORK
                      </div>
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
                className="relative w-full h-full rounded-lg p-0.5 md:pb-0 md:rounded-br-none md:rounded-bl-none"
              >
                <div className="relative w-full h-full bg-offY grid rounded-lg md:rounded-br-none md:rounded-bl-none grid-flow-row auto-rows-[auto auto]">
                  <div className="relative w-fit h-full place-self-center row-start-1  place-self-center rounded-xl pt-8 md:p-4 md:pb-0 pb-14 grid grid-flow-row auto-rows-[auto auto] gap-10 md:gap-2">
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
                      className="relative w-40 text-center h-fit md:h-6 place-self-center row-start-2 font-firaM text-midWhite font-coc text-xl md:top-2 md:p-0 p-3"
                    >
                      1/1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-fit col-start-1 md:col-start-3 place-self-end pb-0 md:pb-3">
            <div id="border" className="relative w-full h-fit rounded-lg p-0.5">
              <div className="relative w-full h-full bg-flight grid rounded-lg grid-flow-row auto-rows-[auto auto]">
                <div className="relative w-fit h-fit place-self-center row-start-1  place-self-center rounded-xl p-4 grid grid-flow-row auto-rows-[auto auto]">
                  <div className="relative w-full text-left h-fit justify-self-center row-start-1 font-coc text-offBlack text-[8vw] md:text-[2.3vw] pt-0 pb-4 leading-snug">
                    REFASHION <br />
                    <span className="text-[7vw] md:text-[1.8vw]">
                      THE <br />
                      PROCESS
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
                  <div className="relative w-full text-center h-fit justify-self-center row-start-3 font-firaM text-offBlack p-10 md:p-0 text-[4vw] md:text-[1vw] md:pt-7 pb-16 md:pb-4">
                    With each turn of the dial we lept from leet speak to 140
                    characters or less and worlds of fractured noise. Who knew
                    exploding the textbox into a simple canvas would...
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
