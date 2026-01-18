import type { CoreProps } from "../../types/type";

const Container = ({ children, className }: CoreProps) => {
  return <div className={`max-w-330 mx-auto ${className}`}>{children}</div>;
};

export default Container;
