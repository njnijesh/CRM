const Seperator = ({ gap }) => {
  let customClasses = "";
  if (gap === "8") customClasses = "my-8";
  if (gap === "6") customClasses = "my-6";
  return <div className={`w-full h-px bg-cst-grey-200 ${customClasses}`} />;
};
export default Seperator;
