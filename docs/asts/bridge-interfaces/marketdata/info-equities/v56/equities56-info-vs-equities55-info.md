---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Info
sidebar_label: Info · Equities v55 → v56
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

| [TABLE BONDSUBTYPE](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Подвид облигации |
| Description | Классификатор подвида облигаций |
| Updateable | No |
| ClearOnUpdate | No |
| SystemIndex | 0 |
[Changes in output fields](#ft4ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [BONDSUBTYPE](#ft4ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft4ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [BONDSUBTYPE](#t4a).BONDSUBTYPE | Status: Added |
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

| OUT [BONDSUBTYPE](#t4a).DESCRIPTION | Status: Added |
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
[Changes in output fields](#ft5ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [BONDTYPE](#ft5ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft5ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [BONDTYPE](#t5a).BONDTYPE | Status: Added |
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

| OUT [BONDTYPE](#t5a).DESCRIPTION | Status: Added |
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


[Changes in output fields](#ft6mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ZSPREAD](#ft6mo11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [CALLOPTIONZSPREAD](#ft6mo12) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [EXT_ORDERBOOK](#t6m).ZSPREAD | Status: Added |
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

| OUT [EXT_ORDERBOOK](#t6m).CALLOPTIONZSPREAD | Status: Added |
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

| [TABLE ORDERBOOK](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft9mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CALLOPTIONYIELD](#ft9mo10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ZSPREAD](#ft9mo11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [CALLOPTIONZSPREAD](#ft9mo12) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERBOOK](#t9m).CALLOPTIONYIELD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Yield to call-option date |
| Description | Yield to call-option date |
| Size | 9.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [ORDERBOOK](#t9m).ZSPREAD | Status: Added |
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

| OUT [ORDERBOOK](#t9m).CALLOPTIONZSPREAD | Status: Added |
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

| [TABLE SECURITIES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft12mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ZSPREADATPREVWAPRICE](#ft12mo86) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [BONDTYPE](#ft12mo87) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [BONDSUBTYPE](#ft12mo88) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [ZSPREAD](#ft12mo102) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [ZSPREADATWAPRICE](#ft12mo103) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [CALLOPTIONZSPREAD](#ft12mo104) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t12m).ZSPREADATPREVWAPRICE | Status: Added |
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

| OUT [SECURITIES](#t12m).BONDTYPE | Status: Added |
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

| OUT [SECURITIES](#t12m).BONDSUBTYPE | Status: Added |
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

| OUT [SECURITIES](#t12m).ZSPREAD | Status: Added |
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

| OUT [SECURITIES](#t12m).ZSPREADATWAPRICE | Status: Added |
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

| OUT [SECURITIES](#t12m).CALLOPTIONZSPREAD | Status: Added |
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

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 05.12.2025 12:08:24
