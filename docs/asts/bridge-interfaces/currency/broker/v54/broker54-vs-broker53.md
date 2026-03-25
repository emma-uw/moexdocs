---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Broker
sidebar_label: Broker · v53 → v54
---

﻿

# Changes in interface Broker

[Show all changes](#nowhere)  


## Changes in enumeration types

| [ENUM TRMCheckFlags](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Check flags |
| Size | 1 |
| Type | ekCombo |


| Constant | Status | New value |
| --- | --- | --- |
|  | Added | #0, "All checks", " " |
| U | Added | #1, "Without single limit check", "U" |
| C | Added | #2, "Unconditional transfer", "C" |

## Changes in transactions

| [TRANS COMPLEX_TRANSFER](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa5mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMCHECKFLAGS](#fa5mi22) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [COMPLEX_TRANSFER](#a5m).RMCHECKFLAGS | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Check flags |
| Size | 1 |
| Type | CHAR |
| Enum | TRMCheckFlags |
| NOT NULL | No |
| VarBlock | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 25.04.2025 16:32:42
