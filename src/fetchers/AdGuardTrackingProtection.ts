import { DomainsFetcher } from "../models/DomainsFetcher";
import { BlocklistSyntaxParser } from "../parsers/BlocklistSyntax";

export const AdGuardTrackingProtectionDomainsFetcher = new DomainsFetcher(
  "AdGuard Tracking Protection filter",
  "https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt",
  BlocklistSyntaxParser,
);
