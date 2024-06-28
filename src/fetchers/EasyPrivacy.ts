import { DomainsFetcher } from "../models/DomainsFetcher";
import { BlocklistSyntaxParser } from "../parsers/BlocklistSyntax";

export const EasyPrivacyDomainsFetcher = new DomainsFetcher(
  "EasyPrivacy",
  "https://easylist.to/easylist/easyprivacy.txt",
  BlocklistSyntaxParser,
);
