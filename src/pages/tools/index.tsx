import Layout from "@useful-tools/components/Layout";
import Link from "next/link";

const seo = {
  title: "Tools | Useful Tools",
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
        <Link href="/tools/unit-converter">Unit converter</Link>
        <Link href="/tools/stopwatch">Stopwatch</Link>
        <Link href="/tools/password-generator">Password Generator</Link>
        <Link href="/tools/clock">Clock</Link>
        <Link href="/tools/binary-code">Binary Code</Link>
        <Link href="/tools/morse-code">Morse Code</Link>
        <Link href="/tools/hex-code">Hex Code</Link>
        <Link href="/tools/caesar-cipher">Caesar&apos;s cipher</Link>
      </main>
    </Layout>
  );
}
