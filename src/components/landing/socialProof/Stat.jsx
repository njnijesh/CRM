const Stat = ({ data }) => {
  const { title, description, icon } = data;
  return (
    <div className="flex flex-col">
      {icon}
      <h3 className="text-2xl font-bold text-cst-grey-900 mt-4">{title}</h3>
      <p className="text-base font-light mt-2 text-cst-grey-500">
        {description}
      </p>
    </div>
  );
};
export default Stat;
