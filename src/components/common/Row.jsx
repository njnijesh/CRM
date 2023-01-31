const Row = ({ children, classNames }) => {
  return <div className={`w-full mx-auto flex ${classNames}`}>{children}</div>;
};
export default Row;
