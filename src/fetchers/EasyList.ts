import { DomainsFetcher } from "../models/DomainsFetcher";
import { BlocklistSyntaxModfier } from "../modifiers/BlocklistSyntax";

export const EasyListDomainsFetcher = new DomainsFetcher(
  "EasyList",
  "https://easylist.to/easylist/easylist.txt",
  BlocklistSyntaxModfier,
);
