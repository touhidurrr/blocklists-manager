import { DomainsFetcher } from "../models/DomainsFetcher";
import { BlocklistSyntaxModfier } from "../modifiers/BlocklistSyntax";

export const AdGuardDNSFilterDomainsFetcher = new DomainsFetcher(
  "AdGuard DNS filter",
  "https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt",
  BlocklistSyntaxModfier,
);
