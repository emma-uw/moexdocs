---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Aux03 — Equities trading system auxiliary functions, v.03
sidebar_label: Aux03 — Equities trading system auxiliary functions, v.03
---

## Information objects of market 'Aux03' - 'Equities trading system auxiliary functions, v.03'

---


### Enumerated Types

#### TAction - Operation (size: 1, type: ekGroup)

| Constant | Value | Description |
| --- | --- | --- |
| A | + | Add |
| D | - | Remove |
| M | m | Modify |


#### TActiveStatus - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| A | Active | Active |
| D | Deleted | Deleted |


#### TBuySell - Order direction (size: 1, type: ekGroup)

Available order directions

| Constant | Value | Description |
| --- | --- | --- |
| B | B | Buy |
| S | S | Sell |


#### TCPListType - Partner list type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | Allow list | Allow list |
| D | Deny list | Deny list |


#### TDepositIntent - (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| I | I | Intention |
| D | D | Placement |
| R | R | Refund |
| O | O | Refund close |
| C | C | Deposit close |


#### TDepositRate - Deposit rate type (size: 1, type: ekGroup)

List of available types of deposit rates

| Constant | Value | Description |
| --- | --- | --- |
| F |  | Fixed rate deposit |
| L |  | Floating rate deposit |


#### TImmCancel - Order processing condition (size: 1, type: ekGroup)

List of available conditions of order processing:

"Append to the orderbook" - after matching the remainder of the limit order is appended to the aggregate orderbook (the priority of the order in the orderbook is determined by price and then, for the orders with equal prices - by the entry time), for market orders with this option the unmatched remainder is automatically withdrawn;

"Immediately or cancel" - the order is matched only if it could be fully matched immediately, otherwise the order is canceled.

"Withdraw unmatched remainder" - the order is matched as best it immediately could, the unmatched remainder is canceled (applicable to limit orders only)

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Append to the orderbook |
| N | N | Immediately or cancel |
| W | W | Withdraw unmatched remainder |


#### TLanguage - Language of Trading System messages (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| R | Rus | Russian |
| E | Eng | English |


#### TMktLimit - Order type (size: 1, type: ekGroup)

The list of allowed order types. Attention: market orders entered during the closing period are automatically assigned type "C" (limit orders during the closing period trading are not allowed).

| Constant | Value | Description |
| --- | --- | --- |
| M | M | Market |
| L | L | Limit |


#### TQuoteStatus - Quote status (size: 1, type: ekGroup)

Available quote statuses

| Constant | Value | Description |
| --- | --- | --- |
| O | Act | Active |
| W | - | Withdrawn |
| R | -TS | Rejected by the Trading System |
| C | -C | Cancelled by the Trading System |
| D | -D | Cancelled by Trading System on user's disconnect (COD) |
| I | -I | Waiting for negdeals |
| J | -J | Inactive after book building and matching time ran out |


#### TQuoteType - Quote type (size: 1, type: ekCombo)

Quote type

| Constant | Value | Description |
| --- | --- | --- |
| B | BASIC | Basic quote (buy/sell) |
| R | REPO | REPO quote |


#### TSecStatus - Security status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Operations are allowed |
| S | S | Operations are suspended |
| N | B | Suspended for trading, settlement is allowed |


#### TSplitFlag - Price split flag (size: 1, type: ekGroup)

List of possible values of the price split flag. Note: for market orders only the "Split allowed" ("S") value is applicable.

| Constant | Value | Description |
| --- | --- | --- |
| S |  | Price split allowed |
| O | O | One price only |


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


#### TYesNo - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| N |  | No |
| Y | Yes | Yes |

---


## Interface 'Broker' - 'Users interface, auxiliary functions, v.03'

---


### Tables

#### CPLIST - Partner lists (updateable)

Lists of partner firms

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CPLISTID** | **ID of list** | **INTEGER** | **12** | **ID of the counterparty list** |
| FIRMID | List owner's firm Id | CHAR | 12 | List owner's firm Id |
| NAME | Partner list name | CHAR | 30 | Partner list name set by the user |
| TYPE | Partner list type | [TCPListType](#eTCPListType) | 1 | Partner list type (allow list or deny list) |
| STATUS | Partner list status | [TActiveStatus](#eTActiveStatus) | 1 | Partner list status |


#### CPLIST_FIRM - Partners (updateable)

Firms included in partner lists

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CPLISTID** | **ID of list** | **INTEGER** | **12** | **ID of the counterparty list** |
| FIRMID | List owner's firm Id | CHAR | 12 | List owner's firm Id |
| **CPFIRMID** | **Counterparty** | **CHAR** | **12** | **Counterparty firm** |
| STATUS | Partner list status | [TActiveStatus](#eTActiveStatus) | 1 | Partner list status |


#### DEPOSIT - Deposits (updateable)

Table contains information about deposits

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **DEPOSITNO** | **Deposit number** | **INTEGER** | **12** | **Deposit number in the Trading System** |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CURRENCYID | Currency | CHAR | 4 | Deposit settlement currency |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| **STARTDATE** | **Deposit date** | **DATE** | **8** | **The date the deposit was placed** |
| **ENDDATE** | **Return date** | **DATE** | **8** | **Deposit return date** |
| RETURNDATE | Actual return date | DATE | 8 | Date of actual return of the deposit |
| INITIALVALUE | Deposit value | FIXED | 16.2 | Initial deposit value, expressed in the currency of the settlement |
| INITIALPRICE | Rate, % | FLOAT | 17 | Initial deposit rate, % |
| CURRENTVALUE | Current value | FIXED | 16.2 | Current deposit value, expressed in the currency of the settlement |
| CURRENTPRICE | Current rate, % | FLOAT | 17 | Current deposit rate, % |
| RETURNVALUE | Return value | FIXED | 16.2 | Return value of the deposit, expressed in the currency of the settlement |
| WAVALUE | Weighted average value | FIXED | 16.2 | Weighted average value of the deposit, expressed in the currency of the settlement |
| CURRENTACCRUED | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in the currency of settlement |
| DEPOSITRATETYPE | Deposit rate type | [TDepositRate](#eTDepositRate) | 1 | Deposit rate type |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |


#### DEPOSIT_DETL - Deposit history (updateable)

Table contains information about deposits and their changes

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **DEPOSITNO** | **Deposit number** | **INTEGER** | **12** | **Deposit number in the Trading System** |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| **DATE** | **Date of change** | **DATE** | **8** | **Date of deposit change** |
| CURRENTVALUE | Current Value | FIXED | 16.2 | Value, expressed in the currency of settlement |
| PLANNEDVALUE | Planned Volume | FIXED | 16.2 | Value, expressed in the currency of settlement |
| CURRENTPRICE | Current Rate | FLOAT | 17 | Current Adjusted Rate |
| PLANNEDPRICE | Planned Rate | FLOAT | 17 | Planned Adjusted Rate |
| CURRENTWITHDRAWAL | Deposit withdrawal | FIXED | 16.2 | Deposit withdrawal amount |
| PLANNEDWITHDRAWAL | Deposit withdrawal | FIXED | 16.2 | Deposit withdrawal amount |
| CURRENTREFUND | Deposit refund | FIXED | 16.2 | Deposit refund amount |
| PLANNEDREFUND | Deposit refund | FIXED | 16.2 | Deposit refund amount |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |
| BENCHMARKVALUE | Benchmark value, % | FLOAT | 10 | The value of the indicator that was used today to calculate the interest on this trade |
| SPREAD | Spread, % | FLOAT | 17 | Spread value, % |


#### DEPOSIT_ORDERBOOK - Orderbook (updateable, clear on update)

Table contains information with Buy and Sell quotes for a security (traded instrument). Each row corresponds to one Buy or Sell price. The maximum number of rows (i.e. orderbook depth) is determined by internal settings of the Trading System.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell"** |
| **PRICE** | **Rate, %** | **FLOAT** | **17** |  |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Value, expressed in the currency of settlement |


#### DEPOSIT_SEC - Securities (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| SECNAME | Name | CHAR | 30 |  |
| LATNAME |  | CHAR | 30 |  |
| FACEVALUE | Face value | FLOAT | 17 | Face value of one Security, expressed in the currency, in which the Security is nominated |
| FACEUNIT | Currency of instrument | CHAR | 4 | Currency in which security is denominated |
| SHORTNAME | Security | CHAR | 10 |  |
| LOTSIZE | Lot size | INTEGER | 8 | Number of securities in one lot |
| MINSTEP | Minimum price step | FLOAT | 10 | The minimal step by which two prices may differ |
| MINQTY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| STATUS | Status | [TSecStatus](#eTSecStatus) | 1 | Flag "trading operations allowed/suspended" |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals in the Value field (is used to format PRICE-type fields) |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| BID | Bid | FLOAT | 17 | Best bid price |
| BIDDEPTH | Best bid depth | INTEGER | 16 | Total unmatched volume of all active buy orders at the current best bid price, expressed in lots |
| OFFER | Offer | FLOAT | 17 | Best offer price |
| OFFERDEPTH | Best offer depth | INTEGER | 16 | Volume of all sell orders at the best price, expressed in lots |


#### DEPOSIT_TRADE - Deposit trades (updateable)

Deposit trades

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **DEPOSITNO** | **Deposit number** | **INTEGER** | **12** | **Deposit number in the Trading System** |
| **TRADENO** | **Trade #** | **INTEGER** | **12** | **Trade number in the Trading System** |
| PARENTTRADENO | Витринная сделка № | INTEGER | 12 | Идентификационный номер витринной сделки в Торговой Системе |
| TRADEDATE | Дата сделки | DATE | 8 | Дата сделки |
| SECCODE | Security | CHAR | 12 | Security ID |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| SETTLEDATE | Дата расчетов | DATE | 8 | Дата расчетов |
| REFUND | Пополнение | FIXED | 16.2 | Value, expressed in the currency of settlement |
| WITHDRAW | Изъятие | FIXED | 16.2 | Value, expressed in the currency of settlement |
| RATE | Rate | FLOAT | 17 | Rate |
| STATUS | Status | [TTradeStatus](#eTTradeStatus) | 1 | Trade status |
| DEPOSITINTENT | Deposit trade type | [TDepositIntent](#eTDepositIntent) | 1 | Deposit trade type |


#### NEGDEALQUOTELINK - Quotes and negdeals correspondence (updateable)

Table contains list of quote IDs with correspondent negdeal IDs

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| QUOTENO | Quote number | INTEGER | 12 | Quote ID number |
| ORDERNO | Order | INTEGER | 12 | Order ID |


#### QUOTE - Sent quotes (updateable)

Table contains information on quotes submitted by current firm since the beginning of the trading session. Each row corresponds to one quote.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **QUOTENO** | **Quote number** | **INTEGER** | **12** | **Quote ID number** |
| ENTRYDATE | Date | DATE | 8 |  |
| ENTRYTIME | Time | TIME | 6 |  |
| STATUS | Status | [TQuoteStatus](#eTQuoteStatus) | 1 | Status of a quote |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Quote direction - "Buy / Sell" |
| USERID | User ID | CHAR | 12 |  |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price (rate) | FLOAT | 17 |  |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| CPLISTID | ID of list | INTEGER | 12 | ID of the counterparty list |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the quote was registered at the Trading System, microseconds |
| UPDATETIME | Update time | TIME | 6 | Time when the quote was updated last time (cancelled) |
| UPDATE_MICROSECONDS | Update time microseconds | INTEGER | 6 | Time when the quote was updated last time (cancelled), microseconds |
| QUOTETYPE | Quote type | [TQuoteType](#eTQuoteType) | 1 |  |
| VALUE | Value | FLOAT | 16 | Value, expressed in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| ANONYMOUS | Anonymous quote | [TYesNo](#eTYesNo) | 1 | Do not disclose quote's initiator |
| FULLAMOUNT | Full amount flag | [TYesNo](#eTYesNo) | 1 | If this flag is set, only negdeals with value equal to quote's value are accepted |
| BOOKBUILDINGTIME | Negdeal placement end time | TIME | 6 | Time (HHMMSS) until which it's allowed to place negdeals for this quote |
| LIFETIME | Quote life time | TIME | 6 | Time (HHMMSS) at which all active negdeals for this quote will be cancelled |
| ISOPENREPO | Open date REPO | [TYesNo](#eTYesNo) | 1 | Open date REPO |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |


#### QUOTEBOOK - Quotes (updateable)

Table contains information on all quotes submitted by the trading firms in negdeal mode with no counterparty specified (quotes) since the beginning of the trading session. Each row corresponds to one quote.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **QUOTENO** | **Quote number** | **INTEGER** | **12** | **Quote ID number** |
| STATUS | Status | [TQuoteStatus](#eTQuoteStatus) | 1 | Status of quote |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Quote direction - "Buy / Sell" |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 |  |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| QUOTETYPE | Quote type | [TQuoteType](#eTQuoteType) | 1 |  |
| VALUE | Value | FLOAT | 16 | Value, expressed in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| FULLAMOUNT | Full amount flag | [TYesNo](#eTYesNo) | 1 | If this flag is set, only negdeals with value equal to quote's value are accepted |
| BOOKBUILDINGTIME | Negdeal placement end time | TIME | 6 | Time (HHMMSS) until which it's allowed to place negdeals for this quote |
| LIFETIME | Quote life time | TIME | 6 | Time (HHMMSS) at which all active negdeals for this quote will be cancelled |
| ISOPENREPO | Open date REPO | [TYesNo](#eTYesNo) | 1 | Open date REPO |


#### QUOTE_FIRM - Firms (updateable)

This table contains additional information about the participating firms

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| CPLISTID | ID of list | INTEGER | 12 | ID of the counterparty list |


#### QUOTE_SEC - Quote market data (updateable)

The table contains current quote-based market information for securities.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| BID | Bid | FLOAT | 17 | Best bid price |
| BIDDEPTHT | Total bid depth | INTEGER | 16 | Total volume of all active buy quotes, expressed in lots |
| NUMBIDS | Buy quotes number | INTEGER | 8 | Number of active buy quotes |
| OFFER | Offer | FLOAT | 17 | Best offer price |
| OFFERDEPTHT | Total offer depth | INTEGER | 16 | Total volume of all active sell quotes, expressed in lots |
| NUMOFFERS | Sell quotes number | INTEGER | 8 | Number of active sell quotes |
| TIME | Change time | TIME | 6 | Time when market data was last changed |
| LASTBID | Session last bid | FLOAT | 17 | Best bid price at the time of the session end |
| LASTBIDDEPTHT | Session last total bid depth | INTEGER | 16 | Total volume of all active buy quotes, expressed in lots, at the time of the session end |
| LASTNUMBIDS | Session last buy quotes number | INTEGER | 8 | Number of active buy quotes at the time of the session end |
| LASTOFFER | Session last offer | FLOAT | 17 | Best offer price at the time of the session end |
| LASTOFFERDEPTHT | Session last total offer depth | INTEGER | 16 | Total volume of all active sell quotes, expressed in lots, at the time of the session end |
| LASTNUMOFFERS | Session last sell quotes number | INTEGER | 8 | Number of active sell quotes at the time of the session end |


---


### Transactions

#### CHANGE_LANGUAGE - Change the language of the Trading System messages

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| LANGUAGEID | Language code | [TLanguage](#eTLanguage) | 1 | Language code. Available codes: R - Russian, E - English |


#### CPLIST_CREATE - Create list of partners

Create list of partners

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NAME | Partner list name | CHAR | 30 | Partner list name |
| TYPE | Partner list type | [TCPListType](#eTCPListType) | 1 | Partner list type (allow list or deny list) |
| CPFIRMID[+](#refs) | Counterparty | CHAR | 12 | Counterparty firm |


#### CPLIST_DELETE - Delete list of partners

Modify or delete list of partners

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| CPLISTID | ID of list | INTEGER, NOT NULL | 12 | ID of the counterparty list |


#### CPLIST_MODIFY - Modify list of partners

Modify or delete list of partners

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| CPLISTID | ID of list | INTEGER, NOT NULL | 12 | ID of the counterparty list |
| NAME | Partner list name | CHAR | 30 | Partner list name set by the user |
| TYPE | Partner list type | [TCPListType](#eTCPListType) | 1 | Partner list type (allow list or deny list) |
| CPFIRMID[+](#refs) | Counterparty | CHAR | 12 | Counterparty firm |
| CPFIRMID_OPERATION[+](#refs) | Operation with a partner | [TAction](#eTAction) | 1 | Operation with a partner |


#### DEPOSIT_NEGDEAL - Enter negotiated deal order

Enter negotiated deal order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | ID of the firm the order is addressed to |
| REPORATE | REPO rate | FLOAT | 17 | REPO rate, expressed in % |
| VALUE | Order value | FIXED | 16.2 | Order value, expressed in the currency of settlement |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| DEPOSITNO | Deposit number | INTEGER | 12 | Deposit number in the Trading System |
| ACCEPTEDORDERNO | ID of a deal to accept | INTEGER | 12 | Accepted counterparty's negotiated deal number (if an order is send in reply to negotiated deal) or white spaces |


#### DEPOSIT_ORDER - Change of deposit

Request to withdraw a part of the deposit

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| MKTLIMIT | Type | [TMktLimit](#eTMktLimit) | 1 | Order type: "limit/market" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, immediately or cancel, withdraw remainder |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Rate | FLOAT | 17 | Rate |
| VALUE | Order value | FIXED | 16.2 | Order value, expressed in the currency of settlement |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| DEPOSITNO | Deposit number | INTEGER | 12 | Deposit number in the Trading System |


#### QUOTE - Enter quote

It is used to enter RPS / Intentions Quotes into the Trading / Clearing System. At the same time, only the Intention can be set for a security without a listing. For a financial instrument that has a listing level, the Bidder puts up an RPS Quote, and the Clearing Participant puts up an Intention. If the Bidder and the Clearing Participant coincide in one person, the RPS Quotation and the Intention are displayed simultaneously.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price (rate) | FLOAT | 17 | Price (for buy/sell quotes) or REPO rate |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| CPLISTID | ID of list | INTEGER | 12 | ID of the counterparty list |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |


#### QUOTE_CREDIT_NEGDEAL - Enter negotiated deal Credit order

Enter negotiated deal Credits without CCP order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched |
| REPORATE | REPO rate | FLOAT | 17 | REPO rate, expressed in % |
| REPOORDERVALUE | Repo value | FLOAT | 16 | Repo value in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| ACCEPTEDQUOTENO | ID of a quote to accept | INTEGER | 12 | Number of quote being accepted (if the order is sent in reply to the quote), otherwise fill with spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |


#### QUOTE_NEGDEAL - Enter negotiated deal order

Enter negotiated deal order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| PRICE | Rate | FLOAT | 17 | Rate |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched |
| ACCEPTEDQUOTENO | ID of a quote to accept | INTEGER | 12 | Number of quote being accepted (if the order is sent in reply to the quote), otherwise fill with spaces |
| ACCEPTEDORDERNO | ID of a deal to accept | INTEGER | 12 | Accepted counterparty's negotiated deal number (if an order is send in reply to negotiated deal) or white spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| VALUE | Value | FIXED | 16.2 | Value, expressed in the currency of settlement |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| CPUSERALIAS | Counterparty user alias | CHAR | 12 | Alias of the user the order is addressed to |


#### QUOTE_REPO - Enter REPO quote

It is used to enter REPO quotes into the Trading system.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price (rate) | FLOAT | 17 | Price (for buy/sell quotes) or REPO rate |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| QUOTEVAL | Value | FLOAT | 16 | Value, expressed in the currency of settlement |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |
| CPLISTID | ID of list | INTEGER | 12 | ID of the counterparty list |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| ISOPENREPO | Open date REPO | [TYesNo](#eTYesNo) | 1 | Open date REPO |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| ENABLEEXTCAPABILITES | Enable extended quote capabilities | [TYesNo](#eTYesNo) | 1 |  |
| ANONYMOUS | Anonymous quote | [TYesNo](#eTYesNo) | 1 | Do not disclose quote's initiator |
| FULLAMOUNT | Full amount flag | [TYesNo](#eTYesNo) | 1 | If this flag is set, only negdeals with value equal to quote's value are accepted |
| BOOKBUILDINGTIME | Bookbuilding time in minutes | INTEGER | 6 | Time (in minutes), during which it's allowed to place negdeals for this quote |


#### QUOTE_REPO_CCP_NEGDEAL - Enter negotiated deal REPO with CCP order

Enter negotiated deal REPO with CCP or Deposit with CCP order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPORATE | REPO rate | FLOAT | 17 | REPO rate, expressed in % |
| REPOORDERVALUE | Repo value | FLOAT | 16 | Repo value in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| DISCOUNT | Discount | FLOAT | 17 | Starting discount, percents |
| ACCEPTEDQUOTENO | ID of a quote to accept | INTEGER | 12 | Number of quote being accepted (if the order is sent in reply to the quote), otherwise fill with spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |
| ISOPENREPO | Open date REPO | [TYesNo](#eTYesNo) | 1 | Open date REPO |


#### QUOTE_REPO_NEGDEAL - Enter negotiated deal REPO order

Enter negotiated deal REPO without CCP order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched |
| REPORATE | REPO rate | FLOAT | 17 | REPO rate, expressed in % |
| REPOORDERVALUE | Repo value | FLOAT | 16 | Repo value in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| DISCOUNT | Discount | FLOAT | 17 | Starting discount, percents |
| LOWERDISCOUNT | Lower discount boundary | FLOAT | 17 | Lower discount boundary, percents |
| UPPERDISCOUNT | Upper discount boundary | FLOAT | 17 | Upper discount boundary, percents |
| ACCEPTEDQUOTENO | ID of a quote to accept | INTEGER | 12 | Number of quote being accepted (if the order is sent in reply to the quote), otherwise fill with spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |
| ISOPENREPO | Open date REPO | [TYesNo](#eTYesNo) | 1 | Open date REPO |


#### QUOTE_SET_DENY_CPLIST - Set quote view deny list for your firm

Set or reset partner list to filter incoming quotes

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| OPERATION | Partner list operation | [TAction](#eTAction) | 1 | Quote view deny list operation: 'A' - set deny list, 'D' - reset deny list |
| CPLISTID | ID of list | INTEGER | 12 | ID of the counterparty list |


#### QUOTE_WD - Withdraw quotes

Withdraw previously entered quotas

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| QUOTENO | Quote number | INTEGER | 12 | Quote ID number |


Key fields are marked in **bold**.  
Fields that contain security code are marked with asterisk (*).  
Repeated field groups are marked with plus sign (+).

---
The document is created with ASTSExplorer.exe 23.08.2023 10:48:36
