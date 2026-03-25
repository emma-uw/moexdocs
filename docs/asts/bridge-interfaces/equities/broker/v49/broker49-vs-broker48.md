---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Broker
sidebar_label: Broker · v48 → v49
---

﻿

# Changes in interface Broker

[Show all changes](#nowhere)  


## Changes in tables

| [TABLE NEGDEALS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft18mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CPUSERALIAS](#ft18mo64) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [NEGDEALS](#t18m).CPUSERALIAS | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Counterparty user alias |
| Description | Alias of the user the order is addressed to |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ONENEGDEAL](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft19mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CPUSERALIAS](#ft19mo64) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONENEGDEAL](#t19m).CPUSERALIAS | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Counterparty user alias |
| Description | Alias of the user the order is addressed to |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ONEORDER](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft20mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#ft20mo76) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONEORDER](#t20m).COMPLIANCEID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ORDERCOMPLIANCEID](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Справочник маркировки заявок по типу ввода |
| Updateable | No |
| ClearOnUpdate | No |
| SystemIndex | 0 |


[Changes in output fields](#ft21ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ID](#ft21ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft21ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERCOMPLIANCEID](#t21a).ID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| OUT [ORDERCOMPLIANCEID](#t21a).DESCRIPTION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Description |
| Size | 128 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ORDERS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft21mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#ft21mo76) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERS](#t21m).COMPLIANCEID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

## Changes in transactions

| [TRANS AUCTION_MKT_ORDER](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa0mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#fa0mi11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [AUCTION_MKT_ORDER](#a0m).COMPLIANCEID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| [TRANS ORDER](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa24mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#fa24mi11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [ORDER](#a24m).COMPLIANCEID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| [TRANS ORDER_AMEND](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa25mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#fa25mi14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [ORDER_AMEND](#a25m).COMPLIANCEID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 30.01.2024 15:03:56
