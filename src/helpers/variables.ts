import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { FiSettings, FiUser } from "react-icons/fi";
import { IoIosAddCircleOutline, IoMdSettings } from "react-icons/io";
import dust2 from "/public/dust2.webp";
import inferno from "/public/inferno.webp";
import mirage from "/public/mirage.webp";
import nuke from "/public/nuke.webp";
import overpass from "/public/overpass.webp";
import vertigo from "/public/vertigo.webp";

interface NavbarLinks {
  title: string;
  img?: StaticImageData;
  icon?: IconType;
  href: string;
  type: "map" | "menuOption";
}

export const navbarLinks: NavbarLinks[] = [
  {
    title: "Mirage",
    img: mirage,
    href: "/maps/mirage",
    type: "map",
  },
  {
    title: "Dust2",
    img: dust2,
    href: "/maps/dust2",
    type: "map",
  },
  {
    title: "Inferno",
    img: inferno,
    href: "/maps/inferno",
    type: "map",
  },
  {
    title: "Nuke",
    img: nuke,
    href: "/maps/nuke",
    type: "map",
  },
  {
    title: "Overpass",
    img: overpass,
    href: "/maps/overpass",
    type: "map",
  },
  {
    title: "Tuscan",
    href: "/maps/tuscan",
    type: "map",
  },
  {
    title: "Vertigo",
    img: vertigo,
    href: "/maps/vertigo",
    type: "map",
  },
  {
    title: "CFGs",
    href: "/cfgs",
    icon: IoMdSettings,
    type: "menuOption",
  },
];

export const maps = navbarLinks.filter((link) => link.href !== "/cfgs");

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

export const nadeTypes = [
  {
    typeName: "Deto",
  },
  {
    typeName: "Flash",
  },
  {
    typeName: "Molo",
  },
  {
    typeName: "Smoke",
  },
  {
    typeName: "One way",
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
