export const BlocklistSyntaxModfier = (fileText: string): string[] =>
  fileText
    .split("\n")
    .map((line) => line.trim())
    .filter(
      (line) => Boolean(line) && line.startsWith("||") && line.endsWith("^"),
    )
    .map((line) => line.slice(2, -1));
