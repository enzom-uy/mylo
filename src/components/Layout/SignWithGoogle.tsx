import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { AiOutlineGoogle } from "react-icons/ai";

const SignWithGoogle = () => {
  return (
    <Button
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={2}
      width="100%"
      whiteSpace="nowrap"
      boxShadow="baseline"
      bgColor="primary"
      color="white"
      _hover={{ bgColor: "secondary" }}
      transition="all 150"
      onClick={() => {
        signIn("google");
      }}
    >
      <AiOutlineGoogle fontSize="1.8rem" /> Login
    </Button>
  );
};

export default SignWithGoogle;
