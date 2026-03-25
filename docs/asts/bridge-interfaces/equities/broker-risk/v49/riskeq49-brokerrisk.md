---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: RiskEq49 — Equity market clearing interface, v.49
sidebar_label: RiskEq49 — Equity market clearing interface, v.49
---

## Information objects of market 'RiskEq49' - 'Equity market clearing interface, v.49'

---


### Enumerated Types

#### TActiveStatus - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| A | Active | Active |
| D | Deleted | Deleted |


#### TAssetType - Asset type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| - | - | Not defined |
| B | Bonds | Bonds |
| C | Currency | Currency |
| D | DR | Depositary receipts |
| E | ETF | Foreign securities investment funds ETF |
| G | Basket | Basket of securities |
| H | List | List ID |
| I | MC | Mortgage certificate |
| K | Group | Group |
| L | Spread | Interproduct spread |
| M | MF | Mutual fund shares |
| P | Metals | Precious metals |
| R | REPO | REPO with CCP indicators |
| S | Shares | Shares |
| T | ETC | ETC |
| U | GCC | GCC |
| O | GCC FT | Basket of GCC of the Federal Treasury |


#### TBankAccType - Bank account type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| D | Funds transferred to TM | Funds transferred to Trust Managment |
| F | Collective collateral | Collective clearing collateral |
| L | Clients' funds | Clients' funds |
| S | Own funds | Own funds |
| G | Stress collateral | Stress collateral |
| T | Technologic | Technologic |
| V | 2, 3 lev. clients | Clients of levels 2 and 3 |


#### TBoolInt - Logical type (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| 0 |  | No |
| 1 | Yes | Yes |


#### TBuySell - Order direction (size: 1, type: ekGroup)

Available order directions

| Constant | Value | Description |
| --- | --- | --- |
| B | B | Buy |
| S | S | Sell |


#### TClearingMode - Clearing model (size: 1, type: ekCombo)

Legal clearing model

| Constant | Value | Description |
| --- | --- | --- |
| B | CB | Clearing broker model |
| F | On behalf of CM | On behalf of Clearing member model |
|  |  |  |


#### TCoveredSell - Accounting of covered sells (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| Y | Full | Full accounting of covered sales |
| P | Partial | Partial accounting of covered sales |
| N | Ignore | Ignore covered sales |


#### TDepAccType - Type of depositary account (size: 1, type: ekGroup)

List of depositary account types

| Constant | Value | Description |
| --- | --- | --- |
| C |  | Main (own) |
| O |  | Correspondent |
| T |  | Custodian |
| Z |  | Emission |
| H |  | Clearing |
| K |  | Treasury |
| V | 2, 3 lev. clients | Clients of levels 2 and 3 |


#### TDepositIntent - (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| I | I | Intention |
| D | D | Deposit |
| R | R | Reserve |
| O | O | Refund close |
| C | C | Deposit close |
| S | S | Refill shift |


#### TFirmAccess - Firm access status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| N | No | No |
| Y | Yes | Yes |
|  | Unspecified | Unspecified |
| S | = | Suspended |


#### TFloatingRate - Type of floating rate (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Not defined |
| Y | Floating | Floating |
| N | Fixed | Fixed |


#### TInstrType - Instrument type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| S | S | Security |
| C | C | Cash |
| W | S | SWAP |
| I | I | Index |
| L | L | List |
| Z | С | Credits |


#### TIsOpenRepo - REPO with open date operation flag (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| Y | Yes | Yes |
|  | No | No |


#### TLanguage - Language of Trading System messages (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| R | Rus | Russian |
| E | Eng | English |
| U | Ua | Ukrainian |


#### TQuoteBasis - Price basis (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | A | Price is specified as instrument face value |
| R | P | Price is specified in terms of cash for one instrument |
| F | % | Price is specified as percentage of the traded instrument's face value |


#### TStatus - Trading status (size: 1, type: ekCombo)

List of available trading/clearing operation statuses

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Operations are allowed |
| S | S | Operations are suspended |


#### TSystemID - Trading/clearing system type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| C | FX | Currency market |
| P | EQ | Bonds and Equities market |


#### TTradeSettleLiabilityFlag - Liability Settlement (size: 1, type: ekCombo)

Trade of liability settlement between Clearing and Trading Members

| Constant | Value | Description |
| --- | --- | --- |
| N |  | Regular Trade |
| Y | + | Liability settlement trade |


#### TTradeStatus - Trade status (size: 1, type: ekCombo)

Trade status

| Constant | Value | Description |
| --- | --- | --- |
| M | + | Matched/confirmed (included into off-line settlement) |
| U | Unsettled | No settlement instruction has been sent yet |
| C | -C | Cancelled by the Trading System |
| P | Waiting | Included into settlement instruction |
| W | - | Cancelled / Settlement cancellation |
| X | X | Discontinued as part of cash settlement |
| L | L | Confirmation by liquidity provider required |
| H | H | Sufficiency check of collateral |
| F | -F | Declined by liquidity provider |


#### TTradeType - Trade type (size: 1, type: ekGroup)

| Constant | Value | Description |
| --- | --- | --- |
| T |  | Normal trade |
| N | N | Negotiated deal |
| P | IPO | IPO |
| S | S | Settlement trade for SWAP operation |
| W | NS | Settlement trade for negotiated SWAP operation |
| F | T | Money/Securities transfer |
| R | R1 | Negotiated deal for the first part of REPO trade |
| G | CCPR | Deal for REPO with CCP |
| H | CCPR1 | First part of deal for REPO with CCP |
| h | CR2 | Second part of deal for REPO with CCP |
| I | NCR | Negotiated deal for REPO with CCP |
| J | NCR1 | First part of negotiated deal for REPO with CCP |
| j | NCR2 | Second part of negotiated deal for REPO with CCP |
| L | Refund | REPO with CCP assets refund technical deal |
| M | NBR1 | First part of negotiated deal for REPO with basket |
| m | NBR2 | Second part of negotiated deal for REPO with basket |
| Q | PM | Pre-match trade with liquidity provider |


#### TTrdAccStatus - Status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Operations are allowed |
| S | = | Operations are suspended |
| N | - | Suspended for trading |
| X | x | Account is being closed |


#### TYesNo - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| N |  | No |
| Y | Yes | Yes |


#### TYesNoSpace - Logical operator with not defined option (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| N | Нет | No |
| Y | Yes | Yes |
|  |  | Not defined |

---


## Interface 'BrokerRisk' - 'Clearing interface for brokerage systems, v.49'

---


### Tables

#### ACCOUNT_BALANCE - Positions on securities on trading accounts (updateable)

Table contains information on the current positions on securities on trading accounts of a trading firm. Each row holds a unique pair of trading account + security ID.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| DEPACCID | Depositary account | CHAR | 12 | Depositary account number in the Depositary Center |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| OPENBAL | Opening balance | INTEGER | 16 | Total number of securities at the beginning of the Trading Session |
| PLANBAL | Planned balance | INTEGER | 16 | Account balance after the quick ("simple") settlement. Equals to Opening balance minus Planned sell position that has been included into the quick settlement. |
| CURRENTPOS | Current balance | INTEGER | 16 | Current balance is calculated as Opening balance plus total number of securities bought since the beginning of the Trading session minus total number of securities sold since the beginning of the Trading session |
| USQTYB | Unsettled quantity bought | INTEGER | 16 | Number of securities bought since the beginning of the trading session and included into multilateral settlement |
| USQTYS | Unsettled quantity sold | INTEGER | 16 | Number of securities sold since the beginning of the trading session and included into multilateral settlement |
| PLANNED | Planned remainder | INTEGER | 16 | Equals to Current balance minus Planned sell position |
| PLANNEDPOSBUY | Planned buy position | INTEGER | 16 | The total number of securities in all active (not matched, withdrawn or canceled) "Buy" orders |
| PLANNEDPOSSELL | Planned sell position | INTEGER | 16 | The total number of securities in all active (not matched, withdrawn or canceled) "Sell" orders |
| LIMITSELL | Planned ext. limit | INTEGER | 16 |  |
| SETTLEBAL | Settled | INTEGER | 16 | Planned position after settlements |
| LIMIT1SET | CC's limit set | [TYesNo](#eTYesNo) | 1 |  |
| LIMIT1 | CC's uncovered sell limit | INTEGER | 16 |  |
| LIMIT2SET | User's limit set | [TYesNo](#eTYesNo) | 1 |  |
| LIMIT2 | User's uncovered sell limit | INTEGER | 16 |  |
| **ACCOUNT** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| FIRMUSE | Category type | CHAR | 1 | 'U' - for collateral category; any other value - for trading categories. |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| PLANNEDCOVERED | Planned T+ | INTEGER | 16 |  |


#### ASSETS - Assets (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ASSET** | **Asset ID** | **CHAR** | **12** |  |
| NAME | Asset name | CHAR | 30 |  |
| SHORTNAME | Asset | CHAR | 10 |  |
| LATNAME | English name | CHAR | 30 |  |
| RC | Settlement price | FLOAT | 16 | For bonds - settlement price as % of the face value. For shares - value in rub. For groups - discount rate for interproduct spread. |
| RCRUB | Settlement price, rub. | FLOAT | 16 |  |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals in the Value field |
| RTL_RUB | Market risk lower bound, rub. | FLOAT | 16 |  |
| RTH_RUB | Market risk upper bound, rub. | FLOAT | 16 |  |
| LIMIT_END_RUB | Range end, rub. | FIXED | 16.2 |  |
| LRATE | Percent risk lower bound, % | FIXED | 16.2 |  |
| CRATE | Settlement REPO rate, % | FIXED | 16.2 |  |
| HRATE | Percent risk upper bound, % | FIXED | 16.2 |  |
| LPENRATE | Penalty rate for security positions transfer, % | FIXED | 16.2 |  |
| HPENRATE | Penalty rate for money positions transfer, % | FIXED | 16.2 |  |
| REPODISCOUNT | REPO with CCP discount, % | FIXED | 6.3 |  |
| DISCOUNT_L | Risk rate for price decrease, % | FIXED | 6.3 |  |
| DISCOUNT_H | Risk rate for price increase, % | FIXED | 6.3 |  |
| COLLATERAL | Accepted as collateral | [TYesNoSpace](#eTYesNoSpace) | 1 | Asset can be included into collateral |
| ISCURR | Is currency | [TYesNo](#eTYesNo) | 1 |  |
| FULLCOVEREDFLAG | Fully covered trading | [TYesNo](#eTYesNo) | 1 | Prohibition of short selling and buying without full pre-funding |
| DISCOUNTL0 | Risk rate for price decrease for "zero concentration limit", % | FIXED | 6.3 |  |
| DISCOUNTH0 | Risk rate for price increase for "zero concentration limit", % | FIXED | 6.3 |  |
| GROUPASSET | Group | CHAR | 12 | Group of assets. If not empty then this asset is the member of a group. An asset may be included only to one group. |
| ASSETTYPE | Asset type | [TAssetType](#eTAssetType) | 1 |  |
| UNIT | Quoted for, unit | FLOAT | 17 | Quantity for which the asset is quoted |
| DISCOUNT_SYM | Symmetrical risk rate for price , % | FIXED | 6.3 |  |
| COLLATERALPERCENT | Partial collateral | FIXED | 6.3 | The value as a percentage of free funds, which is accepted as collateral |
| STRATEGIC | Strategic asset | [TYesNo](#eTYesNo) | 1 |  |
| COVEREDSELL | Covered Sell | [TCoveredSell](#eTCoveredSell) | 1 |  |
| FULLCOVEREDLIMIT | Fully covered trading limit | INTEGER | 16 |  |


#### BANK - Settlement organizations (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **BANKID** | **Settlement organization** | **CHAR** | **12** |  |
| SHORTNAME | Name | CHAR | 12 | Settlement organization short name |
| BANKNAME | Full name | CHAR | 120 | Settlement organization full name |


#### BANKACC - Bank accounts (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| DESCRIPTION | Description | CHAR | 30 |  |
| DEFAULTER | Settlement Regime | [TYesNo](#eTYesNo) | 1 |  |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| FULLCOVEREDBUY | Fully covered buying | [TYesNo](#eTYesNo) | 1 | Prohibition of buying without full pre-funding |
| CLEARINGFIRMID | Clearing firm | CHAR | 12 | Firm ID of clearing member |
| CLEARINGBANKACCID | Clearing bank account | CHAR | 12 | Clearing account ID in the settlement house |
| DETAILS | Details | CHAR | 20 | Client taxpayer number or passport number or other document |
| SUBDETAILS | Subdetails | CHAR | 20 | Client's client taxpayer number or passport number or other document |
| BANKACCTYPE | Type | [TBankAccType](#eTBankAccType) | 1 |  |
| GCPOOLID | Pool ID | CHAR | 12 |  |
| UNIFIEDPOOL | Single pool | [TYesNo](#eTYesNo) | 1 |  |
| EARLYSETTLETIME | Early settlement time | TIME | 6 | Early settlement time |
| TRADINGCLOSEDTIME | Trading closed time | TIME | 6 | Trading closed time |
| COMMBANKACCID | Commission bank account | CHAR | 12 | Bank account ID in the settlement house to charge variable commission fee from |
| MORNINGSESSION | Availability in additional morning session | [TYesNo](#eTYesNo) | 1 | Flag that shows if a bankacc is available for trading in additional morning session |
| ISOLATEDCLIENT | Segregated client | [TYesNo](#eTYesNo) | 1 | Segregated client |
| TAXBANKACCID | Tax Bank account | CHAR | 12 | Tax settlement account/code ID in the settlement house |
| CALC_PERCENT | Apply percent risk | [TYesNo](#eTYesNo) | 1 | Apply percent risk |
| CLEARINGMODE | Legal clearing model | [TClearingMode](#eTClearingMode) | 1 | Legal clearing model |
| CM_CONTROL_LEVEL3 | CM controls 3-rd lev. | [TYesNo](#eTYesNo) | 1 | Clearing member controls third level |
| CM_DISCLOSE_CLIENTS | Client information to CM | [TYesNo](#eTYesNo) | 1 | Show client information to clearing member |
| PROTECTEDCLIENT | Money protection | [TYesNo](#eTYesNo) | 1 | Protection of segregated client's money |
| CSPECIAL | Счет типа С | [TYesNo](#eTYesNo) | 1 | Признак специального РК типа "C" |


#### BANKACC_FULLCOVERED_LIMITS - Limit for bank account full covered mode (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| **ASSET** | **Asset** | **CHAR** | **12** |  |
| LIMIT1SET | Flag that shows if limit1 is set | [TYesNo](#eTYesNo) | 1 |  |
| LIMIT1 | External limit | FIXED | 17.2 | External limit, set by Settlement House |
| LIMIT2SET | Flag that shows if limit2 is set | [TYesNo](#eTYesNo) | 1 |  |
| LIMIT2 | Internal limit | FIXED | 17.2 | Internal limit, set by user |


#### BANKUSE - Accounts in settlement organizations (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| **BANKID** | **Settlement organization** | **CHAR** | **12** |  |
| REALACCOUNT | Account in settlement house | CHAR | 120 |  |
| DESCRIPTION | Description | CHAR | 30 |  |
| **CURRCODE** | **Currency** | **CHAR** | **4** | **Currency code** |
| NCCREALACCOUNT | Collateral account | CHAR | 20 |  |


#### CLEARING_TRADES - Clearing Trades (updateable)

Table contains information on clearing trades (transfers) registered in the Clearing System for a trading/clearing firm since the beginning of the current session. Each Trade is represented by one row.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CLEARINGTRADENO** | **Clearing trade No** | **INTEGER** | **21** | **Trade number in the Clearing System** |
| TRADENO | Trade number | INTEGER | 12 | Trade number in the Trading System |
| TRADEDATE | Date | DATE | 8 |  |
| TRADETIME | Time | TIME | 6 |  |
| MICROSECONDS | Microseconds | INTEGER | 6 |  |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the trade is registered |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Trade volume, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in the currency of settlement |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| TRADETYPE | Type | [TTradeType](#eTTradeType) | 1 | Trade type |
| COMMISSION | Total commission | FIXED | 16.2 | Trade commission, rub. |
| CLEARINGCENTERCOMM | Clearing commission | FIXED | 16.2 | Clearing commission, rub. |
| EXCHANGECOMM | Exchange commission | FIXED | 16.2 | Exchange commission, rub. |
| TRADINGSYSTEMCOMM | Technical access commission | FIXED | 16.2 | Technical access commission, rub. |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| BASEPRICE | Base price | FLOAT | 17 | Base price could be specified for SWAP negotiated deals |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| TRANINFO | Transfer details | CHAR | 210 |  |
| SETTLELIABILITYFLAG | Liability settlement trade | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Trade of liability settlement between Clearing and Trading Members |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| PARENTTRADENO | Parent trade | INTEGER | 12 | Parent trade number in the Trading System for REPO trades |
| BANKID | Settlement organization | CHAR | 12 |  |
| CLEARINGBANKACCID | Clearing bank account | CHAR | 12 | Clearing account ID in the settlement house |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in the currency of settlement |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| ACCRUED2 | Accrued interest for the buy-back | FIXED | 16.2 | Accrued interest on the buy-back date, expressed in the currency of settlement |
| REPO2VALUEBALANCE | Balance of the REPO buy-back value | FIXED | 16.2 | Value of the unmatched part of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STATUS | Status | [TTradeStatus](#eTTradeStatus) | 1 | Trade status |
| FACEAMOUNT | FaceAmount | FIXED | 16.2 | Value of trade by face value, expressed in the currency of settlement |
| CLEARINGTRDACCID | Clearing account | CHAR | 12 | Clearing account number |
| DEPOSITINTENT | Deposit trade type | [TDepositIntent](#eTDepositIntent) | 1 | Deposit trade type |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |
| OPENREPO2VALUE | Open REPO buy-back value at T+1 | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg at T+1 date for REPO trades with open date, expressed in the currency of settlement |


#### CURRENCY - Currencies (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CURRCODE** | **Currency** | **CHAR** | **4** | **Currency code** |
| CURRENCYNAME | Name | CHAR | 30 |  |
| CROSSRATE | Exchange rate | FLOAT | 17 | Exchange rate of the currency to rub., expressed in rub. with float point |
| ASSET | Asset | CHAR | 12 |  |


#### FIRMS - Firms (updateable)

Table lists all the firms

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm code** | **CHAR** | **12** | **Firm ID** |
| FIRMNAME | Firm | CHAR | 30 | Short firm name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| EXCHANGE | Exchange | CHAR | 4 | Regional Exchange ID |
| FULLCOVEREDFLAG | Fully covered trading | [TYesNo](#eTYesNo) | 1 | Prohibition of short selling and buying without full pre-funding |
| INN | TIN | CHAR | 12 | Taxpayer Identification Number |
| INLIQUIDATION | Liquidation netting | [TYesNo](#eTYesNo) | 1 |  |
| CLEARINGACCESS | Clearing access | [TFirmAccess](#eTFirmAccess) | 1 |  |
| TRADINGACCESS | Trading access | [TFirmAccess](#eTFirmAccess) | 1 |  |


#### FIRM_HOLDING_TOTAL - Positions on securities (updateable)

Table contains information on the current total securities positions on all the trading accounts of a firm. Each row represents position for one security.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| OPENBAL | Opening balance | INTEGER | 16 | Total number of securities on all trading accounts of a firm at the beginning of the Trading Session |
| CURRENTPOS | Current balance | INTEGER | 16 | Equals to Opening balance plus Total number of securities bought since the beginning of the Trading Session minus Total number of securities sold since the beginning of the Trading Session |
| PLANNEDPOSBUY | Planned buy position | INTEGER | 16 | Total number of securities in all active (entered and not matched, withdrawn or canceled) "Buy" orders |
| PLANNEDPOSSELL | Planned sell position | INTEGER | 16 | Total number of securities in all active (entered and not matched, withdrawn or canceled) "Sell" orders |
| USQTYB | Unsettled quantity bought | INTEGER | 16 | Number of securities bought during the Trading session and included into multilateral settlement |
| USQTYS | Unsettled quantity sold | INTEGER | 16 | Number of securities sold during the Trading session and included into multilateral settlement |


#### GCPOOL - Collateral pools (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **GCPOOLID** | **Pool ID** | **CHAR** | **12** |  |
| GCPNAME | Pool description | CHAR | 128 |  |
| GCPSHORTNAME | Pool short name | CHAR | 12 |  |
| SECCODE | Issued GCP certificate ID | CHAR | 12 |  |


#### GCPOOLASSET - Collateral pool assets (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **GCPOOLID** | **Pool ID** | **CHAR** | **12** |  |
| **ASSET** | **Asset** | **CHAR** | **12** |  |


#### INSTRUMENTS - Groups of securities (updateable)

Table contains information on groups of similar securities (for example, A1-shares, B2-bonds, etc)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **INSTRID** | **Group** | **CHAR** | **4** | **Instrument group ID** |
| INSTRNAME | Name | CHAR | 30 | Instrument group name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| INSTRTYPE | Instrument type | [TInstrType](#eTInstrType) | 1 |  |
| QUOTEBASIS | Price type | [TQuoteBasis](#eTQuoteBasis) | 1 |  |


#### ISSUERCONCLIMITS - Issuer Concentration Risks Limits for Bank account (updateable, clear on update)

Issuer Concentration Risks Limits for Bank account

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| FREELIMIT | Unified Limit with Issuer Concentration Risks | FIXED | 17.2 | Unified Limit with Issuer Concentration Risks |


#### POSITIONS - Money positions (updateable)

Table contains information on the current money positions of a trading firm. Each table row corresponds to one group of cash positions

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **CURRCODE** | **Currency** | **CHAR** | **4** | **Currency code** |
| **TAG** | **Position** | **CHAR** | **4** | **Position ID** |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| DESCRIPTION | Description | CHAR | 30 | Group description |
| OPENBAL | Opening balance | FIXED | 17.2 | Balance at the beginning of the day |
| CURRENTPOS | Current balance | FIXED | 17.2 | Current balance during the day |
| PLANNEDPOS | Planned balance | FIXED | 17.2 | Planned balance during the day |
| LIMIT1 | External limit | FIXED | 17.2 | External limit, set by Settlement House |
| LIMIT1SET | Flag that shows if limit1 is set | [TYesNo](#eTYesNo) | 1 |  |
| LIMIT2 | Internal limit | FIXED | 17.2 | Internal limit, set by user |
| LIMIT2SET | Flag that shows if limit2 is set | [TYesNo](#eTYesNo) | 1 |  |
| ORDERBUY | Unmatched buy total | FIXED | 17.2 | Total unmatched value in all active buy-orders entered by the trading firm |
| ORDERSELL | Unmatched sell total | FIXED | 17.2 | Total unmatched value in all active sell-orders entered by the trading firm |
| NETTO | Net balance | FIXED | 17.2 | Netto balance during the day |
| DEBIT | Debit | FIXED | 17.2 | Debit volume during the day |
| CREDIT | Credit | FIXED | 17.2 | Credit volume during the day |
| PLANNEDBAL | Control balance | FIXED | 17.2 | Control balance during the day |
| SETTLEBAL | Settled | FIXED | 17.2 | Planned position after settlement |


#### RESYSTIME - Trading System time (updateable, clear on update)

Table consists of one row with Trading System current date and time. This information is usually used to synchronize client time with the server time.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TIME | Time | TIME | 6 | Time on the trading/clearing system server |
| DATE | Date | DATE | 8 | Date on the trading/clearing system server |
| TOMORROWDATE | Tomorrow date | DATE | 8 |  |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time on the trading/clearing system server, microseconds |


#### RM_FULLCOVERED_RANGE - Restriction of unsecured trades (updateable)

Date range for restriction of unsecured trades

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ASSET | Asset | CHAR | 12 |  |
| STARTDATE | Start date | DATE | 8 |  |
| ENDDATE | End date | DATE | 8 |  |


#### RM_HOLD - Liabilities and claims for assets (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **ACCOUNT** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| DEPACCID | Depositary account | CHAR | 12 | Depositary account number in the Depositary Center |
| FIRMUSE | Category type | CHAR | 1 | 'U' - for collateral category; any other value - for trading categories. |
| **ASSET** | **Asset** | **CHAR** | **12** | **Asset code** |
| **DATE** | **Settlement date** | **DATE** | **8** |  |
| DEBITBALANCE | Opening liabilities | FIXED | 16.2 | Liabilities at the beginning of the day |
| CREDITBALANCE | Opening claims | FIXED | 16.2 | Claims at the beginning of the day |
| DEBIT | Liabilities | FIXED | 16.2 | Liabilities during the day |
| CREDIT | Claims | FIXED | 16.2 | Claims during the day |
| VALUEBUY | Claims in orders | FIXED | 16.2 | Claims in active orders |
| VALUESELL | Liabilities in orders | FIXED | 16.2 | Liabilities during the day |
| PLANNEDCOVERED | Planned T+ | FIXED | 16.2 | Planned position during the day |
| PLANNEDCOVEREDSELLLIMIT | Limit of the covered sell | FIXED | 16.2 | Limit of the covered sell |


#### RM_HOLD_DETL - Liabilities and Claims for Assets (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **ACCOUNT** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| DEPACCID | Depositary account | CHAR | 12 | Depositary account number in the Depositary Center |
| FIRMUSE | Category type | CHAR | 1 | 'U' - for collateral category; any other value - for trading categories. |
| **ASSET1** | **Asset1 (security)** | **CHAR** | **12** |  |
| **ASSET2** | **Asset2 (for settlement)** | **CHAR** | **12** |  |
| **DATE** | **Settlement date** | **DATE** | **8** |  |
| ASSET1CREDITBALANCE | Opening claim (asset1) | FIXED | 16.2 |  |
| ASSET1DEBITBALANCE | Opening liability (asset1) | FIXED | 16.2 |  |
| ASSET1VALUE | Nett (asset1) | FIXED | 16.2 |  |
| ASSET1VALUECREDIT | Claim (asset1) | FIXED | 16.2 |  |
| ASSET1VALUEDEBIT | Liability (asset1) | FIXED | 16.2 |  |
| ASSET1VALUEBUY | Claims in orders (asset1) | FIXED | 16.2 |  |
| ASSET1VALUESELL | Liabilities in orders (asset1) | FIXED | 16.2 |  |
| ASSET2CREDITBALANCE | Opening claim (asset2) | FIXED | 16.2 |  |
| ASSET2DEBITBALANCE | Opening liability (asset2) | FIXED | 16.2 |  |
| ASSET2VALUE | Nett (asset2) | FIXED | 16.2 |  |
| ASSET2VALUECREDIT | Claim (asset2) | FIXED | 16.2 |  |
| ASSET2VALUEDEBIT | Liability (asset2) | FIXED | 16.2 |  |
| ASSET2VALUEBUY | Claims in orders (asset2) | FIXED | 16.2 |  |
| ASSET2VALUESELL | Liabilities in orders (asset2) | FIXED | 16.2 |  |
| PLANNEDCOVERED | Planned T+ | FIXED | 16.2 |  |
| PLANNEDCOVEREDSELLLIMIT | Limit of the covered sell | FIXED | 16.2 | Limit of the covered sell |


#### RM_INDICATIVE - Percent risk parameters (updateable)

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BASEPOINT | Show only base points | [TYesNo](#eTYesNo) | 1 |  |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ASSET** | **Asset** | **CHAR** | **12** |  |
| **DATE** | **Settlement date** | **DATE** | **8** |  |
| **NUM** | **Range** | **INTEGER** | **1** | **Range number** |
| LIMITBEGIN | Range start, units | FIXED | 16.2 |  |
| LIMITEND | Range end, units | FIXED | 16.2 |  |
| LRATE_RUB | Lower limit, rub. | FLOAT | 16 |  |
| CRATE_RUB | Settlement REPO rate, rub. | FLOAT | 16 |  |
| HRATE_RUB | Upper limit, rub. | FLOAT | 16 |  |
| LRATE | Lower limit, % | FIXED | 16.2 |  |
| CRATE | Settlement REPO rate, % | FIXED | 16.2 |  |
| HRATE | Upper limit, % | FIXED | 16.2 |  |
| LIMITBEGIN_RUB | Range start, rub. | FIXED | 16.2 |  |
| LIMITEND_RUB | Range end, rub. | FIXED | 16.2 |  |
| REPOPRICE | Settlement REPO price, rub. | FLOAT | 16 |  |
| DISCOUNT_L | Risk rate for price decrease, % | FIXED | 6.3 |  |
| DISCOUNT_H | Risk rate for price increase, % | FIXED | 6.3 |  |
| RCRUB | Settlement price, rub. | FLOAT | 16 |  |
| CHANGETIME | Risk rates change time | TIME | 6 |  |
| BASEPOINT | Base point | [TYesNo](#eTYesNo) | 1 |  |


#### RM_POSN - Liabilities and Claims for Money (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| **ASSET** | **Asset** | **CHAR** | **12** |  |
| **DATE** | **Settlement date** | **DATE** | **8** |  |
| CREDITBALANCE | Opening claim | FIXED | 16.2 |  |
| DEBITBALANCE | Opening liability | FIXED | 16.2 |  |
| VALUE | Nett | FIXED | 16.2 |  |
| VALUECREDIT | Claim | FIXED | 16.2 |  |
| VALUEDEBIT | Liability | FIXED | 16.2 |  |
| VALUEBUY | Claims in orders | FIXED | 16.2 |  |
| VALUESELL | Liabilities in orders | FIXED | 16.2 |  |
| PLANNEDCOVERED | Planned T+ | FIXED | 16.2 |  |
| PLANNEDCOVEREDSELLLIMIT | Limit of the covered sell | FIXED | 16.2 | Limit of the covered sell |


#### RM_PRICERANGE - Market risk parameters (updateable)

Common market risk-parameters

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ASSET** | **Asset** | **CHAR** | **12** |  |
| **NUM** | **Range** | **INTEGER** | **1** | **Range number** |
| LIMITBEGIN | Range start, units | FIXED | 16.2 |  |
| LIMITEND | Range end, units | FIXED | 16.2 |  |
| RTL_RUB | Lower limit, rub. | FLOAT | 16 |  |
| RTH_RUB | Upper limit, rub. | FLOAT | 16 |  |
| LIMITBEGIN_RUB | Range start, rub. | FIXED | 16.2 |  |
| LIMITEND_RUB | Range end, rub. | FIXED | 16.2 |  |
| DISCOUNT_L | Risk rate for price decrease, % | FIXED | 6.3 |  |
| DISCOUNT_H | Risk rate for price increase, % | FIXED | 6.3 |  |
| RCRUB | Settlement price, rub. | FLOAT | 16 |  |
| CHANGETIME | Risk rates change time | TIME | 6 |  |


#### RM_PRICERANGE_FIRM - Individual risk-parameters (updateable)

Individual market risk-parameters

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **ACCOUNT** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| **ASSET** | **Asset** | **CHAR** | **12** |  |
| K_EXCH | NCC coefficient | FIXED | 16.2 |  |
| K_EXCH_SET | NCC coefficient for tomorrow | FIXED | 16.2 |  |
| K_USER | User coefficient | FIXED | 16.2 |  |
| K_USER_SET | User coefficient for tomorrow | FIXED | 16.2 |  |
| COLLATERAL | Accepted as collateral | [TYesNoSpace](#eTYesNoSpace) | 1 | Asset can be included into collateral |
| ZERO_RTL | Flag of zeroing the lower bound | [TYesNo](#eTYesNo) | 1 |  |


#### RM_TRDACC - Individual risk-parameters (updateable)

Individual risk-parameters

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **ACCOUNT** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| **ASSET** | **Asset** | **CHAR** | **12** |  |
| COLLATERAL | Accepted as collateral | [TYesNoSpace](#eTYesNoSpace) | 1 | Asset can be included into collateral |
| SPREAD | Spread | FIXED | 16.2 | Discount rate |
| ZERO_RTL | Zero RtL | [TYesNo](#eTYesNo) | 1 | Flag of zeroing the lower limit |
| COLLATERAL_TOM | Accepted as collateral for TOM | [TYesNoSpace](#eTYesNoSpace) | 1 | Asset can be included into collateral for tomorrow |
| COLLATERALPERCENT | Partial collateral | FIXED | 6.3 | The value as a percentage of free funds, which is accepted as collateral |
| COLLATERALPERCENT_TOM | Partial collateral for TOM | FIXED | 6.3 | The value as a percentage of free funds, which is accepted as collateral for tomorrow |


#### RM_TRDACC_PRICERANGE - Individual market risk-parameters (updateable)

Individual market risk-parameters

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **ACCOUNT** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| **ASSET** | **Asset** | **CHAR** | **12** |  |
| **NUM** | **Range** | **INTEGER** | **1** | **Range number** |
| LIMITBEGIN | Range start, units | FIXED | 16.2 |  |
| LIMITEND | Range end, units | FIXED | 16.2 |  |
| DISCOUNT_L | Risk rate for price decrease, % | FIXED | 6.2 |  |
| DISCOUNT_H | Risk rate for price increase, % | FIXED | 6.2 |  |
| RTL_RUB | Lower limit, rub. | FLOAT | 16 |  |
| RTH_RUB | Upper limit, rub. | FLOAT | 16 |  |
| STATUS | Status | [TActiveStatus](#eTActiveStatus) | 1 |  |


#### SECACCINT - Accrued interest for securities (not updateable)

Table contains reply to the request for data on accrued interest for a specified interval for a specified security. Maximum number or accrued interested values for one security is limited by 180 days - it means that is not possible to get more than 180 values for one security with one request. If the specified End date exceeds this limit or not specified at all then the maximum allowed number of values is returned.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID. If not specified then data on all securities is returned |
| CURRCODE | Currency | CHAR | 4 | Currency code |
| STARTDATE | Start date | DATE | 8 | Interval start date. If not specified then the current date is used |
| ENDDATE | End date | DATE | 8 | Interval end date |
| FACEUNITFLAG | AccInt in FaceUnit | [TYesNo](#eTYesNo) | 1 | Accured interest in face unit currency |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| CURRCODE | Currency | CHAR | 4 | Currency code |
| STARTDATE | Start date | DATE | 8 | Interval start date |
| **DAYNO** | **Number of days** | **INTEGER** | **3** | **Number of days after the start date** |
| ACCINT | Accrued interest value | FLOAT | 17 | Accrued interest value |
| FACEVALUE | Face value | FLOAT | 17 | Face value of one Security, expressed in the currency, in which the Security is nominated |


#### SECURITIES - General market data (not updateable)

The Table contains current General Market Information for Securities (Traded Instruments) traded on different Trading Boards. Each row corresponds to a unique pair: a Trading Board - a Security (Traded Instrument).

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| MARKETID | Market | CHAR | 4 | Market ID |
| BOARDID | Board | CHAR | 4 | Trading board ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security ID** | **CHAR** | **12** | **Security ID** |
| SECNAME | Name | CHAR | 30 | Name of the security |
| SHORTNAME | Security | CHAR | 10 |  |
| INSTRID | Instrument Group ID | CHAR | 4 | Instrument group ID |
| LOTSIZE | Lot size | INTEGER | 8 | Number of securities in one lot |
| FACEVALUE | Face value | FLOAT | 17 | Today's face value of one Security, expressed in the currency, in which the Security is nominated |
| FACEUNIT | Face value currency | CHAR | 4 | Currency in which security is denominated |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| ISIN | ISIN | CHAR | 12 | ISIN code |
| SECTYPE | Type of security | CHAR | 1 | Type of security |
| LOTDIVIDER | Lot divider | INTEGER | 8 | Indicates trading in 1/LotDivider fractions of LotSize. For example, LotSize=1 and LotDivider=100 combination for USD/RUB has a meaning of trading in quantities of 1 cent. |


#### STATS - Clearing system parameters (not updateable)

Table contains one row with clearing/risk system general information

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SESSION | Start number | INTEGER | 10 | Unique start number of the trading system |
| TEVERSION | Version | CHAR | 10 | Trading/clearing system version |
| SYSTEMID | Type | [TSystemID](#eTSystemID) | 1 | Type of the trading/clearing system |
| TESTSYSTEM | Test system | [TYesNo](#eTYesNo) | 1 | Flag that indicates test environment |
| TESTDATA | Test data | [TYesNo](#eTYesNo) | 1 | Flag that indicates test trading session held on production or test environment |


#### TRADES - Trades (updateable)

Table contains information on all trades registered in the Trading System for a trading firm since the beginning of the current trading session. Each Trade is represented by one row.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CLEARINGTRADENO** | **Clearing trade No** | **INTEGER** | **21** | **Trade number in the Clearing System** |
| TRADENO | Trade number | INTEGER | 12 | Trade number in the Trading System |
| TRADEDATE | Date | DATE | 8 |  |
| TRADETIME | Time | TIME | 6 |  |
| MICROSECONDS | Microseconds | INTEGER | 6 |  |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the trade is registered |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Trade volume, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in the currency of settlement |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| TRADETYPE | Type | [TTradeType](#eTTradeType) | 1 | Trade type |
| COMMISSION | Total commission | FIXED | 16.2 | Trade commission, rub. |
| CLEARINGCENTERCOMM | Clearing commission | FIXED | 16.2 | Clearing commission, rub. |
| EXCHANGECOMM | Exchange commission | FIXED | 16.2 | Exchange commission, rub. |
| TRADINGSYSTEMCOMM | Technical access commission | FIXED | 16.2 | Technical access commission, rub. |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| BASEPRICE | Base price | FLOAT | 17 | Base price could be specified for SWAP negotiated deals |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| TRANINFO | Transfer details | CHAR | 210 |  |
| SETTLELIABILITYFLAG | Liability settlement trade | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Trade of liability settlement between Clearing and Trading Members |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| PARENTTRADENO | Parent trade | INTEGER | 12 | Parent trade number in the Trading System for REPO trades |
| BANKID | Settlement organization | CHAR | 12 |  |
| CLEARINGBANKACCID | Clearing bank account | CHAR | 12 | Clearing account ID in the settlement house |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in the currency of settlement |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| ACCRUED2 | Accrued interest for the buy-back | FIXED | 16.2 | Accrued interest on the buy-back date, expressed in the currency of settlement |
| REPO2VALUEBALANCE | Balance of the REPO buy-back value | FIXED | 16.2 | Value of the unmatched part of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STATUS | Status | [TTradeStatus](#eTTradeStatus) | 1 | Trade status |
| FACEAMOUNT | FaceAmount | FIXED | 16.2 | Value of trade by face value, expressed in the currency of settlement |
| CLEARINGTRDACCID | Clearing account | CHAR | 12 | Clearing account number |
| TRANTYPE | Transaction code | CHAR | 4 | Transaction Information |
| DEPOSITINTENT | Deposit trade type | [TDepositIntent](#eTDepositIntent) | 1 | Deposit trade type |
| FLOATINGRATE | Floating rate | [TFloatingRate](#eTFloatingRate) | 1 | Floating or fixed REPO rate flag |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |
| OPENREPO2VALUE | Open REPO buy-back value at T+1 | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg at T+1 date for REPO trades with open date, expressed in the currency of settlement |


#### TRANTYPES - Transfer types (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRANTYPE** | **Transaction code** | **CHAR** | **4** | **Transaction Information** |
| DESCRIPTION | Description | CHAR | 255 | Transfer type description |
| LATDESCRIPTION | English description | CHAR | 255 | Transfer type description in English |


#### TRDACC - Trading accounts (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRDACCID** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| TYPE | Depositary account type | [TDepAccType](#eTDepAccType) | 1 | Depositary account type |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| DESCRIPTION | Description | CHAR | 30 |  |
| BANKACCID | Bank account | CHAR | 12 | Bank account associated with the trading account |
| STATUS | Status | [TTrdAccStatus](#eTTrdAccStatus) | 1 | Flag: "Trading operations allowed/not allowed" |
| DEPACCID | Depositary account | CHAR | 12 | Depositary account number in the Depositary Center |
| TRDACCTYPE | Trading account type | CHAR | 1 | Trading account type |
| FIRMUSE | Category type | CHAR | 1 | 'U' - for collateral category; any other value - for trading categories. |
| MAINTRDACCID | Main trading account | CHAR | 12 |  |
| FULLCOVEREDSELL | Fully covered selling | [TYesNo](#eTYesNo) | 1 | Prohibition of short selling |
| BANKIDT0 | T0 settlement organization | CHAR | 12 |  |
| BANKIDTPLUS | T+ settlement organization | CHAR | 12 |  |
| DEPUNITID | Depo account partition | CHAR | 17 |  |
| GCPLINKTRDACCID | Linked T+ trading account for GCP issue | CHAR | 12 | Trading account number |
| EXTUID | Unique section Id | CHAR | 12 | Unique section Id, used in NSD |
| EXTSECREQUEST | Security selection to the partition enabled | [TYesNo](#eTYesNo) | 1 |  |
| CHECK_HOLDINGS | Check holdings | [TYesNo](#eTYesNo) | 1 | Check holdings on trading account |


#### USERS - Users (updateable)

Table contains list of users, including technical users, created for a trading and/or clearing member. Each row corresponds to one user.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **USERID** | **User ID** | **CHAR** | **12** |  |
| USERNAME | User name | CHAR | 30 |  |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| TRADING | Trading/clearing operations | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" by firm manager |
| USERGROUP | Group | CHAR | 12 | Group ID the user belongs to |
| IPGATEWAY | Gateway | CHAR | 20 |  |
| IPCLIENT | Workstation | CHAR | 20 |  |
| LOGGEDON | Active | [TBoolInt](#eTBoolInt) | 1 | Flag indicating whether the user is currently logged-on |
| EXTIPCLIENT | External ip address | CHAR | 20 |  |
| MSGSETNO | Message set | INTEGER | 4 | Message set version |


---


### Transactions

#### CHANGE_LANGUAGE - Change the language of the Trading System messages

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| LANGUAGEID | Language code | [TLanguage](#eTLanguage) | 1 | Language code. Available codes: R - Russian, E - English |


#### CHANGE_PASSWORD - Change password

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| CURRENTPW | Current password | CHAR | 10 |  |
| NEWPW | New password | CHAR | 10 |  |


#### CLEAR_RM_COLLATERAL - Remove individual collateral

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| ASSET | Asset | CHAR | 12 |  |


#### CLEAR_RM_COLLATERALPERCENT - Remove individual collateralpercent

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| ASSET | Asset | CHAR | 12 |  |


#### CLEAR_RM_PRODUCT_SPREAD - Remove individual interproduct spread rate

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| ASSET | Asset | CHAR | 12 |  |


#### CLEAR_RM_TRDACC_PRICERANGE - Remove individual market risk parameters

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| ASSET | Asset | CHAR | 12 |  |


#### SET_BANKACC_FCLIMIT2 - Change internal limits by bank account

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| ASSET | Asset | CHAR | 12 |  |
| LIMIT2SET | Apply internal limit | [TYesNo](#eTYesNo) | 1 |  |
| LIMIT2 | Internal limit | FIXED | 17.2 |  |
| ALLOWBREACH | Allow breach | [TYesNo](#eTYesNo) | 1 | Planned remaining balance may break the limit |


#### SET_BANKACC_FULLCOVERED - Prohibition of buying without full pre-funding

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| FULLCOVEREDBUY | Fully covered buying | [TYesNo](#eTYesNo) | 1 | Prohibition of buying without full pre-funding |


#### SET_HOLD_FCLIMIT2 - Change short selling limit

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| SECCODE | Security | CHAR | 12 | Security ID |
| LIMIT2SET | Apply internal limit | [TYesNo](#eTYesNo) | 1 |  |
| LIMIT2 | Internal limit | INTEGER | 16 |  |
| ALLOWBREACH | Allow breach | [TYesNo](#eTYesNo) | 1 | Planned remaining balance may break the limit |


#### SET_HOLD_LIMITS - Change firm's external limits by securities

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| QTYLIMITSELL | Limit sell | INTEGER | 16 |  |
| LIMITSELLSET | Apply sell limit | [TYesNo](#eTYesNo) | 1 |  |
| SOFTLIMITSELL | Less than remainder | [TYesNo](#eTYesNo) | 1 | Set a limit not exceeding the planned balance |
| ALLOWBREACHSELL | Allow breach sell | [TYesNo](#eTYesNo) | 1 | Planned remaining balance may break the limit |


#### SET_LIMIT2 - Change internal firm limits

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| CURRCODE | Currency | CHAR | 4 | Currency code |
| TAG | Position | CHAR | 4 | Position ID |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| LIMIT2SET | Apply internal limit | [TYesNo](#eTYesNo) | 1 |  |
| LIMIT2 | Internal limit | FIXED | 17.2 |  |
| ALLOWBREACH | Allow breach | [TYesNo](#eTYesNo) | 1 | Planned remaining balance may break the limit |


#### SET_RM_CALC_PERCENT - Apply calculation of percent risk

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| CALC_PERCENT | Apply percent risk | [TYesNo](#eTYesNo) | 1 |  |


#### SET_RM_COLLATERAL - Change "asset can be included into collateral" flag

Sets "asset can be included into collateral" flag, takes effect from the next day.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| ASSET | Asset | CHAR | 12 |  |
| COLLATERAL | Accepted as collateral | [TYesNoSpace](#eTYesNoSpace) | 1 | Asset can be included into collateral |


#### SET_RM_COLLATERALPERCENT - Changing the partial accounting of an asset in collateral

The change in the partial accounting of the asset in the collateral begins to take effect from the next day.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| ASSET | Asset | CHAR | 12 |  |
| COLLATERALPERCENT | Partial collateral | FIXED | 6.3 | The value as a percentage of free funds, which is accepted as collateral for tomorrow |


#### SET_RM_PRICERANGE_FIRM - Change individual risk parameters

Parameters are applied starting from the next day

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| ASSET | Asset | CHAR | 12 |  |
| K_USER | User coefficient | FIXED | 16.2 |  |


#### SET_RM_PRODUCT_SPREAD - Change interproduct spread discount

May only be applied to assets with group or interproduct spread type

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| ASSET | Asset | CHAR | 12 |  |
| SPREAD | Spread, % | FIXED | 16.2 | Discount rate, % |


#### SET_RM_TRDACC_PRICERANGE - Change market risk parameters

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| ASSET | Asset | CHAR | 12 |  |
| LIMIT1 | First range, units | INTEGER | 16 |  |
| LIMIT2 | Second range, units | INTEGER | 16 |  |
| DISCOUNT_L1 | Risk rate for price decrease, % | FIXED | 6.2 |  |
| DISCOUNT_H1 | Risk rate for price increase, % | FIXED | 6.2 |  |
| DISCOUNT_L2 | Risk rate for price decrease, % | FIXED | 6.2 |  |
| DISCOUNT_H2 | Risk rate for price increase, % | FIXED | 6.2 |  |
| DISCOUNT_L3 | Risk rate for price decrease, % | FIXED | 6.2 |  |
| DISCOUNT_H3 | Risk rate for price increase, % | FIXED | 6.2 |  |


#### SET_TRDACC_CHECK_HOLDINGS - Check holdings on|off

Set|Unset check holdings for a trading account

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| CHECK_HOLDINGS | Check Holdings | [TYesNo](#eTYesNo) | 1 |  |


#### SET_TRDACC_FULLCOVERED - Prohibition of short selling

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| FULLCOVEREDSELL | Fully covered selling | [TYesNo](#eTYesNo) | 1 | Prohibition of short selling |


#### USER_LOGOFF - Logoff user

Transaction for firm administrators to force logoff of other firm users

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| USERID | User ID | CHAR | 12 |  |


Key fields are marked in **bold**.  
Fields that contain security code are marked with asterisk (*).  
Repeated field groups are marked with plus sign (+).

---
The document is created with ASTSExplorer.exe 30.01.2024 14:32:23
