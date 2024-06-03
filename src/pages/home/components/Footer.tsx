import logo2 from "../../../assets/logo2.svg";
import SendIcon from "../../../assets/Send.svg";
import InstaIcon from "../../../assets/teenyicons_instagram-outline.svg";
import PhoneIcon from "../../../assets/ph_phone-bold.svg";

const Footer = () => {
  return (
    <div className="w-full bg-primary">
      <div className="w-full max-w-[2000px] mx-auto px-[120px] max-lg:px-[40px] max-md:px-[10px]  py-[32px]  flex max-md:flex-col max-md:gap-10 justify-between">
        <img
          src={logo2}
          className="max-md:w-[140px]"
          width=""
          alt="Logo"
          loading="lazy"
        />

        <div className="flex flex-col gap-2 text-secondary">
          <div className="text-xl font-semibold">GET IN TOUCH</div>
          <div className="flex gap-3">
            <img className="w-5" src={InstaIcon} alt="" />
            <div className="underline">@rcstone2</div>
          </div>
          <div className="flex gap-3">
            <img className="w-5" src={PhoneIcon} alt="" />
            <div className="underline">(437) 703-0737</div>
          </div>
          <div className="flex gap-3">
            <img className="w-5" src={SendIcon} alt="" />
            <div className="underline">rcstone2@icloud.com</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-secondary">
          <div className="text-xl font-semibold">QUICK LINKS</div>
          <div className="flex gap-5 justify-between">
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer">Homepage</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Services</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
