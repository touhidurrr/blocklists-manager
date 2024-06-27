import { DomainsFetcher } from "../models/DomainsFetcher";

const name = "Dan Pollock Hosts";
const url = "https://someonewhocares.org/hosts/hosts";

const modifier = (fileText: string): string[] => {
  const lines = fileText.split("\n").map((line) => line.trim());

  const start = lines.indexOf("#</localhost>");
  if (start < 0) throw new Error(`Failed to parse ${name}`);

  return lines
    .slice(start + 1)
    .filter((line) => Boolean(line) && !line.startsWith("#"))
    .map((line) => line.split(" ")[1]);
};

export const DanPollockHostsDomainsFetcher = new DomainsFetcher(
  name,
  url,
  modifier,
);
