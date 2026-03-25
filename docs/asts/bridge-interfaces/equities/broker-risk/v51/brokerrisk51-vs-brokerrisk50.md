---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface BrokerRisk
sidebar_label: BrokerRisk · v50 → v51
---

﻿

# Changes in interface BrokerRisk

[Show all changes](#nowhere)  


## Changes in enumeration types

| [ENUM TDepAccType](#nowhere) | Status: Modified |
| --- | --- |


| Constant | Status | New value |
| --- | --- | --- |
| P | Added | #4, "Unrestricted frgn nom. holder" |
| Q | Added | #5, "Restricted frgn nom. holder" |
| R | Added | #6, "Brokerage" |

## Changes in tables

| [TABLE ASSETS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft1mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [FLOATINGRATEPCTRISKFACTOR](#ft1mo39) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ASSETS](#t1m).FLOATINGRATEPCTRISKFACTOR | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Percent risk factor |
| Size | 6.3 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE RMPOSTYPE](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft16mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft16mo1) | Modified |  |  |  |  |  |  |  | + |  |  |  |  |
| 2 | [PARTIALPERCENTRISK](#ft16mo6) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RMPOSTYPE](#t16m).RMPOSTYPE | Status: Modified |
| --- | --- |

| Property | New value | Previous value |
| --- | --- | --- |
| Key | Yes | No |

| OUT [RMPOSTYPE](#t16m).PARTIALPERCENTRISK | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Partial percent risk |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE TRANTYPES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft30mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CLEARINGPROC](#ft30mo4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [RMPOSTYPE](#ft30mo5) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRANTYPES](#t30m).CLEARINGPROC | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Termination of obligations |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [TRANTYPES](#t30m).RMPOSTYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Open position type |
| Description | Open position type for combination of asset and settlement date |
| Size | 1 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE TRDACC](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft31mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ENABLEGTTORDER](#ft31mo24) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRDACC](#t31m).ENABLEGTTORDER | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | GTT orders |
| Description | Will the active orders of this trdacc, which remained unfulfilled in the main session, move to the evening session |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 08.08.2024 18:28:22
