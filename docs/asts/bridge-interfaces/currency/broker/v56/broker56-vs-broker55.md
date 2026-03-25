---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Broker
sidebar_label: Broker · v55 → v56
---

﻿

# Changes in interface Broker

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


[Changes in output fields](#ft3mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CSPECIAL](#ft3mo30) | Modified |  |  |  |  |  | + |  |  |  |  |  |  |

| OUT [BANKACC](#t3m).CSPECIAL | Status: Modified |
| --- | --- |

| Property | New value | Previous value |
| --- | --- | --- |
| Enum | TCSpecial | TYesNo |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 05.12.2025 12:02:19
