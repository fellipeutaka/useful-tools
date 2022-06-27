import Layout from "@useful-tools/components/Layout";
import PasswordGeneratorComponent from "@useful-tools/components/tools/PasswordGenerator";

const seo = {
  title: "Password Generator | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function PasswordGenerator() {
  return (
    <Layout seo={seo}>
      <PasswordGeneratorComponent />
    </Layout>
  );
}
