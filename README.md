# Blocklists manager for PortMaster

Makes a domains blocklist based on many popular filter lists for PortMaster

### Blocklist in use

1. 1Hosts Pro: https://o0.pages.dev/Pro/domains.txt
2. AdGuard DNS Filter: https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt
3. AdGuard Tracking Protection: https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_3_Spyware/filter.txt
4. ad-wars: https://raw.githubusercontent.com/jdlingyu/ad-wars/master/hosts
5. anti-AD: https://anti-ad.net/domains.txt
6. BadBlock: https://codeberg.org/Magnesium1062/BadBlock/raw/branch/main/wildcards-no-%2A/badblock.txt
7. Dan Pollock Hosts: https://someonewhocares.org/hosts/hosts
8. EasyList: https://easylist.to/easylist/easylist.txt
9. EasyPrivacy: https://easylist.to/easylist/easyprivacy.txt
10. oisd: https://big.oisd.nl/domainswild2
11. StevenBlack Unified Hosts: https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts
12. Ad filter list by Disconnect: https://s3.amazonaws.com/lists.disconnect.me/simple_ad.txt
13. Basic tracking list by Disconnect: https://s3.amazonaws.com/lists.disconnect.me/simple_tracking.txt
14. NextDNS CNAME Cloaking Blocklist: https://raw.githubusercontent.com/nextdns/cname-cloaking-blocklist/master/domains

### Install

First install [Bun](https://bun.sh/) and [Git](https://git-scm.com/downloads) in your system.

```bash
git clone https://github.com/touhidurrr/blocklists-manager.git
cd blocklists-manager
bun install -f
```

### Run

```bash
bun start
```
