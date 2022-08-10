import React, { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="h-screen">{children}</main>
    </>
  );
};

export default Layout;
