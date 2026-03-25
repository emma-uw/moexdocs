---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Changes in interface Broker
sidebar_label: Broker · v02 → v03
---

﻿

# Changes in interface Broker

[Show all changes](#nowhere)  


## Changes in enumeration types

| [ENUM TQuoteStatus](#nowhere) | Status: Modified |
| --- | --- |


| Constant | Status | New value |
| --- | --- | --- |
| I | Added | #5, "Waiting for negdeals", "-I" |
| J | Added | #6, "Inactive after book building and matching time ran out", "-J" |
| M | Deleted | #1, "Matched", "+" |

| [ENUM TQuoteType](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Quote type |
| Description | Quote type |
| Size | 1 |
| Type | ekCombo |


| Constant | Status | New value |
| --- | --- | --- |
| B | Added | #0, "Basic quote (buy/sell)", "BASIC" |
| R | Added | #1, "REPO quote", "REPO" |

| [ENUM TYesNo](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Logical operator |
| Size | 1 |
| Type | ekCheck |


| Constant | Status | New value |
| --- | --- | --- |
| N | Added | #0, "No", " " |
| Y | Added | #1, "Yes", "Yes" |

## Changes in tables

| [TABLE NEGDEALQUOTELINK](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Quotes and negdeals correspondence |
| Description | Table contains list of quote IDs with correspondent negdeal IDs |
| Updateable | Yes |
| ClearOnUpdate | No |
| SystemIndex | 0 |


[Changes in output fields](#ft7ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [QUOTENO](#ft7ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ORDERNO](#ft7ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [NEGDEALQUOTELINK](#t7a).QUOTENO | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Quote number |
| Description | Quote ID number |
| Size | 12 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [NEGDEALQUOTELINK](#t7a).ORDERNO | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Order |
| Description | Order ID |
| Size | 12 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE QUOTE](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft7mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [SECBOARD](#ft7mo8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [QUOTETYPE](#ft7mo18) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [VALUE](#ft7mo19) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [REPOTERM](#ft7mo20) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [BENCHMARKID](#ft7mo21) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [SETTLECODE](#ft7mo22) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [ANONYMOUS](#ft7mo23) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [FULLAMOUNT](#ft7mo24) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [BOOKBUILDINGTIME](#ft7mo25) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [LIFETIME](#ft7mo26) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 | [ISOPENREPO](#ft7mo27) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | [BROKERREF](#ft7mo28) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 | [TRDACCID](#ft7mo29) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [QUOTE](#t7m).SECBOARD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Board |
| Description | Board ID for the security |
| Size | 4 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).QUOTETYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Quote type |
| Size | 1 |
| Type | CHAR |
| Enum | TQuoteType |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).VALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Value |
| Description | Value, expressed in the currency of settlement |
| Size | 16 |
| Type | FLOAT |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).REPOTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | REPO term |
| Description | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| Size | 4 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).BENCHMARKID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Benchmark |
| Description | Benchmark identifier |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).SETTLECODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Settlement code |
| Description | Settlement code for the trade |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).ANONYMOUS | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Anonymous quote |
| Description | Do not disclose quote"s initiator |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).FULLAMOUNT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Full amount flag |
| Description | If this flag is set, only negdeals with value equal to quote"s value are accepted |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).BOOKBUILDINGTIME | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Negdeal placement end time |
| Description | Time (HHMMSS) until which it"s allowed to place negdeals for this quote |
| Size | 6 |
| Type | TIME |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).LIFETIME | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Quote life time |
| Description | Time (HHMMSS) at which all active negdeals for this quote will be cancelled |
| Size | 6 |
| Type | TIME |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).ISOPENREPO | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Open date REPO |
| Description | Open date REPO |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).BROKERREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Broker reference |
| Description | Additional information entered by the trading firm (usually - client instruction number) |
| Size | 20 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE](#t7m).TRDACCID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading account |
| Description | Trading account number |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE QUOTEBOOK](#nowhere) | Status: Modified |
| --- | --- |


[Changes in output fields](#ft8mo)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [SECBOARD](#ft8mo5) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [QUOTETYPE](#ft8mo10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [VALUE](#ft8mo11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [REPOTERM](#ft8mo12) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [BENCHMARKID](#ft8mo13) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [SETTLECODE](#ft8mo14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [FULLAMOUNT](#ft8mo15) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [BOOKBUILDINGTIME](#ft8mo16) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [LIFETIME](#ft8mo17) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [ISOPENREPO](#ft8mo18) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [QUOTEBOOK](#t8m).SECBOARD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Board |
| Description | Board ID for the security |
| Size | 4 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTEBOOK](#t8m).QUOTETYPE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Quote type |
| Size | 1 |
| Type | CHAR |
| Enum | TQuoteType |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTEBOOK](#t8m).VALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Value |
| Description | Value, expressed in the currency of settlement |
| Size | 16 |
| Type | FLOAT |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTEBOOK](#t8m).REPOTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | REPO term |
| Description | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| Size | 4 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTEBOOK](#t8m).BENCHMARKID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Benchmark |
| Description | Benchmark identifier |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTEBOOK](#t8m).SETTLECODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Settlement code |
| Description | Settlement code for the trade |
| Size | 12 |
| Type | CHAR |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTEBOOK](#t8m).FULLAMOUNT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Full amount flag |
| Description | If this flag is set, only negdeals with value equal to quote"s value are accepted |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTEBOOK](#t8m).BOOKBUILDINGTIME | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Negdeal placement end time |
| Description | Time (HHMMSS) until which it"s allowed to place negdeals for this quote |
| Size | 6 |
| Type | TIME |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTEBOOK](#t8m).LIFETIME | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Quote life time |
| Description | Time (HHMMSS) at which all active negdeals for this quote will be cancelled |
| Size | 6 |
| Type | TIME |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTEBOOK](#t8m).ISOPENREPO | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Open date REPO |
| Description | Open date REPO |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | No |
| SecCode | No |
| NotSharp | No |

| [TABLE QUOTE_SEC](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Quote market data |
| Description | The table contains current quote-based market information for securities. |
| Updateable | Yes |
| ClearOnUpdate | No |
| SystemIndex | 0 |


[Changes in output fields](#ft11ao)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [SECBOARD](#ft11ao1) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [SECCODE](#ft11ao2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [BID](#ft11ao3) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [BIDDEPTHT](#ft11ao4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [NUMBIDS](#ft11ao5) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [OFFER](#ft11ao6) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [OFFERDEPTHT](#ft11ao7) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [NUMOFFERS](#ft11ao8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [TIME](#ft11ao9) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [LASTBID](#ft11ao10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 | [LASTBIDDEPTHT](#ft11ao11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | [LASTNUMBIDS](#ft11ao12) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 | [LASTOFFER](#ft11ao13) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | [LASTOFFERDEPTHT](#ft11ao14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | [LASTNUMOFFERS](#ft11ao15) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [QUOTE_SEC](#t11a).SECBOARD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Board |
| Description | Board ID for the security |
| Size | 4 |
| Type | CHAR |
| Key | Yes |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).SECCODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Security |
| Description | Security ID |
| Size | 12 |
| Type | CHAR |
| Key | Yes |
| SecCode | Yes |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).BID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Bid |
| Description | Best bid price |
| Size | 17 |
| Type | FLOAT |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).BIDDEPTHT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Total bid depth |
| Description | Total volume of all active buy quotes, expressed in lots |
| Size | 16 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).NUMBIDS | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Buy quotes number |
| Description | Number of active buy quotes |
| Size | 8 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).OFFER | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Offer |
| Description | Best offer price |
| Size | 17 |
| Type | FLOAT |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).OFFERDEPTHT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Total offer depth |
| Description | Total volume of all active sell quotes, expressed in lots |
| Size | 16 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).NUMOFFERS | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Sell quotes number |
| Description | Number of active sell quotes |
| Size | 8 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).TIME | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Change time |
| Description | Time when market data was last changed |
| Size | 6 |
| Type | TIME |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).LASTBID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Session last bid |
| Description | Best bid price at the time of the session end |
| Size | 17 |
| Type | FLOAT |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).LASTBIDDEPTHT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Session last total bid depth |
| Description | Total volume of all active buy quotes, expressed in lots, at the time of the session end |
| Size | 16 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).LASTNUMBIDS | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Session last buy quotes number |
| Description | Number of active buy quotes at the time of the session end |
| Size | 8 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).LASTOFFER | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Session last offer |
| Description | Best offer price at the time of the session end |
| Size | 17 |
| Type | FLOAT |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).LASTOFFERDEPTHT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Session last total offer depth |
| Description | Total volume of all active sell quotes, expressed in lots, at the time of the session end |
| Size | 16 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

| OUT [QUOTE_SEC](#t11a).LASTNUMOFFERS | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Session last sell quotes number |
| Description | Number of active sell quotes at the time of the session end |
| Size | 8 |
| Type | INTEGER |
| Key | No |
| SecCode | No |
| NotSharp | No |

## Changes in transactions

| [TRANS QUOTE_CREDIT_NEGDEAL](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Enter negotiated deal Credit order |
| Description | Enter negotiated deal Credits without CCP order |
| SystemIndex | 0 |


[Changes in input fields](#fa7ai)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRDACCID](#fa7ai2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [BUYSELL](#fa7ai3) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [SECBOARD](#fa7ai4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [SECCODE](#fa7ai5) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [CPFIRMID](#fa7ai6) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [BROKERREF](#fa7ai8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [MATCHREF](#fa7ai9) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [SETTLECODE](#fa7ai10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [EXTREF](#fa7ai11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [REFUNDRATE](#fa7ai12) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 | [REPORATE](#fa7ai13) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | [REPOORDERVALUE](#fa7ai14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 | [REPOTERM](#fa7ai15) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | [ACCEPTEDQUOTENO](#fa7ai19) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | [CLIENTCODE](#fa7ai20) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | [TRDACCFIRMID](#fa7ai22) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | [BENCHMARKID](#fa7ai23) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).TRDACCID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading account |
| Description | Trading account number |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).BUYSELL | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Direction |
| Description | Order direction - "Buy / Sell" |
| Size | 1 |
| Type | CHAR |
| Enum | TBuySell |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).SECBOARD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Board |
| Description | Board ID for the security |
| Size | 4 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).SECCODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Security |
| Description | Security ID |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).CPFIRMID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Counterparty |
| Description | Counterparty firm |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).BROKERREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Broker reference |
| Description | Additional information entered by the trading firm (usually - client instruction number) |
| Size | 20 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).MATCHREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Matching reference |
| Description | Identical text value entered by both trade parties |
| Size | 10 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).SETTLECODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Settlement code |
| Description | Settlement code for the trade |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).EXTREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | External user ID |
| Description | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).REFUNDRATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Refund rate, % |
| Description | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched |
| Size | 9.2 |
| Type | FIXED |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).REPORATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | REPO rate |
| Description | REPO rate, expressed in % |
| Size | 17 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).REPOORDERVALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Repo value |
| Description | Repo value in the currency of settlement |
| Size | 16 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).REPOTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | REPO term |
| Description | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).ACCEPTEDQUOTENO | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | ID of a quote to accept |
| Description | Number of quote being accepted (if the order is sent in reply to the quote), otherwise fill with spaces |
| Size | 12 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).CLIENTCODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Client code |
| Description | Client code assigned by the broker |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).TRDACCFIRMID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Firm for trading account |
| Description | Firm identificator for trading account |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_CREDIT_NEGDEAL](#a7a).BENCHMARKID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Benchmark |
| Description | Benchmark identifier |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| [TRANS QUOTE_REPO](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Enter REPO quote |
| Description | It is used to enter REPO quotes into the Trading system. |
| SystemIndex | 0 |


[Changes in input fields](#fa9ai)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [BUYSELL](#fa9ai3) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [SECBOARD](#fa9ai4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [SECCODE](#fa9ai5) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [PRICE](#fa9ai6) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [QUANTITY](#fa9ai7) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [QUOTEVAL](#fa9ai8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [SETTLECODE](#fa9ai9) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [REPOTERM](#fa9ai10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [BENCHMARKID](#fa9ai11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [CPLISTID](#fa9ai12) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 | [CPFIRMID](#fa9ai13) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | [EXTREF](#fa9ai14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 | [BROKERREF](#fa9ai15) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | [ISOPENREPO](#fa9ai16) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | [TRDACCID](#fa9ai17) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | [ENABLEEXTCAPABILITES](#fa9ai18) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | [ANONYMOUS](#fa9ai19) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 | [FULLAMOUNT](#fa9ai20) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 | [BOOKBUILDINGTIME](#fa9ai21) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [QUOTE_REPO](#a9a).BUYSELL | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Direction |
| Description | Order direction - "Buy / Sell" |
| Size | 1 |
| Type | CHAR |
| Enum | TBuySell |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).SECBOARD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Board |
| Description | Board ID for the security |
| Size | 4 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).SECCODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Security |
| Description | Security ID |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).PRICE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Price (rate) |
| Description | Price (for buy/sell quotes) or REPO rate |
| Size | 17 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).QUANTITY | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Lots |
| Description | Quantity, expressed in lots |
| Size | 16 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).QUOTEVAL | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Value |
| Description | Value, expressed in the currency of settlement |
| Size | 16 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).SETTLECODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Settlement code |
| Description | Settlement code for the trade |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).REPOTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | REPO term |
| Description | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).BENCHMARKID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Benchmark |
| Description | Benchmark identifier |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).CPLISTID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | ID of list |
| Description | ID of the counterparty list |
| Size | 12 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).CPFIRMID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Counterparty |
| Description | Counterparty firm |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).EXTREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | External user ID |
| Description | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).BROKERREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Broker reference |
| Description | Additional information entered by the trading firm (usually - client instruction number) |
| Size | 20 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).ISOPENREPO | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Open date REPO |
| Description | Open date REPO |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).TRDACCID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading account |
| Description | Trading account number |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).ENABLEEXTCAPABILITES | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Enable extended quote capabilities |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).ANONYMOUS | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Anonymous quote |
| Description | Do not disclose quote"s initiator |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).FULLAMOUNT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Full amount flag |
| Description | If this flag is set, only negdeals with value equal to quote"s value are accepted |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO](#a9a).BOOKBUILDINGTIME | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Bookbuilding time in minutes |
| Description | Time (in minutes), during which it"s allowed to place negdeals for this quote |
| Size | 6 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| [TRANS QUOTE_REPO_CCP_NEGDEAL](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Enter negotiated deal REPO with CCP order |
| Description | Enter negotiated deal REPO with CCP or Deposit with CCP order |
| SystemIndex | 0 |


[Changes in input fields](#fa10ai)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRDACCID](#fa10ai2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [BUYSELL](#fa10ai3) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [SECBOARD](#fa10ai4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [SECCODE](#fa10ai5) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [CPFIRMID](#fa10ai6) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [QUANTITY](#fa10ai7) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [BROKERREF](#fa10ai8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [MATCHREF](#fa10ai9) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [SETTLECODE](#fa10ai10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [EXTREF](#fa10ai11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 | [REPORATE](#fa10ai13) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | [REPOORDERVALUE](#fa10ai14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 | [REPOTERM](#fa10ai15) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | [DISCOUNT](#fa10ai16) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | [ACCEPTEDQUOTENO](#fa10ai19) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | [CLIENTCODE](#fa10ai20) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | [TRDACCFIRMID](#fa10ai22) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 | [BENCHMARKID](#fa10ai23) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 | [ISOPENREPO](#fa10ai24) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).TRDACCID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading account |
| Description | Trading account number |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).BUYSELL | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Direction |
| Description | Order direction - "Buy / Sell" |
| Size | 1 |
| Type | CHAR |
| Enum | TBuySell |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).SECBOARD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Board |
| Description | Board ID for the security |
| Size | 4 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).SECCODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Security |
| Description | Security ID |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).CPFIRMID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Counterparty |
| Description | Counterparty firm |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).QUANTITY | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Lots |
| Description | Quantity, expressed in lots |
| Size | 16 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).BROKERREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Broker reference |
| Description | Additional information entered by the trading firm (usually - client instruction number) |
| Size | 20 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).MATCHREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Matching reference |
| Description | Identical text value entered by both trade parties |
| Size | 10 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).SETTLECODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Settlement code |
| Description | Settlement code for the trade |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).EXTREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | External user ID |
| Description | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).REPORATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | REPO rate |
| Description | REPO rate, expressed in % |
| Size | 17 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).REPOORDERVALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Repo value |
| Description | Repo value in the currency of settlement |
| Size | 16 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).REPOTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | REPO term |
| Description | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).DISCOUNT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Discount |
| Description | Starting discount, percents |
| Size | 17 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).ACCEPTEDQUOTENO | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | ID of a quote to accept |
| Description | Number of quote being accepted (if the order is sent in reply to the quote), otherwise fill with spaces |
| Size | 12 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).CLIENTCODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Client code |
| Description | Client code assigned by the broker |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).TRDACCFIRMID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Firm for trading account |
| Description | Firm identificator for trading account |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).BENCHMARKID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Benchmark |
| Description | Benchmark identifier |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_CCP_NEGDEAL](#a10a).ISOPENREPO | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Open date REPO |
| Description | Open date REPO |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| NOT NULL | No |
| VarBlock | No |

| [TRANS QUOTE_REPO_NEGDEAL](#nowhere) | Status: Added |
| --- | --- |


| Property | New value |
| --- | --- |
| Caption | Enter negotiated deal REPO order |
| Description | Enter negotiated deal REPO without CCP order |
| SystemIndex | 0 |


[Changes in input fields](#fa11ai)

| № | Field | Status | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRDACCID](#fa11ai2) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [BUYSELL](#fa11ai3) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [SECBOARD](#fa11ai4) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [SECCODE](#fa11ai5) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [CPFIRMID](#fa11ai6) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [QUANTITY](#fa11ai7) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [BROKERREF](#fa11ai8) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [MATCHREF](#fa11ai9) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [SETTLECODE](#fa11ai10) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [EXTREF](#fa11ai11) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 | [REFUNDRATE](#fa11ai12) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | [REPORATE](#fa11ai13) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 | [REPOORDERVALUE](#fa11ai14) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | [REPOTERM](#fa11ai15) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | [DISCOUNT](#fa11ai16) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | [LOWERDISCOUNT](#fa11ai17) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | [UPPERDISCOUNT](#fa11ai18) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 | [ACCEPTEDQUOTENO](#fa11ai19) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 | [CLIENTCODE](#fa11ai20) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 20 | [TRDACCFIRMID](#fa11ai22) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 21 | [BENCHMARKID](#fa11ai23) | Added |  |  |  |  |  |  |  |  |  |  |  |  |
| 22 | [ISOPENREPO](#fa11ai24) | Added |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [QUOTE_REPO_NEGDEAL](#a11a).TRDACCID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Trading account |
| Description | Trading account number |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).BUYSELL | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Direction |
| Description | Order direction - "Buy / Sell" |
| Size | 1 |
| Type | CHAR |
| Enum | TBuySell |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).SECBOARD | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Board |
| Description | Board ID for the security |
| Size | 4 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).SECCODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Security |
| Description | Security ID |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).CPFIRMID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Counterparty |
| Description | Counterparty firm |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).QUANTITY | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Lots |
| Description | Quantity, expressed in lots |
| Size | 16 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).BROKERREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Broker reference |
| Description | Additional information entered by the trading firm (usually - client instruction number) |
| Size | 20 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).MATCHREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Matching reference |
| Description | Identical text value entered by both trade parties |
| Size | 10 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).SETTLECODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Settlement code |
| Description | Settlement code for the trade |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).EXTREF | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | External user ID |
| Description | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).REFUNDRATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Refund rate, % |
| Description | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched |
| Size | 9.2 |
| Type | FIXED |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).REPORATE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | REPO rate |
| Description | REPO rate, expressed in % |
| Size | 17 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).REPOORDERVALUE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Repo value |
| Description | Repo value in the currency of settlement |
| Size | 16 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).REPOTERM | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | REPO term |
| Description | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).DISCOUNT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Discount |
| Description | Starting discount, percents |
| Size | 17 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).LOWERDISCOUNT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Lower discount boundary |
| Description | Lower discount boundary, percents |
| Size | 17 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).UPPERDISCOUNT | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Upper discount boundary |
| Description | Upper discount boundary, percents |
| Size | 17 |
| Type | FLOAT |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).ACCEPTEDQUOTENO | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | ID of a quote to accept |
| Description | Number of quote being accepted (if the order is sent in reply to the quote), otherwise fill with spaces |
| Size | 12 |
| Type | INTEGER |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).CLIENTCODE | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Client code |
| Description | Client code assigned by the broker |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).TRDACCFIRMID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Firm for trading account |
| Description | Firm identificator for trading account |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).BENCHMARKID | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Benchmark |
| Description | Benchmark identifier |
| Size | 12 |
| Type | CHAR |
| NOT NULL | No |
| VarBlock | No |

| IN [QUOTE_REPO_NEGDEAL](#a11a).ISOPENREPO | Status: Added |
| --- | --- |

| Property | New value |
| --- | --- |
| Caption | Open date REPO |
| Description | Open date REPO |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| NOT NULL | No |
| VarBlock | No |

Document created by ExIfcCmp.dll (ASTSExplorer.exe) 23.08.2023 11:00:56
