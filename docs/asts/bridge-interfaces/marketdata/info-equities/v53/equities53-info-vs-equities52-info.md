---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Info
sidebar_label: Info · Equities v52 → v53
---

﻿

# Changes in interface Info

[Show all changes](#nowhere)  


## Changes in tables

| [TABLE ALL_TRADES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft0mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft0mo28) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [TRADEDATE](#ft0mo29) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ALL_TRADES](#t0m).TRADESESSIONDATE | Status: Added |
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

| OUT [ALL_TRADES](#t0m).TRADEDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trade date |
| Description | Trade calendar date |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE SECURITIES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft12mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [WEEKENDSESSION](#ft12mo100) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t12m).WEEKENDSESSION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Availability in additional weekend session |
| Description | Флаг допуска бумаги до торгов в дополнительной сессии выходного дня |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE TESYSTIME](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft17mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft17mo8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TESYSTIME](#t17m).TRADESESSIONDATE | Status: Added |
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

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 07.02.2025 10:55:25
