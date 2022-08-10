import { IoMdSettings } from "react-icons/io";
import dust2 from "/public/dust2.webp";
import inferno from "/public/inferno.webp";
import mirage from "/public/mirage.webp";
import nuke from "/public/nuke.webp";
import overpass from "/public/overpass.webp";

export const navbarLinks = [
  {
    title: "Mirage",
    img: mirage,
    href: "/maps/mirage",
  },
  {
    title: "Dust 2",
    img: dust2,
    href: "/maps/dust2",
  },
  {
    title: "Inferno",
    img: inferno,
    href: "/maps/inferno",
  },
  {
    title: "Nuke",
    img: nuke,
    href: "/maps/nuke",
  },
  {
    title: "Overpass",
    img: overpass,
    href: "/maps/overpass",
  },
  {
    title: "CFGs",
    href: "/cfgs",
    icon: IoMdSettings,
  },
];

export const breakpoints = {
  xsm: 320,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  "2xl": 1400,
};
