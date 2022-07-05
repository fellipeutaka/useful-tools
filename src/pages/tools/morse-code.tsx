import Layout from "@useful-tools/components/Layout";
import MorseCodeComponent from "@useful-tools/components/tools/MorseCode";

const seo = {
  title: "Morse Code | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function MorseCode() {
  return (
    <Layout seo={seo}>
      <MorseCodeComponent />
    </Layout>
  );
}
