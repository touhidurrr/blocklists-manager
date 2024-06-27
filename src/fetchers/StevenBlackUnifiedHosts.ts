import { DomainsFetcher } from "../models/DomainsFetcher";

const name = "StevenBlack Unified Hosts";
const url = "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts";

const modifier = (fileText: string): string[] => {
  const lines = fileText.split("\n").map((line) => line.trim());

  const start = lines.indexOf("# Start StevenBlack");
  if (start < 0) throw new Error(`Failed to parse ${name}`);

  return lines
    .slice(start + 1)
    .filter((line) => Boolean(line) && !line.startsWith("#"))
    .map((line) => line.split(" ")[1]);
};

export const StevenBlackUnifiedHostsDomainsFetcher = new DomainsFetcher(
  name,
  url,
  modifier,
);
