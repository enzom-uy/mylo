import { Button } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";

const SignWithGoogle = () => {
  const { data: session } = useSession();
  console.log(session);
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
      onClick={() => signIn("google")}
    >
      <AiOutlineGoogle fontSize="1.8rem" /> Login
    </Button>
  );
};

export default SignWithGoogle;
