import type { CoreProps } from "../../types/type";

const Section = ({ children, className }: CoreProps) => {
  return (
    <section className={`py-10 lg:py-10 ${className}`}>{children}</section>
  );
};

export default Section;
