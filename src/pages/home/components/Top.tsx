import SendIcon from "../../../assets/Send.svg";
import InstaIcon from "../../../assets/teenyicons_instagram-outline.svg";
import PhoneIcon from "../../../assets/ph_phone-bold.svg";

const Top = () => {
  return (
    <div className="bg-primary ">
      <div className="w-full mx-auto max-w-[2000px] py-[16px]  text-secondary flex md:flex-row-reverse max-md:flex-wrap gap-5 px-[80px] max-lg:px-[30px] max-md:px-[10px]">
        <div
          role="button"
          className="flex gap-3 cursor-pointer"
          onClick={() => (location.href = "https://www.instagram.com/rcstone2")}
        >
          <img className="w-5" src={InstaIcon} alt="" />
          <div className="underline">@rcstone2</div>
        </div>
        <div
          role="button"
          className="flex gap-3 cursor-pointer"
          onClick={() => (location.href = "tel:+14377030737")}
        >
          <img className="w-5" src={PhoneIcon} alt="" />
          <div className="underline">(437) 703-0737</div>
        </div>
        <div
          role="button"
          className="flex gap-3 cursor-pointer"
          onClick={() => (location.href = "mailto:rcstone2@icloud.com")}
        >
          <img className="w-5" src={SendIcon} alt="" />
          <div className="underline">rcstone2@icloud.com</div>
        </div>
      </div>
    </div>
  );
};

export default Top;
