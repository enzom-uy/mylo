import { FiSettings, FiUser } from "react-icons/fi";
import { GiStunGrenade } from "react-icons/gi";
import { IoIosAddCircleOutline, IoMdSettings } from "react-icons/io";
import dust2 from "/public/dust2.webp";
import inferno from "/public/inferno.webp";
import mirage from "/public/mirage.webp";
import nuke from "/public/nuke.webp";
import overpass from "/public/overpass.webp";
import vertigo from "/public/vertigo.webp";

export const mapsLinks = [
  {
    title: "Mirage",
    img: mirage,
    href: "/maps/mirage",
  },
  {
    title: "Dust2",
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
    title: "Tuscan",
    href: "/maps/tuscan",
  },
  {
    title: "Vertigo",
    img: vertigo,
    href: "/maps/vertigo",
  },
];

export const navbarLinks = [
  {
    title: "Mirage",
    img: mirage,
    href: "/maps/mirage",
  },
  {
    title: "Dust2",
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
    title: "Tuscan",
    href: "/maps/tuscan",
  },
  {
    title: "Vertigo",
    img: vertigo,
    href: "/maps/vertigo",
  },
  {
    title: "CFGs",
    href: "/cfgs",
    icon: IoMdSettings,
  },
];

export const mobileMenuItems = [
  {
    title: "Subir Nade",
    icon: IoIosAddCircleOutline,
    href: "/create-nade",
  },
  {
    title: "CFGs",
    icon: FiSettings,
    href: "/cfgs",
  },
  {
    title: "Mi perfil",
    icon: FiUser,
    href: "/account",
  },
];

export const mapsPaths = [
  {
    params: {
      map: "mirage",
    },
  },
  {
    params: {
      map: "inferno",
    },
  },
  {
    params: {
      map: "nuke",
    },
  },
  {
    params: {
      map: "dust2",
    },
  },
  {
    params: {
      map: "overpass",
    },
  },
  {
    params: {
      map: "tuscan",
    },
  },
  {
    params: {
      map: "vertigo",
    },
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
