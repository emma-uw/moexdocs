---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Broker
sidebar_label: Broker · v54 → v55
---

﻿

# Changes in interface Broker

[Show all changes](#nowhere)  


## Changes in enumeration types

| [ENUM TIndexIndicator](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Service type |
| Size | 1 |
| Type | ekGroup |


| Constant | Status | New value |
| --- | --- | --- |
| 0 | Added | #0, "SecNormal" |
| 1 | Added | #1, "SecIndex" |

| [ENUM TMktLimit](#nowhere) | Status: Modified |
| --- | --- |


| Constant | Status | New value |
| --- | --- | --- |
| W | Added | #3, "Weighted average price limit order", "С" |

## Changes in tables

| [TABLE SECDERIV](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Derivatives |
| Description | Derivatives |
| Updateable | No |
| ClearOnUpdate | No |
| SystemIndex | 0 |


[Changes in output fields](#ft33ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [SECINDEXFLAG](#ft33ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [SECBOARD](#ft33ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [SECCODE](#ft33ao3) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [DERIVTYPE](#ft33ao4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [LSECBOARD](#ft33ao6) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [LSECCODE](#ft33ao7) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [QUANTITY](#ft33ao8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [DORDER](#ft33ao9) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [SETTLECODE](#ft33ao10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [DREVERSE](#ft33ao11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECDERIV](#t33a).SECINDEXFLAG | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Security or index flag |
| Size | 1 |
| Type | INDEXFLAG |
| Enum | TIndexIndicator |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECDERIV](#t33a).SECBOARD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Derivative board ID |
| Description | Derivative instrument board ID |
| Size | 4 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECDERIV](#t33a).SECCODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Derivative security ID |
| Description | Dervative instrument security ID |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | Yes |
| NotSharp | No |

| OUT [SECDERIV](#t33a).DERIVTYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Derivative type |
| Size | 1 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECDERIV](#t33a).LSECBOARD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Board, add. restrict. |
| Description | Board ID for the security in additional restriction |
| Size | 4 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECDERIV](#t33a).LSECCODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Underlying security ID |
| Description | Underlying instrument security ID |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | Yes |
| NotSharp | No |

| OUT [SECDERIV](#t33a).QUANTITY | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Lots |
| Description | Quantity, expressed in lots |
| Size | 16 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECDERIV](#t33a).DORDER | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Ordinal number |
| Description | Derivative instrument trade ordinal number |
| Size | 1 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECDERIV](#t33a).SETTLECODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Settlement code |
| Description | Settlement code for a trade with an underlying intrument |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECDERIV](#t33a).DREVERSE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Reverse |
| Description | Reverse direction of a trade with an underlying instrument |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE SECURITIES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft35mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [MAINSESSIONWAPRICE](#ft35mo101) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t35m).MAINSESSIONWAPRICE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | MWA |
| Description | Weighted-average price of the main session |
| Size | 17 |
| Type | FLOAT |
| Key | No |
| SecCode | No |
| NotSharp | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 26.08.2025 1:03:47
