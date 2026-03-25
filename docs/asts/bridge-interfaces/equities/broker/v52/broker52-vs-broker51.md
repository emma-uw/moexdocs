---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Broker
sidebar_label: Broker · v51 → v52
---

﻿

# Changes in interface Broker

[Show all changes](#nowhere)  


## Changes in tables

| [TABLE CLIENTCODES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft7mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CATEGORY](#ft7mo14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [CLIENTCODES](#t7m).CATEGORY | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Clientcodes Category |
| Size | 20 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE EXT_ORDERBOOK](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft13mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CALLOPTIONYIELD](#ft13mo10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [EXT_ORDERBOOK](#t13m).CALLOPTIONYIELD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Yield to call-option date |
| Description | Yield to call-option date |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE SECACCINT](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft32mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [IMPLIEDFLAG](#ft32mo8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECACCINT](#t32m).IMPLIEDFLAG | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Implied value |
| Size | 1 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE SECURITIES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft35mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CALLOPTIONDATE](#ft35mo85) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [CALLOPTIONYIELD](#ft35mo98) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [CALLOPTIONDURATION](#ft35mo99) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t35m).CALLOPTIONDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Call-option date |
| Description | Call-option date |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECURITIES](#t35m).CALLOPTIONYIELD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Yield at WAPrice to call-option date |
| Description | Yield at WAPrice to call-option date |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECURITIES](#t35m).CALLOPTIONDURATION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Duration to call-option date |
| Description | Duration to the call option date, based on the Yield at WAPrice or Yield at Last Market Price |
| Size | 7.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE UNDERWRITERS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft52mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ISDEFAULT](#ft52mo4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [UNDERWRITERS](#t52m).ISDEFAULT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Default underwriter |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 06.12.2024 11:08:49
