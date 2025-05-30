function Header2({ children, colorScheme }) {
  let textColor = "600";
  if (colorScheme === "darker") {
    textColor = "700"
  }
  else if (colorScheme === "lighter") {
    textColor = "500"
  }
  return <h2 className={`my-4 text-xl font-bold text-stone-${textColor}`}>
    {children}
  </h2>
};

export default Header2;