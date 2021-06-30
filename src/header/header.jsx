import { ReactComponent as Burger } from "../assets/icon-hamburger.svg";
import { NavButton } from "../nav-buttons/nav-button";
import { NavPillButton } from "../nav-buttons/nav-pill-button";
import { Logo } from "../icons/logo";
import { useEffect, useState } from "react";

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 768;
  return (
    <header className="flex absolute inset-0 z-50 flex flex-row w-full h-16 lg:h-32 bg-transparent py-10 px-4 lg:px-12 items-center">
      <div className="flex flex-row items-center h-8">
        <Logo className="w-40 h-6 fill-current text-white" />
      </div>

      <nav className="flex flex-row ml-auto h-8 md:h-16 justify-center items-center">
        {!isMobile ? (
          <>
            <NavButton name="About" />
            <NavButton name="Services" />
            <NavButton name="Projects" />
            <NavPillButton name="CONTACT" />
          </>
        ) : (
          <Burger />
        )}
      </nav>
    </header>
  );
};
