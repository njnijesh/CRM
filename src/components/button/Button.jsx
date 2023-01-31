import "./button.css";
const Button = (props) => {
  const { btnType, value, onClick, classNames } = props;
  let customeStyles = "";
  if (!btnType)
    customeStyles =
      "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 px-5 py-3 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0";
  if (btnType === "outline")
    customeStyles =
      "items-center justify-center w-full px-5 py-3 mb-2 mr-2 font-medium text-gray-900 bg-white border border-gray-200 sm:w-auto hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:ring-gray-200";
  return (
    <button
      className={`${customeStyles} font-medium focus:ring-4 rounded-lg text-sm focus:outline-none ${classNames}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Button;
