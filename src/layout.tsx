import React from "react";
import Logo from "./assets/logo.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="sticky top-0 flex h-20 w-full items-center bg-green-500 p-2">
        <img src={Logo} className="h-full" />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
