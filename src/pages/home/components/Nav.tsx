import { useState } from "react";
import logo1 from "../../../assets/logo1.svg";
import { IoMenu } from "react-icons/io5";
import Dropdown from "./Dropdown";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [curr, setCurr] = useState(0);
  const updateCurr = (newCurr : number) => {
    setCurr(newCurr)
  }
  const items = [
    "Home",
    "About us",
    "service",
    "contact",
    "projects",
  ];
  return (
    <nav className="bg-white flex justify-center flex-col ">
      <div className="px-[80px] mx-auto max-lg:px-[30px] max-md:px-[10px] w-full max-w-[2000px] flex justify-between">
        <IoMenu
          onClick={() => setShow((d) => !d)}
          className="my-auto text-3xl lg:hidden"
        />

        <ul className="uppercase max-lg:hidden py-[29px] flex gap-[80px] text-onWhite ">
          {items.map((item: string, ind) => (
            <li onClick={()=>updateCurr(ind)} className={`${curr == ind ? "text-primary font-semibold" : ""} duration-150 hover:text-primary cursor-pointer`}>
              {item}
            </li>
          ))}
        </ul>
        <div className="my-auto py-1">
          <img src={logo1} width={""} alt="Logo" loading="lazy" />
        </div>
      </div>
      <Dropdown
        show={show}
        curr={curr}
        updateCurr={updateCurr}
        list={items}
      />
    </nav>
  );
};

export default Nav;
