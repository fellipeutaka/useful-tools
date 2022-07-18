import Layout from "@useful-tools/components/Layout";
import { styled } from "@useful-tools/stitches";
import Hex from "hex-encoding";
import { useState } from "react";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});
const seo = {
  title: "Hex Code | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function HexCode() {
  const [text, setText] = useState("");
  const [hex, setHex] = useState("");

  function handleCodeTextToHexCode() {
    const encoded = Hex.encodeStr(text);
    setHex(encoded);
    setText("");
  }

  function handleDecodeHexCodeToText() {
    const decoded = Hex.decodeStr(hex);
    setText(decoded);
    setHex("");
  }

  return (
    <Layout seo={seo}>
      <Container>
        <h1>Hex Code</h1>
        <section>
          <div>
            <label htmlFor="text">Text to Hex code:</label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="button" onClick={handleCodeTextToHexCode}>
              Code
            </button>
          </div>
          <div>
            <label htmlFor="hex">Hex code to text:</label>
            <textarea
              id="hex"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
            />
            <button type="button" onClick={handleDecodeHexCodeToText}>
              Decode
            </button>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
