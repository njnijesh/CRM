import ChevronUp from "../../../icons/ChevronUp";
import Seperator from "./Seperator";

const Accordion = ({ data, index, active, onClick }) => {
  return (
    <>
      <div
        onClick={() => onClick(index)}
        className="py-6 flex justify-between text-lg font-medium text-cst-grey-900 cursor-pointer"
      >
        {data.title}
        <ChevronUp
          color={active ? "stroke-cst-grey-900" : "stroke-cst-grey-500"}
          transform={active ? "scale(1,1)" : "scale(1,-1)"}
        />
      </div>
      <Seperator />
      {active && <div className="py-5">{data.content}</div>}
    </>
  );
};
export default Accordion;
