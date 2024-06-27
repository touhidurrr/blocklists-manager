import { DomainsFetcher } from "../models/DomainsFetcher";
import { BlocklistSyntaxModfier } from "../modifiers/BlocklistSyntax";

export const EasyPrivacyDomainsFetcher = new DomainsFetcher(
  "EasyPrivacy",
  "https://easylist.to/easylist/easyprivacy.txt",
  BlocklistSyntaxModfier,
);
