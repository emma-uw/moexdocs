---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Equities49 — Bonds and Equities market interface, v.49
sidebar_label: Equities49 — Bonds and Equities market interface, v.49
---

## Information objects of market 'Equities49' - 'Bonds and Equities market interface, v.49'

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
| S | Small | The total value of orders is less than N*minimum order value |
| M | Much | The total value of orders is greater than N*minimum order value |
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
| L | CA | Closing auction |
| D | DP | Dark pool |
| I | DA | Discrete auction |
| E | PCA | Close Auction Price Trading |
|  | - | Undefined |
| K |  | Money market auctions |


#### TQInvestor - Type of security intended for qualified investors (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| Y | Да | The securities is intended for purchase by all (any) qual. investors |
| N | Нет | The securities is intended for purchase by any investors |
| U | Legal entity | The securities is intended for the purchase of qual. investors who are legal entities. |


#### TQuoteBasis - Price basis (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | A | Price is specified as instrument face value |
| R | P | Price is specified in terms of cash for one instrument |
| F | % | Price is specified as percentage of the traded instrument's face value |


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
| L | CA | Closing auction |
| D | DP | Dark pool |
| I | DA | Discrete auction |
| E | PCA | Close Auction price trading |
| S | OA | Opening Auction |
| A | OE | Auction: Order entry phase |
| a | AM | Auction: Trade conclusion phase |
| b | LO | Auction: Bookbuilding phase, orders are locked |
| p | TWT | Auction: After auction trade phase |


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


## Interface 'Info' - 'Market data interface, v.49'

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
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Trade volume, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in the currency of settlement |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in the currency of settlement |
| YIELD | Yield | FIXED | 9.2 | Yield, based on the trade price |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Period of the trading session when the trade was concluded |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Direction of an order which led to the trade conclusion |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| REPOVALUE | Value / REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| REPO2VALUEBALANCE | Balance of the REPO buy-back value | FIXED | 16.2 | Value of the unmatched part of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| REPOTERM | Term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the trade was registered by the Trading System, microseconds |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| FACEAMOUNT | FaceAmount | FIXED | 16.2 | Value of trade by face value, expressed in the currency of settlement |
| TRADINGSESSION | Trading session | CHAR | 1 | ID of trading session when trade was concluded |


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
| AUCTPRICE | Auction price | FLOAT | 17 | Auction price. Displays the expected price of the auction with all the currently registered orders during the auction. Displays the actual auction price after the auction. |
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
| **CURRCODE** | **Currency** | **CHAR** | **4** | **Currency code** |
| CURRENCYNAME | Name | CHAR | 30 |  |
| CROSSRATE | Exchange rate | FLOAT | 17 | Exchange rate of the currency to rub., expressed in rub. with float point |


#### DPAUCTIONS - Dark pool auctions (updateable)

Results of the auctions based on the dark pool principles

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **PLANNEDTIME** | **Planned Auction Time** | **TIME** | **6** | **Auction start time according to the trading schedule** |
| STARTTIME | Auction start time | TIME | 6 | Actual auction start time |
| ENDTIME | Auction end time | TIME | 6 | Auction end time |
| LCURRENTPRICE | Official current price | FLOAT | 17 | Official current price on the market at the time of the price window start event |
| PRICEBOUNDUP | Maximum allowed price | FLOAT | 17 | Maximum allowed auction price when the price is determined as one of the average prices of the price window |
| PRICEBOUNDDOWN | Minimum allowed price | FLOAT | 17 | Minimum allowed auction price when the price is determined as one of the average prices of the price window. |
| AUCTPRICE | Auction price | FLOAT | 17 | Auction price |
| VALUE | Value | FIXED | 16.2 | Auction trade value, expressed in the currency of settlement |
| VOLUME | Trade volume | INTEGER | 16 | Total volume of all trades, expressed in number of securities |
| NUMTRADES | Trades | INTEGER | 9 | Number of trades |


#### EXT_ORDERBOOK - Aggregate orderbook (updateable, clear on update)

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
| **PRICE** | **Price** | **FLOAT** | **17** | **Price** |
| **ACTIVATIONTIME** | **Activation time** | **TIME** | **6** | **Order activation time. Used only in certain types of auctions and filled with spaces in all other trading modes.** |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| YIELD | Yield | FIXED | 9.2 | Volume of lots at the best price |
| REPOVALUE | REPO value | FIXED | 16.2 | Total REPO value of quotes with specified rate, expressed in the currency of settlement. This value is not calculated for normal board securities. |


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
| INDEXCROSSRATE | Rate | FIXED | 9.4 | Index currency exchange rate |


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
| SECBOARD | Board | CHAR | 4 | Trading board ID |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell"** |
| **PRICE** | **Price** | **FLOAT** | **17** | **Price** |
| **ACTIVATIONTIME** | **Activation time** | **TIME** | **6** | **Order activation time. Used only in certain types of auctions and filled with spaces in all other trading modes.** |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| YIELD | Yield | FIXED | 9.2 | Volume of lots at the best price |
| REPOVALUE | REPO value | FIXED | 16.2 | Total REPO value of quotes with specified rate, expressed in the currency of settlement. This value is not calculated for normal board securities. |


#### SECACCINT - Accrued interest for securities (not updateable)

Table contains reply to the request for data on accrued interest for a specified interval for a specified security. Maximum number or accrued interested values for one security is limited by 180 days - it means that is not possible to get more than 180 values for one security with one request. If the specified End date exceeds this limit or not specified at all then the maximum allowed number of values is returned.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID. If not specified then data on all securities is returned |
| CURRCODE | Currency | CHAR | 4 | Currency code |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals. If not specified then the default precision of two digits is applied |
| STARTDATE | Start date | DATE | 8 | Interval start date. If not specified then the current date is used |
| ENDDATE | End date | DATE | 8 | Interval end date |
| FACEUNITFLAG | AccInt in FaceUnit | [TYesNo](#eTYesNo) | 1 | Accured interest in face unit currency |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| CURRCODE | Currency | CHAR | 4 | Currency code |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals. This precision is used to format values in ACCINT field |
| STARTDATE | Start date | DATE | 8 | Interval start date |
| **DAYNO** | **Number of days** | **INTEGER** | **3** | **Number of days after the start date** |
| ACCINT | Accrued interest value | FLOAT | 17 | Accrued interest value |
| FACEVALUE | Face value | FLOAT | 17 | Face value of one Security, expressed in the currency, in which the Security is nominated |


#### SECTYPE - Type of security (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECTYPE** | **Type of security** | **CHAR** | **1** | **Type of security** |
| NAME | Name | CHAR | 4 |  |
| LATNAME | English name | CHAR | 4 |  |
| DESCRIPTION | Description | CHAR | 128 |  |


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
| LOTSIZE | Lot size | INTEGER | 8 | Number of securities in one lot |
| MINSTEP | Order's minimum price step | FLOAT | 17 | Minimum price increment for orders, not applicable to orders at WA price |
| FACEVALUE | Face value | FLOAT | 17 | Today's face value of one Security, expressed in the currency, in which the Security is nominated |
| FACEUNIT | Face value currency | CHAR | 4 | Currency in which security is denominated |
| PREVDATE | Date of the last trading session | DATE | 8 | Date of the previous trading day |
| PREVPRICE | Last closing price | FLOAT | 17 | Price of the last trade of the previous trading day |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals in the Value field |
| YIELD | Yield for the last | FIXED | 9.2 | Yield, based on the trade price |
| ACCRUEDINT | Accrued interest | FLOAT | 17 | Annualized yield to maturity calculated for the settlement date for this security |
| PRIMARYDIST | Distribution | [TYesNo](#eTYesNo) | 1 | Indicator of an auction for a security |
| MATDATE | Maturity date | DATE | 8 |  |
| COUPONVALUE | Coupon value | FIXED | 13.2 | Value of the due coupon payment, expressed in the currency of settlement |
| COUPONPERIOD | Coupon period | INTEGER | 4 | Coupon period, in days |
| NEXTCOUPON | Date of the due coupon payment | DATE | 8 |  |
| ISSUESIZE | Issued volume | INTEGER | 16 | Number of securities in issue |
| PREVWAPRICE | Previous WA price | FLOAT | 17 | The weighted average price of the previous trading session |
| YIELDATPREVWAPRICE | Yield, based on the last day WA price | FIXED | 9.2 | Yield, based on the last day WA price |
| REPO2PRICE | REPO second leg price | FLOAT | 17 | This field is not used anymore. |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| BUYBACKPRICE | Base price for yield calculation | FLOAT | 17 | If indicated then the yield is calculated using this price |
| BUYBACKDATE | Date for yield calculation | DATE | 8 | If indicated then the yield is calculated for this date |
| AGENTID | Primary distribution agent ID | CHAR | 12 | Primary distribution agent ID |
| QUOTEBASIS | Price type | [TQuoteBasis](#eTQuoteBasis) | 1 |  |
| ISIN | ISIN | CHAR | 12 | ISIN code |
| LATNAME | English name | CHAR | 30 | Name of the security in English |
| REGNUMBER | Registration number | CHAR | 30 | State registration number |
| PREVLEGALCLOSEPRICE | Last day closing price | FLOAT | 17 | Official Last day closing price, calculated as the WA price of the trades concluded during the last 10 minutes of the main session, including the closing period/closing auction |
| PREVADMITTEDQUOTE | Officially admitted quote of the last day | FLOAT | 17 | Officially admitted quote of the last day, price for one security |
| SECTYPE | Type of security | CHAR | 1 | Type of security |
| ACTIVATIONDATE | Activation date | DATE | 8 | Order activation date |
| PREVLOTSIZE | Previous lot size | INTEGER | 8 | Previous number of securities in one lot |
| LOTSIZECHANGEDATE | Date when the lot size changed | DATE | 8 |  |
| ORIGINTRADINGSTATUS | Trading status | [TTradingStatus](#eTTradingStatus) | 1 | Security trading status. During the break shows the actual status of the trading session (never changes to "Break"). |
| ISSUESIZEPLACED | Placed volume | INTEGER | 16 | Number of placed securities in issue |
| LISTLEVEL | Listing level | INTEGER | 1 |  |
| COMMENTS | Comments | CHAR | 128 |  |
| DIVIDENDVALUE | Dividend value | FLOAT | 17 | Dividend value, expressed in the currency of settlement |
| DIVIDENDDATE | Dividend date | DATE | 8 | Date of the divident recepient list closure |
| PRICEMINSTEP | Minimum price step | FLOAT | 17 | Minimum price tick value used in price related calculations in the trading system |
| SUBORDBOND | Subordination | [TYesNo](#eTYesNo) | 1 | Subordination flag (liabilities will be met after meeting requirements of all creditors) |
| LOTDIVIDER | Lot divider | INTEGER | 8 | Indicates trading in 1/LotDivider fractions of LotSize. For example, LotSize=1 and LotDivider=100 combination for USD/RUB has a meaning of trading in quantities of 1 cent. |
| HIGHRISK | High risk | [TYesNo](#eTYesNo) | 1 |  |
| QINVESTOR | For qualified investors | [TQInvestor](#eTQInvestor) | 1 |  |
| COUPONSTARTDATE | Start date of the coupon period | DATE | 8 | Start date of the coupon period |
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
| CHANGE | Last to Closing change | FLOAT | 17 | Difference between the Last Price and the Previous day Closing Price |
| QTY | Lots in the last | INTEGER | 16 | Volume of the last trade, expressed in lots |
| TIME | Time of the last | TIME | 6 | Time when the last trade was concluded |
| VOLTODAY | Today volume | FLOAT | 17 | Volume of concluded trades, expressed in number of securities |
| VALTODAY | Today value | INTEGER | 16 | Value of concluded trades, expressed in the currency of settlement |
| VALUE | Value of the last | FIXED | 16.2 | Value of the last trade in the current trading session, expressed in the currency of settlement |
| WAPRICE | WA | FLOAT | 17 | Weighted-average price |
| HIGHBID | Best bid | FLOAT | 17 | Best bid price during the trading session |
| LOWOFFER | Best offer | FLOAT | 17 | Best offer price during this trading session |
| NUMTRADES | Trades today | INTEGER | 9 | Number of trades today |
| YIELDATWAPRICE | Yield, based on the WA price | FIXED | 9.2 | Yield, based on the WA price |
| PRICEMINUSPREVWAPRICE | Last price to previous WA price | FLOAT | 17 | Difference between the last price and the weighted average price of the previous trading session |
| CLOSEPRICE | Price of the Closing period | FLOAT | 17 | Unified price for the closing period of the current trading session (calculated according to the trading rules) |
| CLOSEYIELD | Yield at the closing period price | FIXED | 9.2 | Yield at the closing period price |
| LASTBID | Session best bid | FLOAT | 17 | Best buy-order at the time of the normal trading session end |
| LASTOFFER | Session best offer | FLOAT | 17 | Best sell-order at the time of the normal trading session end |
| LASTSETTLECODE | Settlement code of the last | CHAR | 12 | Settlement code of the last trade |
| BASEPRICE | Base price | FLOAT | 17 | Base price could be specified for SWAP negotiated deals |
| MARKETPRICE | Last day market price | FLOAT | 17 | Market price of the previous day. For the REPO boards – settlement price of the previous day. |
| MARKETPRICETODAY | Market price | FLOAT | 17 | Today market price |
| DURATION | Duration | FIXED | 7.2 |  |
| SETTLECODE | Settlement code | CHAR | 12 | Default settlement code for this security |
| LOPENPRICE | Opening price | FLOAT | 17 | Obsolete |
| LCURRENTPRICE | Current price | FLOAT | 17 | Official current price, calculated as the WA price of the trades concluded during the last 10 minutes of the trading session |
| LCLOSEPRICE | Closing price | FLOAT | 17 | Official closing price, calculated as the WA price of the trades concluded during the last 10 minutes of the main session, including the closing period/closing auction |
| MARKETPRICE2 | Market price 2 | FLOAT | 17 | Market price calculated in compliance with official Federal Commission for Financial Markets methodology |
| ADMITTEDQUOTE | Admitted quote | FLOAT | 17 | Officially admitted quote calculated in compliance with official Federal Commission for Financial Markets methodology |
| OPENPERIODPRICE | Opening period price | FLOAT | 17 | Opening period/Closing auction price |
| CLOSING_AUCTION_PRICE | CA price | FLOAT | 17 | Closing auction price. Displays the expected price of the auction with all the currently registered orders during the auction. Displays the closing auction price after the auction. |
| CLOSING_AUCTION_VOLUME | CA volume | INTEGER | 16 | Closing auction volume. Expected (actual) number of securities in trades at the specified closing auction price. |
| DPVALINDICATORBUY | Bid flag (dark pools) | [TDPValIndicator](#eTDPValIndicator) | 1 | Flag that shows the availability of buy orders on the dark pool auction |
| DPVALINDICATORSELL | Sell flag (dark pools) | [TDPValIndicator](#eTDPValIndicator) | 1 | Flag that shows the availability of sell orders on the dark pool auction. |
| SETTLEDATE1 | Settlement date 1 | DATE | 8 | Settlement date for a trade or the first part of a REPO/swap trade |
| SETTLEDATE2 | Settlement date 2 | DATE | 8 | Settlement date for the second part of a REPO/swap trade |
| TRADINGSESSION | Trading session | CHAR | 1 | Current trading session ID |
| EVENINGSESSION | Availability in additional evening session | [TYesNo](#eTYesNo) | 1 | Flag that shows if a security is available for trading in additional evening session |
| PRICEMINUSPREVLEGALCLOSEPRICE | Last price to previous close price | FLOAT | 17 | Difference between the last price and the close price of the previous trading session |
| MORNINGSESSION | Availability in additional morning session | [TYesNo](#eTYesNo) | 1 | Flag that shows if a security is available for trading in additional morning session |
| PMLUPPERLIMIT | PML High | FLOAT | 17 | PRICEMOVELIMIT High boundary |
| PMLLOWERLIMIT | PML Low | FLOAT | 17 | PRICEMOVELIMIT Low boundary |


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
| ACCRUEDINT | Accrued interest | FLOAT | 17 | Accrued interest at the settlement date, expressed in the currency of settlement |
| ACCRUEDINT2 | Accrued interest for the 2nd REPO leg | FLOAT | 17 | Accrued interest for the SettleDate2, expressed in the currency of settlement |
| PRICE2 | Buyback price | FLOAT | 17 | Buyback price for the second REPO leg |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate expressed in percents |
| SETTLEDATE | Settlement date | DATE | 8 | Settlement date of a negotiated deal or of a first REPO leg |
| SETTLEDATE2 | Settlement date 2 | DATE | 8 | Settlement date for the 2nd REPO leg |
| **REPOTERM** | **REPO term** | **INTEGER** | **4** | **REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive.** |
| TRANSFERSONLY | Transfers only | [TYesNo](#eTYesNo) | 1 | Transfers only allowed |
| **ISOPENREPO** | **REPO with "OpenDate"** | [**TIsOpenRepo**](#eTIsOpenRepo) | **1** |  |


#### SEC_STATS - Trading session results (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **TRADINGSESSION** | **Trading session** | **CHAR** | **1** | **Trading session ID** |
| TIME | Time of the last | TIME | 6 | Time when the last trade was concluded |
| PRICEMINUSPREVWAPRICE | Last price to previous WA price | FLOAT | 17 | Difference between the last price and the weighted average price of the previous trading session |
| VOLTODAY | Today volume | FLOAT | 17 | Volume of concluded trades, expressed in number of securities |
| LOWOFFER | Best offer | FLOAT | 17 | Best offer price during this trading session |
| HIGHBID | Best bid | FLOAT | 17 | Best bid price during the trading session |
| HIGH | Maximum | FLOAT | 17 | Maximum trade price |
| LOW | Minimum | FLOAT | 17 | Minimum trade price |
| VALTODAY | Today value | INTEGER | 16 | Value of concluded trades, expressed in the currency of settlement |
| WAPRICE | WA | FLOAT | 17 | Weighted-average price |
| OPEN | First | FLOAT | 17 | First trade price |
| LAST | Last | FLOAT | 17 | Last trade price |
| PREVPRICE | Last closing price | FLOAT | 17 | Price of the last trade of the previous trading day |
| LASTOFFER | Session best offer | FLOAT | 17 | Best sell-order at the time of the normal trading session end |
| NUMTRADES | Trades today | INTEGER | 9 | Number of trades today |
| LASTBID | Session best bid | FLOAT | 17 | Best buy-order at the time of the normal trading session end |
| ADMITTEDQUOTE | Admitted quote | FLOAT | 17 | Officially admitted quote calculated in compliance with official Federal Commission for Financial Markets methodology |
| MARKETPRICETODAY | Market price | FLOAT | 17 | Today market price |
| MARKETPRICE2 | Market price 2 | FLOAT | 17 | Market price calculated in compliance with official Federal Commission for Financial Markets methodology |
| LCURRENTPRICE | Current price | FLOAT | 17 | Official current price, calculated as the WA price of the trades concluded during the last 10 minutes of the trading session |
| CLOSING_AUCTION_PRICE | CA price | FLOAT | 17 | Closing auction price. Displays the expected price of the auction with all the currently registered orders during the auction. Displays the closing auction price after the auction. |
| LCLOSEPRICE | Closing price | FLOAT | 17 | Official closing price, calculated as the WA price of the trades concluded during the last 10 minutes of the main session, including the closing period/closing auction |
| PREVLEGALCLOSEPRICE | Last day closing price | FLOAT | 17 | Official Last day closing price, calculated as the WA price of the trades concluded during the last 10 minutes of the main session, including the closing period/closing auction |
| OPENPERIODPRICE | Opening period price | FLOAT | 17 | Opening period/Closing auction price |


#### SETTLECODES - Settlement codes (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SETTLECODE** | **Settlement code** | **CHAR** | **12** | **Settlement code for the trade** |
| DESCRIPTION | Description | CHAR | 30 |  |
| SETTLEDATE | Settlement date | DATE | 8 | Settlement date of a negotiated deal or of a first REPO leg |
| SETTLEDATE2 | Settlement date 2 | DATE | 8 | Settlement date for the 2nd REPO leg |


#### STATS - Trading System info (not updateable)

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


#### TRADING_SESSION - Trading sessions (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ID** | **Trading session** | **CHAR** | **1** |  |
| NAME | Name of trading session | CHAR | 30 |  |
| SHORTNAME | Short name | CHAR | 10 |  |


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
The document is created with ASTSExplorer.exe 18.03.2024 17:05:42
