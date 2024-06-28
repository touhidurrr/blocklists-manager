import { DomainsFetcher } from "../models/DomainsFetcher";
import { BlocklistSyntaxParser } from "../parsers/BlocklistSyntax";

export const EasyListDomainsFetcher = new DomainsFetcher(
  "EasyList",
  "https://easylist.to/easylist/easylist.txt",
  BlocklistSyntaxParser,
);
