import { FC, CSSProperties } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const style: CSSProperties = {
  color: "blue",
  textDecoration: "underline",
};

interface Props {
  href: string;
  text: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();
  console.log(asPath);
  console.log(href);
  return (
    <Link href={href}>
      <a style={asPath === href ? undefined : style}>{text}</a>
    </Link>
  );
};
