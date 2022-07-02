import { styled } from "@useful-tools/stitches";
import { useState } from "react";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

export default function BinaryCode() {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");

  function handleCodeText() {
    const textToBinary = text
      .split("")
      .map((character) => {
        const binary = character.charCodeAt(0).toString(2);
        return Array(8 - binary.length + 1).join("0") + binary;
      })
      .join("");
    setBinary(textToBinary);
    setText("");
  }

  function handleDecodeBinary() {
    const regExpArray = binary.match(/.{1,8}/g);
    if (regExpArray) {
      const result = regExpArray
        .map((value) =>
          String.fromCharCode(Number(parseInt(value, 2).toString(10)))
        )
        .join("");
      setText(result);
      setBinary("");
    }
  }

  return (
    <Container>
      <h1>Binary Code</h1>
      <section>
        <div>
          <label htmlFor="text">Text to code:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="button" onClick={handleCodeText}>
            Code
          </button>
        </div>
        <div>
          <label htmlFor="binary">Binary to decode: </label>
          <textarea
            id="binary"
            value={binary}
            onChange={(e) => setBinary(e.target.value)}
          />
          <button type="button" onClick={handleDecodeBinary}>
            Decode
          </button>
        </div>
      </section>
    </Container>
  );
}
