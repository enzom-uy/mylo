import DetoSvg from '@/components/MapOverlay/SideMenu/DetoSvg';
import FlashSvg from '@/components/MapOverlay/SideMenu/FlashSvg';
import MoloSvg from '@/components/MapOverlay/SideMenu/MoloSvg';
import SmokeSvg from '@/components/MapOverlay/SideMenu/SmokeSvg';
import OnewaySvg from '/public/svgs/oneway.svg';
import React from 'react';
import Image from 'next/image';

const MySvg: React.FC<{
  type: 'Deto' | 'Flash' | 'Molo' | 'Smoke' | string;
}> = ({ type }) => {
  switch (type) {
    case 'Deto':
      return <DetoSvg />;
    case 'Smoke':
      return <SmokeSvg />;
    case 'Molo':
      return <MoloSvg />;
    case 'Flash':
      return <FlashSvg />;
    case 'One way':
      return <Image src={OnewaySvg} />;
    default:
      return <></>;
  }
};

export default MySvg;
