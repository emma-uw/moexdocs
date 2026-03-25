---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface BrokerRisk
sidebar_label: BrokerRisk · v55 → v56
---

﻿

# Changes in interface BrokerRisk

[Show all changes](#nowhere)  


## Changes in enumeration types

| [ENUM TCSpecial](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Тип РК |
| Size | 1 |
| Type | ekCombo |


| Constant | Status | New value |
| --- | --- | --- |
| N | Added | #0, "" |
| Y | Added | #1, "C", "С" |
| I | Added | #2, "I", "Ин" |

## Changes in tables

| [TABLE BANKACC](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft2mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CSPECIAL](#ft2mo30) | Modified |  |  |  |  |  | + |  |  |  |  |  |  |

| OUT [BANKACC](#t2m).CSPECIAL | Status: Modified |
| --- | --- |

| Property | New value | Previous value |
| --- | --- | --- |
| Enum | TCSpecial | TYesNo |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 05.12.2025 12:10:17
