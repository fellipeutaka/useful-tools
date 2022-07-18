import Layout from "@useful-tools/components/Layout";
import { styled } from "@useful-tools/stitches";
import { decode, encode } from "morsee";
import { useState } from "react";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const seo = {
  title: "Morse Code | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function MorseCode() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");

  function handleCodeTextToMorseCode() {
    const encoded = encode(text);
    setMorse(encoded);
    setText("");
  }

  function handleDecodeMorseCodeToText() {
    const decoded = decode(morse);
    setText(decoded);
    setMorse("");
  }

  return (
    <Layout seo={seo}>
      <Container>
        <h1>Morse Code</h1>
        <section>
          <div>
            <label htmlFor="text">Text to morse code:</label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="button" onClick={handleCodeTextToMorseCode}>
              Code
            </button>
          </div>
          <div>
            <label htmlFor="morse">Morse code to text: </label>
            <textarea
              id="morse"
              value={morse}
              onChange={(e) => setMorse(e.target.value)}
            />
            <button type="button" onClick={handleDecodeMorseCodeToText}>
              Decode
            </button>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
