import chalk from "chalk";

export class Logger {
  private getUptimeString(): string {
    return chalk.blue(`[${process.uptime().toFixed(2)}s]`);
  }

  log(...messages: unknown[]) {
    console.log(this.getUptimeString(), ...messages);
  }
}

export const logger = new Logger();
