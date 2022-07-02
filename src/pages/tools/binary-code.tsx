import Layout from "@useful-tools/components/Layout";
import BinaryCodeComponent from "@useful-tools/components/tools/BinaryCode";

const seo = {
  title: "Binary Code | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function BinaryCode() {
  return (
    <Layout seo={seo}>
      <BinaryCodeComponent />
    </Layout>
  );
}
