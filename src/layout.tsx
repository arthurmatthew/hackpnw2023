import React from "react";
import Logo from "./assets/logo_with_text_transparant.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-between p-2 px-3 shadow-2xl backdrop-blur-md">
        <a className="h-full" href="/">
          <img src={Logo} className="h-full" />
        </a>
        <section className="flex items-center gap-3">
          <a href="#about" className="duration-100 hover:text-blue-400">
            About
          </a>
          <a href="#team">Team</a>
        </section>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
