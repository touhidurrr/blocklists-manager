import { DomainsFetcher } from "../models/DomainsFetcher";

const name = "ad-wars";
const url = "https://raw.githubusercontent.com/jdlingyu/ad-wars/master/hosts";

const modifier = (fileText: string): string[] =>
  fileText
    .replace(/#.*$/gm, "")
    .split("\n")
    .slice(2)
    .map((line) => line.trim())
    .filter((line) => Boolean(line))
    .map((line) => line.split(" ")[1]);

export const AdWarsDomainsFetcher = new DomainsFetcher(name, url, modifier);
