import Close from "../../../icons/Close";
import Hamburger from "../../../icons/Hamburger";
const MobileView = ({ menuOpen, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className={`inline-flex items-center cursor-pointer p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
    >
      {!menuOpen ? <Hamburger /> : <Close />}
    </div>
  );
};
export default MobileView;
