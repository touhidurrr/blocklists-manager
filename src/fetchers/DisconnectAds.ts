import { DomainsFetcher } from "../models/DomainsFetcher";

export const DisconnectAdsDomainsFetcher = new DomainsFetcher(
  "Ad filter list by Disconnect",
  "https://s3.amazonaws.com/lists.disconnect.me/simple_ad.txt",
);
