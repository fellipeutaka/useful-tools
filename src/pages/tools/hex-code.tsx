import Layout from "@useful-tools/components/Layout";
import HexCodeComponent from "@useful-tools/components/tools/HexCode";

const seo = {
  title: "Hex Code | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function HexCode() {
  return (
    <Layout seo={seo}>
      <HexCodeComponent />
    </Layout>
  );
}
