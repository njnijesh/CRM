import useTestimonialsContent from "../../../hooks/landing/useTestimonialsContent";
import Quote from "../../../icons/Quote";
import Section from "../../common/Section";

const Testimonials = () => {
  const [{ comment, user }] = useTestimonialsContent();

  return (
    <Section classNames="py-24 items-center justify-center">
      <div className="gap-6 flex flex-col max-w-screen-md items-center">
        <Quote />
        <p className="text-2xl text-cst-grey-900 font-semibold text-center">
          {comment}
        </p>
        <div className="flex gap-3 items-center">
          <img className="mr-px" src={user.img} alt="User" />
          <p className="text-base font-semibold text-cst-grey-900">
            {user.name}
          </p>
          <p className="text-base font-semibold text-cst-grey-900 self-end">
            /
          </p>
          <p className="text-sm font-normal text-cst-grey-500 self-end">
            {user.position}
          </p>
        </div>
      </div>
    </Section>
  );
};
export default Testimonials;
