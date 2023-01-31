import Logo from "../../icons/Logo";

const CompanyLogo = () => {
  return (
    <div className="flex gap-1.5 items-center justify-center flex-center cursor-pointer">
      <Logo />
      <p className="text-2xl font-bold text-cst-grey-900">Landwind</p>
    </div>
  );
};
export default CompanyLogo;
