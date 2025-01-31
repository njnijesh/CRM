import ChevronUp from "../../../icons/ChevronUp";
import RenderIf from "../../common/RenderIf";
const Accordion = ({ data, index, active, onItemClick }) => {
  return (
    <>
      <div
        onClick={() => onItemClick(index)}
        className={`items-center flex justify-between ${
          active ? "bg-white text-gray-900" : "text-gray-500"
        }`}
      >
        <h3 className=" w-full py-5 font-medium text-left bg-white border-b border-gray-200">
          {data.title}
        </h3>
        <ChevronUp
          classNames={`${active ? "rotate-180" : ""} w-6 h-6 shrink-0`}
        />
      </div>
      <RenderIf isTrue={active}>
        <div className="py-5 border-b border-gray-200">{data.content}</div>
      </RenderIf>
    </>
  );
};
export default Accordion;
