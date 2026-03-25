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

#### TBuySell - Order direction (size: 1, type: ekGroup)

Available order directions

| Constant | Value | Description |
| --- | --- | --- |
| B | B | Buy |
| S | S | Sell |


#### TLanguage - Language of Trading System messages (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| R | Rus | Russian |
| E | Eng | English |


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


#### TSecStatus - Security status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | A | Operations are allowed |
| S | S | Operations are suspended |
| N | N | Blocked for trading, settlement is allowed |


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


#### TStatus - Trading status (size: 1, type: ekCombo)

List of available trading operation statuses

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Operations are allowed |
| S | S | Operations are suspended |


#### TSystemID - Trading system type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| C |  | Currency market |
| P |  | Bonds and Equities market |


#### TTimeStatus - Event status (size: 1, type: ekCombo)

List of available statuses in the trading system schedule

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Active |
| L | - | Carried out |


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


#### TUrgency - Message urgency (size: 1, type: ekCheck)

Available message urgency types

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Normal |
| U | ! | Urgent |


#### TYesNo - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| N |  | No |
| Y | Yes | Yes |

---


## Interface 'Info' - 'Market data interface'

---


### Tables

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


#### BOARDS - Trading boards (not updateable)

Table contains information on trading boards. The term "Trading Board", as we use it, means a set of trading rules, including the trading methods used (i.e. order-driven market, quote-driven market, call-auction-type trading etc.), order types allowed, trading schedule applied, settlement rules and procedures applied etc

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **BOARDID** | **Trading board ID** | **CHAR** | **4** | **Trading board ID** |
| BOARDNAME | Board | CHAR | 30 | Trading board name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not" |
| MARKETID | Market | CHAR | 4 | Market ID this board belongs to |
| LATNAME | English name | CHAR | 30 | Board name in english |


#### CURRENCY - Currencies (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CURRCODE** | **Currency** | **CHAR** | **4** | **Currency Code** |
| CURRENCYNAME | Name | CHAR | 30 |  |
| CROSSRATE | Exchange rate | CHAR | 10 | Exchange rate of the currency to ruble, expressed in rubles with precision of 4 digits |


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


#### MARKETS - Markets (not updateable)

Table contains information on the markets. Market constitutes a group of trading boards with common features and trading rules (traded instruments, trading rules etc.) - i.e. the Government Securities Market, the Corporate Securities Market, the Quote-Driven Market.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **MARKETID** | **Market** | **CHAR** | **4** | **Market ID** |
| MARKETNAME | Name | CHAR | 30 | Market name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not" |
| LATNAME | English name | CHAR | 30 | Market name in English |


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
| SECTORID | Sector | CHAR | 4 |  |
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
| PREVLEGALCLOSEPRICE | Last day closing price | PRICE | 9 | Официальная цена закрытия предыдущего дня, рассчитываемая по методике ФСФР как средневзвешенная цена сделок за последние 10 минут торговой сессии, включая сделки послеторгового периода |
| PREVADMITTEDQUOTE | Officially admited quote of the last day | PRICE | 9 | Признаваемая котировка предыдущего дня, цена за одну ценную бумагу |
| SECTYPE | Type of security | [TSecType](#eTSecType) | 1 | Type of security |
| ISSUERID | Фирма организатор | CHAR | 12 | Идентификатор фирмы организатора |
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
| BASEPRICE | Base price | PRICE | 9 | Base price for SWAP instruments |
| MARKETPRICE | Last day market price | PRICE | 9 | Market price of the previous day |
| MARKETPRICETODAY | Market price | PRICE | 9 | Today market price |
| DURATION | Duration | FIXED | 7.2 |  |
| SETTLECODE | Settlement code | CHAR | 12 | Default settlement code for this secufity |
| LOPENPRICE | Opening price | PRICE | 9 | Obsolete |
| LCURRENTPRICE | Current price | PRICE | 9 | Official current price, calculated as the WA price of the trades concluded during the last 10 minutes of the trading session |
| LCLOSEPRICE | Closing price | PRICE | 9 | Official closing price, calculated as the WA price of the trades concluded during the last 10 minutes of the trading session, including the closing period |
| MARKETPRICE2 | Market price 2 | PRICE | 9 | Market price calculated in compliance with official Federal Commission for Financial Markets methodology |
| ADMITTEDQUOTE | Admitted quote | PRICE | 9 | Officially admitted quote calculated in compliance with official Federal Commission for Financial Markets methodology |
| OPENPERIODPRICE | Price of the Opening period | PRICE | 9 | Price of the Opening period |
| SETTLEDATE1 | Settlement date 1 | DATE | 8 | Settlement date for a trade or the first part of a REPO/swap trade |
| SETTLEDATE2 | Settlement date 2 | DATE | 8 | Settlement date for the second part of a REPO/swap trade |


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
| SYSTEMID | Type | [TSystemID](#eTSystemID) | 1 | Type of the Trading System |


#### TESYSTIME - Trading System time (updateable, clear on update)

Table consists of one row with Trading System current date and time. This information is used to synchronize client time with the server time.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TIME | Текущее время | TIME | 6 | Time on the Trading System server |
| DATE | Date | DATE | 8 | Date on the Trading System server |


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


#### TRDTIMETYPES - Type of event (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TYPE** | **Event type** | **CHAR** | **1** |  |
| DESCRIPTION | Description | CHAR | 50 |  |

---


### Transactions

#### CHANGE_LANGUAGE - Change the language of the Trading System messages

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| LANGUAGEID | Language code | [TLanguage](#eTLanguage) | 1 | Language code. Available codes: R - Russian, E - English |


#### CHANGE_PASSWORD - Change user password

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| CURRENTPW | Текущий пароль | CHAR | 10 |  |
| NEWPW | New password | CHAR | 10 |  |


Key fields are marked in **bold**.  
Fields that contain security code are marked with asterisk (*).  
Repeated field groups are marked with plus sign (+).

---
The document is created with ASTSExplorer.exe 02.10.2023 12:36:09
