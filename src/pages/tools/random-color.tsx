import Layout from "@useful-tools/components/Layout";
import RandomColorComponent from "@useful-tools/components/tools/RandomColor";

const seo = {
  title: "Random Color | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function RandomColor() {
  return (
    <Layout seo={seo}>
      <RandomColorComponent />
    </Layout>
  );
}
