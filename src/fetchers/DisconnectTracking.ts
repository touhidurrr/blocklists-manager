import { DomainsFetcher } from "../models/DomainsFetcher";

export const DisconnectTrackingDomainsFetcher = new DomainsFetcher(
  "Basic tracking list by Disconnect",
  "https://s3.amazonaws.com/lists.disconnect.me/simple_tracking.txt",
);
