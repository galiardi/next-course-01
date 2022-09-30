import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(10, 10, 10, 0.8)",
        color: "gray",
      }}
    >
      {children}
    </div>
  );
};
