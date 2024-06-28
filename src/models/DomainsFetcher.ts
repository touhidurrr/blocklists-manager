import { format } from "bytes";
import { logger } from "./Logger";
import chalk from "chalk";

export class DomainsFetcher {
  private url: string;
  private name: string;

  private parser = (fileText: string): string[] =>
    fileText
      .replace(/#.*$/gm, "")
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => Boolean(line));

  constructor(
    name: string,
    url: string,
    parser?: (fileText: string) => string[],
  ) {
    this.url = url;
    this.name = name;
    if (parser) this.parser = parser;
  }

  getName(): string {
    return this.name;
  }

  async getDomains(): Promise<string[]> {
    logger.log(`Fetching ${this.name}...`);

    const response = await fetch(this.url);

    if (!response.ok)
      throw new Error(
        `Failed to fetch ${this.name} with status code ${response.status}.`,
      );

    const fileText = await response.text();
    const fileSize = Buffer.byteLength(fileText);
    const formattedFileSize = format(fileSize, { unitSeparator: " " });
    logger.log(`Fetched ${this.name}.`, chalk.yellow(`(${formattedFileSize})`));

    return this.parser(fileText);
  }
}
