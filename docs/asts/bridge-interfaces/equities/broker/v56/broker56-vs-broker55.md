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

| [TABLE ALL_TRADES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft0mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ZSPREAD](#ft0mo30) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ALL_TRADES](#t0m).ZSPREAD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread |
| Description | Z-spread calculated by the transaction price |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

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

| [TABLE BONDSUBTYPE](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Подвид облигации |
| Description | Классификатор подвида облигаций |
| Updateable | No |
| ClearOnUpdate | No |
| SystemIndex | 0 |
[Changes in output fields](#ft7ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [BONDSUBTYPE](#ft7ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft7ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [BONDSUBTYPE](#t7a).BONDSUBTYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Подвид облигации |
| Description | Классификатор подвида облигаций |
| Size | 2 |
| Type | INTEGER |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| OUT [BONDSUBTYPE](#t7a).DESCRIPTION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Description |
| Size | 128 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE BONDTYPE](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Вид облигации |
| Description | Классификатор вида облигаций |
| Updateable | No |
| ClearOnUpdate | No |
| SystemIndex | 0 |
[Changes in output fields](#ft8ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [BONDTYPE](#ft8ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft8ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [BONDTYPE](#t8a).BONDTYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Вид облигации |
| Description | Классификатор вида облигаций |
| Size | 2 |
| Type | INTEGER |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| OUT [BONDTYPE](#t8a).DESCRIPTION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Description |
| Size | 128 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE EXT_ORDERBOOK](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft13mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ZSPREAD](#ft13mo11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [CALLOPTIONZSPREAD](#ft13mo12) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [EXT_ORDERBOOK](#t13m).ZSPREAD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread |
| Description | Z-spread on the quote price |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [EXT_ORDERBOOK](#t13m).CALLOPTIONZSPREAD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-спред к колл-опциону |
| Description | Z-spread to the call option"s expiration date based on the quote price |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE NEGDEALS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft19mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [MATCHEDVALUE](#ft19mo80) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [PERCENTPERIOD](#ft19mo81) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [ZSPREAD](#ft19mo82) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [NEGDEALS](#t19m).MATCHEDVALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Completed value |
| Description | Total value of all trades for this order |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [NEGDEALS](#t19m).PERCENTPERIOD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Interest payment period |
| Size | 4 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [NEGDEALS](#t19m).ZSPREAD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread |
| Description | Z-spread of the bid price |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ONENEGDEAL](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft20mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [MATCHEDVALUE](#ft20mo80) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [PERCENTPERIOD](#ft20mo81) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [ZSPREAD](#ft20mo82) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONENEGDEAL](#t20m).MATCHEDVALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Completed value |
| Description | Total value of all trades for this order |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [ONENEGDEAL](#t20m).PERCENTPERIOD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Interest payment period |
| Size | 4 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [ONENEGDEAL](#t20m).ZSPREAD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread |
| Description | Z-spread of the bid price |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ONEORDER](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft21mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [MATCHEDVALUE](#ft21mo80) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ZSPREAD](#ft21mo81) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONEORDER](#t21m).MATCHEDVALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Completed value |
| Description | Total value of all trades for this order |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [ONEORDER](#t21m).ZSPREAD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread |
| Description | Z-spread of the bid price |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ORDERS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft23mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [MATCHEDVALUE](#ft23mo80) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ZSPREAD](#ft23mo81) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERS](#t23m).MATCHEDVALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Completed value |
| Description | Total value of all trades for this order |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [ORDERS](#t23m).ZSPREAD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread |
| Description | Z-spread of the bid price |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE SECURITIES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft36mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ZSPREADATPREVWAPRICE](#ft36mo86) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [BONDTYPE](#ft36mo87) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [BONDSUBTYPE](#ft36mo88) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [ZSPREAD](#ft36mo102) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [ZSPREADATWAPRICE](#ft36mo103) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [CALLOPTIONZSPREAD](#ft36mo104) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t36m).ZSPREADATPREVWAPRICE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread, based on the last day WA price |
| Description | Z-spread based on the previous trading day"s evaluation |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECURITIES](#t36m).BONDTYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Вид облигации |
| Description | Классификатор вида облигаций |
| Size | 2 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECURITIES](#t36m).BONDSUBTYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Подвид облигации |
| Description | Классификатор подвида облигаций |
| Size | 2 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECURITIES](#t36m).ZSPREAD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread for the last |
| Description | Z-spread at the price of the last trade |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECURITIES](#t36m).ZSPREADATWAPRICE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread, based on the WA price |
| Description | Z-spread based on the weighted average price |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECURITIES](#t36m).CALLOPTIONZSPREAD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread at WAPrice to call-option date |
| Description | Z-spread at WAPrice to call-option date |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE TRADES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft44mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [PERCENTPERIOD](#ft44mo80) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ZSPREAD](#ft44mo81) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRADES](#t44m).PERCENTPERIOD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Interest payment period |
| Size | 4 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [TRADES](#t44m).ZSPREAD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Z-spread |
| Description | Z-spread calculated by the transaction price |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE USTRADES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft58mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [PERCENTPERIOD](#ft58mo93) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [PLANNEDINTEREST](#ft58mo94) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [USTRADES](#t58m).PERCENTPERIOD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Interest payment period |
| Size | 4 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [USTRADES](#t58m).PLANNEDINTEREST | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Planned interest sum |
| Description | Sum of planned interim interest payments |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

## Changes in transactions

| [TRANS CCP_REPO_COMPLEX_NEGDEAL](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa3mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [PERCENTPERIOD](#fa3mi25) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [CCP_REPO_COMPLEX_NEGDEAL](#a3m).PERCENTPERIOD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Interest payment period |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| [TRANS CCP_REPO_NEGDEAL](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa4mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [PERCENTPERIOD](#fa4mi24) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [CCP_REPO_NEGDEAL](#a4m).PERCENTPERIOD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Interest payment period |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 05.12.2025 12:06:41
