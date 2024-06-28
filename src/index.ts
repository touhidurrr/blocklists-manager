import { format } from "bytes";
import chalk from "chalk";
import { join } from "node:path";
import { logger } from "./models/Logger";

import { OneHostsProDomainsFetcher } from "./fetchers/1HostsPro";
import { AdGuardDNSFilterDomainsFetcher } from "./fetchers/AdGuardDNSFilter";
import { AdGuardTrackingProtectionDomainsFetcher } from "./fetchers/AdGuardTrackingProtection";
import { AdWarsDomainsFetcher } from "./fetchers/AdWars";
import { AntiADDomainsFetcher } from "./fetchers/AntiAD";
import { BadBlockDomainsFetcher } from "./fetchers/BadBlock";
import { DanPollockHostsDomainsFetcher } from "./fetchers/DanPollockHosts";
import { DisconnectAdsDomainsFetcher } from "./fetchers/DisconnectAds";
import { DisconnectTrackingDomainsFetcher } from "./fetchers/DisconnectTracking";
import { EasyListDomainsFetcher } from "./fetchers/EasyList";
import { EasyPrivacyDomainsFetcher } from "./fetchers/EasyPrivacy";
import { NextDNSCNAMECloakingBlocklistDomainsFetcher } from "./fetchers/NextDNSCNAMECloakingBlocklist";
import { OisdBigDomainsFetcher } from "./fetchers/OisdBig";
import { StevenBlackUnifiedHostsDomainsFetcher } from "./fetchers/StevenBlackUnifiedHosts";

const fetchers = [
  OneHostsProDomainsFetcher,
  AdGuardDNSFilterDomainsFetcher,
  AdGuardTrackingProtectionDomainsFetcher,
  AdWarsDomainsFetcher,
  AntiADDomainsFetcher,
  BadBlockDomainsFetcher,
  DanPollockHostsDomainsFetcher,
  DisconnectTrackingDomainsFetcher,
  DisconnectAdsDomainsFetcher,
  EasyListDomainsFetcher,
  EasyPrivacyDomainsFetcher,
  NextDNSCNAMECloakingBlocklistDomainsFetcher,
  OisdBigDomainsFetcher,
  StevenBlackUnifiedHostsDomainsFetcher,
];

const domains = new Set<string>();

const promises = fetchers.map(async (fetcher) => {
  const fetchedDomains = await fetcher.getDomains();
  fetchedDomains.forEach((domain) => domains.add(domain));
});

await Promise.all(promises);

const path = "./domains.txt";

const fileText = [...domains].sort().join("\n") + "\n";
await Bun.write(path, fileText);

const fileSize = Buffer.byteLength(fileText);
const formattedFileSize = format(fileSize, { unitSeparator: " " });
logger.log("Exported", domains.size, "domains to:");
logger.log(
  `\t${chalk.green(join(process.cwd(), path))}`,
  chalk.yellow(`(${formattedFileSize})`),
);
