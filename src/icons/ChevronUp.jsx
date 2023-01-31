const ChevronUp = (props) => {
  return (
    <svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.color || "stroke-cst-grey-500"}
      transform={props.transform || "scale(1,1)"}
    >
      <path
        d="M3.833 10 8.5 5.333 13.167 10"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default ChevronUp;
