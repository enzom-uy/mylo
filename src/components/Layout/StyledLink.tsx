import { chakra } from "@chakra-ui/react";

const StyledLink = chakra("a", {
  baseStyle: {
    display: "flex",
    py: 2,
    px: 4,
    alignItems: "center",
    gap: 4,
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
