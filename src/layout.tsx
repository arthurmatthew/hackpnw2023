import React from "react";
import Logo from "./assets/logo_with_text_transparant.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-center bg-green-500 p-2 shadow-2xl">
        <a className="h-full" href="/">
          <img src={Logo} className="h-full" />
        </a>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
