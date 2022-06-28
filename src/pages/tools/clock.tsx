import Layout from "@useful-tools/components/Layout";
import ClockComponent from "@useful-tools/components/tools/Clock";

const seo = {
  title: "Clock | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function Clock() {
  return (
    <Layout seo={seo}>
      <ClockComponent />
    </Layout>
  );
}
