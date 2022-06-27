import Layout from "@useful-tools/components/Layout";
import Link from "next/link";

const seo = {
  title: "Home | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function Tools() {
  return (
    <Layout seo={seo}>
      <main>
        <h1>Tools</h1>
        <Link href="/tools/qr-code">QR Code</Link>
        <Link href="/tools/random-color">Random Color</Link>
        <Link href="/tools/color-picker">Color Picker</Link>
        <Link href="/tools/stopwatch">Stopwatch</Link>
        <Link href="/tools/password-generator">Password Generator</Link>
      </main>
    </Layout>
  );
}
