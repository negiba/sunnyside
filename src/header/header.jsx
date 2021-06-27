import { ReactComponent as LogoSvg } from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className="fixed inset-0 z-50 flex flex-row w-full h-32 bg-transparent p-9">
      <div>
        <LogoSvg fill="white" />
      </div>
      <div className="ml-auto">menu</div>
    </header>
  );
};
