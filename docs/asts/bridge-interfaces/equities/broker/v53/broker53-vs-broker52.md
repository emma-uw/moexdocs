---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Broker
sidebar_label: Broker · v52 → v53
---

﻿

# Changes in interface Broker

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

| [TABLE FIRMS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft14mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [WEEKENDSESSION](#ft14mo15) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [FIRMS](#t14m).WEEKENDSESSION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Availability in additional weekend session |
| Description | Флаг допуска фирмы до торгов в дополнительной сессии выходного дня |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE NEGDEALS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft19mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft19mo79) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [NEGDEALS](#t19m).TRADESESSIONDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading session date |
| Description | Trading session date of registration of order |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ONENEGDEAL](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft20mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft20mo79) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONENEGDEAL](#t20m).TRADESESSIONDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading session date |
| Description | Trading session date of registration of order |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ONEORDER](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft21mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft21mo78) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ENTRYDATE](#ft21mo79) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONEORDER](#t21m).TRADESESSIONDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading session date |
| Description | Trading session date of registration of order |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [ONEORDER](#t21m).ENTRYDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Registration date |
| Description | Order registration calendar date |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ORDERS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft23mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft23mo78) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ENTRYDATE](#ft23mo79) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERS](#t23m).TRADESESSIONDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading session date |
| Description | Trading session date of registration of order |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [ORDERS](#t23m).ENTRYDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Registration date |
| Description | Order registration calendar date |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE QUOTES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft26mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft26mo25) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ENTRYDATE](#ft26mo26) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [QUOTES](#t26m).TRADESESSIONDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading session date |
| Description | Trading session date of registration of order |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTES](#t26m).ENTRYDATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Registration date |
| Description | Order registration calendar date |
| Size | 8 |
| Type | DATE |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE SECURITIES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft35mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [WEEKENDSESSION](#ft35mo100) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t35m).WEEKENDSESSION | Status: Added |
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


[Changes in output fields](#ft42mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft42mo8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TESYSTIME](#t42m).TRADESESSIONDATE | Status: Added |
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


[Changes in output fields](#ft43mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft43mo79) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRADES](#t43m).TRADESESSIONDATE | Status: Added |
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

| [TABLE USTRADES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft57mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft57mo92) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [USTRADES](#t57m).TRADESESSIONDATE | Status: Added |
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

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 06.02.2025 14:14:53
