import React, { ReactNode } from "react";
import Sidebar from "./maps-sidebar/Sidebar";
import Navbar from "./Navbar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex px-6 gap-10">
        <Sidebar />
        <main className="h-screen">{children}</main>
      </div>
    </>
  );
};

export default Layout;
