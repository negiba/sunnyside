import { ReactComponent as LogoSvg } from "../assets/logo.svg";
import { FBIcon } from "../icons/fb-icon";
import { InstagramIcon } from "../icons/instagram-icon";
import { TwitterIcon } from "../icons/twitter-icon";
import { PinterestIcon } from "../icons/pinterest-icon";

export const Footer = () => {
  return (
    <div className="h-60 bg-footer flex flex-row flex-wrap justify-center">
      <div className="flex w-full h-24 pt-16 justify-center">
        <LogoSvg fill="#287062" />
      </div>
      <div className="flex flex-row w-full h-12 gap-x-12 text-sm text-footer justify-center">
        <p className="hover:text-white cursor-pointer">About</p>
        <p className="hover:text-white cursor-pointer">Services</p>
        <p className="hover:text-white cursor-pointer">Projects</p>
      </div>
      <div className="flex flex-row w-full justify-center gap-x-4">
        <FBIcon className="w-6 h-6 cursor-pointer fill-current text-darkfooter hover:text-white" />
        <InstagramIcon className="w-6 h-6 cursor-pointer fill-current text-darkfooter hover:text-white" />
        <TwitterIcon className="w-6 h-6 cursor-pointer fill-current text-darkfooter hover:text-white" />
        <PinterestIcon className="w-6 h-6 cursor-pointer fill-current text-darkfooter hover:text-white" />
      </div>
    </div>
  );
};
