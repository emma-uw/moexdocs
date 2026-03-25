---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface BrokerRisk
sidebar_label: BrokerRisk · v50 → v51
---

﻿

# Changes in interface BrokerRisk

[Show all changes](#nowhere)  


## Changes in enumeration types

| [ENUM TDepAccType](#nowhere) | Status: Modified |
| --- | --- |


| Constant | Status | Previous value |
| --- | --- | --- |
| I | Deleted | #1, "Client" |
| O | Deleted | #2, "Correspondent" |
| D | Deleted | #3, "Default account for the currency market" |
| T | Deleted | #4, "Custodian" |
| S | Deleted | #5, "Custodian" |
| V | Deleted | #6, "Clients of levels 2 and 3", "2, 3 lev. clients" |

| [ENUM TPosnGroup](#nowhere) | Status: Modified |
| --- | --- |


| Constant | Status | Previous value |
| --- | --- | --- |
| T | Deleted | #3, "Positions by trades", "Trades" |
| S | Deleted | #4, "Positions under settlements", "Settle" |
| P | Deleted | #5, "Positions by currencies", "Curr" |
| X | Deleted | #7, "", "Intermediate tax" |

## Changes in tables

| [TABLE ASSETS](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft0mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [FLOATINGRATEPCTRISKFACTOR](#ft0mo39) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ASSETS](#t0m).FLOATINGRATEPCTRISKFACTOR | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Percent risk factor |
| Size | 6.3 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE RMPOSTYPE](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft11mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft11mo1) | Modified |  |  |  |  |  |  |  | + |  |  |  |  |
| 2 | [PARTIALPERCENTRISK](#ft11mo6) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RMPOSTYPE](#t11m).RMPOSTYPE | Status: Modified |
| --- | --- |

| Property | New value | Previous value |
| --- | --- | --- |
| Key | Yes | No |

| OUT [RMPOSTYPE](#t11m).PARTIALPERCENTRISK | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Partial percent risk |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE RM_HOLD_DETL](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Liabilities and Claims for Assets |
| Updateable | Yes |
| ClearOnUpdate | No |
| SystemIndex | 0 |
[Changes in input fields](#ft12ai)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [FIRMID](#ft12ai2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
[Changes in output fields](#ft12ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [FIRMID](#ft12ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ACCOUNT](#ft12ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [BANKACCID](#ft12ao3) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [ASSET1](#ft12ao6) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [ASSET2](#ft12ao7) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [DATE](#ft12ao8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [ASSET1CREDITBALANCE](#ft12ao9) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [ASSET1DEBITBALANCE](#ft12ao10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [ASSET1VALUE](#ft12ao11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [ASSET1VALUECREDIT](#ft12ao12) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 | [ASSET1VALUEDEBIT](#ft12ao13) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | [ASSET1VALUEBUY](#ft12ao14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 | [ASSET1VALUESELL](#ft12ao15) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | [ASSET2CREDITBALANCE](#ft12ao16) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | [ASSET2DEBITBALANCE](#ft12ao17) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | [ASSET2VALUE](#ft12ao18) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | [ASSET2VALUECREDIT](#ft12ao19) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 | [ASSET2VALUEDEBIT](#ft12ao20) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 | [ASSET2VALUEBUY](#ft12ao21) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 20 | [ASSET2VALUESELL](#ft12ao22) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [RM_HOLD_DETL](#t12a).FIRMID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Firm |
| Description | Firm ID |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| OUT [RM_HOLD_DETL](#t12a).FIRMID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Firm |
| Description | Firm ID |
| Size | 12 |
| Type | CHAR |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ACCOUNT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading account |
| Description | Trading account number |
| Size | 12 |
| Type | CHAR |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).BANKACCID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Bank account |
| Description | Settlement account/code ID in the settlement house |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET1 | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Asset1 (security) |
| Size | 12 |
| Type | CHAR |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET2 | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Asset2 (for settlement) |
| Size | 12 |
| Type | CHAR |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).DATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Settlement date |
| Size | 8 |
| Type | DATE |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET1CREDITBALANCE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Opening claim (asset1) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET1DEBITBALANCE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Opening liability (asset1) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET1VALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Nett (asset1) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET1VALUECREDIT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Claim (asset1) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET1VALUEDEBIT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Liability (asset1) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET1VALUEBUY | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Claims in orders (asset1) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET1VALUESELL | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Liabilities in orders (asset1) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET2CREDITBALANCE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Opening claim (asset2) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET2DEBITBALANCE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Opening liability (asset2) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET2VALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Nett (asset2) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET2VALUECREDIT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Claim (asset2) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET2VALUEDEBIT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Liability (asset2) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET2VALUEBUY | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Claims in orders (asset2) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [RM_HOLD_DETL](#t12a).ASSET2VALUESELL | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Liabilities in orders (asset2) |
| Size | 16.2 |
| Type | FIXED |
| Key | No |
| SecCode | No |
| NotSharp | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 05.09.2024 16:48:50
