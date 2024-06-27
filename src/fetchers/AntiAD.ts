import { DomainsFetcher } from "../models/DomainsFetcher";

export const AntiADDomainsFetcher = new DomainsFetcher(
  "anti-AD",
  "https://anti-ad.net/domains.txt",
);
