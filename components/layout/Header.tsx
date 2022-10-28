import { FunctionComponent } from "react";

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <div className="min-h-full h-fit w-full bg-midWhite">
        <div id="thedial" className="w-fit h-fit font-nex text-[2.5vw] p-4 pt-1">
        THE <span className="pl-1 text-[4vw]">DIAL</span>
        </div>
     
    </div>
  );
};

export default Header;
