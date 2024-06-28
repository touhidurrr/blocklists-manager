import { DomainsFetcher } from "../models/DomainsFetcher";
import { BlocklistSyntaxParser } from "../parsers/BlocklistSyntax";

export const AdGuardDNSFilterDomainsFetcher = new DomainsFetcher(
  "AdGuard DNS filter",
  "https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt",
  BlocklistSyntaxParser,
);
