---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface BrokerRisk
sidebar_label: BrokerRisk · v49 → v50
---

﻿

# Changes in interface BrokerRisk

[Show all changes](#nowhere)  


## Changes in tables

| [TABLE RMPOSTYPE](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Open position types |
| Description | Open position types for combination of asset and settlement date |
| Updateable | No |
| ClearOnUpdate | No |
| SystemIndex | 0 |


[Changes in output fields](#ft11ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft11ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft11ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [LATDESCRIPTION](#ft11ao3) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [CALCPERCENTRISK](#ft11ao4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [ASCOLLATERAL](#ft11ao5) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RMPOSTYPE](#t11a).RMPOSTYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Open position type |
| Description | Open position type for combination of asset and settlement date |
| Size | 1 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RMPOSTYPE](#t11a).DESCRIPTION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Description |
| Size | 50 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RMPOSTYPE](#t11a).LATDESCRIPTION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | English description |
| Size | 50 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RMPOSTYPE](#t11a).CALCPERCENTRISK | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Percent risk calculation |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RMPOSTYPE](#t11a).ASCOLLATERAL | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Included as collateral |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE RM_POSN](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft12mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft12mo14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RM_POSN](#t12m).RMPOSTYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Open position type |
| Description | Open position type for combination of asset and settlement date |
| Size | 1 |
| Type | CHAR |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| [TABLE RM_PRICERANGE_FIRM](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft14mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COLLATERAL](#ft14mo9) | Deleted |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RM_PRICERANGE_FIRM](#t14m).COLLATERAL | Status: Deleted |
| --- | --- |

| Property | Previous value |
| --- | --- |
| Caption | Accepted as collateral |
| Description | Asset can be included into collateral |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNoSpace |
| Key | No |
| SecCode | No |
| NotSharp | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 08.05.2024 17:21:46
