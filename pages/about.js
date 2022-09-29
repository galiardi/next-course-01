import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function About() {
  return (
    <>
      <h1 className="title">About</h1>

      <h1 className="title">
        Go to <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
