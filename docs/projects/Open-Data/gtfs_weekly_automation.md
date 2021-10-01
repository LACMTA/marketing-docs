---
tags:
  - DRAFT
---

# Automated Weekly Updates

## Overview

Weekly, a new `calendar_dates.txt` file to upload to the GTFS_bus repository for the foreseeable future.

It's generated automatically every Wednesday for a rolling 2-week period that starts the following Monday.  It should go online by Thursday.

Lorna Vargas is the ITS contact (under Rollin).  She can provide us with the FTP location where we need to pull it from.

After it gets generated (to the FTP location), data for the Dodger Stadium and SoFi Stadium Express services will need to be added.

We can filter the data and pull just the next 2 weeks from the Dodger Express and SoFi Express data.

## Proposed Flow

HASTUS generates `calendar_dates.txt` on Wednesday and the file is dumped to an FTP folder.

We can pick up the file from the FTP server.

## Tasks

https://github.com/LACMTA/open-data/issues/2


## Dodger Express and SoFi Express Data

This data is it, unless Rollin lets us know it changes.

```
DSE-US-1210,20210101,1
DSE-US-1310,20210101,1
DSE-US-1615,20210101,1
DSE-US-1650,20210101,1
DSE-US-1810,20210101,1
DSE-US-1910,20210101,1
DSE-US-1310,20210912,1
DSE-US-1910,20210913,1
DSE-US-1910,20210914,1
DSE-US-1910,20210915,1
DSE-US-1910,20210928,1
DSE-US-1910,20210929,1
DSE-US-1910,20210930,1
DSE-US-1910,20211001,1
DSE-US-1810,20211002,1
DSE-US-1210,20211003,1
DSE-HG-1210,20210101,1
DSE-HG-1310,20210101,1
DSE-HG-1615,20210101,1
DSE-HG-1650,20210101,1
DSE-HG-1810,20210101,1
DSE-HG-1910,20210101,1
DSE-HG-1310,20210912,1
DSE-HG-1910,20210913,1
DSE-HG-1910,20210914,1
DSE-HG-1910,20210915,1
DSE-HG-1910,20210928,1
DSE-HG-1910,20210929,1
DSE-HG-1910,20210930,1
DSE-HG-1910,20211001,1
DSE-HG-1810,20211002,1
DSE-HG-1210,20211003,1
SoFi_Stadium_Express_1900,20210101,1
SoFi_Stadium_Express_1630,20210101,1
SoFi_Stadium_Express_1720,20210912,1
SoFi_Stadium_Express_1305,20210919,1
SoFi_Stadium_Express_1305,20210926,1
SoFi_Stadium_Express_1305,20211003,1
SoFi_Stadium_Express_1720,20211004,1
SoFi_Stadium_Express_1305,20211010,1
SoFi_Stadium_Express_1305,20211024,1
SoFi_Stadium_Express_1305,20211031,1
SoFi_Stadium_Express_1720,20211107,1
SoFi_Stadium_Express_1305,20211114,1
SoFi_Stadium_Express_1720,20211121,1
SoFi_Stadium_Express_1305,20211205,1
SoFi_Stadium_Express_1305,20211212,1
SoFi_Stadium_Express_1720,20211216,1
SoFi_Stadium_Express_1305,20211219,1
SoFi_Stadium_Express_1305,20220102,1
SoFi_Stadium_Express_1305,20220109,1
```
