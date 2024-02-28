export function isBinary(string: string) {
  return /^[01\s]*$/.test(string);
}

export function convertStringToBinary(str: string) {
  return str
    .split("")
    .map((character) => {
      const binary = character.charCodeAt(0).toString(2);
      return Array(8 - binary.length + 1).join("0") + binary;
    })
    .join(" ");
}

export function convertBinaryToString(binary: string) {
  const regExpArray = binary.match(/(?:[01]{8})+/g);
  if (regExpArray) {
    return regExpArray
      .map((value) =>
        String.fromCharCode(Number(Number.parseInt(value, 2).toString(10))),
      )
      .join("");
  }
  return "";
}

export function getCharacters(
  includeUppercase: boolean,
  includeNumbers: boolean,
  includeLowercase: boolean,
  includeSymbols: boolean,
) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const symbols = "!@#$%^&*";

  return [
    ...(includeUppercase ? uppercase.split("") : []),
    ...(includeNumbers ? numbers.split("") : []),
    ...(includeLowercase ? lowercase.split("") : []),
    ...(includeSymbols ? symbols.split("") : []),
  ];
}

export type GeneratePasswordProps = {
  length: number;
  characters: string[];
};

export function generatePassword({
  length,
  characters,
}: GeneratePasswordProps) {
  return Array.from(
    crypto.getRandomValues(new Uint32Array(length)),
    (value) => characters[value % characters.length],
  ).join("");
}
