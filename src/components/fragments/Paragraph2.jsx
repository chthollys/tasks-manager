function Paragraph2({ children, colorScheme }) {
  let textColor = "500";
  if (colorScheme === "darker") {
    textColor = "600";
  } else if (colorScheme === "lighter") {
    textColor = "400";
  }
  return <p className={`mb-4 text-stone-${textColor}`}>{children}</p>;
}

export default Paragraph2;
