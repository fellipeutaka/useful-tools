import Layout from "@useful-tools/components/Layout";
import { styled } from "@useful-tools/stitches";
import { useState } from "react";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const seo = {
  title: "Binary Code | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

function isBinary(string: string) {
  const pattern = /^[01]*$/;
  return !!string.match(pattern);
}

export default function BinaryCode() {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");

  function handleCodeTextToBinaryCode(text: string) {
    setText(text);
    const textToBinary = text
      .split("")
      .map((character) => {
        const binary = character.charCodeAt(0).toString(2);
        return Array(8 - binary.length + 1).join("0") + binary;
      })
      .join("");
    setBinary(textToBinary);
  }

  function handleDecodeBinaryCodeToText(binary: string) {
    setBinary(binary);
    setText("");
    if (isBinary(binary)) {
      const regExpArray = binary.match(/.{1,8}/g);
      if (regExpArray) {
        const result = regExpArray
          .map((value) =>
            String.fromCharCode(Number(parseInt(value, 2).toString(10)))
          )
          .join("");
        setText(result);
      }
    }
  }

  return (
    <Layout seo={seo}>
      <Container>
        <h1>Binary Code</h1>
        <section>
          <div>
            <label htmlFor="text">Text to code:</label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => handleCodeTextToBinaryCode(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="binary">Binary to decode:</label>
            <textarea
              id="binary"
              value={binary}
              onChange={(e) => handleDecodeBinaryCodeToText(e.target.value)}
            />
          </div>
        </section>
      </Container>
    </Layout>
  );
}
