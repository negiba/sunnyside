import { ReactComponent as LogoSvg } from "../assets/logo.svg";
import { NavButton } from "../nav-buttons/nav-button";
import { NavPillButton } from "../nav-buttons/nav-pill-button";

export const Header = () => {
  return (
    <header className="absolute inset-0 z-50 flex flex-row w-full h-32 bg-transparent py-8 px-12">
      <div className="flex flex-row items-center">
        <LogoSvg fill="white" />
      </div>
      <nav className="flex flex-row ml-auto h-16">
        <NavButton name="About" />
        <NavButton name="Services" />
        <NavButton name="Projects" />
        <NavPillButton name="CONTACT" />
      </nav>
    </header>
  );
};
