import Layout from "@useful-tools/components/Layout";
import LengthComponent from "@useful-tools/components/tools/unitConverter/Length";

const seo = {
  title: "Length | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function Length() {
  return (
    <Layout seo={seo}>
      <LengthComponent />
    </Layout>
  );
}
