---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: GKO15 — Интерфейс для рынка ГЦБ v15
sidebar_label: GKO15 — Интерфейс для рынка ГЦБ v15
---

## Information objects of market 'GKO15' - 'Интерфейс для рынка ГЦБ v15'

---


### Enumerated Types

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


#### TCurrCode - Currency code (size: 4, type: ekCombo)

Currency codes for over-the-counter trades

| Constant | Value | Description |
| --- | --- | --- |
| RUB | rub. | Rouble |
| USD | $ | US Dollar |
| EUR | € | Euro |


#### TDepAccType - Type of depositary account (size: 1, type: ekGroup)

List of depositary account types

| Constant | Value | Description |
| --- | --- | --- |
| C |  | Main (own) |
| O |  | Correspondent |
| T |  | Custodian |
| Z |  | Emission |


#### TEntryType - Price type (size: 1, type: ekGroup)

Available types of price to be indicated during order submission

| Constant | Value | Description |
| --- | --- | --- |
| P |  | "Conventional" price |
| Y | Y | Yield as price |
| W | W | Weighted-average price as price |


#### TExtTradeStatus - OTC trade status (size: 1, type: ekGroup)

Status of an over-the-counter trade

| Constant | Value | Description |
| --- | --- | --- |
| A | Act | Active |
| D | - | Withdrawn |
| M | + | Published |


#### TImmCancel - Order processing condition (size: 1, type: ekGroup)

List of available conditions of order processing:

"Append to the orderbook" - after matching the remainder of the limit order is appended to the aggregate orderbook (the priority of the order in the orderbook is determined by price and then, for the orders with equal prices - by the entry time), for market orders with this option the unmatched remainder is automatically withdrawn;

"Immediately or cancel" - the order is matched only if it could be fully matched immediately, otherwise the order is canceled;

"Withdraw unmatched remainder" - the order is matched as best it immediately could, the unmatched remainder is canceled (applicable to limit orders only).

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Append to the orderbook |
| N | N | Immediately or cancel |
| W | W | Withdraw unmatched remainder |


#### TInstrType - Instrument type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| C | C | Currency |
| S | S | Security |
| I | I | Index |
| Z | Z | Deposit |


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
| C | C | Order of the closing period |


#### TMMOrder - Market-maker's order flag (size: 1, type: ekCheck)

Market-maker's order flag (applies to limit orders only)

| Constant | Value | Description |
| --- | --- | --- |
|  |  | No |
| M | Yes | Yes |


#### TMMQuoteType - Market-maker's obligations to support liquidity (size: 1, type: ekCombo)

List of available types of market-maker's obligations to support liquidity of a security

| Constant | Value | Description |
| --- | --- | --- |
| N |  | No obligations |
| A | A | Obligation to support liquidity on both buy- and sell- directions |
| B | B | Obligation to support liquidity on only one (either buy or sell) direction |


#### TOperationType - Direction of a Transfer transaction (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| K | D | Deposit |
| D | W | Withdraw |


#### TOrderStatus - Order status (size: 1, type: ekGroup)

Available order statuses

| Constant | Value | Description |
| --- | --- | --- |
| O | Act | Active |
| M | + | Matched |
| W | - | Withdrawn |
| F | -CP | Rejected by counterparty |
| R | -TS | Rejected by the Trading System |
| C | -C | Cancelled by the Trading System |
| T | Time | Order activation time hasn't come yet |


#### TOwnCli - On behalf of... (size: 1, type: ekCombo)

Values indicating the owner of an OTC trade

| Constant | Value | Description |
| --- | --- | --- |
| A | OWNOWN | On own behalf, on own account |
| B | OWNCLI | On own behalf, on client's account |
| C | OWNDUP | On own behalf, on trust management account |
| D | CLICLI | On client's behalf, on client's account |


#### TPeriod - Trading period (size: 1, type: ekGroup)

List of trading periods

| Constant | Value | Description |
| --- | --- | --- |
| O | O | Opening period |
| N |  | Normal trading |
| C | C | Closing period |


#### TQuoteBasis - Price basis (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| R | P | Price is specified in terms of cash for one instrument |
| F | % | Price is specified as percentage of the traded instrument's face value |


#### TRepoEntry - Type of REPO order entry (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| 1 | P1+R | Price1+Rate |
| 2 | R+P2 | Rate+Price2 |
| 3 | P1+P2 | Price1+Price2 |
| 4 | RVa+V | REPO Value+Volume |
| 5 | RVa+D | REPO Value+Discount |
| 6 | V+D | Volume+Discount |
| 7 | RVa | REPO Value |
| 8 | V | Volume |
| 0 |  | Not defined |


#### TReportStatus - Settlement instruction status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| O | O | Open (waiting for acceptance) |
| W | - | Withdrawn |
| M | + | Matched (accepted) |
| C | C | Cancelled by the Trading System |


#### TReportType - Settlement instruction type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| S | Settle | Settlement instruction |
| C | Cancel | Instruction to cancel margin call |


#### TSecStatus - Security status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | A | Operations are allowed |
| S | S | Operations are suspended |
| N | N | Blocked for trading, settlement is allowed |


#### TSecTransferBuySell - Transfer direction (size: 1, type: ekGroup)

List of available transfer directions

| Constant | Value | Description |
| --- | --- | --- |
| B | D | Deposit |
| S | W | Withdraw |


#### TSecType - Security type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| 1 | os | Ordinal stocks |
| 2 | ps | Preferred stocks |
| 3 | gs | Government security |
| 4 | Region | Regional security |
| 5 | cbsec | Central bank's security |
| 6 | corp bnd | Corporate bonds |
| 7 | intl bnd | Bonds of international financial organizations |
| 8 | exch bnd | On-exchange bonds |
| 9 | Open MF | Open mutual funds |
| A | Int. MF | Interval mutual funds |
| B | Closed MF | Closed mutual funds |
| C | muni | Municipal securities |


#### TSplitFlag - Price split flag (size: 1, type: ekGroup)

List of possible values of the price split flag. Note: for market orders only the "Split allowed" ("S") value is applicable.

| Constant | Value | Description |
| --- | --- | --- |
| S |  | Price split allowed |
| O | O | One price only |


#### TStatus - Trading status (size: 1, type: ekCombo)

List of available trading operation statuses

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Operations are allowed |
| S | S | Operations are suspended |


#### TTimeStatus - Event status (size: 1, type: ekCombo)

List of available statuses in the trading system schedule

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Active |
| L | - | Carried out |


#### TTradeType - Trade type (size: 1, type: ekGroup)

| Constant | Value | Description |
| --- | --- | --- |
| T |  | Normal trade |
| N | N | Negotiaded deal |
| P | P | IPO |
| F | F | Money/Securities transfer |
| R | R1 | Negotiated deal for the first part of REPO trade |
| Z | D | Negotiated deal for the first part of Deposit trade |


#### TTradingStatus - Security trading status (size: 1, type: ekGroup)

List of available security trading statuses

| Constant | Value | Description |
| --- | --- | --- |
| N | N | Not traded at the moment |
| O | O | Opening period |
| C | - | Trading is closed |
| F | C | Closing period |
| B | B | Break |
| T |  | Trading session |


#### TTrdAccType - Trading account type (size: 1, type: ekGroup)

List of available types of trading accounts

| Constant | Value | Description |
| --- | --- | --- |
| C |  | Special account for cash transfer |
| M |  | Own account (credit inst.) |
| N |  | Client account |
| O |  | Client correspondent account |
| R |  | Own account (non-credit inst.) |
| S |  | Trust management account (non-credit inst.) |
| T |  | Trust management account (credit inst.) |


#### TUrgency - Message urgency (size: 1, type: ekCheck)

Available message urgency types

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Normal |
| U | ! | Urgent |


#### TUSTradeStatus - Status of unsettled trades (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| U | Unsettled | No settlement instruction has been sent yet |
| P | Waiting | Included into settlement instruction |
| M | + | Matched/confirmed (included into off-line settlement) |
| G | Margin call | Margin call |
| N | Margin call cancel | Margin call cancel |
| C | -C | Cancelled by the Trading System |
| W | - | Withdrawn by the user |


#### TUSTradeType - Type of an unsettled trade (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| N | N | Negotiated deal |
| R | R1 | REPO first leg |
| r | R2 | REPO second leg |
| D | M | Margin call |
| P | P | Primary distribution |
| Z | D1 | Deposit trade first leg |
| z | D2 | Deposit trade second leg |


#### TWBuySell - Direction of an order being withdrawn (size: 1, type: ekCombo)

List of allowed values determining the direction of the orders being withdrawn. Is used in the Withdraw Orders transaction.

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Any aim |
| B | B | Buy |
| S | S | Sell |


#### TYesNo - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| N |  | No |
| Y | Yes | Yes |

---


## Interface 'Broker' - 'Interface for brokerage systems, v.15'

---


### Tables

#### ACCOUNT_BALANCE - Current positions on securities on trading accounts (updateable)

Table contains information on the current positions on securities on trading accounts of a trading firm. Each row holds a unique pair of trading account + security ID.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account ID | CHAR | 12 | Trading account number |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| DEPACCID | Depositary account | CHAR | 12 | Depositary account number in the Depositary Center |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| OPENBAL | Opening balance | INTEGER | 16 | Total number of securities at the beginning of the Trading Session |
| CURRENTPOS | Current balance | INTEGER | 16 | Текущий остаток. Текущий остаток равен входящему остатку плюс суммарный объем (в ценных бумагах) заключенных Членом Секции сделок на покупку минус суммарный объем (в ценных бумагах) заключенных Членом Секции сделок на продажу. |
| PLANNEDPOSBUY | Planned buy position | INTEGER | 16 | The total number of securities in all active (not matched, withdrawn or canceled) "Buy" orders |
| PLANNEDPOSSELL | Planned sell position | INTEGER | 16 | The total number of securities in all active (not matched, withdrawn or canceled) "Sell" orders |
| **ACCOUNT** | **Торговый счет** | **CHAR** | **12** | **Trading account number** |


#### ALL_TRADES - All trades (updateable)

Table contains anonymous information on all trades registered in the Trading System for a trading firm since the beginning of current trading session

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRADENO | Trade # | INTEGER | 12 | Trade number in the Trading System |
| TRADETIME | Time | TIME | 6 | Time when the trade was registered by the Trading System |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Лоты | INTEGER | 10 | Trade volume, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in Rubles |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in Rubles |
| YIELD | Yield | FIXED | 9.2 | Yield, based on the trade price |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Period of the trading session when the trade was concluded |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Direction of an order which led to the trade conclusion |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in roubles for the current date |
| REPO2VALUE | REPO buy-back value | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg, expressed in roubles |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |


#### BCMESSAGES - Messages (updateable)

Table contains information on all messages received by the firm since the Trading Session start

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| URGENCY | Importance | [TUrgency](#eTUrgency) | 1 | Message urgency or importance |
| FROMUSER | From | CHAR | 12 | User ID of the message sender |
| MSGTIME | Time | CHAR | 8 | Time when the message was dispatched |
| MSGTEXT | Text | CHAR | 256 | Text of the message |


#### BOARDS - Trading boards (updateable)

Table contains information on trading boards. The term "Trading Board", as we use it, means a set of trading rules, including the trading methods used (i.e. order-driven market, quote-driven market, call-auction-type trading etc.), order types allowed, trading schedule applied, settlement rules and procedures applied etc

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **BOARDID** | **Trading board ID** | **CHAR** | **4** | **Trading board ID** |
| BOARDNAME | Board | CHAR | 30 | Trading board name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not" |
| CURRCODE | Currency | CHAR | 4 | Currency Code |
| MARKETID | Market | CHAR | 4 | Market ID this board belongs to |
| LATNAME | English name | CHAR | 30 | Board name in english |


#### CLIENTCODES - Brokerage clients (not updateable)

Table contains information on clients of a broker firm that are registered in the Trading System

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| DETAILS | Comments | CHAR | 20 | Client taxpayer / passport number |
| CLIENTTYPE | Type | CHAR | 2 | Type of client identification |


#### CURRENCY - Currencies (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CURRCODE** | **Currency** | **CHAR** | **4** | **Currency Code** |
| CURRENCYNAME | Name | CHAR | 30 |  |
| CROSSRATE | Exchange rate | CHAR | 10 | Exchange rate of the currency to ruble, expressed in rubles with precision of 4 digits |


#### EXT_ORDERBOOK - Extended aggregate orderbook (updateable, clear on update)

This is an extended version of ORDERBOOK table. It contains information on current best buy & sell prices and activation time for a particular security. Each row corresponds to a unique pair of price & activation time and shows the total number of lots to sell or to buy at this price with this activation time.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Trading board ID |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| DEPTH | Orderbook depth | INTEGER | 2 | Requested depth of best bid/offer prices for a security. Omitted to get the whole permitted depth. |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell"** |
| **PRICE** | **Price** | **PRICE** | **9** | **Price** |
| **ACTIVATIONTIME** | **Order activation time** | **TIME** | **6** |  |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| YIELD | Yield | FIXED | 9.2 | Volume of lots at the best price |
| MYORDERS | Заявок собств. | INTEGER | 6 | Number of active own orders at this price |
| VOLUME | Own lots | INTEGER | 10 | Volume of own active orders at this price, expressed in lots |
| VALUE | Own value | FIXED | 16.2 | Value of own active orders at this price, expressed in Rubles |


#### EXT_TRADES - OTC trades (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRADENO** | **Trade** | **INTEGER** | **12** | **Trade number in the Trading System** |
| TIME | Time | TIME | 6 |  |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| USERID | User ID | CHAR | 12 |  |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| LPRICE | Price | PRICE | 16 | Price for one security |
| LQTY | Quantity | INTEGER | 16 |  |
| CURRCODE | Currency | [TCurrCode](#eTCurrCode) | 4 | Currency code for OTC trades |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| EXTTRADESTATUS | Trade status | [TExtTradeStatus](#eTExtTradeStatus) | 1 |  |
| FORACCOUNT | On behalf of | [TOwnCli](#eTOwnCli) | 1 | On behalf of / on account |
| LARGETRADE | Large trade | [TYesNo](#eTYesNo) | 1 | Flag of a large trade |
| SETTLEDATE | Дата исполнения | DATE | 8 |  |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REGNUMBER | Registration number | CHAR | 20 | Security state registration number |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |


#### FIRMS - Firms (updateable)

Table lists all the firms

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm code** | **CHAR** | **12** | **Firm ID** |
| FIRMNAME | Firm | CHAR | 30 | Short firm name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not" |
| EXCHANGE | Exchange | CHAR | 4 | Regional Exchange ID |


#### FIRM_HOLDING_TOTAL - Current positions on securities (updateable)

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


#### INDEXES - Indices (updateable)

Each table row represents one of the indices calculated for this market

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **INDEXBOARD** | **Board** | **CHAR** | **4** | **Board ID of securities in index base** |
| **INDEXCODE[*](#refs)** | **Index ID** | **CHAR** | **12** | **Exchange Index ID** |
| NAME | Name | CHAR | 30 | Index name |
| SHORTNAME | Index | CHAR | 10 |  |
| CURRENTVALUE | Current | PRICE | 9 | Current index value |
| LASTVALUE | Close | PRICE | 9 | Last value of the previous trading session |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals in the Value field (is used to format PRICE-type fields) |
| LATNAME | English name | CHAR | 30 | Index name in English |
| TIME | Calculation time | TIME | 6 |  |
| OPENVALUE | Opening value | PRICE | 9 | Value of the Index at the opening of the current trading day |
| VALTODAY | Trade volume | INTEGER | 16 | Value of all the trades included into an index, expressed in Rubles |
| MIN | Minimum | PRICE | 9 | Minimum index value |
| MAX | Maximum | PRICE | 9 | Maximum index value |


#### INSTRUMENTS - Groups of securities (updateable)

Table contains information on groups of similar securities (for example, A1-shares, B2-bonds, etc)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **INSTRID** | **Group** | **CHAR** | **4** | **Instrument Group ID** |
| INSTRNAME | Name | CHAR | 30 | Instrument Group Name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not" |
| INSTRTYPE | Instrument type | [TInstrType](#eTInstrType) | 1 |  |
| QUOTEBASIS | Price type | [TQuoteBasis](#eTQuoteBasis) | 1 |  |


#### MARKETS - Markets (updateable)

Table contains information on the markets. Market constitutes a group of trading boards with common features and trading rules (traded instruments, trading rules etc.) - i.e. the Government Securities Market, the Corporate Securities Market, the Quote-Driven Market.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **MARKETID** | **Market** | **CHAR** | **4** | **Market ID** |
| MARKETNAME | Name | CHAR | 30 | Market name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not" |
| LATNAME | English name | CHAR | 30 | Market name in English |


#### MM_STATS - Market-maker's obligations (updateable)

Table contains information on market-maker's obligations and compliance with these obligations

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| MGFBUYBREACHED | Min guaranteed fill on buy side breach flag | [TBoolInt](#eTBoolInt) | 1 | Индикатор информирующий, что нарушено обязательство по МДО-Покупка |
| MGFSELLBREACHED | Min guaranteed fill on sell side breach flag | [TBoolInt](#eTBoolInt) | 1 | Flag showing that market-maker's minimal guaranteed fill (minimal total number of lots in active market-maker orders obligatory for the market-maker) on sell side is not sustained by the market-maker |
| TOTALBUY | Total buy volume | INTEGER | 10 | Total volume of active limit buy-orders, expressed in lots |
| TOTALSELL | Total sell volume | INTEGER | 10 | Total volume of active limit sell-orders, expressed in lots |
| BUYMGF | Min guaranteed fill on buy side | INTEGER | 10 | Market-Maker's minimal guaranteed fill (minimal total number of lots in active market-maker orders obligatory for the market-maker) on buy side |
| SELLMGF | Min guaranteed fill on sell side | INTEGER | 10 | Market-Maker's minimal guaranteed fill (minimal total number of lots in active market-maker orders obligatory for the market-maker) on sell side |
| MINBUY | Minumum buy | PRICE | 9 | Minimum price of active limit buy orders |
| MAXSELL | Maximum sell | PRICE | 9 | Minimum price of active limit sell orders |
| ALLOWEDBUY | Minimum allowed | PRICE | 9 | Minimum allowed price of active buy orders |
| ALLOWEDSELL | Maximum allowed | PRICE | 9 | Maximum allowed price of active sell orders |
| SPREAD | Spread, % | PRICE | 9 | Current market-maker's spread (difference between Minimum buy and Maximum sell prices in active market-maker's orders) |
| SPREADLIMIT | Max spread, % | PRICE | 9 | Maximum spread allowed for the market-maker |
| TOTALBREACHTIME | Total breach time | TIME | 6 | Total time during the current Trading Session when the market-maker was not complying with his/her obligations |
| BREACHFLAG | Breaching now flag | [TYesNo](#eTYesNo) | 1 | Flag indicating that the market-maker is not complying with his/her obligations now |
| TOTALKEEPTIME | Total compliance time | TIME | 6 | Total time during the current Trading Session when the market-maker was complying with his/her obligations |
| KEEPFLAG | Obligation performance | [TYesNo](#eTYesNo) | 1 | Flag to indicate whether market-maker performs his/her obligations now |
| VOLTRADED | Total traded volume | INTEGER | 10 | Total volume of trades, in lots |
| FAIRVOLUME | Threshold volume | INTEGER | 10 | When the threshold value of trades is exceeded then the market-maker's obligations either change from two-sided to one-sided or he/she is released from obligations. Expressed in lots. |
| ALLOWDBREACHTIME | Allowed breach time | TIME | 6 |  |
| QUOTETYPE | Market-maker's obligations to support liquidity | [TMMQuoteType](#eTMMQuoteType) | 1 | Type of market-maker's obligation to support liquidity of a security (not required, both buy- and sell- orders, one direction) |


#### NEGDEALBOOK - Negdeal orderbook (updateable, clear on update)

Orderbook for negotiated deals.
Two request formats are available: 1. specify Trading board ID only (BOARDID) to get orderbook for all instruments traded on that board; 2. specify both Trading board and Security ID (SECBOARD+SECCODE) to get orderbook for a particular security traded on the specified board.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BOARDID | Board | CHAR | 4 | Trading board ID |
| SECBOARD | Board | CHAR | 4 | Board ID |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| FIRMID | Firm | CHAR | 12 | Firm ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| PRICE | Price | PRICE | 9 | Price |
| YIELD | Yield | FIXED | 9.2 | Yield, based on the trade price |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |


#### NEGDEALS - Negotiated deal orders (updateable)

Table contains information on all negotiated deals submitted by the trading firm since the beginning of the trading session

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **DEALNO** | **Order No.** | **INTEGER** | **12** | **Negotiated deal order number (ID) in the Trading System** |
| DEALTIME | Time | TIME | 6 | Time when the trade was registered by the Trading System |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Status of an OTC trade |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | Trader who entered the order |
| FIRMID | Firm | CHAR | 12 | Firm on which behalf the order was entered |
| CPFIRMID | Counterparty | CHAR | 12 | Firm the order is addressed to |
| ACCOUNT | Trading account | CHAR | 12 | Trading account for which the order was entered |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| YIELD | Yield | FIXED | 9.2 | Yield at the order price |
| PRICE2 | Buyback price | PRICE | 9 | Buyback price for the second REPO leg |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| VALUE | Value | FIXED | 16.2 | Объем заявки, выраженный в руб. |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in Rubles |
| QUOTENO | Counter-order | INTEGER | 12 | Number of the counter-order, 0 if no order |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed as percentage |
| REPOENTRY | REPO order entry type | [TRepoEntry](#eTRepoEntry) | 1 | Parameter combination specified at the entry of REPO order |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in roubles for the current date |
| REPO2VALUE | REPO buy-back value | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg, expressed in roubles |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STARTDISCOUNT | REPO initial discount, % | PRICE | 9 | Either indicated explicitly or calculated by the Trading System based on other REPO order parameters. |
| LOWERDISCOUNT | Low limit of REPO discount, % | PRICE | 9 | Optional parameter that can be specified at order entry. When current discount becomes lower than this limit then the initial seller has a margin call for cash transfer. |
| UPPERDISCOUNT | Upper limit of REPO discount, % | PRICE | 9 | Optional parameter that can be specified at order entry. When current discount exceeds than this limit then the initial buyer has a margin call for securities transfer. |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Block collaterals on a special account for REPO trades |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading session period in which the order was entered |
| CLIENTCODE | Client code | CHAR | 12 | Short client code which was indicated when entering the trade |
| WITHDRAWTIME | Withdrawal time | TIME | 6 | Time when the order was withdrawn (cancelled) |
| BALANCE | Lots left | INTEGER | 10 | Volume of unmatched part of an order, expressed in lots |
| ORIGINREPOVALUE | REPO value specified by the user | FIXED | 16.2 | Initial REPO value that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |
| ORIGINQUANTITY | Number of lots as specified by the user | INTEGER | 10 | Initial number of lots that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |
| ORIGINDISCOUNT | Original discount specified by the user | PRICE | 9 | Initial REPO discount that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |


#### ONENEGDEAL - Details for one negotiated deal order (updateable, clear on update)

Table consists of one row holding information on a negdeal order having the number specified in request

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| DEALNO | Deal # | INTEGER | 12 | Negotiated deal order number (ID) in the Trading System |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **DEALNO** | **Заявка №** | **INTEGER** | **12** | **Negotiated deal order number (ID) in the Trading System** |
| DEALTIME | Time | TIME | 6 | Time when the trade was registered by the Trading System |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Status of an OTC trade |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | Trader who entered the order |
| FIRMID | Firm | CHAR | 12 | Firm on which behalf the order was entered |
| CPFIRMID | Counterparty | CHAR | 12 | Firm the order is addressed to |
| ACCOUNT | Trading account | CHAR | 12 | Trading account from which the order was entered |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| YIELD | Yield | FIXED | 9.2 | Yield at the order price |
| PRICE2 | Buyback price | PRICE | 9 | Buyback price for the second REPO leg |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| VALUE | Value | FIXED | 16.2 | Order value, expressed in Rubles |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in Rubles |
| QUOTENO | Counter-order | INTEGER | 12 | Number of the counter-order, 0 if no order |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents |
| REPOENTRY | REPO order entry type | [TRepoEntry](#eTRepoEntry) | 1 | Parameter combination specified at the entry of REPO order |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in roubles for the current date |
| REPO2VALUE | REPO buy-back value | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg, expressed in roubles |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STARTDISCOUNT | REPO initial discount, % | PRICE | 9 | Either indicated explicitly or calculated by the Trading System based on other REPO order parameters. |
| LOWERDISCOUNT | Low limit of REPO discount, % | PRICE | 9 | Optional parameter that can be specified at order entry. When current discount becomes lower than this limit then the initial seller has a margin call for cash transfer. |
| UPPERDISCOUNT | Upper limit of REPO discount, % | PRICE | 9 | Optional parameter that can be specified at order entry. When current discount exceeds than this limit then the initial buyer has a margin call for securities transfer. |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Block collaterals on a special account for REPO trades |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading period during which the trade was registered |
| CLIENTCODE | Client code | CHAR | 12 | Short client code which was indicated when entering the trade |
| WITHDRAWTIME | Withdrawal time | TIME | 6 | Time when the order was withdrawn (cancelled) |
| BALANCE | Lots left | INTEGER | 10 | Volume of unmatched part of an order, expressed in lots |
| ORIGINREPOVALUE | REPO value specified by the user | FIXED | 16.2 | Initial REPO value that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |
| ORIGINQUANTITY | Number of lots as specified by the user | INTEGER | 10 | Initial number of lots that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |
| ORIGINDISCOUNT | Original discount specified by the user | PRICE | 9 | Initial REPO discount that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |


#### ONEORDER - Details for one order (updateable, clear on update)

Table consists of one row holding information on an order having the number specified in request

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ORDERNO** | **Order** | **INTEGER** | **12** | **Order ID in the Trading System** |
| ORDERTIME | Time | TIME | 6 | Time when the order was registered at the Trading System |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Current order status |
| MKTLIMIT | Type | [TMktLimit](#eTMktLimit) | 1 | Order type: "limit/market" |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, immediately or cancel, withdraw remainder |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | Trader who entered the order |
| FIRMID | Firm | CHAR | 12 | Firm on which behalf the order was entered |
| ACCOUNT | Trading account ID | CHAR | 12 | Trading account for which the order was entered |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| BALANCE | Lots left | INTEGER | 10 | Volume of unmatched part of an order, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Order value without commission, expressed in Rubles |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest calculated for the trade date (expressed in Rubles) |
| ENTRYTYPE | Entry type | [TEntryType](#eTEntryType) | 1 | Price entry type - "price/yield/WA price" |
| YIELD | Yield | FIXED | 9.2 | Yield, calculated based on order price |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading period |
| PRICE2 | Buyback price | PRICE | 9 | Buyback price for the second REPO leg |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| ACTIVATIONTIME | Activation time | TIME | 6 | Order activation time |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| MARKETMAKER | Market-maker | [TYesNo](#eTYesNo) | 1 | Market-maker's order |
| WITHDRAWTIME | Withdrawal time | TIME | 6 | Time when the order was withdrawn (cancelled) |


#### ORDERBOOK - Orderbook for a security (updateable, clear on update)

Table contains information with Buy and Sell quotes for a security (traded instrument). Each row corresponds to one Buy or Sell price. The maximum number of rows (i.e. orderbook depth) is determined by internal settings of the Trading System.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Trading board ID |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell"** |
| **PRICE** | **Price** | **PRICE** | **9** | **Buy or Sell price for one security** |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| YIELD | Yield | FIXED | 9.2 | Annualized yield to maturity calculated at the given price at the trade date |
| MYORDERS | Own orders | INTEGER | 6 | Total number of all active (not matched, not withdrawn and not canceled) Buy or Sell orders at the given price, submitted by own trading firm (expressed in lots) |
| VOLUME | Own number | INTEGER | 10 | Total volume of all active (not matched, not withdrawn and not canceled) Buy or Sell orders at the given price, submitted by own trading firm (expressed in lots) |
| VALUE | Own value | FIXED | 16.2 | Total value (expressed in rubles) of all active (not matched, not withdrawn and not canceled) Buy or Sell orders at the given price, submitted by own trading firm. Exchange commission and accrued interest are not included into this value |


#### ORDERS - Orders (updateable)

Table contains information on the orders sent by the trading firm during the Trading Session. Each row represents one order.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ORDERNO** | **Order number** | **INTEGER** | **12** | **Order ID in the Trading System** |
| ORDERTIME | Time | TIME | 6 | Time when the order was registered at the Trading System |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Order status |
| MKTLIMIT | Type | [TMktLimit](#eTMktLimit) | 1 | Order type: "limit/market" |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, immediately or cancel, withdraw remainder |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | ID of the user who has entered the order |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the order was entered |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| BALANCE | Lots left | INTEGER | 10 | Volume of unmatched part of an order, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Order value, expressed in Rubles. This value does not include the exchange commission nor the accrued interest. |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest calculated for the trade date (expressed in Rubles) |
| ENTRYTYPE | Entry type | [TEntryType](#eTEntryType) | 1 | Price entry type - "price/yield/WA price" |
| YIELD | Yield | FIXED | 9.2 | Yield, calculated based on order price |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading session period during which the order was entered |
| PRICE2 | Buyback price | PRICE | 9 | Buyback price for the second REPO leg |
| EXTREF | External user ID | CHAR | 12 | User ID of the external system user who entered the original order into that external system. |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| ACTIVATIONTIME | Activation time | TIME | 6 | Order activation time |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| MARKETMAKER | Market-maker | [TYesNo](#eTYesNo) | 1 | Market-maker's order |
| WITHDRAWTIME | Withdrawal time | TIME | 6 | Time when the order was withdrawn (cancelled) |


#### POSITIONS - Current money positions (updateable)

Table contains information on the current money positions of a trading firm. Each table row corresponds to one group of cash positions

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **CURRCODE** | **Currency** | **CHAR** | **4** | **Currency Code** |
| **TAG** | **Position** | **CHAR** | **4** | **Position code** |
| **BANKACCID** | **Position code** | **CHAR** | **12** | **Account ID in the Settlement House** |
| DESCRIPTION | Description | CHAR | 30 | Group description |
| OPENBAL | Opening balance | FIXED | 17.2 | Cash balance at the opening of the Trading Session. The Value is set in accordance with the data supplied by an Electronic Settlement System of the MICEX Settlement House. |
| CURRENTPOS | Current balance | FIXED | 17.2 | Equals to Opening balance plus Total value of Sell-trades of the trading firm since the beginning of the Trading Session minus Total value of Buy-trades of the trading firm since the beginning of the Trading Session. Totals are calculated for the Markets/Trading Boards/Traded Instruments linked to the Cash positions group. The exchange commission and accrued interest are included in the totals calculation. |
| PLANNEDPOS | Planned balance | FIXED | 17.2 | Planned balance is calculated as Current balance minus Total unmatched value in all active Buy-orders entered by the trading firm (CURRENTPOS - ORDERBUY). Totals are calculated for the Markets/Trading Boards/Traded Instruments linked to the Cash positions group. The exchange commission and accrued interest are included in the totals calculation. |
| LIMIT1 | External limit | FIXED | 17.2 | External money limit |
| LIMIT2 | Internal limit | FIXED | 17.2 | Own money limit |
| ORDERBUY | Unmatched buy total | FIXED | 17.2 | Total unmatched value in all active buy-orders entered by the trading firm. Totals are calculated for the Markets/Trading Boards/Traded Instruments linked to the Cash positions group. The Exchange commission and accrued interest are included in the Totals calculation. |
| ORDERSELL | Unmatched sell total | FIXED | 17.2 | Total unmatched value in all active sell-orders entered by the trading firm. Totals are calculated for the Markets/Trading Boards/Traded Instruments linked to the Cash positions group. The Exchange commission and accrued interest are included in the Totals calculation. |
| NETTO | Net balance | FIXED | 17.2 | Equals to Current balance plus Total unmatched value of all active sell-orders minus Total unmatched value of all buy-orders (CURRENTPOS + ORDERSELL - ORDERBUY) |


#### QUOTEBOOK - Quotebook for negotiated deals (updateable, clear on update)

Table contains information on current best buy and sell quotes for a particular security. Each row corresponds to one buy or sell quote.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Trading board ID |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| QUOTENO | Order | INTEGER | 12 | ID of a quote for negotiated deal |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| PRICE | Price | PRICE | 9 | Buy or Sell price for one security |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |


#### QUOTES - Orders in negdeal mode with no counterparty specified (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **QUOTENO** | **Quote number** | **INTEGER** | **12** | **Order number** |
| QUOTETIME | Time | TIME | 6 |  |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Status of an OTC trade |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| USERID | User ID | CHAR | 12 |  |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| PRICE2 | Buyback price | PRICE | 9 | Buyback price for the second REPO leg |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading period during which the trade was registered |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in roubles for the current date |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| REPO2VALUE | REPO buy-back value | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg, expressed in roubles |
| DISCOUNT | REPO initial discount, % | PRICE | 9 | REPO initial discount, % |
| REPOENTRY | REPO order entry type | [TRepoEntry](#eTRepoEntry) | 1 | Parameter combination specified at the entry of REPO order |
| ORIGINREPOVALUE | REPO value specified by the user | FIXED | 16.2 | Initial REPO value that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |
| ORIGINQUANTITY | Number of lots as specified by the user | INTEGER | 10 | Initial number of lots that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |
| ORIGINDISCOUNT | Original discount specified by the user | PRICE | 9 | Initial REPO discount that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |


#### REPORTS - Settlement instructions (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **REPORTNO** | **Instruction number** | **INTEGER** | **12** | **ID of a settlement instruction sent by the firm to settle this trade** |
| REPORTDATE | Date | DATE | 8 |  |
| REPORTTIME | Time | TIME | 6 | Time when the instruction was entered into the Trading System |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| USERID | User ID | CHAR | 12 |  |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the instruction was entered |
| TRDACCID | Trading account | CHAR | 12 | ID of a trading account of the firm who sent the instruction |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm ID |
| CPTRDACCID | Counterparty trading account | CHAR | 12 | ID of a trading account of the firm the instruction is sent to |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| VALUE | Сумма | FIXED | 16.2 | Trade value, expressed in Rubles |
| STATUS | Status | [TReportStatus](#eTReportStatus) | 1 | Settlement instruction status |
| COMMISSION | Comission | FIXED | 16.2 | Trade comission, in the currency of settlement |
| WITHDRAWTIME | Withdraw time | TIME | 6 | Time at which the settlement instruction was withdrawn |
| REPORTTYPE | Settlement instruction type | [TReportType](#eTReportType) | 1 |  |


#### REPO_NEGDEALBOOK - REPO orderbook (updateable, clear on update)

Orderbook for REPO orders.
Two request formats are available: 1. specify Trading board ID only (BOARDID) to get REPO orderbook for all instruments traded on that board; 2. specify both Trading board and Security ID (SECBOARD+SECCODE) to get REPO orderbook for a particular security traded on the specified board.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BOARDID | Board | CHAR | 4 | Trading board ID |
| SECBOARD | Board | CHAR | 4 | Board ID |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| FIRMID | Firm | CHAR | 12 | Firm ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in roubles for the current date |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |


#### REPO_QUOTEBOOK - Котировки РЕПО (updateable, clear on update)

Table contains information on current best buy and sell quotes for REPO operations with a particular security. Each row represents one buy or sell quote. Two request formats are available: 1. specify Trading board ID only (BOARDID) to get REPO quotebook for all instruments traded on that board; 2. specify both Trading board and Security ID (SECBOARD+SECCODE) to get REPO quotebook for a particular security traded on the specified board.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BOARDID | Board | CHAR | 4 | Trading board ID |
| SECBOARD | Board | CHAR | 4 | Trading board ID |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| MINREPOTERM | Minimum REPO term | INTEGER | 4 | Minimum REPO term in days or empty |
| MAXREPOTERM | Maximum REPO term | INTEGER | 4 | Maximum REPO term in day or empty |
| MINREPORATE | Minimum REPO rate | FIXED | 9.2 | Minimum REPO rate in percents or empty |
| MAXREPORATE | Maximum REPO rate | FIXED | 9.2 | Maximum REPO rate in percents or empty |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| QUOTENO | Order | INTEGER | 12 | Quote ID |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| PRICE | Price | PRICE | 9 | Price |
| PRICE2 | Buyback price | PRICE | 9 | Buyback price for the second REPO leg |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in roubles for the current date |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| DISCOUNT | Discount | PRICE | 9 | Discount, expressed in % |


#### SECACCINT - Accrued interest for securities (not updateable)

Table contains reply to the request for data on accrued interest for a specified interval for a specified security. Maximum number or accrued interested values for one security is limited by 180 days - it means that is not possible to get more than 180 values for one security with one request. If the specified End date exceeds this limit or not specified at all then the maximum allowed number of values is returned.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID. If not specified then data on all securities is returned |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals. If not specified then the default precision of two digits is applied |
| STARTDATE | Start date | DATE | 8 | Interval start date. If not specified then the current date is used |
| ENDDATE | End date | DATE | 8 | Interval end date |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals. This precision is used to format values in ACCINT field |
| STARTDATE | Start date | DATE | 8 | Interval start date |
| **DAYNO** | **Number of days** | **INTEGER** | **3** | **Number of days after the start date** |
| ACCINT | Accrued interest value | PRICE | 16 | Accrued interest value |


#### SECURITIES - General market data (updateable)

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
| REMARKS | Remarks | CHAR | 8 |  |
| SHORTNAME | Security | CHAR | 10 |  |
| STATUS | Status | [TSecStatus](#eTSecStatus) | 1 | Flag "trading operations allowed/suspended" |
| TRADINGSTATUS | Trading status | [TTradingStatus](#eTTradingStatus) | 1 | Security trading status |
| MARKETCODE | Market | CHAR | 4 | Идентификатор рынка на котором торгуется финансовый инструмент |
| INSTRID | Instrument Group ID | CHAR | 4 | Instrument Group ID |
| LOTSIZE | Lot size | INTEGER | 8 | Number of securities in one lot |
| MINSTEP | Minimum price step | PRICE | 9 | The minimal step by which two prices may differ |
| FACEVALUE | Face value | PRICE | 16 | Face value of one Security, expressed in the currency, in which the Security is nominated |
| FACEUNIT | Face value currency | CHAR | 4 | Currency in which security is denominated |
| PREVDATE | Date of the last trading session | DATE | 8 | Date of the previous trading day |
| PREVPRICE | Last closing price | PRICE | 9 | Цена последней сделки нормального периода предыдущего торгового дня |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals in the Value field (is used to format PRICE-type fields) |
| YIELD | Yield for the last | FIXED | 9.2 | Yield, based on the trade price |
| ACCRUEDINT | Accrued interest | PRICE | 16 | Annualized yield to maturity calculated for the trade date for this security |
| PRIMARYDIST | Distribution | [TYesNo](#eTYesNo) | 1 | Indicator of an auction for a security |
| MATDATE | Maturity date | DATE | 8 |  |
| COUPONVALUE | Coupon value | FIXED | 13.2 | Value of the due coupon payment, expressed in the currency of settlement |
| COUPONPERIOD | Coupon period | INTEGER | 4 | Coupon period, in days |
| NEXTCOUPON | Date of the due coupon payment | DATE | 8 |  |
| ISSUESIZE | Issued volume | INTEGER | 16 |  |
| PREVWAPRICE | Previous WA price | PRICE | 9 | Значение оценки (WAPRICE) предыдущего торгового дня |
| YIELDATPREVWAPRICE | Yield, based on the last day WA price | FIXED | 9.2 | Yield, based on the last day WA price |
| REPO2PRICE | REPO second leg price | PRICE | 9 | This field is not used anymore. |
| CURRENCYID | Related currency ID | CHAR | 4 | Related currency ID |
| BUYBACKPRICE | Base price for yield calculation | PRICE | 9 | Base price for yield calculation |
| BUYBACKDATE | Maturity date for yield calculation | DATE | 8 | Maturity date for yield calculation |
| AGENTID | Primary distribution agent ID | CHAR | 12 | Primary distribution agent ID |
| QUOTEBASIS | Price type | [TQuoteBasis](#eTQuoteBasis) | 1 |  |
| ISIN | ISIN | CHAR | 12 | ISIN code |
| LATNAME | English name | CHAR | 30 | Name of the security in English |
| REGNUMBER | Registration number | CHAR | 20 | State registration number |
| PREVADMITTEDQUOTE | Officially admited quote of the last day | PRICE | 9 | Признаваемая котировка предыдущего дня, цена за одну ценную бумагу |
| SECTYPE | Type of security | [TSecType](#eTSecType) | 1 | Type of security |
| BID | Bid | PRICE | 9 | Best bid price |
| BIDDEPTH | Лотов на покупку по лучшей | INTEGER | 10 | Total unmatched volume of all active buy orders at the current best bid price (expressed in number of lots) |
| BIDDEPTHT | Total bid depth | INTEGER | 10 | Total unmatched volume of all active buy orders, expressed in lots |
| NUMBIDS | Buy orders | INTEGER | 6 | Number of buy orders in the queue of the Trading System |
| OFFER | Offer | PRICE | 9 | Best offer price |
| OFFERDEPTH | Best offer depth | INTEGER | 10 | Volume of all sell orders at the best price, expressed in lots |
| OFFERDEPTHT | Total offer depth | INTEGER | 10 | Total unmatched volume of all active sell orders (expressed in lots) |
| NUMOFFERS | Sell orders | INTEGER | 6 | Number of sell orders in the queue of the Trading System |
| OPEN | First | PRICE | 9 | First trade price |
| HIGH | Maximum | PRICE | 9 | Maximum trade price |
| LOW | Minimum | PRICE | 9 | Minimum trade price |
| LAST | Last | PRICE | 9 | Last trade price |
| CHANGE | Last to Closing change | PRICE | 9 | Difference between the Last Price and the Previous day Closing Price |
| QTY | Lots in the last | INTEGER | 10 | Volume of the last trade, expressed in lots |
| TIME | Time of the last | TIME | 6 | Time when the last trade was concluded |
| VOLTODAY | Today volume | INTEGER | 16 | Volume of concluded trades, expressed in number of securities |
| VALTODAY | Today value | INTEGER | 16 | Value of concluded trades, expressed in Rubles |
| VALUE | Value of the last | FIXED | 16.2 | Value of the last trade in the current trading session (expressed in Rubles) |
| WAPRICE | WA | PRICE | 9 | Weighted-average price |
| HIGHBID | Best bid | PRICE | 9 | Best bid price during the trading session |
| LOWOFFER | Best offer | PRICE | 9 | Best offer price during this trading session |
| NUMTRADES | Trades today | INTEGER | 9 | Number of trades |
| YIELDATWAPRICE | Yield, based on the WA price | FIXED | 9.2 | Yield, based on the WA price |
| PRICEMINUSPREVWAPRICE | Last price to previous WA price | PRICE | 10 | Цена последней сделки (LAST) к оценке предыдущего дня (PREVWAPRICE) |
| CLOSEPRICE | Price of the Closing period | PRICE | 9 | Unified price for the closing period of the current trading session (calculated according to the trading rules) |
| CLOSEYIELD | Yield at the closing period price | FIXED | 9.2 | Yield at the closing period price |
| LASTBID | Session best bid | PRICE | 9 | Best buy-order at the time of the normal trading session end |
| LASTOFFER | Session best offer | PRICE | 9 | Best sell-order at the time of the normal trading session end |
| LASTSETTLECODE | Settlement code of the last | CHAR | 12 | Settlement code of the last trade |
| MARKETPRICE | Last day market price | PRICE | 9 | Market price of the previous day |
| MARKETPRICETODAY | Market price | PRICE | 9 | Today market price |
| DURATION | Duration | FIXED | 7.2 |  |
| SETTLECODE | Settlement code | CHAR | 12 | Default settlement code for this secufity |
| MARKETPRICE2 | Market price 2 | PRICE | 9 | Market price calculated in compliance with official Federal Commission for Financial Markets methodology |
| ADMITTEDQUOTE | Admitted quote | PRICE | 9 | Officially admitted quote calculated in compliance with official Federal Commission for Financial Markets methodology |
| OPENPERIODPRICE | Price of the Opening period | PRICE | 9 | Price of the Opening period |
| SETTLEDATE1 | Settlement date 1 | DATE | 8 | Settlement date for a trade or the first part of a REPO/swap trade |
| SETTLEDATE2 | Settlement date 2 | DATE | 8 | Settlement date for the second part of a REPO/swap trade |
| AUC_ID | Auction id | INTEGER | 12 |  |


#### SEC_SETTLECODE - Accrued interest depending on the settlement date (updateable)

Table contains settlement codes and their respective settlement dates

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **SETTLECODE** | **Settlement code** | **CHAR** | **12** | **Settlement code** |
| ACCRUEDINT | Accrued interest | PRICE | 16 | Accrued interest at the settlement date, expressed in Rubles |
| ACCRUEDINT2 | Accrued interest for the 2nd REPO leg | PRICE | 16 | Accrued interest for the SettleDate2, expressed in Rubles |
| PRICE2 | Buyback price | PRICE | 9 | Buyback price for the second REPO leg |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate expressed in percents |
| SETTLEDATE | Settlement date | DATE | 8 | Settlement date of a negotiated deal or of a first REPO leg |
| SETTLEDATE2 | Settlement date 2 | DATE | 8 | Settlement date for the 2nd REPO leg |
| **REPOTERM** | **REPO term** | **INTEGER** | **4** | **REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive.** |


#### SETTLECODES - Settlement codes (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| DESCRIPTION | Description | CHAR | 30 |  |
| SETTLEDATE | Settlement date | DATE | 8 | Settlement date of a negotiated deal or of a first REPO leg |
| SETTLEDATE2 | Settlement date 2 | DATE | 8 | Settlement date for the 2nd REPO leg |


#### TEINFO - Trading system parameters (not updateable)

Table contains one row with trading system (engine) general information

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SESSION | Session ID | INTEGER | 10 | Unique ID of the current trading session |


#### TESYSTIME - Trading System time (updateable, clear on update)

Table consists of one row with Trading System current date and time. This information is used to synchronize client time with the server time.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TIME | Текущее время | TIME | 6 | Time on the Trading System server |
| DATE | Date | DATE | 8 | Date on the Trading System server |


#### TRADES - Trades (updateable)

Table contains information on all trades registered in the Trading System for a trading firm since the beginning of the current trading session. Each Trade is represented by one row.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRADENO** | **Trade number** | **INTEGER** | **12** | **Trade number in the Trading System** |
| ORDERNO | Order number | INTEGER | 12 | Number of order from which the trade originates |
| TRADETIME | Time | TIME | 6 | Time when the trade was registered by the Trading System |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell"** |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | ID of the user who concluded the trade |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the trade is registered |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Trade volume, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in Rubles |
| SETTLEDATE | Settlement date | DATE | 8 |  |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest for the trade date, calculated based on the number of securities in the trade. Expressed in Rubles. |
| YIELD | Yield | FIXED | 9.2 | Yield, based on the trade price |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Period of the trading session when the trade was concluded |
| PRICE2 | Buyback price | PRICE | 9 | Buyback price for the second REPO leg |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| TRADETYPE | Type | [TTradeType](#eTTradeType) | 1 | Trade type |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| COMMISSION | Total commission | FIXED | 16.2 | Trade comission, in the currency of settlement |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| ACCRUED2 | Accrued interest for the buy-back | FIXED | 16.2 | Accrued interest on the buy-back date, expressed in Rubles |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in roubles for the current date |
| REPO2VALUE | REPO buy-back value | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg, expressed in roubles |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STARTDISCOUNT | REPO initial discount, % | PRICE | 9 | Discount, expressed in % |
| LOWERDISCOUNT | Low limit of REPO discount, % | PRICE | 9 | Discount, expressed in % |
| UPPERDISCOUNT | Upper limit of REPO discount, % | PRICE | 9 | Discount, expressed in % |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Block collaterals on a special account for REPO trades |
| CLEARINGCENTERCOMM | Clearing commission | FIXED | 16.2 | Clearing commission, expressed in Rubles |
| EXCHANGECOMM | Exchange commission | FIXED | 16.2 | Exchange commission, expressed in Rubles |
| TRADINGSYSTEMCOMM | Technical access commission | FIXED | 16.2 | Technical access commission, expressed in Rubles |
| CLIENTCODE | Client code | CHAR | 12 | Client code specified by the trader when entering an order |
| TRADEDATE | Trade date | DATE | 8 |  |


#### TRADETIME - Trading schedule (updateable, clear on update)

Table contains information on Time Events triggering changes in the trading status of market, trading board, group of traded instruments or security

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TIME** | **Time** | **TIME** | **6** | **Time the event is scheduled to execute at** |
| **INSTRID** | **Group** | **CHAR** | **4** | **ID of a security group the event is concerned with** |
| **BOARDID** | **Board** | **CHAR** | **4** | **ID of a trading board the event is concerned with** |
| **TYPE** | **Event** | **CHAR** | **1** | **Event type. For list of all types see the TRDTIMETYPES table.** |
| STATUS | Status | [TTimeStatus](#eTTimeStatus) | 1 | Event status - flag showing whether the event has already happened or not |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **MARKETID** | **Market** | **CHAR** | **4** | **Market ID** |


#### TRDACC - Trading accounts (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| TYPE | Depositary account type | [TDepAccType](#eTDepAccType) | 1 | Depositary account type |
| DESCRIPTION | Description | CHAR | 30 |  |
| BANKACCID | Position code | CHAR | 12 | Bank account accociated with the trade account |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not" |
| DEPACCID | Depositary account | CHAR | 12 | Depositary account number in the Depositary Center |
| TRDACCTYPE | Trading account type | [TTrdAccType](#eTTrdAccType) | 1 | Trading account type |


#### TRDTIMETYPES - Type of event (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TYPE** | **Event type** | **CHAR** | **1** |  |
| DESCRIPTION | Description | CHAR | 50 |  |


#### USERS - Users (updateable)

Table contains information on users registered in the Trading System as being employees of a current trading firm. Each row corresponds to one such user.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **USERID** | **Код участника** | **CHAR** | **12** |  |
| USERNAME | User name | CHAR | 30 |  |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not" |
| IPGATEWAY | Gateway | CHAR | 20 |  |
| IPCLIENT | Workstation | CHAR | 20 |  |
| LOGGEDON | Active | [TBoolInt](#eTBoolInt) | 1 | Flag indicating whether the user is currently logged-on |


#### USTRADES - Unsettled trades (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRADENO** | **Trade ID** | **INTEGER** | **12** | **Trade number in the Trading System** |
| TRADEDATE | Дата сделки | DATE | 8 |  |
| SETTLEDATE | Дата исполнения | DATE | 8 |  |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell"** |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in Rubles |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| CPTRDACCID | Counterparty trading account | CHAR | 12 | Counterparty trading account ID |
| REPORTNO | Settlement instruction ID | INTEGER | 12 | ID of a settlement instruction sent by the firm to settle this trade |
| CPREPORTNO | Counterparty settlement instruction ID | INTEGER | 12 | ID of a settlement instruction sent by the counterparty firm to settle this trade |
| STATUS | Status | [TUSTradeStatus](#eTUSTradeStatus) | 1 | Unsettled trade status |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in Rubles |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| REPOTRADENO | REPO trade ID | INTEGER | 12 | ID of the first REPO leg |
| PRICE1 | REPO price 1 | PRICE | 9 | Price of the first REPO leg |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| PRICE2 | REPO price 2 | PRICE | 9 | Buyback price for the second REPO leg |
| COMMISSION | Comission | FIXED | 16.2 | Trade comission, in the currency of settlement |
| SETTLETIME | Settlement time | TIME | 6 |  |
| BALANCE | Trade balance | INTEGER | 10 | Volume of unmatched part of an order, expressed in lots |
| AMOUNT | Total amount | FIXED | 16.2 | Total value of the trade expressed in Roubles. Can be positive or negative, depending on the trade type (sell or buy). For "ordinary" trades – the same as the trade value. For REPO trades is calculated as the sum of REPO Profit and REPO Value for the current date. For the first REPO leg equals to the value of REPO trade, for the second REPO leg equals to "return" value of the REPO trade. |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in roubles for the current date |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| REPO2VALUE | REPO buy-back value | FIXED | 16.2 | Current value of the 2nd (buy-back) REPO leg calculated for the settlement date, expressed in roubles |
| RETURNVALUE | REPO return value | FIXED | 16.2 | Value due to be paid during settlement of the second (buy-back) REPO leg |
| DISCOUNT | Дисконт % | PRICE | 9 | Initial discount for the first REPO leg and current discount for the second REPO leg |
| LOWERDISCOUNT | Low limit of REPO discount, % | PRICE | 9 | Low limit of REPO discount, % |
| UPPERDISCOUNT | Upper limit of REPO discount, % | PRICE | 9 | Discount, expressed in % |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Block collaterals on a special account for REPO trades |
| URGENCYFLAG | Settle today | [TYesNo](#eTYesNo) | 1 | The "Must be settled today" flag |
| TYPE | Unsettled trade type | [TUSTradeType](#eTUSTradeType) | 1 |  |
| OPERATIONTYPE | Operation | [TOperationType](#eTOperationType) | 1 | Operation type: deposit/withdraw |
| EXPECTEDDISCOUNT | Discount after deposit, % | PRICE | 9 | Discount, expressed in % |
| EXPECTEDQUANTITY | Quantity after deposit | INTEGER | 10 | Quantity, expressed in lots |
| EXPECTEDREPOVALUE | Value after deposit | FIXED | 16.2 | REPO value calculated in roubles for the current date |
| EXPECTEDREPO2VALUE | Repurchase value after deposit | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg, expressed in roubles |
| EXPECTEDRETURNVALUE | Return value after deposit | FIXED | 16.2 | Trade value, expressed in Rubles |
| CLIENTCODE | Client code | CHAR | 12 | Code of a client on whose behalf the order was entered |
| NEXTDAYSETTLE | Settle next day | [TYesNo](#eTYesNo) | 1 | The "Settle next day" flag |
| ORDERNO | Order | INTEGER | 12 | Number of order from which the trade originates |
| REPOTRADETRADEDATE | Дата заключения | DATE | 8 | For margin calls only. Date of REPO trade conclusion. Empty in other cases. |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| COUPONPAYMENT | Coupon payment | FIXED | 16.2 | Value of coupon payment since the last security trading day |
| COUPONPAYMENTDATE | Coupon payment date | DATE | 8 | Date of the last coupon payment |
| PRINCIPALPAYMENT | Principal debt payment | FIXED | 16.2 | Value of the principal debt (ammortization) payment since the last security trading day |
| PRINCIPALPAYMENTDATE | Date of principal debt payment | DATE | 8 | Date of the last principal debt (ammortization) payment |

---


### Transactions

#### AMEND_ORDER - Amend order

Change parameters of an active order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| MKTLIMIT | Type | [TMktLimit](#eTMktLimit) | 1 | Order type: "limit/market" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, immediately or cancel, withdraw remainder |
| PRICEYIELDENTERTYPE | Price indication type | [TEntryType](#eTEntryType) | 1 | Price indication type: "price/yield/WA" |
| MMORDER | Market-maker's order | [TMMOrder](#eTMMOrder) | 1 | Market-maker's order flag. Can be set for limit orders and only for the user who has market-maker rights for a specified security. |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security. For market orders must be set to 0. |
| QUANTITY | Lots | INTEGER, NOT NULL | 10 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| ACTIVATIONTIME | Activation time | TIME | 6 | If not specified then the field should be filled with spaces |


#### AUCTION_MKT_ORDER - Enter a market order during the auction

Submit order to the Trading System

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| ORDERVALUE | Order value | INTEGER | 16 | Order value, expressed in the currency of settlement |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |


#### CANCEL_TRADE - Cancel margin call

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NUMTRADES | Number of trades | INTEGER | 2 |  |
| TRADENO[+](#refs) | Trade | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL[+](#refs) | Direction | [TBuySell](#eTBuySell) | 1 | Trade direction |


#### CANCEL_TRADES - Cancel margin calls

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NUMTRADES | Number of trades | INTEGER | 2 |  |
| TRADENO1 | Trade 1 | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL1 | Trade direction 1 | [TBuySell](#eTBuySell) | 1 | Trade direction - "buy/sell" |
| TRADENO2 | Trade 2 | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL2 | Trade direction 2 | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| TRADENO3 | Trade 3 | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL3 | Trade direction 3 | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| TRADENO4 | Trade 4 | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL4 | Trade direction 4 | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |


#### CHANGE_LANGUAGE - Change the language of the Trading System messages

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| LANGUAGEID | Language code | [TLanguage](#eTLanguage) | 1 | Language code. Available codes: R - Russian, E - English |


#### CHANGE_PASSWORD - Change user password

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| CURRENTPW | Текущий пароль | CHAR | 10 |  |
| NEWPW | New password | CHAR | 10 |  |


#### COMPLEX_NEGDEAL - In-house negotiated deal entry

Make transfers between two own clients of the firm or between the firm and one of its clients

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Own firm is specified |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| CPACCOUNT | Counterparty's trading account | CHAR | 12 | Counterparty's trading account |
| CPBROKERREF | Counterparty's broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | Поле-примечание, используется для обратной связи с внешними системами. Например:Идентификатор пользователя внешней системы, поставившего заявку. |


#### COMPLEX_REPORT - Margin call execution instruction entry

On Bonds and Equities market: enter instruction for margin call execution.
On Government Securities market: enter an in-house settlement instruction that doesn't require confirmation. Collaterals and money positions are verified. Instruction contains net value of the number of trades and their net sum.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NUMTRADES | Number of trades | INTEGER | 2 |  |
| TRADENO[+](#refs) | Trade | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL[+](#refs) | Direction | [TBuySell](#eTBuySell) | 1 | Trade direction - "buy/sell" |


#### COMPLEX_TRANSFER - In-house cash transfer

Transfer cash between positions of the trading firm headquarters and its regional branches. On successful validation Trading System generates two matching orders for negotiated deals, matches them and registers two "Cash transfer" negotiated deals between the trading firm headquarters and its regional branch.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | D/W | [TSecTransferBuySell](#eTSecTransferBuySell) | 1 | Transfer direction: withdraw from a counterparty account or deposit to it |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| CPACCOUNT | Counterparty trading account | CHAR | 12 | Counterparty trading account |


#### EXT_REPO_COMPLEX_NEGDEAL - In-house REPO order entry

Conclude a REPO trade between the dealer and its client or between two dealer's clients. Only one order should be entered to conlude a trade. Trade is concluded right after order entry. Requirements to order parameters are the same as to negotiated deal orders in extended REPO-M mode.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| CPACCOUNT | Торговый счет контрагента | CHAR | 12 | Counterparty trading account |
| CPBROKERREF | Counterparty's broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| REPOORDERVALUE | Repo value | FIXED | 16.2 | Repo value in rubles |
| REPOTERM | REPO term | INTEGER | 4 | Срок РЕПО - промежуток времени, выраженный в календарных днях, между датами исполнения первой и второй частей сделки РЕПО. Срок РЕПО исчисляется со дня, следующего за днем исполнения первой части сделки РЕПО, до дня исполнения второй части сделки РЕПО включительно. |
| STARTDISCOUNT | REPO initial discount, % | PRICE | 9 | Either indicated explicitly or calculated by the Trading System based on other REPO order parameters. |
| LOWERDISCOUNT | Low limit of REPO discount, % | PRICE | 9 | Optional parameter that can be specified at order entry. When current discount becomes lower than this limit then the initial seller has a margin call for money transfer. |
| UPPERDISCOUNT | Upper limit of REPO discount, % | PRICE | 9 | Optional parameter that can be specified at order entry. When current discount exceeds than this limit then the initial buyer has a margin call for securities transfer. |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Flag showing if blocking of securities as a collateral on a special account for the term of REPO Operation is required. Currently applicable to the Government Securities market only. For other markets must be set to 'N'. |


#### EXT_REPO_NEGDEAL - REPO order entry

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| REPOORDERVALUE | Repo value | FIXED | 16.2 | Repo value in rubles |
| REPOTERM | REPO term | INTEGER | 4 | Срок РЕПО - промежуток времени, выраженный в календарных днях, между датами исполнения первой и второй частей сделки РЕПО. Срок РЕПО исчисляется со дня, следующего за днем исполнения первой части сделки РЕПО, до дня исполнения второй части сделки РЕПО включительно. |
| STARTDISCOUNT | REPO initial discount, % | PRICE | 9 | Either indicated explicitly or calculated by the Trading System based on other REPO order parameters. |
| LOWERDISCOUNT | Low limit of REPO discount, % | PRICE | 9 | Optional parameter that can be specified at order entry. When current discount becomes lower than this limit then the initial seller has a margin call for money transfer. |
| UPPERDISCOUNT | Upper limit of REPO discount, % | PRICE | 9 | Optional parameter that can be specified at order entry. When current discount exceeds than this limit then the initial buyer has a margin call for securities transfer. |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Flag showing if blocking of securities as a collateral on a special account for the term of REPO Operation is required. Currently applicable to the Government Securities market only. For other markets must be set to 'N'. |
| ACCEPTEDQUOTENO | ID of a quote to accept | INTEGER | 12 | Accepted counterparty's quote number (if an order is sent in reply to a quote) or white spaces |
| ACCEPTEDORDERNO | ID of a negdeal order to accept | INTEGER | 12 | Accepted counterparty's negdeal number (if an order is send in reply to negdeal order) or white spaces |


#### EXT_REPO_QUOTE - Enter REPO order with no counterparty specified

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| WITHDRAWFLAG | Withdraw active orders | [TYesNo](#eTYesNo) | 1 | "Y" - withdraw active quotes of own firm having the same security ID and settlement code as in this order; "N" - do not withdraw any orders. |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPOORDERVALUE | Repo value | FIXED | 16.2 | Repo value in rubles |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STARTDISCOUNT | REPO initial discount, % | PRICE | 9 | Discount, expressed in % |


#### EXT_TRADE - Over-the-counter trade registraton

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| LPRICE | Price | PRICE | 16 | Price for one security |
| LQTY | Quantity | INTEGER | 16 |  |
| CURRCODE | Currency | [TCurrCode](#eTCurrCode) | 4 | Currency code for OTC trades |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| FORACCOUNT | On behalf of | [TOwnCli](#eTOwnCli) | 1 | On behalf of / on account |
| LARGETRADE | Large trade | [TYesNo](#eTYesNo) | 1 | Flag of a large trade |
| SETTLEDATE | Settlement date | DATE | 8 | Settlement date of a large trade |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |


#### MESSAGE_SEND - Send message

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| USERIDTO | To user | CHAR | 12 |  |
| FIRMIDTO | To firm | CHAR | 12 | Firm ID |
| URGENCY | Importance | [TUrgency](#eTUrgency) | 1 | Message urgency or importance |
| MESSAGE | Text | CHAR | 256 |  |


#### NEGDEAL - Enter negotiated deal order

Enter negotiated deal order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | ID of the firm the order is addressed to |
| PRICE | Price | PRICE | 9 | Цена за одну ценную бумагу. Значение цены может быть не указано - в этом случае считается, что заявка вводится "по цене контрагента". |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched. Fixed refund rate can be specified only for 'B' and 'R' settlement codes, in other cases this field should be filled with spaces. |
| ACCEPTEDQUOTENO | ID of a quote to accept | INTEGER | 12 | Accepted counterparty's quote number (if an order is sent in reply to a quote) or white spaces |
| ACCEPTEDORDERNO | ID of a negdeal order to accept | INTEGER | 12 | Accepted counterparty's negdeal number (if an order is send in reply to negdeal order) or white spaces |


#### ORDER - Enter order

Submit order to the Trading System

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| MKTLIMIT | Type | [TMktLimit](#eTMktLimit) | 1 | Order type: "limit/market" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, immediately or cancel, withdraw remainder |
| PRICEYIELDENTERTYPE | Price indication type | [TEntryType](#eTEntryType) | 1 | Price indication type: "price/yield/WA" |
| MMORDER | Market-maker's order | [TMMOrder](#eTMMOrder) | 1 | Market-maker's order flag. Can be set for limit orders and only for the user who has market-maker rights for a specified security. |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security. For market orders must be set to 0. |
| QUANTITY | Lots | INTEGER, NOT NULL | 10 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| ACTIVATIONTIME | Activation time | TIME | 6 | If not specified then the field should be filled with spaces |


#### QUOTE - Enter Quote

Quote (negdeal order with no counterparty specified) entry

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| WITHDRAWFLAG | Withdraw active orders | [TYesNo](#eTYesNo) | 1 | "Y" - withdraw active quotes of own firm having the same security ID and settlement code as in this order; "N" - do not withdraw any orders. |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |


#### REPORT - Enter a settlement instruction

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NUMTRADES | Number of trades | INTEGER | 2 |  |
| TRADENO[+](#refs) | Trade | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL[+](#refs) | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |


#### REPORT_2 - Enter settlement instruction (max 2 trades)

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NUMTRADES | Number of trades | INTEGER | 2 |  |
| TRADENO1 | Trade 1 | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL1 | Trade direction 1 | [TBuySell](#eTBuySell) | 1 | Trade direction - "buy/sell" |
| TRADENO2 | Trade 2 | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL2 | Trade direction 2 | [TBuySell](#eTBuySell) | 1 | Trade direction - "buy/sell" |


#### REPORT_4 - Enter settlement instruction (max 4 trades)

Send a settlement instruction for several unsettled trades from the USTRADES table

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NUMTRADES | Number of trades | INTEGER | 2 |  |
| TRADENO1 | Trade 1 | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL1 | Trade direction 1 | [TBuySell](#eTBuySell) | 1 | Trade direction - "buy/sell" |
| TRADENO2 | Trade 2 | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL2 | Trade direction 2 | [TBuySell](#eTBuySell) | 1 | Trade direction - "buy/sell" |
| TRADENO3 | Trade 3 | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL3 | Trade direction 3 | [TBuySell](#eTBuySell) | 1 | Trade direction - "buy/sell" |
| TRADENO4 | Trade 4 | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL4 | Trade direction 4 | [TBuySell](#eTBuySell) | 1 | Trade direction - "buy/sell" |


#### REPO_NEGDEAL - REPO order entry

Enter REPO order in "old" (compared to extended) REPO mode. Notes: - refund rate must be the same in the opposite matching order; - when REPORATE is given then PRICE2 must be filled with spaces and vice versa.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched. Fixed refund rate can be specified only for 'B' and 'R' settlement codes, in other cases this field should be filled with spaces. |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| PRICE2 | Buyback price | PRICE | 9 | Buyback price for the second REPO leg |
| ACCEPTEDQUOTENO | ID of a quote to accept | INTEGER | 12 | Accepted counterparty's quote number (if an order is sent in reply to a quote) or white spaces |
| ACCEPTEDORDERNO | ID of a negdeal order to accept | INTEGER | 12 | Accepted counterparty's negdeal number (if an order is send in reply to negdeal order) or white spaces |


#### REPO_QUOTE - REPO quote entry

Enter a REPO order with no counterparty specified. Note: when REPORATE is given then PRICE2 must be filled with spaces and vice versa.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | PRICE | 9 | Price for one security |
| QUANTITY | Lots | INTEGER | 10 | Quantity, expressed in lots |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| WITHDRAWFLAG | Withdraw active orders | [TYesNo](#eTYesNo) | 1 | "Y" - withdraw active quotes of own firm having the same security ID and settlement code as in this order; "N" - do not withdraw any orders. |
| REPORATE | REPO Rate | PRICE | 9 | REPO rate, expressed in % |
| PRICE2 | Buyback price | PRICE | 9 | Buyback price for the second REPO leg |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |


#### WD_EXT_TRADE - Withdraw an over-the-counter trade

Withdraw submitted and not yet published OTC trades. When serveral parameters are given then the logical AND operator is used

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRADENO | Trade | INTEGER | 12 | Trade number in the Trading System |
| USERID | User ID | CHAR | 12 |  |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |


#### WD_NEGDEAL - Withdraw negotiated deal order

Withdraw one or more active (not yet accepted) negdeals. When serveral parameters are given then the logical AND operator is used.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| DEALNO | Order number | INTEGER | 12 | Order ID or a string with blanks |
| USERID | User ID | CHAR | 12 | User ID or a string with blanks |


#### WD_ORDERS - Withdraw order

Withdraw active (not completeley matched) orders. When serveral parameters are given then the logical AND operator is used.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TWBuySell](#eTWBuySell) | 1 | Withdraw orders of given direction or both sell & buy orders if space is given |
| ACCOUNT | Trading account | CHAR | 12 | Withdraw orders by a trading account |
| SECBOARD | Board | CHAR | 4 | Security board ID. Must be specified together with Security ID. |
| SECCODE[*](#refs) | Security | CHAR | 12 | Withdraw orders by Security ID |
| TRADERID | Trader | CHAR | 12 | Withdraw orders by User ID |
| FIRMID | Firm | CHAR | 12 | Withdraw orders by Firm ID |
| EXTREF | External user ID | CHAR | 12 | ID of an external user who submitted an order, or spaces |


#### WD_ORDER_BY_NUMBER - Withdraw order by number

Withdraw active (not completeley matched) orders. When serveral parameters are given then the logical AND operator is used.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ORDERNO | Order | INTEGER | 12 | Number of an order being withdrawn |


#### WD_QUOTE - Withdraw quotes

Withdraw active (not fully matched) quotes. When serveral parameters are given then the logical AND operator is used.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| QUOTENO | Order | INTEGER | 12 | Quote ID or spaces |
| BUYSELL | Direction | [TWBuySell](#eTWBuySell) | 1 | Order direction - "buy/sell" |
| SECBOARD | Board | CHAR | 4 | Trading board ID. Can be used only when SECCODE is given too. |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID or spaces |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code or spaces |
| TRADERID | Trader | CHAR | 12 | User ID or spaces |
| FIRMID | Firm | CHAR | 12 | Firm ID or spaces |


#### WD_REPORT - Withdraw a settlement instruction

Withdraw active (not yet accepted) settlement instructions. When serveral parameters are given then the logical AND operator is used.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| REPORTNO | Settlement instruction ID | INTEGER | 12 | ID of a settlement instruction sent by the firm to settle this trade |
| TRADERID | Trader | CHAR | 12 | User ID or spaces |
| FIRMID | Firm | CHAR | 12 | Firm ID or spaces |
| SECBOARD | Board | CHAR | 4 | Trading board ID. Can be used only when SECCODE is given too. |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID or spaces |


Key fields are marked in **bold**.  
Fields that contain security code are marked with asterisk (*).  
Repeated field groups are marked with plus sign (+).

---
The document is created with ASTSExplorer.exe 06.11.2025 12:21:07
