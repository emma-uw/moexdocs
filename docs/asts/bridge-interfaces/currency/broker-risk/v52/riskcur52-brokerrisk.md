---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: RiskCur52 — Currency market clearing interface, v.52
sidebar_label: RiskCur52 — Currency market clearing interface, v.52
---

## Information objects of market 'RiskCur52' - 'Currency market clearing interface, v.52'

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


#### TFirmAccess - Firm access status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| N | No | No |
| Y | Yes | Yes |
|  | Unspecified | Unspecified |
| S | = | Suspended |


#### TInstrType - Instrument type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| C | C | Currency |
| W | S | SWAP |
| I | I | Index |
| B | CB | Currency basket |
| F | F | Fixing |


#### TLanguage - Language of Trading System messages (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| R | Rus | Russian |
| E | Eng | English |
| U | Ua | Ukrainian |


#### TPosnGroup - Type of position (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| D | Assets | Positions by assets |
| I | Secs | Positions by securities |
| K | FT | Positions for FT |
| L | Limits | Positions by limits |


#### TQuoteBasis - Price basis (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | A | Price is specified as instrument face value |


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
| E | CB | Settlement trade for currency basket |
| K | NCB | Settlement trade for negotiated currency basket |
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


## Interface 'BrokerRisk' - 'Clearing interface for brokerage systems, v.52'

---


### Tables

#### ASSETS - Assets (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ASSET** | **Asset ID** | **CHAR** | **12** |  |
| RC | Central rate | FLOAT | 16 | For bonds - settlement price as % of the face value. For shares - value in rub. For groups - discount rate for interproduct spread. |
| RCRUB | Central rate, rub. | FLOAT | 16 |  |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals in the Value field |
| LPENRATE | Penalty rate for asset transfer, % | FIXED | 16.2 |  |
| HPENRATE | Penalty rate for rub. transfer, % | FIXED | 16.2 |  |
| DISCOUNT_L | Risk rate for price decrease, % | FIXED | 6.3 |  |
| DISCOUNT_H | Risk rate for price increase, % | FIXED | 6.3 |  |
| COLLATERAL | Accepted as collateral | [TYesNoSpace](#eTYesNoSpace) | 1 | Asset can be included into collateral |
| CBRATE | Central bank rate, % | FLOAT | 16 |  |
| FULLCOVEREDFLAG | Fully covered trading | [TYesNo](#eTYesNo) | 1 | Prohibition of short selling and buying without full pre-funding |
| GROUPASSET | Group | CHAR | 12 | Group of assets. If not empty then this asset is the member of a group. An asset may be included only to one group. |
| ASSETTYPE | Asset type | [TAssetType](#eTAssetType) | 1 |  |
| UNIT | Quoted for, unit | FLOAT | 17 | Quantity for which the asset is quoted |
| COLLATERALPERCENT | Partial collateral | FIXED | 6.3 | The value as a percentage of free funds, which is accepted as collateral |
| SPECSETTLEMODE | Special mode of settlement | [TYesNo](#eTYesNo) | 1 |  |
| COVEREDSELL | Covered Sell | [TCoveredSell](#eTCoveredSell) | 1 |  |
| FULLCOVEREDLIMIT | Fully covered trading limit | INTEGER | 16 |  |
| FLOATINGRATEPCTRISKFACTOR | Percent risk factor | FIXED | 6.3 |  |


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
| EARLYSETTLE | Early settle | [TYesNo](#eTYesNo) | 1 |  |
| TRADINGCLOSED | Trading closed | [TYesNo](#eTYesNo) | 1 |  |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| FULLCOVEREDBUY | Fully covered trading for CM | [TYesNo](#eTYesNo) | 1 | Prohibition of buying without full pre-funding |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| CLEARINGFIRMID | Clearing firm | CHAR | 12 | Firm ID of clearing member |
| CLEARINGBANKACCID | Clearing bank account | CHAR | 12 | Clearing account ID in the settlement house |
| DETAILS | Details | CHAR | 20 | Client taxpayer number or passport number or other document |
| SUBDETAILS | Subdetails | CHAR | 20 | Client taxpayer number or passport number or other document |
| GCPOOLID | Pool ID | CHAR | 12 |  |
| UNIFIEDPOOL | Single pool | [TYesNo](#eTYesNo) | 1 |  |
| EARLYSETTLETIME | Early settlement time | TIME | 6 | Early settlement time |
| TRADINGCLOSEDTIME | Trading closed time | TIME | 6 | Trading closed time |
| COMMBANKACCID | Commission bank account | CHAR | 12 | Bank account ID in the settlement house to charge variable commission fee from |
| MORNINGSESSION | Availability in additional morning session | [TYesNo](#eTYesNo) | 1 | Flag that shows if a bankacc is available for trading in additional morning session |
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
| DESCRIPTION | Description | CHAR | 30 |  |
| **CURRCODE** | **Currency of settlements** | **CHAR** | **4** | **Currency code of the settlements** |
| NCCREALACCOUNT | Clearing house account | CHAR | 20 |  |


#### CURRENCY - Currencies (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CURRCODE** | **Currency of settlements** | **CHAR** | **4** | **Currency code of the settlements** |
| CURRENCYNAME | Name | CHAR | 30 |  |
| CROSSRATE | Exchange rate | FLOAT | 17 | Exchange rate of the currency to rub., expressed in rub. with float point |
| ASSET | Asset | CHAR | 12 |  |


#### FIRMS - Firms (updateable)

Table lists all the trading and clearing member firms. Each member is represented by one row.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm code** | **CHAR** | **12** | **Firm ID** |
| FIRMNAME | Firm | CHAR | 30 | Short firm name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| EXCHANGE | Exchange | CHAR | 4 | Regional Exchange ID |
| FULLCOVEREDFLAG | Fully covered trading | [TYesNo](#eTYesNo) | 1 | Prohibition of short selling and buying without full pre-funding |
| INLIQUIDATION | Liquidation netting | [TYesNo](#eTYesNo) | 1 |  |
| CLEARINGACCESS | Clearing access | [TFirmAccess](#eTFirmAccess) | 1 |  |
| TRADINGACCESS | Trading access | [TFirmAccess](#eTFirmAccess) | 1 |  |
| MORNINGSESSION | Availability in additional morning session | [TYesNo](#eTYesNo) | 1 | Flag that shows if a firm is available for trading in additional morning session |


#### INSTRS - Groups of securities (updateable)

Table contains information on groups of similar securities (for example, A1-shares, B2-bonds, etc)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **INSTRID** | **Group** | **CHAR** | **4** | **Instrument group ID** |
| INSTRNAME | Name | CHAR | 30 | Instrument group name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| INSTRTYPE | Instrument type | [TInstrType](#eTInstrType) | 1 |  |
| QUOTEBASIS | Rate type | [TQuoteBasis](#eTQuoteBasis) | 1 |  |
| INSTRFWD | "Long" instrument | [TYesNo](#eTYesNo) | 1 | Indication that the instument is forward or "long SWAP" |


#### POSITIONS - Money positions (updateable)

Table contains information on the current money positions of a trading firm. Each table row corresponds to one group of cash positions

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **CURRCODE** | **Currency of settlements** | **CHAR** | **4** | **Currency code of the settlements** |
| **TAG** | **Position** | **CHAR** | **4** | **Position ID** |
| **BANKACCID** | **Bank account** | **CHAR** | **12** | **Settlement account/code ID in the settlement house** |
| DESCRIPTION | Description | CHAR | 30 | Group description |
| OPENBAL | Opening balance | FIXED | 17.2 | Balance at the beginning of the day |
| CURRENTPOS | Current balance | FIXED | 17.2 | Current balance during the day |
| PLANNEDPOS | Planned balance | FIXED | 17.2 | Planned balance during the day |
| LIMIT1 | External limit | FIXED | 17.2 | External limit, set by Settlement House |
| LIMIT1SET | Flag that shows if limit1 is set | [TYesNo](#eTYesNo) | 1 |  |
| LIMIT2 | Internal limit | FIXED | 17.2 | Internal limit, set by user |
| LIMIT2SET | Internal limit set | [TYesNo](#eTYesNo) | 1 |  |
| ORDERBUY | Unmatched buy total | FIXED | 17.2 | Total unmatched value in all active buy-orders entered by the trading firm |
| ORDERSELL | Unmatched sell total | FIXED | 17.2 | Total unmatched value in all active sell-orders entered by the trading firm |
| NETTO | Net balance | FIXED | 17.2 | Netto balance during the day |
| DEBIT | Debit | FIXED | 17.2 | Debit volume during the day |
| CREDIT | Credit | FIXED | 17.2 | Credit volume during the day |
| PLANNEDBAL | Control balance | FIXED | 17.2 | Control balance during the day |
| POSNGROUP | Group of positions | [TPosnGroup](#eTPosnGroup) | 1 |  |
| SETTLEBAL | Settled | FIXED | 17.2 | Planned position after settlement |


#### POSTYPE - Types of positions (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **POSITIONTAG** | **Cash positions** | **CHAR** | **4** |  |
| CURRCODE | Currency of settlements | CHAR | 4 | Currency code of the settlements |
| POSNGROUP | Group of positions | [TPosnGroup](#eTPosnGroup) | 1 |  |
| DESCRIPTION | Description | CHAR | 30 |  |


#### RESYSTIME - Clearing system time (updateable, clear on update)

Table consists of one row with risk/clearing system current date and time. This information is usually used to synchronize client time with the server time.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TIME | Time | TIME | 6 | Time on the trading/clearing system server |
| DATE | Date | DATE | 8 | Date on the trading/clearing system server |
| TOMORROWDATE | Tomorrow date | DATE | 8 |  |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time on the trading/clearing system server, microseconds |


#### RMPOSTYPE - Open position types (not updateable)

Open position types for combination of asset and settlement date

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **RMPOSTYPE** | **Open position type** | **CHAR** | **1** | **Open position type for combination of asset and settlement date** |
| DESCRIPTION | Description | CHAR | 50 |  |
| LATDESCRIPTION | English description | CHAR | 50 |  |
| CALCPERCENTRISK | Percent risk calculation | [TYesNo](#eTYesNo) | 1 |  |
| ASCOLLATERAL | Included as collateral | [TYesNo](#eTYesNo) | 1 |  |
| PARTIALPERCENTRISK | Partial percent risk | [TYesNo](#eTYesNo) | 1 |  |


#### RM_HOLD_DETL - Liabilities and Claims for Assets (updateable)

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **ACCOUNT** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
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


#### RM_INDICATIVE - Percent risk parameters (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ASSET** | **Asset** | **CHAR** | **12** |  |
| **DATE** | **Settlement date** | **DATE** | **8** |  |
| **NUM** | **Range** | **INTEGER** | **1** | **Range number** |
| LIMITBEGIN | Range start, units | FIXED | 16.2 |  |
| LIMITEND | Range end, units | FIXED | 16.2 |  |
| LRATE_RUB | Lower rate bound | FLOAT | 16 |  |
| CRATE_RUB | Central rate | FLOAT | 16 |  |
| HRATE_RUB | Upper rate bound | FLOAT | 16 |  |
| LIMITBEGIN_RUB | Range start, rub. | FIXED | 16.2 |  |
| LIMITEND_RUB | Range end, rub. | FIXED | 16.2 |  |
| RCRUB | Settlement price, rub. | FLOAT | 16 |  |
| CHANGETIME | Risk rates change time | TIME | 6 |  |


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
| **RMPOSTYPE** | **Open position type** | **CHAR** | **1** | **Open position type for combination of asset and settlement date** |


#### RM_PRICERANGE - Market risk parameters (updateable)

Common market risk-parameters

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ASSET** | **Asset** | **CHAR** | **12** |  |
| **NUM** | **Range** | **INTEGER** | **1** | **Range number** |
| LIMITBEGIN | Range start, units | FIXED | 16.2 |  |
| LIMITEND | Range end, units | FIXED | 16.2 |  |
| RTL_RUB | Lower rate bound | FLOAT | 16 |  |
| RTH_RUB | Upper rate bound | FLOAT | 16 |  |
| LIMITBEGIN_RUB | Range start, rub. | FIXED | 16.2 |  |
| LIMITEND_RUB | Range end, rub. | FIXED | 16.2 |  |
| DISCOUNT_L | Risk rate for rate decrease, % | FIXED | 6.3 |  |
| DISCOUNT_H | Risk rate for rate increase, % | FIXED | 6.3 |  |
| RCRUB | Central rate | FLOAT | 16 |  |
| CHANGETIME | Risk rates change time | TIME | 6 |  |


#### RM_PRICERANGE_FIRM - Individual risk-parameters (updateable)

Individual market risk-parameters

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |


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
| FACEVALUE | Face value | FLOAT | 17 | Face value of one Security, expressed in the currency, in which the Security is nominated |
| FACEUNIT | Currency of instrument | CHAR | 4 | Currency in which security is denominated |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
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
| **TRADENO** | **Trade number** | **INTEGER** | **12** | **Trade number in the Trading System** |
| TRADEDATE | Date | DATE | 8 | Trade registration date |
| TRADETIME | Time | TIME | 6 | Trade registration time (MSK) |
| MICROSECONDS | Microseconds | INTEGER | 6 | Trade registration time, microseconds |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell / Sell-Buy / Buy - Sell"** |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the trade is registered |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Rate | FLOAT | 17 | Currency exchange rate |
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
| PARENTTRADENO | Parent trade | INTEGER | 12 | Parent trade number for SWAP trades |
| BANKID | Settlement organization | CHAR | 12 |  |
| CLEARINGBANKACCID | Clearing bank account | CHAR | 12 | Clearing account ID in the settlement house |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| STATUS | Status | [TTradeStatus](#eTTradeStatus) | 1 | Trade status |
| CLEARINGTRDACCID | Clearing account | CHAR | 12 | Clearing account number |
| TRANTYPE | Transaction code | CHAR | 4 | Transaction Information |


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
| TRDACCTYPE | Trading account type | CHAR | 1 | Trading account type |
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


#### SET_LIMIT2 - Change internal firm limits

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| CURRCODE | Currency of settlements | CHAR | 4 | Currency code of the settlements |
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


#### USER_LOGOFF - Logoff user

Transaction for firm administrators to force logoff of other firm users

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| USERID | User ID | CHAR | 12 |  |


Key fields are marked in **bold**.  
Fields that contain security code are marked with asterisk (*).  
Repeated field groups are marked with plus sign (+).

---
The document is created with ASTSExplorer.exe 06.12.2024 10:41:57
