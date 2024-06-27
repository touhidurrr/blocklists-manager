import { format } from "bytes";
import { logger } from "./Logger";

export class DomainsFetcher {
  private url: string;
  private name: string;

  private modifier = (fileText: string): string[] => {
    return fileText
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => Boolean(line) && !line.startsWith("#"));
  };

  constructor(
    name: string,
    url: string,
    modifier?: (fileText: string) => string[],
  ) {
    this.url = url;
    this.name = name;
    if (modifier) this.modifier = modifier;
  }

  async getDomains(): Promise<string[]> {
    logger.log(`Fetching ${this.name}...`);

    const response = await fetch(this.url);

    if (!response.ok)
      throw new Error(
        `Failed to fetch ${this.name} with status code ${response.status}.`,
      );

    const fileText = await response.text();
    logger.log(
      `Fetched ${this.name}. (${format(Buffer.byteLength(fileText), {
        unitSeparator: " ",
      })})`,
    );

    return this.modifier(fileText);
  }
}
