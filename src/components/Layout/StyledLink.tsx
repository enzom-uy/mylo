import { chakra } from "@chakra-ui/react";
import Link from "next/link";

const StyledLink = chakra("a", {
  baseStyle: {
    display: "flex",
    p: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    whiteSpace: "nowrap",
    boxShadow: "baseline",
    transitionProperty: "all",
    transitionDuration: "150ms",
    bgColor: "primary",
    color: "white",
    _hover: { bgColor: "secondary" },
    rounded: "lg",
    fontWeight: "semibold",
    cursor: "pointer",
    marginBottom: ".5rem",
  },
});

export default StyledLink;
