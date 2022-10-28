import Image from "next/legacy/image";
import { FunctionComponent } from "react";

const Canvas: FunctionComponent = (): JSX.Element => {
  return (
    <div
      id="dots"
      className="relative w-full h-full grid auto-cols-[auto auto] auto-flow-col bg-midWhite"
    >
      <div className="relative w-fit h-full grid grid-cols-1 lg:auto-cols-[auto auto] p-14 pl-28 pr-28 gap-3 col-start-1 place-self-center">
        <div className="w-fit h-full relative place-self-center col-start-1">
          <div className="w-fit h-full relative grid grid-flow-cols auto-cols-[auto auto]">
            <div className="hidden lg:flex relative w-fit h-full col-start-1">
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-full space-between pt-8 pb-8 pr-1.5">
                <div className="col-start-1 row-start-1 w-6 h-0.5 rounded-lg relative bg-midGreen justify-end"></div>
                <div className="col-start-1 row-start-2 w-6 h-0.5 rounded-lg relative bg-midGreen place-self-end"></div>
              </div>
            </div>
            <div className="w-fit h-full relative place-self-center lg:col-start-2">
              <div className="w-full h-full relative grid grid-flow-cols auto-cols-[auto auto]">
                <div className="relative col-start-1 w-fit h-full lg:hidden">
                  <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-full space-between pt-6 pb-6">
                    <div className="col-start-1 row-start-1 w-6 h-0.5 rounded-lg relative bg-midGreen justify-end"></div>
                    <div className="col-start-1 row-start-2 w-6 h-0.5 rounded-lg relative bg-midGreen place-self-end"></div>
                  </div>
                </div>
                <div className="relative col-start-2 w-fit h-full place-self-center">
                  <div className="relative w-full h-full grid grid-flow-row auto-row-[auto auto]">
                    <div className="relative w-full h-fit row-start-1">
                      <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-full justify-between pb-3">
                        <div className="col-start-1 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                        <div className="col-start-2 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                      </div>
                    </div>
                    <div className="relative w-full h-full row-start-2 w-[14vw] h-[14vw] object-cover rounded-xl border-2 border-offBlack">
                      <Image
                        src="/images/canvas/imageone.png"
                        alt="canvas1"
                        layout="fill"
                        priority
                        className="rounded-xl"
                      />
                    </div>
                    <div className="relative w-full h-fit row-start-3">
                      <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-full justify-between pt-3">
                        <div className="col-start-1 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                        <div className="col-start-2 relative w-full h-full font-lib text-offBlue text-center text-[1vw]">
                          120, 121, 122
                        </div>
                        <div className="col-start-3 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-start-3 w-fit place-self-center h-full lg:hidden">
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-full space-between pt-6 pb-6">
                <div className="col-start-1 row-start-1 w-6 h-0.5 rounded-lg relative bg-midGreen justify-end"></div>
                <div className="col-start-1 row-start-2 w-6 h-0.5 rounded-lg relative bg-midGreen place-self-end"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex relative w-fit h-full col-start-2 pt-2 pb-2">
          <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-full space-between pt-6 pb-6">
            <div className="col-start-1 row-start-1 w-6 h-0.5 rounded-lg relative bg-midGreen justify-end"></div>
            <div className="col-start-1 row-start-2 w-6 h-0.5 rounded-lg relative bg-midGreen place-self-end"></div>
          </div>
        </div>
        <div className="w-full h-full relative place-self-center lg:col-start-3">
          <div className="w-full h-full relative grid grid-flow-cols auto-cols-[auto auto]">
            <div className="relative col-start-1 w-fit h-full place-self-center">
              <div className="relative w-full h-full grid grid-flow-row auto-row-[auto auto]">
                <div className="relative w-full h-fit row-start-1">
                  <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-full justify-between pb-3">
                    <div className="col-start-1 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                    <div className="col-start-2 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                  </div>
                </div>
                <div className="relative w-full h-full row-start-2 w-[14vw] h-[14vw] object-cover rounded-xl border-2 border-offBlack">
                  <Image
                    src="/images/canvas/imagetwo.png"
                    alt="canvas2"
                    layout="fill"
                    priority
                    className="rounded-xl"
                  />
                </div>
                <div className="relative w-full h-fit row-start-3">
                  <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-full justify-between pt-3">
                    <div className="col-start-1 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                    <div className="col-start-2 relative w-full h-full font-lib text-offBlue text-center text-[1vw]">
                      100, 105, 97, 108
                    </div>
                    <div className="col-start-3 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex relative w-fit h-full col-start-4 pt-2 pb-2">
          <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-full space-between pt-6 pb-6">
            <div className="col-start-1 row-start-1 w-6 h-0.5 rounded-lg relative bg-midGreen justify-end"></div>
            <div className="col-start-1 row-start-2 w-6 h-0.5 rounded-lg relative bg-midGreen place-self-end"></div>
          </div>
        </div>
        <div className="w-fit h-full relative place-self-center lg:col-start-5">
          <div className="w-full h-full relative grid grid-flow-cols auto-cols-[auto auto]">
            <div className="relative col-start-1 w-fit h-full lg:hidden">
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-full space-between pt-6 pb-6">
                <div className="col-start-1 row-start-1 w-6 h-0.5 rounded-lg relative bg-midGreen justify-end"></div>
                <div className="col-start-1 row-start-2 w-6 h-0.5 rounded-lg relative bg-midGreen place-self-end"></div>
              </div>
            </div>
            <div className="relative col-start-2 w-fit h-full place-self-center">
              <div className="relative w-full h-full grid grid-flow-row auto-row-[auto auto]">
                <div className="relative w-full h-fit row-start-1">
                  <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-full justify-between pb-3">
                    <div className="col-start-1 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                    <div className="col-start-2 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                  </div>
                </div>
                <div className="relative w-full h-full row-start-2 w-[14vw] h-[14vw] object-cover rounded-xl border-2 border-offBlack">
                  <Image
                    src="/images/canvas/imagethree.png"
                    alt="canvas3"
                    layout="fill"
                    priority
                    className="rounded-xl"
                  />
                </div>
                <div className="relative w-full h-fit row-start-3">
                  <div className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-full justify-between pt-3">
                    <div className="col-start-1 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                    <div className="col-start-2 relative w-full h-full font-lib text-offBlue text-center text-[1vw]">
                      120, 121, 122
                    </div>
                    <div className="col-start-3 row-start-1 w-0.5 h-6 rounded-lg relative bg-midGreen"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative col-start-3 w-fit h-full">
              <div className="relative grid grid-flow-col auto-cols-[auto auto] w-fit h-full space-between pt-8 pb-8 pl-1.5">
                <div className="col-start-1 row-start-1 w-6 h-0.5 rounded-lg relative bg-midGreen justify-end"></div>
                <div className="col-start-1 row-start-2 w-6 h-0.5 rounded-lg relative bg-midGreen place-self-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
