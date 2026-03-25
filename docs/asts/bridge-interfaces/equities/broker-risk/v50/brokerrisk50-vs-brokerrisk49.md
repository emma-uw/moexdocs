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

| [TABLE ASSETS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft1mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [GCPOOLCOLLATERALPERCENT](#ft1mo38) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ASSETS](#t1m).GCPOOLCOLLATERALPERCENT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Partial collateral for GC pools |
| Description | The value as a percentage of funds in GC pools, which is accepted as collateral |
| Size | 6.3 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE RMPOSTYPE](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Open position types |
| Description | Open position types for combination of asset and settlement date |
| Updateable | No |
| ClearOnUpdate | No |
| SystemIndex | 0 |


[Changes in output fields](#ft16ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft16ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft16ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [LATDESCRIPTION](#ft16ao3) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [CALCPERCENTRISK](#ft16ao4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [ASCOLLATERAL](#ft16ao5) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RMPOSTYPE](#t16a).RMPOSTYPE | Status: Added |
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

| OUT [RMPOSTYPE](#t16a).DESCRIPTION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Description |
| Size | 50 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RMPOSTYPE](#t16a).LATDESCRIPTION | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | English description |
| Size | 50 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RMPOSTYPE](#t16a).CALCPERCENTRISK | Status: Added |
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

| OUT [RMPOSTYPE](#t16a).ASCOLLATERAL | Status: Added |
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

| [TABLE RM_HOLD](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft17mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft17mo16) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RM_HOLD](#t17m).RMPOSTYPE | Status: Added |
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

| [TABLE RM_POSN](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft20mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft20mo14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RM_POSN](#t20m).RMPOSTYPE | Status: Added |
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


[Changes in output fields](#ft22mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COLLATERAL](#ft22mo9) | Deleted |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ZERO_RTL](#ft22mo10) | Deleted |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RM_PRICERANGE_FIRM](#t22m).COLLATERAL | Status: Deleted |
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

| OUT [RM_PRICERANGE_FIRM](#t22m).ZERO_RTL | Status: Deleted |
| --- | --- |

| Property | Previous value |
| --- | --- |
| Caption | Flag of zeroing the lower bound |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 08.05.2024 17:24:26
