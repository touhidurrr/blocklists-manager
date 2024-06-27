import { DomainsFetcher } from "../models/DomainsFetcher";

const name = "ad-wars";
const url = "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts";

const modifier = (fileText: string): string[] =>
  fileText
    .split("\n")
    .slice(2)
    .map((line) => {
      const commentIndex = line.indexOf("#");
      if (commentIndex < 0) return line.trim();
      return line.slice(0, commentIndex).trim();
    })
    .filter((line) => Boolean(line))
    .map((line) => line.split(" ")[1]);

export const AdWarsDomainsFetcher = new DomainsFetcher(name, url, modifier);
