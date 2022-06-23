import Layout from "@useful-tools/components/Layout";
import QRCodeComponent from "@useful-tools/components/tools/QRCode";

const seo = {
  title: "QR Code | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function QRCode() {
  return (
    <Layout seo={seo}>
      <QRCodeComponent />
    </Layout>
  );
}
