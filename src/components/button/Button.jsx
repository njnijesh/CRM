import "./button.css";
const Button = (props) => {
  const { btnType, value, onClick, classNames } = props;
  let customeStyles = "";
  if (!btnType)
    customeStyles = "bg-cst-purple-600 text-white hover:bg-cst-purple-800";
  if (btnType === "outline")
    customeStyles =
      "border border-cst-grey-200 text-cst-grey-900 divide-solid hover:bg-cst-grey-50";

  return (
    <button
      className={`${customeStyles} ${classNames} button__landing px-5 py-3 box-border text-sm font-medium flex items-center justify-center`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Button;
