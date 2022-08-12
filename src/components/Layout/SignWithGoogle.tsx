import { Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";

const SignWithGoogle = () => {
  return (
    <Button
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={2}
      whiteSpace="nowrap"
      boxShadow="baseline"
      bgColor="primary"
      color="white"
      _hover={{ bgColor: "secondary" }}
      transition="all 150"
    >
      <AiOutlineGoogle fontSize="1.8rem" /> Login
    </Button>
  );
};

export default SignWithGoogle;
