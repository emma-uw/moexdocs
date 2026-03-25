---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Broker
sidebar_label: Broker · v50 → v51
---

﻿

# Changes in interface Broker

[Show all changes](#nowhere)  


## Changes in enumeration types

| [ENUM TDepAccType](#nowhere) | Status: Modified |
| --- | --- |


| Constant | Status | New value |
| --- | --- | --- |
| P | Added | #4, "Unrestricted frgn nom. holder" |
| Q | Added | #5, "Restricted frgn nom. holder" |
| R | Added | #6, "Brokerage" |

## Changes in tables

| [TABLE NEGDEALS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft19mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#ft19mo78) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [NEGDEALS](#t19m).OPENREPOEVERGREENTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | EverGreen term |
| Description | Period until settlement of the second part of the REPO with open date |
| Size | 4 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE ONENEGDEAL](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft20mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#ft20mo78) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONENEGDEAL](#t20m).OPENREPOEVERGREENTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | EverGreen term |
| Description | Period until settlement of the second part of the REPO with open date |
| Size | 4 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE TRADES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft43mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#ft43mo78) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRADES](#t43m).OPENREPOEVERGREENTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | EverGreen term |
| Description | Period until settlement of the second part of the REPO with open date |
| Size | 4 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE TRDACC](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft48mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ENABLEGTTORDER](#ft48mo24) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRDACC](#t48m).ENABLEGTTORDER | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | GTT orders |
| Description | Will the active orders of this trdacc, which remained unfulfilled in the main session, move to the evening session |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE USTRADES](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft57mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#ft57mo91) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [USTRADES](#t57m).OPENREPOEVERGREENTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | EverGreen term |
| Description | Period until settlement of the second part of the REPO with open date |
| Size | 4 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

## Changes in transactions

| [TRANS CCP_REPO_COMPLEX_NEGDEAL](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa3mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#fa3mi24) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [CCP_REPO_COMPLEX_NEGDEAL](#a3m).OPENREPOEVERGREENTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | EverGreen term |
| Description | Period until settlement of the second part of the REPO with open date |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| [TRANS CCP_REPO_NEGDEAL](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa4mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#fa4mi23) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [CCP_REPO_NEGDEAL](#a4m).OPENREPOEVERGREENTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | EverGreen term |
| Description | Period until settlement of the second part of the REPO with open date |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| [TRANS EXT_REPO_COMPLEX_NEGDEAL](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa17mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#fa17mi30) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [EXT_REPO_COMPLEX_NEGDEAL](#a17m).OPENREPOEVERGREENTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | EverGreen term |
| Description | Period until settlement of the second part of the REPO with open date |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| [TRANS EXT_REPO_NEGDEAL](#nowhere) | Status: Modified |
| --- | --- |


[Changes in input fields](#fa18mi)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#fa18mi30) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [EXT_REPO_NEGDEAL](#a18m).OPENREPOEVERGREENTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | EverGreen term |
| Description | Period until settlement of the second part of the REPO with open date |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 08.08.2024 18:26:42
