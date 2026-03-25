---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Broker
sidebar_label: Broker · v49 → v50
---

﻿

# Changes in interface Broker

[Show all changes](#nowhere)  


## Changes in tables

| [TABLE CLIENTCODETYPE](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Client code types |
| Description | Directory of client code types |
| Updateable | No |
| ClearOnUpdate | No |
| SystemIndex | 0 |


[Changes in output fields](#ft7ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ID](#ft7ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft7ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [CLIENTCODETYPE](#t7a).ID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Client type |
| Description | Form of client identification |
| Size | 2 |
| Type | CHAR |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| OUT [CLIENTCODETYPE](#t7a).DESCRIPTION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Description |
| Size | 128 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 06.05.2024 11:42:45
