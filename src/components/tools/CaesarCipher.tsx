import { decryptString, encryptString } from "@gykh/caesar-cipher";
import { styled } from "@useful-tools/stitches";
import { ChangeEvent, useState } from "react";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

export default function CaesarCipher() {
  const [key, setKey] = useState(3);
  const [text, setText] = useState("");
  const [caesarCipher, setCaesarCipher] = useState("");

  function onChangeKey(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const intValue = parseInt(value);

    if (isNaN(Number(value)) || intValue < 0 || intValue > 25) {
      alert("Please, type a number between 0 - 25");
      return;
    }

    setKey(intValue);
  }

  function handleCodeTextToCaesarCipherCode() {
    const encrypted = encryptString(text, key);
    setCaesarCipher(encrypted);
    setText("");
  }

  function handleDecodeCaesarCipherCodeToText() {
    const decrypted = decryptString(caesarCipher, key);
    setText(decrypted);
    setCaesarCipher("");
  }

  return (
    <Container>
      <h1>Caesar Cipher</h1>
      <section>
        <div>
          <label htmlFor="key">Key:</label>
          <input type="number" id="key" value={key} onChange={onChangeKey} />
        </div>
        <div>
          <label htmlFor="text">Text to Caesar Cipher code:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="button" onClick={handleCodeTextToCaesarCipherCode}>
            Code
          </button>
        </div>
        <div>
          <label htmlFor="caesarCipher">Caesar Cipher code to decode:</label>
          <textarea
            id="caesarCipher"
            value={caesarCipher}
            onChange={(e) => setCaesarCipher(e.target.value)}
          />
          <button type="button" onClick={handleDecodeCaesarCipherCodeToText}>
            Decode
          </button>
        </div>
      </section>
    </Container>
  );
}
