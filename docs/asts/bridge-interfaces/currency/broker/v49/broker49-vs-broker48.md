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

| [TABLE ONEORDER](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft17mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#ft17mo76) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONEORDER](#t17m).COMPLIANCEID | Status: Added |
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


[Changes in output fields](#ft18ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ID](#ft18ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft18ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERCOMPLIANCEID](#t18a).ID | Status: Added |
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

| OUT [ORDERCOMPLIANCEID](#t18a).DESCRIPTION | Status: Added |
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


[Changes in output fields](#ft18mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#ft18mo76) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERS](#t18m).COMPLIANCEID | Status: Added |
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

| [TRANS ORDER](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa9mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#fa9mi11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [ORDER](#a9m).COMPLIANCEID | Status: Added |
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


[Changes in input fields](#fa10mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#fa10mi14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [ORDER_AMEND](#a10m).COMPLIANCEID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 30.01.2024 15:10:36
