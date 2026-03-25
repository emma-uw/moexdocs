---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface BrokerRisk
sidebar_label: BrokerRisk · v54 → v55
---

﻿

# Changes in interface BrokerRisk

[Show all changes](#nowhere)  


## Changes in enumeration types

| [ENUM TInstrType](#nowhere) | Status: Modified |
| --- | --- |


| Constant | Status | New value |
| --- | --- | --- |
| P | Added | #5, "Composite bid" |

| [ENUM TSpecSettleMode](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Special mode of settlement |
| Size | 1 |
| Type | ekCheck |


| Constant | Status | New value |
| --- | --- | --- |
| N | Added | #0, "No", " " |
| Y | Added | #1, "Yes", "Yes" |
| P | Added | #2, "External settlement", "External settlement" |
| R | Added | #3, "Special mode of settlement with position roll", "Roll" |

| [ENUM TTradeType](#nowhere) | Status: Modified |
| --- | --- |


| Constant | Status | New value |
| --- | --- | --- |
| O | Added | #9, "Combined offer", "CO" |
| V | Added | #10, "Specialized trade", "ST" |
| v | Added | #11, "Specialized trade on the basis", "SB" |
| o | Added | #12, "Combined negotiated offer", "CNO" |
| U | Added | #13, "Specialized negotiated trade", "SNT" |
| u | Added | #14, "Spcialized negotiated trade on the basis", "SNB" |

## Changes in tables

| [TABLE ASSETS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft0mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [SPECSETTLEMODE](#ft0mo34) | Modified |  |  |  |  |  | + |  |  |  |  |  |  |

| OUT [ASSETS](#t0m).SPECSETTLEMODE | Status: Modified |
| --- | --- |

| Property | New value | Previous value |
| --- | --- | --- |
| Enum | TSpecSettleMode | TYesNo |
Document created by ExIfcCmp.dll (ASTSExplorer.exe) 19.09.2025 11:55:16
