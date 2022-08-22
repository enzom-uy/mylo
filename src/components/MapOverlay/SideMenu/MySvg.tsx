import DetoSvg from "@/components/MapOverlay/SideMenu/DetoSvg";
import FlashSvg from "@/components/MapOverlay/SideMenu/FlashSvg";
import MoloSvg from "@/components/MapOverlay/SideMenu/MoloSvg";
import SmokeSvg from "@/components/MapOverlay/SideMenu/SmokeSvg";
import React from "react";

const MySvg: React.FC<{
  type: "Deto" | "Flash" | "Molo" | "Smoke" | string;
}> = ({ type }) => {
  switch (type) {
    case "Deto":
      return <DetoSvg />;
    case "Smoke":
      return <SmokeSvg />;
    case "Molo":
      return <MoloSvg />;
    case "Flash":
      return <FlashSvg />;
    default:
      return <></>;
  }
};

export default MySvg;
