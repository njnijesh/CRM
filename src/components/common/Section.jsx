const Section = ({ children, classNames }) => {
  return (
    <div className={`w-full px-20 box-border flex ${classNames}`}>
      {children}
    </div>
  );
};
export default Section;
