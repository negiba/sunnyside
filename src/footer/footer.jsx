import { ReactComponent as LogoSvg } from "../assets/logo.svg";
import { ReactComponent as FacebookIcon } from "../assets/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../assets/icon-pinterest.svg";

export const Footer = () => {
  return (
    <div className="h-60 bg-footer flex flex-row flex-wrap justify-center">
      <div className="flex w-full h-24 pt-16 justify-center">
        <LogoSvg fill="#287062" />
      </div>
      <div className="flex flex-row w-full h-12 gap-x-12 text-sm text-footer justify-center">
        <p>About</p>
        <p>Services</p>
        <p>Projects</p>
      </div>
      <div className="flex flex-row w-full justify-center gap-x-4">
        <FacebookIcon fill="#287062" />
        <InstagramIcon fill="#287062" />
        <TwitterIcon fill="#287062" />
        <PinterestIcon fill="#287062" />
      </div>
    </div>
  );
};
