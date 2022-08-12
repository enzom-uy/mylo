import { chakra, Flex, Spinner } from "@chakra-ui/react";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import React from "react";

const ChakraDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Loading: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div
        style={{
          display: "flex",
          backgroundColor: "#121212",
          minWidth: "100vw",
          minHeight: "100vh",
          position: "absolute",
          zIndex: 99,
          alignItems: "center",
          justifyContent: "center",
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.3, duration: 1 }}
      >
        <ChakraDiv
          display="flex"
          flexDir="column"
          alignItems="center"
          gap={4}
          color="white"
          fontWeight="thin"
          letterSpacing="widest"
          animate={{
            opacity: 0,
          }}
          transition="2000ms linear"
        >
          Cargando Mylo...
          <Spinner size="lg" />
        </ChakraDiv>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
