export class Logger {
  private getUptimeString(): string {
    return `[${process.uptime().toFixed(2)}s]`;
  }

  log(message: string) {
    console.log(this.getUptimeString(), message);
  }
}

export const logger = new Logger();
