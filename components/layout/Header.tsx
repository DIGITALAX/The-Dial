import { FunctionComponent } from "react";

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <div className="min-h-full h-fit w-full bg-midWhite">
        <div id="thedial" className="w-fit h-fit font-nex text-[8vw] sm:text-[3.5vw] md:text-[2.5vw] p-4 pt-1">
        THE <span className="pl-1 text-[13vw] sm:text-[5.5vw] md:text-[4vw]">DIAL</span>
        </div>
     
    </div>
  );
};

export default Header;
