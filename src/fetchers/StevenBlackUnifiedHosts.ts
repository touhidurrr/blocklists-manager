import { DomainsFetcher } from "../models/DomainsFetcher";

const name = "StevenBlack Unified Hosts";
const url = "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts";

const modifier = (fileText: string): string[] => {
  const start = fileText.indexOf("# Start StevenBlack");
  if (start < 0) throw new Error(`Failed to parse ${name}`);

  return fileText
    .substring(start)
    .replace(/#.*$/gm, "")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => Boolean(line))
    .map((line) => line.split(" ")[1]);
};

export const StevenBlackUnifiedHostsDomainsFetcher = new DomainsFetcher(
  name,
  url,
  modifier,
);
