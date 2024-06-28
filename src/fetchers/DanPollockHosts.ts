import { DomainsFetcher } from "../models/DomainsFetcher";

const name = "Dan Pollock Hosts";
const url = "https://someonewhocares.org/hosts/hosts";

const parser = (fileText: string): string[] => {
  const start = fileText.indexOf("#</localhost>");
  if (start < 0) throw new Error(`Failed to parse ${name}`);

  return fileText
    .substring(start)
    .replace(/#.*$/gm, "")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => Boolean(line))
    .map((line) => line.split(" ")[1]);
};

export const DanPollockHostsDomainsFetcher = new DomainsFetcher(
  name,
  url,
  parser,
);
