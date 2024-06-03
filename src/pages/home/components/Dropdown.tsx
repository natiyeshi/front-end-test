interface Props {
  list: string[];
  updateCurr: Function;
  show : boolean,
  curr : number
}

const Dropdown = ({ show,list, curr,updateCurr }: Props) => {
  return (
    <ul className={` ${show ? "" : "hidden"} lg:hidden uppercase py-[29px] flex max-lg:px-[30px] max-md:px-[10px] flex-col gap-8 text-onWhite `}>
      {list.map((value: string,ind : number) => (
        <li
          onClick={() => updateCurr(ind)}
          className={`${curr == ind ? "font-semibold text-primary" : ""} hover:text-primary cursor-pointer`}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
