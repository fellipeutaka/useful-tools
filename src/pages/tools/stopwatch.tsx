import Layout from "@useful-tools/components/Layout";
import StopwatchComponent from "@useful-tools/components/tools/Stopwatch";

const seo = {
  title: "Stopwatch | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function Stopwatch() {
  return (
    <Layout seo={seo}>
      <StopwatchComponent />
    </Layout>
  );
}
