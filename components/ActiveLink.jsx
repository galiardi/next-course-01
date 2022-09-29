import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "blue",
  textDecoration: "underline",
};

export const ActiveLink = ({ href, text }) => {
  const { asPath } = useRouter();
  console.log(asPath);
  console.log(href);
  return (
    <Link href={href}>
      <a style={"." + asPath === href ? null : style}>{text}</a>
    </Link>
  );
};
