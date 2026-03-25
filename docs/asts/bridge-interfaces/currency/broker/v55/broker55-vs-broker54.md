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

| [ENUM TInstrType](#nowhere) | Status: Modified |
| --- | --- |


| Constant | Status | New value |
| --- | --- | --- |
| P | Added | #5, "Composite bid" |

| [ENUM TTradeType](#nowhere) | Status: Modified |
| --- | --- |


| Constant | Status | New value |
| --- | --- | --- |
| O | Added | #9, "Combined offer", "CO" |
| V | Added | #10, "Specialized trade", "ST" |
| v | Added | #11, "Specialized trade on the basis", "SB" |
| o | Added | #12, "Combined negotiated offer", "CNO" |
| U | Added | #13, "Specialized negotiated trade", "SNT" |
| u | Added | #14, "Spcialized negotiated trade on the basis", "SNB" |

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


[Changes in output fields](#ft24ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [SECINDEXFLAG](#ft24ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [SECBOARD](#ft24ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [SECCODE](#ft24ao3) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [DERIVTYPE](#ft24ao4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [LSECINDEXFLAG](#ft24ao5) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [LSECBOARD](#ft24ao6) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [LSECCODE](#ft24ao7) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [QUANTITY](#ft24ao8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [DORDER](#ft24ao9) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [SETTLECODE](#ft24ao10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 | [DREVERSE](#ft24ao11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECDERIV](#t24a).SECINDEXFLAG | Status: Added |
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

| OUT [SECDERIV](#t24a).SECBOARD | Status: Added |
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

| OUT [SECDERIV](#t24a).SECCODE | Status: Added |
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

| OUT [SECDERIV](#t24a).DERIVTYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Derivative type |
| Size | 1 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECDERIV](#t24a).LSECINDEXFLAG | Status: Added |
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

| OUT [SECDERIV](#t24a).LSECBOARD | Status: Added |
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

| OUT [SECDERIV](#t24a).LSECCODE | Status: Added |
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

| OUT [SECDERIV](#t24a).QUANTITY | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Lots |
| Description | Volume, expressed in lots |
| Size | 16 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [SECDERIV](#t24a).DORDER | Status: Added |
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

| OUT [SECDERIV](#t24a).SETTLECODE | Status: Added |
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

| OUT [SECDERIV](#t24a).DREVERSE | Status: Added |
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

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 19.09.2025 11:51:06
