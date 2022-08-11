import { useBreakpointValue } from "@chakra-ui/react";

const useViewport = () => {
  const isMobile = useBreakpointValue(
    { base: true, md: false },
    { fallback: "lg" }
  );

  return isMobile;
};

export default useViewport;
