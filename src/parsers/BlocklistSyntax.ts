import isFQDN from "validator/lib/isFQDN";

export const BlocklistSyntaxParser = (fileText: string): string[] =>
  fileText
    .split("\n")
    .map((line) => line.trim())
    .filter(
      (line) => Boolean(line) && line.startsWith("||") && line.endsWith("^"),
    )
    .map((line) => line.slice(2, -1))
    .filter((line) => isFQDN(line));
