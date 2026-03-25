---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Currency51 — Currency market interface, v.51
sidebar_label: Currency51 — Currency market interface, v.51
---

## Information objects of market 'Currency51' - 'Currency market interface, v.51'

---


### Enumerated Types

#### TBuySell - Order direction (size: 1, type: ekGroup)

Available order directions

| Constant | Value | Description |
| --- | --- | --- |
| B | B | Buy |
| S | S | Sell |


#### TDPValIndicator - Order availability flag (size: 1, type: ekCombo)

Flag that shows the availability of buy or sell orders on the dark pool auction

| Constant | Value | Description |
| --- | --- | --- |
|  | - | No orders |
| Y | Yes | There are orders |


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


#### TPeriod - Trading period (size: 1, type: ekGroup)

List of trading periods

| Constant | Value | Description |
| --- | --- | --- |
| O | O | Opening period |
| S | OA | Opening Auction |
| N |  | Normal trading |
| C | C | Closing period |
| F | F | Final close period |
| I | DA | Discrete auction |
|  | - | Undefined |
| K |  | Money market auctions |
| U |  | Price Update Auction |


#### TSecStatus - Security status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Operations are allowed |
| S | S | Operations are suspended |
| N | B | Suspended for trading, settlement is allowed |


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


#### TTimeStatus - Event status (size: 1, type: ekCombo)

List of available statuses in the trading system schedule

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Active |
| L | - | Carried out |
| D | Deleted | Deleted |
| U | Confirmation required | Confirmation required |
| C | Cancelled | Cancelled |


#### TTradingStatus - Security trading status (size: 1, type: ekGroup)

List of available security trading statuses

| Constant | Value | Description |
| --- | --- | --- |
| N | N | Not traded right now |
| O | O | Opening period |
| C | - | Trading is closed |
| F | C | Closing period |
| B | B | Break |
| T |  | Trading session |
| I | DA | Discrete auction |
| S | OA | Opening Auction |
| A | OE | Auction: Order entry phase |
| a | AM | Auction: Trade conclusion phase |
| b | LO | Auction: Bookbuilding phase, orders are locked |
| p | TWT | Auction: After auction trade phase |
| P |  | Price Update Auction |


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


## Interface 'Info' - 'Интерфейс для информ-агентств v.51'

---


### Tables

#### ALL_TRADES - All trades (updateable)

Table contains anonymous information on all trades registered in the Trading System for a trading firm since the beginning of current trading session

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRADENO** | **Trade #** | **INTEGER** | **12** | **Trade number in the Trading System** |
| TRADETIME | Time | TIME | 6 | Time when the trade was registered by the Trading System |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Rate | FLOAT | 17 | Currency exchange rate |
| QUANTITY | Lots | INTEGER | 16 | Trade volume, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in the currency of settlement |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Period of the trading session when the trade was concluded |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Direction of an order which led to the trade conslusion - "Buy / Sell / Sell-Buy / Buy-Sell" |
| REPORATE | Rate, % | FLOAT | 17 |  |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the trade was registered by the Trading System, microseconds |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| FIXINGDATE | Fixing date | DATE | 8 | Fixing date |


#### AUCTSTATS - Auction stats (updateable)

Results of the auctions

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading session period |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **PLANNEDTIME** | **Planned Auction Time** | **TIME** | **6** | **Auction start time according to the trading schedule** |
| STARTTIME | Auction start time | TIME | 6 | Actual auction start time |
| ENDTIME | Auction end time | TIME | 6 | Auction end time |
| AUCTPRICE | Final auction price | FLOAT | 17 | Final auction price. Displays the expected price of the auction with all the currently registered orders during the auction. Displays the actual auction price after the auction. |
| VALUE | Value | FIXED | 16.2 | Auction trade value, expressed in the currency of settlement. Shows expected value during the auction and the final value once it finishes. |
| VOLUME | Trade volume | INTEGER | 16 | Total volume of all trades, expressed in number of securities. Shows expected volume during the auction and the final volume once it finishes. |
| NUMTRADES | Trades | INTEGER | 9 | Number of trades |
| IMBALANCE | Imbalance | INTEGER | 16 | Total volume of orders that will be left unmatched if the auction ends with currently expected price |
| MARKETVOLB | Market Buy | INTEGER | 16 | Total volume of market buy orders based on currently expected price, expressed in number of securities |
| MARKETVOLS | Market Sell | INTEGER | 16 | Total volume of market sell orders, expressed in number of securities |
| DPVALINDICATORBUY | Bid flag (dark pools) | [TDPValIndicator](#eTDPValIndicator) | 1 | Flag that shows the availability of buy orders on the dark pool auction |
| DPVALINDICATORSELL | Sell flag (dark pools) | [TDPValIndicator](#eTDPValIndicator) | 1 | Flag that shows the availability of sell orders on the dark pool auction. |
| DPORDERINDICATOR | Orders flag (dark pools) | [TDPValIndicator](#eTDPValIndicator) | 1 | Flag that shows the availability of any orders on the dark pool auction. |


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
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| MARKETID | Market | CHAR | 4 | Market ID this board belongs to |
| LATNAME | English name | CHAR | 30 | Board name in English |


#### CURRENCY - Currencies (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CURRCODE** | **Currency of settlements** | **CHAR** | **4** | **Currency code of the settlements** |
| CURRENCYNAME | Name | CHAR | 30 |  |
| CROSSRATE | Exchange rate | FLOAT | 17 | Exchange rate of the currency to rub., expressed in rub. with float point |
| ASSET | Asset | CHAR | 12 |  |


#### EXT_ORDERBOOK - Aggregate orderbook (updateable, clear on update)

This is an extended version of ORDERBOOK table. It contains information on current best buy & sell prices and activation time for a particular security. Each row corresponds to a unique pair of price & activation time and shows the total number of lots to sell or to buy at this price with this activation time.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| DEPTH | Orderbook depth | INTEGER | 2 | Requested depth of best bid/offer prices for a security. Omitted to get the whole permitted depth. |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell / Sell-Buy / Buy - Sell"** |
| **PRICE** | **Rate** | **FLOAT** | **17** | **Price for one security** |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |


#### INDEXES - Indices (updateable)

Each table row represents one of the indices calculated for this market

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **INDEXBOARD** | **Board** | **CHAR** | **4** | **Board ID of securities in index base** |
| **INDEXCODE[*](#refs)** | **Index ID** | **CHAR** | **12** | **Exchange Index ID** |
| NAME | Name | CHAR | 30 | Index name |
| SHORTNAME | Index | CHAR | 10 |  |
| CURRENTVALUE | Current | FLOAT | 17 | Current index value |
| LASTVALUE | Close | FLOAT | 17 | Last value of the previous trading session |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals in the Value field |
| LATNAME | English name | CHAR | 30 | Index name in English |
| TIME | Calculation time | TIME | 6 |  |
| OPENVALUE | Opening value | FLOAT | 17 | Value of the Index at the opening of the current trading day |
| VALTODAY | Trade volume | INTEGER | 16 | Value of all the trades included into an index, expressed in rub. |
| MIN | Minimum | FLOAT | 17 | Minimum index value |
| MAX | Maximum | FLOAT | 17 | Maximum index value |


#### MARKETS - Markets (not updateable)

Table contains information on the markets. Market constitutes a group of trading boards with common features and trading rules (traded instruments, trading rules etc.) - i.e. the Government Securities Market, the Corporate Securities Market, the Quote-Driven Market.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **MARKETID** | **Market** | **CHAR** | **4** | **Market ID** |
| MARKETNAME | Name | CHAR | 30 | Market name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| LATNAME | English name | CHAR | 30 | Market name in English |


#### ORDERBOOK - Aggregate orderbook (updateable, clear on update)

This is an extended version of ORDERBOOK table. It contains information on current best buy & sell prices and activation time for a particular security. Each row corresponds to a unique pair of price & activation time and shows the total number of lots to sell or to buy at this price with this activation time.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell / Sell-Buy / Buy - Sell"** |
| **PRICE** | **Rate** | **FLOAT** | **17** | **Price for one security** |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |


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
| MARKETCODE | Market | CHAR | 4 | Market ID |
| INSTRID | Instrument Group ID | CHAR | 4 | Instrument group ID |
| SECTORID | Sector | CHAR | 4 |  |
| LOTSIZE | Lot size | INTEGER | 8 | Number of securities in one lot |
| MINSTEP | Order's minimum price step | FLOAT | 17 | Minimum price increment for orders, not applicable to orders at WA price |
| FACEVALUE | Face value | FLOAT | 17 | Face value of one Security, expressed in the currency, in which the Security is nominated |
| FACEUNIT | Currency of instrument | CHAR | 4 | Currency in which security is denominated |
| PREVDATE | Date of the last trading session | DATE | 8 | Date of the previous trading day |
| PREVPRICE | Last Close Price | FLOAT | 17 | Price of the last trade of the previous trading day |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals in the Value field |
| PREVWAPRICE | Previous WA price | FLOAT | 17 | The weighted average price of the previous trading session |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| LATNAME | English name | CHAR | 30 | Name of the security in English |
| ORIGINTRADINGSTATUS | Trading status | [TTradingStatus](#eTTradingStatus) | 1 | Security trading status. During the break shows the actual status of the trading session (never changes to "Break"). |
| ASSET | Asset | CHAR | 12 |  |
| FIXINGDATE | Fixing date | DATE | 8 | Fixing date |
| PRICEMINSTEP | Minimum price step | FLOAT | 17 | Minimum price tick value used in price related calculations in the trading system |
| LOTDIVIDER | Lot divider | INTEGER | 8 | Indicates trading in 1/LotDivider fractions of LotSize. For example, LotSize=1 and LotDivider=100 combination for USD/RUB has a meaning of trading in quantities of 1 cent. |
| DERIVATIVE | Derivative | [TYesNo](#eTYesNo) | 1 |  |
| BID | Bid | FLOAT | 17 | Best bid price |
| BIDDEPTH | Best bid depth | INTEGER | 16 | Total unmatched volume of all active buy orders at the current best bid price (expressed in number of lots) |
| BIDDEPTHT | Total bid depth | INTEGER | 16 | Total unmatched volume of all active buy orders, expressed in lots |
| NUMBIDS | Buy orders | INTEGER | 6 | Number of buy orders in the queue of the Trading System |
| OFFER | Offer | FLOAT | 17 | Best offer price |
| OFFERDEPTH | Best offer depth | INTEGER | 16 | Volume of all sell orders at the best price, expressed in lots |
| OFFERDEPTHT | Total offer depth | INTEGER | 16 | Total unmatched volume of all active sell orders (expressed in lots) |
| NUMOFFERS | Sell orders | INTEGER | 6 | Number of sell orders in the queue of the Trading System |
| OPEN | First | FLOAT | 17 | First trade price |
| HIGH | Maximum | FLOAT | 17 | Maximum trade price |
| LOW | Minimum | FLOAT | 17 | Minimum trade price |
| LAST | Last | FLOAT | 17 | Last trade price |
| LASTNEG |  | FLOAT | 17 |  |
| CHANGE | Last to Closing change | FLOAT | 17 | Difference between the Last Price and the Previous day Closing Price |
| QTY | Lots in the last | INTEGER | 16 | Volume of the last trade, expressed in lots |
| TIME | Time of the last | TIME | 6 | Time when the last trade was concluded |
| VOLTODAY | Today volume | FLOAT | 17 | Volume of concluded trades, expressed in the currency of the security |
| VALTODAY | Today value | INTEGER | 16 | Value of concluded trades, expressed in the currency of settlement |
| VALUE | Value of the last | FIXED | 16.2 | Value of the last trade in the current trading session, expressed in the currency of settlement |
| WAPRICE | WA | FLOAT | 17 | Weighted-average price |
| HIGHBID | Best bid | FLOAT | 17 | Best bid price during the trading session |
| LOWOFFER | Best offer | FLOAT | 17 | Best offer price during this trading session |
| NUMTRADES | Trades today | INTEGER | 9 | Number of trades today |
| PRICEMINUSPREVWAPRICE | Last price to previous WA price | FLOAT | 17 | Difference between the last price and the weighted average price of the previous trading session |
| CLOSEPRICE | Special period WAP | FLOAT | 17 | Weighted average price calculated for the defined special period of trading session established by regulatory documents for a particular instrument |
| LASTBID | Session best bid | FLOAT | 17 | Best buy-order at the time of the normal trading session end |
| LASTOFFER | Session best offer | FLOAT | 17 | Best sell-order at the time of the normal trading session end |
| LASTSETTLECODE | Settlement code of the last | CHAR | 12 | Settlement code of the last trade |
| BASEPRICE | Base price | FLOAT | 17 | Base price could be specified for SWAP negotiated deals |
| MARKETPRICE | FX fixing Prev | FLOAT | 17 | FX fixing ME (of the previous trading session) |
| MARKETPRICETODAY | FX fixing Curr | FLOAT | 17 | FX fixing by orderbook liquidity and deals evaluation method for one second interval |
| SETTLECODE | Settlement code | CHAR | 12 | Default settlement code for this security |
| LOPENPRICE | Current special period WAP | FLOAT | 17 | Weighted average price calculated for the defined special period of trading session established by regulatory documents for a particular instrument |
| MARKETPRICE2 | FX fixing ME | FLOAT | 17 | Average value of FX fixing Curr calculated from 12:25:01 till 12:30:00 |
| ADMITTEDQUOTE | FX fixing price | FLOAT | 17 | Average value of FX fixing ME and FX fixing EBS |
| DPVALINDICATORBUY | Bid flag (WAP) | [TDPValIndicator](#eTDPValIndicator) | 1 | Flag that shows the availability of buy orders on the WAP boards |
| DPVALINDICATORSELL | Sell flag (WAP) | [TDPValIndicator](#eTDPValIndicator) | 1 | Flag that shows the availability of sell orders on the WAP boards |
| SETTLEDATE1 | Settlement date 1 | DATE | 8 | Settlement date for a trade or the first part of a REPO/swap trade |
| SETTLEDATE2 | Settlement date 2 | DATE | 8 | Settlement date for the second part of a REPO/swap trade |
| PMLUPPERLIMIT | PML High | FLOAT | 17 | PRICEMOVELIMIT High boundary |
| PMLLOWERLIMIT | PML Low | FLOAT | 17 | PRICEMOVELIMIT Low boundary |


#### SEC_SETTLECODE - Settlement codes for the instruments (updateable)

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
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| **REPOTERM** | **REPO term** | **INTEGER** | **4** | **REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive.** |
| FIXINGDATE | Fixing date | DATE | 8 | Fixing date |
| TRANSFERSONLY | Transfers only | [TYesNo](#eTYesNo) | 1 | Transfers only allowed |
| **ISOPENREPO** | **REPO with "OpenDate"** | [**TIsOpenRepo**](#eTIsOpenRepo) | **1** |  |


#### SETTLECODES - Settlement codes (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SETTLECODE** | **Settlement code** | **CHAR** | **12** | **Settlement code for the trade** |
| DESCRIPTION | Description | CHAR | 30 |  |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| FIXINGDATE | Fixing date | DATE | 8 | Fixing date |


#### STATS - Trading system parameters (not updateable)

Table contains one row with trading system (engine) general information

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SESSION | Start number | INTEGER | 10 | Unique start number of the trading system |
| TEVERSION | Version | CHAR | 10 | Trading/clearing system version |
| SYSTEMID | Type | [TSystemID](#eTSystemID) | 1 | Type of the trading/clearing system |
| TESTSYSTEM | Test system | [TYesNo](#eTYesNo) | 1 | Flag that indicates test environment |
| TESTDATA | Test data | [TYesNo](#eTYesNo) | 1 | Flag that indicates test trading session held on production or test environment |


#### TESYSTIME - Trading System time (updateable, clear on update)

Table consists of one row with Trading System current date and time. This information is usually used to synchronize client time with the server time.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TIME | Time | TIME | 6 | Time on the trading/clearing system server |
| DATE | Date | DATE | 8 | Date on the trading/clearing system server |
| TOMORROWDATE | Tomorrow date | DATE | 8 |  |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time on the trading/clearing system server, microseconds |
| LASTTRTIME | Last transaction | TIME | 6 | The time of the last transaction registered in the system |
| LASTTRMSEC | Microseconds of last transaction | INTEGER | 6 | The time of the last transaction registered in the system (microseconds) |


#### TRADETIME - Trading schedule (updateable)

Table contains information on Time Events triggering changes in the trading status of market, trading board, group of traded instruments or security

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TIME** | **Time** | **TIME** | **6** | **Time the event is scheduled to execute at** |
| **MARKETID** | **Market** | **CHAR** | **4** | **Market ID** |
| **INSTRID** | **Group** | **CHAR** | **4** | **ID of a security group the event is concerned with** |
| **BOARDID** | **Board** | **CHAR** | **4** | **ID of a trading board the event is concerned with** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **TYPE** | **Event** | **CHAR** | **2** | **Event type. For list of all types see the TRDTIMETYPES table.** |
| STATUS | Status | [TTimeStatus](#eTTimeStatus) | 1 | Event status - flag showing whether the event has already happened or not |


#### TRDTIMEGROUPS - Trading events groups (not updateable)

Groups of trading events

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TYPE** | **Group type** | **CHAR** | **1** | **Group of event type** |
| NAME | Russian name | CHAR | 32 | Name of event group in Russian |
| LATNAME | English name | CHAR | 32 | Name of event group in English |


#### TRDTIMETYPES - Type of event (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TYPE** | **Event type** | **CHAR** | **2** |  |
| DESCRIPTION | Russian description | CHAR | 128 | Description in Russian |
| GROUPTYPE | Group | CHAR | 1 | Type of event group |
| LAT_DESCRIPTION | English description | CHAR | 128 | Description in English |

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


Key fields are marked in **bold**.  
Fields that contain security code are marked with asterisk (*).  
Repeated field groups are marked with plus sign (+).

---
The document is created with ASTSExplorer.exe 26.10.2024 12:28:47
