import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";

const SignWithGoogle = () => {
  return (
    <button className="flex items-center gap-2 button whitespace-nowrap shadow-baseline">
      <AiOutlineGoogle className="text-[1.8rem]" /> Iniciar con Google
    </button>
  );
};

export default SignWithGoogle;
