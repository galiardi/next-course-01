const style = {
  backgroundColor: "rgba(10, 10, 10, 0.8)",
  color: "gray",
};

export const DarkLayout = ({ children }) => {
  return <div style={style}>{children}</div>;
};
