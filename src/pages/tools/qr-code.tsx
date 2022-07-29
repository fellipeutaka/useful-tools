import { useRef, useState } from "react";

import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { QRCodeSVG } from "qrcode.react";

import Layout from "@useful-tools/components/Layout";
import { styled } from "@useful-tools/stitches";


const seo = {
  title: "QR Code | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const QRCodeContainer = styled("section", {
  padding: 12,
  backgroundColor: "White",
  borderRadius: 8,
});

export default function QRCode() {
  const [inputValue, setInputValue] = useState("");
  const QRCodeRef = useRef<HTMLDivElement>(null);

  function handleDownloadQRCode() {
    if (QRCodeRef.current) {
      domtoimage.toBlob(QRCodeRef.current).then((blob) => {
        saveAs(blob, "qrcode.png");
      });
    }
  }

  return (
    <Layout seo={seo}>
      <Container>
        <h1>QR Code</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <QRCodeContainer ref={QRCodeRef}>
          <QRCodeSVG width={250} height={250} value={inputValue} />
        </QRCodeContainer>
        <button type="button" onClick={handleDownloadQRCode}>
          Download
        </button>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(inputValue)}`}
          rel="noreferrer"
          target="_blank"
        >
          Share on WhatsApp
        </a>
        <a
          href={`http://twitter.com/share?text=${encodeURIComponent(
            inputValue
          )}`}
          rel="noreferrer"
          target="_blank"
        >
          Share on Twitter
        </a>
      </Container>
    </Layout>
  );
}
