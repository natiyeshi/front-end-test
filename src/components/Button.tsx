
interface Props {
    child : any,
    className? : string,
}
const Button = ({ child,className } : Props) => {
  return (
    <button className={`py-[10px] px-[30px] hover:bg-slate-900 duration-150  rounded-[300px] bg-primary text-secondary w-fit ${className}`}>
      {child}
    </button>
  );
};

export default Button;
