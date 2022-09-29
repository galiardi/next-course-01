import { MainLayout } from "../../components/layouts/MainLayout";

const Contact = () => {
  return (
    <>
      <h1 className="title">Contact</h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </>
  );
};
export default Contact;

Contact.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
