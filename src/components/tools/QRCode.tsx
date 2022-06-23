import { styled } from "@useful-tools/stitches";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

export default function QRCode() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <h1>QR Code</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div style={{ padding: 12, backgroundColor: "#fff", borderRadius: 8 }}>
        <QRCodeSVG width={250} height={250} value={inputValue} />
      </div>
    </Container>
  );
}
