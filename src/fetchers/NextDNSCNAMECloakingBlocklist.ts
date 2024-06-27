import { DomainsFetcher } from "../models/DomainsFetcher";

export const NextDNSCNAMECloakingBlocklistDomainsFetcher = new DomainsFetcher(
  "NextDNS CNAME Cloaking Blocklist",
  "https://raw.githubusercontent.com/nextdns/cname-cloaking-blocklist/master/domains",
);
