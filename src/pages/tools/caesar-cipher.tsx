import Layout from "@useful-tools/components/Layout";
import CaesarCipherComponent from "@useful-tools/components/tools/CaesarCipher";

const seo = {
  title: "Caesar Cipher | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function CaesarCipher() {
  return (
    <Layout seo={seo}>
      <CaesarCipherComponent />
    </Layout>
  );
}
