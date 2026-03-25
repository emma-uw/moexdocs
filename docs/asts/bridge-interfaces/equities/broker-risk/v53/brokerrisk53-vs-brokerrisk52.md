---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface BrokerRisk
sidebar_label: BrokerRisk · v52 → v53
---

﻿

# Changes in interface BrokerRisk

[Show all changes](#nowhere)  


## Changes in tables

| [TABLE BANKACC](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft3mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [WEEKENDSESSION](#ft3mo32) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [BANKACC](#t3m).WEEKENDSESSION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Availability in additional weekend session |
| Description | Флаг допуска РК до торгов в дополнительной сессии выходного дня |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE RESYSTIME](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft15mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft15mo8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RESYSTIME](#t15m).TRADESESSIONDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading session date |
| Description | Trading session date |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE TRADES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft29mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft29mo52) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRADES](#t29m).TRADESESSIONDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trade session date |
| Description | Trading session date of registration of trade |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 06.02.2025 14:15:46
