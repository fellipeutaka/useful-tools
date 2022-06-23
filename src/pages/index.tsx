import Layout from "@useful-tools/components/Layout";
import Link from "next/link";

const seo = {
  title: "Home | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function Home() {
  return (
    <Layout seo={seo}>
      <main>
        <h1>Hello World</h1>
        <Link href="/tools/qr-code">QR Code</Link>
        <Link href="/tools/random-color">Random Color</Link>
      </main>
    </Layout>
  );
}
