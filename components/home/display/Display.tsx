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
        <div className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] pt-40 pl-20 pr-20 gap-3">
          <div className="relative w-fit h-[30vw] col-start-1 pb-5 self-end">
            <div className="relative w-fit h-fit bg-midGreen rounded-lg grid-flow-row auto-rows-[auto auto] rounded-lg grid">
              <div className="relative w-fit h-fit justify-self-center row-start-1 bg-midWhite place-self-center">
                <div className="relative grid-flow-row auto-rows-[auto auto] h-full min-h-full font-fira text-xs grid p-6">
                  <div className="relative h-fit md:w-fit row-start-1">
                    IN S ERT
                  </div>
                  <div className="relative h-fit md:w-fit row-start-2">
                    <p className="pb-4">T O K EN TO R UN </p>
                    <p className="pl-2">N O TEB O OK ON LA TENT</p>
                    <p>MA C HINE</p>
                  </div>
                  <div className="relative h-fit md:w-fit row-start-3">
                    <p>D D OU HI K I LD BE</p>
                    <p className="pl-2 pt-4">SY? O TO L GI AL N ROMA</p>
                    <p>NCY</p>
                  </div>
                </div>
              </div>
              <div className="relative w-40 text-center h-fit justify-self-center row-start-2 font-firaM text-offBlack text-[1vw]">
                Caption text for the post along with info about keeping a memory
                of what you’ve drafted and shared.
                <br />
                <br />
                somewhere better than the elongated zuckerverse, etc.
              </div>
              <div className="relative w-fit h-fit justify-self-center row-start-3"></div>
            </div>
          </div>
          <div className="relative w-fit h-[40vw] col-start-2 grid grid-flow-row auto-rows-[auto auto]">
            <div className="relative w-full h-[25vw] row-start-1"></div>
            <div className="relative w-full h-[15vw] row-start-2"></div>
          </div>
          <div className="relative w-fit h-[40vw] col-start-3 bg-flight"></div>
        </div>
      </div>
      <div id="border" className="relative w-full h-2 row-start-2"></div>
    </div>
  );
};

export default Display;
