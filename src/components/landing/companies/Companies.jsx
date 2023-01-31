import Section from "../../common/Section";
import useCompaniesContent from "../../../hooks/landing/useCompaniesContent";

const Companies = () => {
  const [content] = useCompaniesContent();

  return (
    <Section classNames="pb-24 justify-between">
      {content.map((company, index) => (
        <div key={index}>{company}</div>
      ))}
    </Section>
  );
};
export default Companies;
