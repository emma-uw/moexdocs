---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Currency49 — Currency market interface, v.49
sidebar_label: Currency49 — Currency market interface, v.49
---

## Information objects of market 'Currency49' - 'Currency market interface, v.49'

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


#### TCodMode - COD-Mode Subscription (size: 1, type: ekGroup)

Type of Cancel on Disconnect mode subscription (COD-mode). COD-mode - cancel active orders on disconnect or logoff from Trading System. Available types are "Not used", "Always" and "On Demand".

| Constant | Value | Description |
| --- | --- | --- |
| N | Not used | COD functionality is not available |
| A | Always | COD-mode is always on |
| O | On demand | COD-mode can be activated on demand |
| W | Technical mode 1 | COD-mode is always on, logoff inactive user |
| C | Technical mode 2 | COD-mode is always on, logoff inactive user without order withdrawal |


#### TCrossTrading - Cross trading (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| N | No | Сross trades are prohibited for negdeal, withdraw active for system orders |
| Y | Yes | Сross trades are allowed for negdeal, withdraw active for system orders |
| P | Passive | Сross trades are prohibited for negdeal, cancellation of passive for system orders |
| X |  | Сross trades are allowed for negdeal, cancellation of passive for system orders |
| K |  | Сross trades are allowed for negdeal, skip passive for system orders |
| U | Skip | Сross trades are prohibited for negdeal, skip passive for system orders |


#### TDepAccType - Type of depositary account (size: 1, type: ekGroup)

List of depositary account types

| Constant | Value | Description |
| --- | --- | --- |
| C |  | Main (own) |
| I |  | Client |
| O |  | Correspondent |
| D |  | Default account for the currency market |
| T |  | Custodian |
| S |  | Custodian |
| V | 2, 3 lev. clients | Clients of levels 2 and 3 |


#### TDPValIndicator - Order availability flag (size: 1, type: ekCombo)

Flag that shows the availability of buy or sell orders on the dark pool auction

| Constant | Value | Description |
| --- | --- | --- |
|  | - | No orders |
| Y | Yes | There are orders |


#### TFirmAccess - Firm access status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| N | No | No |
| Y | Yes | Yes |
|  | Unspecified | Unspecified |
| S | = | Suspended |


#### TImmCancel - Order processing condition (size: 1, type: ekGroup)

List of available conditions of order processing options:

"Add into queue" - After matching the remainder of the limit Order is appended to the Aggregate OrderBook (the priority of the Order in the OrderBook is determined by Price and then, for the Orders with equal Prices - by the entry time), for market orders with this option the unmatched remainder is automatically withdrawn;

"Fill or kill" - The order is matched only if it could be fully matched immediately, otherwise the order is canceled;

"Withdraw unmatched remainder" - The order is matched as best it immediately could, the unmatched remainder is canceled (is valid for the Limit order only).

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Add into queue |
| N | N | Fill or kill |
| W | W | Withdraw unmatched remainder |
| B | B | A book or cancel order |


#### TInstrType - Instrument type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| C | C | Currency |
| W | S | SWAP |
| I | I | Index |
| B | CB | Currency basket |
| F | F | Fixing |


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


#### TMakerTaker - Active/passive trade (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
|  | Not determined |  |
| T | Active | Active |
| M | Passive | Passive |


#### TMktLimit - Order type (size: 1, type: ekGroup)

The list of allowed order types. Attention: market orders entered during the closing period are automatically assigned type "C" (limit orders during the closing period trading are not allowed).

| Constant | Value | Description |
| --- | --- | --- |
| M | M | Market |
| L | L | Limit |
| C | C | Order of the closing period |
| W | W | Volume based WA |


#### TOnOff - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| N | Off | Off |
| Y | On | On |


#### TOrderCancelReason - Cancel Reason (size: 2, type: ekCombo)

Order cancel reason

| Constant | Value | Description |
| --- | --- | --- |
|  |  |  |
| 00 |  | By trading rules |
| 01 |  | Price move limit breached |
| 02 |  | Iceberg order |
| 03 |  | Market order |
| 04 |  | Market order with price |
| 05 |  | Canceled by operator |
| 06 |  | Closing auction price conditions |
| 07 |  | Canceled due to depo account suspention |
| 08 |  | Cancellation of unconfirmed negotiated orders |
| 09 |  | Cancellation of unconfirmed transfers |
| 10 |  | Cancellation of orders from external systems |
| 11 |  | Cancellation of orders awaiting activation event |
| 12 |  | Cancellation of orders awaiting activation time |
| 13 |  | Canceled during the market suspension sequence |
| 14 |  | Canceled during the board suspension sequence |
| 15 |  | Canceled during the board trading mode change |
| 16 |  | Canceled during the security suspension sequence |
| 17 |  | Canceled during the security trading mode change |
| 18 |  | Canceled during the default management |
| 19 |  | Canceled to start early settlement |
| 20 |  | Trading closed for bankacc |
| 21 |  | Canceled on single limit check |
| 22 |  | Cancel orders time event |
| 23 |  | Cross trade check |
| 24 |  | Market maker trade check |
| 25 |  | Not enough collateral (on activation) |
| 26 |  | Canceled during the firm suspension sequence |
| 27 |  | Canceled during the user suspension sequence |
| 28 |  | Canceled during the trading account suspension sequence |
| 29 |  | Canceled during the instrument group suspension sequence |
| 30 |  | Value of the market order is less then one lot |
| 31 |  | Canceled during the user's trading suspension sequence |
| 32 |  | Canceled due to the prohibited period order |
| 33 |  | Canceled during the client code suspension sequence |
| 34 |  | Cancellation of a passive order during cross trade check |
| 35 |  | Market order depth limit breached |
| 36 |  | Cancellation of active quotes due to the trading session end |
| 37 |  | Internal liquidity order is rejected before trade conclusion with external quote |
| 38 |  | Quote is rejected before matching with active order |
| 39 |  | Canceled due to liquidity provider confirmation timeout |
| 40 |  | Declined by liquidity provider |
| 41 |  | Canceled due to collateral deficiency for external quote of liquidity provider |
| 42 |  | BOC orders in the order book are deleted at the start of an auction |
| 43 |  | Limit order depth limit breached |
| 44 |  | Book-or-cancel order is rejected to prevent immediate execution |
| 45 |  | Unable to execute a FOK order immediately and completely |
| 46 |  | Withdraw unfilled portion of an IOC order |


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
| D | -D | Cancelled by Trading System on user's disconnect (COD) |
| S | Error | Internal error |
| Q | Not activated. Lack of collateral. | Order was not activated. Lack of collateral. |
| X | Not activated. Lack of collateral. | Order was not activated. Lack of collateral. |
| L | Conf | Confirmation by liquidity provider required |


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


#### TPriceEntryType - Price type (size: 1, type: ekGroup)

Available types of price to be indicated during order submission

| Constant | Value | Description |
| --- | --- | --- |
| P |  | Exchange rate as price |
| W | W | Weighted-average price as price |


#### TQuoteBasis - Price basis (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | A | Price is specified as instrument face value |


#### TSecStatus - Security status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Operations are allowed |
| S | S | Operations are suspended |
| N | B | Suspended for trading, settlement is allowed |


#### TSecTransferBuySell - Transfer direction (size: 1, type: ekGroup)

List of available transfer directions

| Constant | Value | Description |
| --- | --- | --- |
| B | D | Deposit |
| S | W | Withdraw |


#### TSMALimitsOwnerType - SMA limits owner type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| U |  | User |
| G |  | Group |


#### TSplitFlag - Price split flag (size: 1, type: ekGroup)

List of possible values of the Price Split Flag. Note: for Market Orders only the "Split allowed" ("S") value is possible.

| Constant | Value | Description |
| --- | --- | --- |
| S |  | Price split allowed |
| O | O | One price only |


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


#### TTransferType - Transfer type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Ordinary transfer |
| A | = | Transfer the balance |
| F | &lt;= | Transfer the balance, but no more than the specified |
| L | L | Transfer the balance except for the specified |
| R | ? | Check the balance |
| P | N | Transfer the netto of liability and claims |
| S | Р | Ordinary transfer from settled position |
| T | &lt;=Р | Transfer the balance, but no more than the specified from settled position |
| V | &lt;=-N | Transfer the balance without netto of liability and claims, but no more than the specified |
| W | ?-N | Check the balance without netto of liability and claims |


#### TTrdAccStatus - Status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Operations are allowed |
| S | = | Operations are suspended |
| N | - | Suspended for trading |
| X | x | Account is being closed |


#### TUAccessListType - List type (size: 1, type: ekGroup)

Type of access list

| Constant | Value | Description |
| --- | --- | --- |
| W | W | White list |
| B | B | Black list |
|  |  | Not specified |


#### TUrgency - Message urgency (size: 1, type: ekCheck)

Available message urgency types

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Normal |
| U | ! | Urgent |


#### TUserLimitStatus - User limit status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | A | Active |
| S | = | Suspended |
| D | - | Deleted |


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


## Interface 'Broker' - 'Interface for brokerage systems, v.49'

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
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| CLEARINGFIRMID | Clearing firm | CHAR | 12 | Firm ID of clearing member |
| CLEARINGBANKACCID | Clearing bank account | CHAR | 12 | Clearing account ID in the settlement house |
| DETAILS | Details | CHAR | 20 | Client taxpayer number or passport number or other document |
| SUBDETAILS | Subdetails | CHAR | 20 | Client taxpayer number or passport number or other document |
| UNIFIEDPOOL | Single pool | [TYesNo](#eTYesNo) | 1 |  |
| EARLYSETTLETIME | Early settlement time | TIME | 6 | Early settlement time |
| TRADINGCLOSEDTIME | Trading closed time | TIME | 6 | Trading closed time |
| COMMBANKACCID | Commission bank account | CHAR | 12 | Bank account ID in the settlement house to charge variable commission fee from |
| MORNINGSESSION | Availability in additional morning session | [TYesNo](#eTYesNo) | 1 | Flag that shows if a bankacc is available for trading in additional morning session |
| CSPECIAL | Счет типа С | [TYesNo](#eTYesNo) | 1 | Признак специального РК типа "C" |


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
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| MARKETID | Market | CHAR | 4 | Market ID this board belongs to |
| LATNAME | English name | CHAR | 30 | Board name in English |


#### CLIENTCODES - Brokers' clients (updateable)

Table contains information on clients of a broker firm that are registered in the Trading System

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CLIENTCODE** | **Client code** | **CHAR** | **12** | **Client code assigned by the broker** |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| DETAILS | Details | CHAR | 20 | Client taxpayer number or passport number or other document |
| CLIENTTYPE | Type | CHAR | 2 | Form of client identification |
| SUBDETAILS | Subdetails | CHAR | 20 | Client taxpayer number or passport number or other document |
| QINVESTOR | Qualified Investor | [TYesNo](#eTYesNo) | 1 | Qualified Investor |
| STATUS | Status | [TUserLimitStatus](#eTUserLimitStatus) | 1 | ClientCode Status |
| CROSSTRADING | Cross trading | [TCrossTrading](#eTCrossTrading) | 1 |  |
| CLEARINGFIRMID | Clearing firm | CHAR | 12 | Firm ID of clearing member |
| BLOCKCLIENTTE | Trading blocked | [TYesNo](#eTYesNo) | 1 | Flag that indicates if trading access is blocked |
| PFIACCESS | DFI Access | [TYesNo](#eTYesNo) | 1 | Access to derivative financial instruments |


#### CURRENCY - Currencies (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CURRCODE** | **Currency of settlements** | **CHAR** | **4** | **Currency code of the settlements** |
| CURRENCYNAME | Name | CHAR | 30 |  |
| CROSSRATE | Exchange rate | FLOAT | 17 | Exchange rate of the currency to rub., expressed in rub. with float point |
| ASSET | Asset | CHAR | 12 |  |


#### EXT_MMSTATS - Market-maker's obligations (updateable)

Table contains information on market-maker's obligations and compliance with these obligations

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| **MMID** | **Entry ID** | **CHAR** | **12** | **Market-making entry ID in the trading system** |
| PARENTMMID | Parent Entry ID | CHAR | 12 |  |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| SCHEMANAME | Scheme | CHAR | 20 | Name of the market-making scheme |
| AGREEMENT | Agreement number | CHAR | 12 | Number (ID) of a market-making agreement |
| AGREEMENTDATE | Agreement date | DATE | 8 | Date of the market-making agreement conclusion |
| MINSPREADVOLUMEBUY | MGF 1 | INTEGER | 16 | Market-maker's minimal guaranteed fill (minimal total number of lots in active market-maker orders obligatory for the market-maker) on buy side |
| MINSPREADVOLUMESELL | MGF 2 | INTEGER | 16 | Market-maker's minimal guaranteed fill (minimal total number of lots in active market-maker orders obligatory for the market-maker) on sell side |
| MAXTRADESVOLUME | Threshold value, lots | INTEGER | 16 | When the threshold value of trades is exceeded then the market-maker's obligations either change from two-sided to one-sided or he/she is released from obligations. Expressed in lots. |
| MAXTRADESVALUE | Threshold value, rub. | FIXED | 16.2 | When the threshold value of trades is exceeded then the market-maker's obligations either change from two-sided to one-sided or he/she is released from obligations. Expressed in rub. |
| MAXSPREADPERC | Max spread 1, % | FLOAT | 8 | Maximum spread allowed for the market-maker |
| MAXSPREADPERC1 | Max spread 2, % | FLOAT | 8 | Second maximum spread allowed for the market-maker |
| MAXSPREADPERC2 | Max spread 3, % | FLOAT | 8 | Third maximum spread allowed for the market-maker |
| MAXSPREADPRICE | Max spread | FLOAT | 17 |  |
| MINKEEPPERCENT | Min % of fulfillment | FIXED | 9.2 | Minimal percentage of fulfillment |
| CURRENTSPREADPERC | Spread, % | FLOAT | 8 | Current market-maker's spread (difference between Minimum buy and Maximum sell prices in active market-maker's orders) |
| CURRENTSPREADPRICE | Spread | FLOAT | 17 | Current spread, rub. |
| CURRENTMINBUYPRICE | Best bid price | FLOAT | 17 | Best price of active limit buy orders |
| CURRENTMAXSELLPRICE | Best ask price | FLOAT | 17 | Best price of active limit sell orders |
| CURRENTALLOWEDBUYPRICE | Minimum allowed | FLOAT | 17 | Minimum allowed price for active limit buy order |
| CURRENTALLOWEDSELLPRICE | Maximum allowed | FLOAT | 17 | Maximum allowed price for active limit sell order |
| TOTALBUYVOLUME | Buy volume | INTEGER | 16 | Total volume of active limit buy-orders, expressed in lots |
| TOTALSELLVOLUME | Sell volume | INTEGER | 16 | Total volume of active limit sell-orders, expressed in lots |
| TOTALBREACHTIME | Total breach time | TIME | 6 | Total time during the current Trading Session when the market-maker was not complying with his/her obligations |
| TOTALKEEPTIME | Compliance time | TIME | 6 | Total time during the current Trading Session when the market-maker was complying with his/her obligations |
| FACTTRADESVOLUME | Volume | INTEGER | 16 | Total volume of trades, in lots |
| FACTTRADESVALUE | Value, rub. | FIXED | 16.2 | Total value of trades, in rub. |
| FACTKEEPPERCENT | % of fulfillment | FIXED | 9.2 | Fulfillment percentage |
| LEFTKEEPTIME | Left time to fulfillment | TIME | 6 | Time left to fulfill obligations |
| UPDATETIME | Update time | TIME | 6 | Update time |
| PROCESSED | Obligations fulfilled | [TYesNo](#eTYesNo) | 1 | Flag showing if obligations are being fulfilled |
| KEEPSPREADVARIANT | Spread type | CHAR | 4 | Keeping spread type |


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


#### FIRMS - Firms (updateable)

Table lists all the firms

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm code** | **CHAR** | **12** | **Firm ID** |
| FIRMNAME | Firm | CHAR | 30 | Short firm name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| EXCHANGE | Exchange | CHAR | 4 | Regional Exchange ID |
| INN | TIN | CHAR | 12 | Taxpayer Identification Number |
| INLIQUIDATION | Liquidation netting | [TYesNo](#eTYesNo) | 1 |  |
| CLEARINGACCESS | Clearing access | [TFirmAccess](#eTFirmAccess) | 1 |  |
| TRADINGACCESS | Trading access | [TFirmAccess](#eTFirmAccess) | 1 |  |
| MORNINGSESSION | Availability in additional morning session | [TYesNo](#eTYesNo) | 1 | Flag that shows if a firm is available for trading in additional morning session |


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


#### MARKETS - Markets (updateable)

Table contains information on the markets. Market constitutes a group of trading boards with common features and trading rules (traded instruments, trading rules etc.) - i.e. the Government Securities Market, the Corporate Securities Market, the Quote-Driven Market.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **MARKETID** | **Market** | **CHAR** | **4** | **Market ID** |
| MARKETNAME | Name | CHAR | 30 | Market name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| LATNAME | English name | CHAR | 30 | Market name in English |


#### NEGDEALBOOK - Negotiated deal orderbook (updateable, clear on update)

Orderbook for negotiated deals.
Two request formats are available:
1. specify Trading board ID only (BOARDID) to get orderbook for all instruments traded on that board;
2. specify both Trading board and Security ID (SECBOARD+SECCODE) to get orderbook for a particular security traded on the specified board.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BOARDID | Board | CHAR | 4 | Trading board ID |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| FIRMID | Firm | CHAR | 12 | Firm ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell / Sell-Buy / Buy - Sell" |
| PRICE | Rate | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |


#### NEGDEALS - Negotiated deal orders (updateable)

Table contains information on all negotiated deals submitted by the trading firm since the beginning of the trading session

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **DEALNO** | **Order No.** | **INTEGER** | **12** | **Negotiated deal order number (ID) in the Trading System** |
| DEALTIME | Order time | TIME | 6 | Time when the trade was registered by the Trading System |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Status of a negotiated trade |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell / Sell-Buy / Buy - Sell" |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| USERID | User ID | CHAR | 12 | Trader who entered the order |
| FIRMID | Firm | CHAR | 12 | Firm on which behalf the order was entered |
| CPFIRMID | Counterparty | CHAR | 12 | Firm the order is addressed to |
| ACCOUNT | Trading account | CHAR | 12 | Trading account from which the order was entered |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Rate | FLOAT | 17 | Currency exchange rate |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| VALUE | Value | FIXED | 16.2 | Deal value, expressed in the currency of settlement |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPORATE | Rate, % | FLOAT | 17 |  |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading session period in which the order was entered |
| CLIENTCODE | Client code | CHAR | 12 | Short client code which was indicated when entering the trade |
| UPDATETIME | Update time | TIME | 6 | Time when the order was updated last time (matched, cancelled) |
| BALANCE | Lots left | INTEGER | 16 | Volume of unmatched part of an order, expressed in lots |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| BASEPRICE | Base price | FLOAT | 17 | Base price could be specified for SWAP negotiated deals |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| BANKID | Settlement organization | CHAR | 12 |  |
| FIXINGDATE | Fixing date | DATE | 8 | Fixing date |
| SETTLELIABILITYFLAG | Liability settlement order | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Order of liability settlement between Clearing and Trading Members |
| ORDCANCELREASON | Cancel reason | [TOrderCancelReason](#eTOrderCancelReason) | 2 | Order cancellation reason |
| CPUSERALIAS | Counterparty user alias | CHAR | 12 | Alias of the user the order is addressed to |


#### ONENEGDEAL - Details for one negotiated deal order (updateable)

Table consists of one row holding information on a negotiated deal having the number specified in request

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| DEALNO | Deal # | INTEGER | 12 | Negotiated deal order number (ID) in the Trading System |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **DEALNO** | **Deal #** | **INTEGER** | **12** | **Negotiated deal order number (ID) in the Trading System** |
| DEALTIME | Order time | TIME | 6 | Time when the trade was registered by the Trading System |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Status of a negotiated trade |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell / Sell-Buy / Buy - Sell" |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| USERID | User ID | CHAR | 12 | Trader who entered the order |
| FIRMID | Firm | CHAR | 12 | Firm on which behalf the order was entered |
| CPFIRMID | Counterparty | CHAR | 12 | Firm the order is addressed to |
| ACCOUNT | Trading account | CHAR | 12 | Trading account from which the order was entered |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Rate | FLOAT | 17 | Currency exchange rate |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| VALUE | Value | FIXED | 16.2 | Order value, expressed in the currency of settlement |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading period during which the trade was registered |
| CLIENTCODE | Client code | CHAR | 12 | Short client code which was indicated when entering the trade |
| UPDATETIME | Update time | TIME | 6 | Time when the order was updated last time (matched, cancelled) |
| BALANCE | Lots left | INTEGER | 16 | Volume of unmatched part of an order, expressed in lots |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| BASEPRICE | Base price | FLOAT | 17 | Base price could be specified for SWAP negotiated deals |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| BANKID | Settlement organization | CHAR | 12 |  |
| FIXINGDATE | Fixing date | DATE | 8 | Fixing date |
| SETTLELIABILITYFLAG | Liability settlement order | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Order of liability settlement between Clearing and Trading Members |
| ORDCANCELREASON | Cancel reason | [TOrderCancelReason](#eTOrderCancelReason) | 2 | Order cancellation reason |
| CPUSERALIAS | Counterparty user alias | CHAR | 12 | Alias of the user the order is addressed to |


#### ONEORDER - Details for one order (updateable)

Table consists of one row holding information on an order having the number specified in request

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ORDERNO** | **Order number** | **INTEGER** | **12** | **Order ID in the Trading System** |
| ORDERTIME | Order time | TIME | 6 | Time when the order was registered by the Trading System |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Order status |
| MKTLIMIT | Type | [TMktLimit](#eTMktLimit) | 1 | Order type: "limit/market" |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell / Sell-Buy / Buy - Sell" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, fill or kill, withdraw remainder |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| USERID | User ID | CHAR | 12 | ID of the user who has entered the order |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the order was entered |
| ACCOUNT | Trading account | CHAR | 12 | Trading account for which the order was entered |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Rate | FLOAT | 17 | Currency exchange rate |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| HIDDEN | Hidden lots | INTEGER | 16 |  |
| BALANCE | Lots left | INTEGER | 16 | Volume of unmatched part of an order, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Order value, expressed in the currency of settlement. This value does not include the exchange commission nor the accrued interest. |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| LINKEDORDER | Amended order number | INTEGER | 12 | ID of the order that was replaced by the given order |
| ENTRYTYPE | Entry type | [TPriceEntryType](#eTPriceEntryType) | 1 | Price entry type - "at exchange rate/at WA price" |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading session period during which the order was entered |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| UPDATETIME | Update time | TIME | 6 | Time when the order was updated last time (matched, cancelled) |
| UPDATE_MICROSECONDS | Update time microseconds | INTEGER | 6 | Time when the order was updated last time (matched, cancelled), microseconds |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the order was registered at the Trading System, microseconds |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| UPDUSERID | Updater user ID | CHAR | 12 | ID of a user who changed or cancelled this order |
| VISIBLEBALANCE | Visible quantity | INTEGER | 16 | Volume of unmatched part of an iceberg-order, displayed in orderbook, expressed in lots |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| BANKID | Settlement organization | CHAR | 12 |  |
| INTORDERNO | Internal Order No | INTEGER | 12 | Internal order number in the trading system. Can be used to identify own orders in the anonymous FAST market data feed. |
| ASP | Signature | CHAR | 12 | Equivalent of a handwritten signature |
| FIXINGDATE | Fixing date | DATE | 8 | Fixing date |
| SETTLELIABILITYFLAG | Liability settlement order | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Order of liability settlement between Clearing and Trading Members |
| INITIALPRICE | Initial price | FLOAT | 17 | Price indicated by the user |
| ORDCANCELREASON | Cancel reason | [TOrderCancelReason](#eTOrderCancelReason) | 2 | Order cancellation reason |
| COMPLIANCEID | Тип ввода заявки | CHAR | 1 | Маркировка способа создания заявки |


#### ORDERCOMPLIANCEID - Справочник маркировки заявок по типу ввода (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ID** | **Тип ввода заявки** | **CHAR** | **1** | **Маркировка способа создания заявки** |
| DESCRIPTION | Description | CHAR | 128 |  |


#### ORDERS - Orders (updateable)

Table contains information on the orders sent by the trading firm during the Trading Session. Each row represents one order.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ORDERNO** | **Order number** | **INTEGER** | **12** | **Order ID in the Trading System** |
| ORDERTIME | Order time | TIME | 6 | Time when the order was registered by the Trading System |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Order status |
| MKTLIMIT | Type | [TMktLimit](#eTMktLimit) | 1 | Order type: "limit/market" |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell / Sell-Buy / Buy - Sell" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, fill or kill, withdraw remainder |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| USERID | User ID | CHAR | 12 | ID of the user who has entered the order |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the order was entered |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Rate | FLOAT | 17 | Currency exchange rate |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| HIDDEN | Hidden lots | INTEGER | 16 |  |
| BALANCE | Lots left | INTEGER | 16 | Volume of unmatched part of an order, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Order value, expressed in the currency of settlement. This value does not include the exchange commission nor the accrued interest. |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| LINKEDORDER | Amended order number | INTEGER | 12 | ID of the order that was replaced by the given order |
| ENTRYTYPE | Entry type | [TPriceEntryType](#eTPriceEntryType) | 1 | Price entry type - "at exchange rate/at WA price" |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading session period during which the order was entered |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| UPDATETIME | Update time | TIME | 6 | Time when the order was updated last time (matched, cancelled) |
| UPDATE_MICROSECONDS | Update time microseconds | INTEGER | 6 | Time when the order was updated last time (matched, cancelled), microseconds |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the order was registered at the Trading System, microseconds |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| UPDUSERID | Updater user ID | CHAR | 12 | ID of a user who changed or cancelled this order |
| VISIBLEBALANCE | Visible quantity | INTEGER | 16 | Volume of unmatched part of an iceberg-order, displayed in orderbook, expressed in lots |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| BANKID | Settlement organization | CHAR | 12 |  |
| INTORDERNO | Internal order number | INTEGER | 12 | Internal order number in the trading system. Can be used to identify own orders in the anonymous FAST market data feed. |
| ASP | Signature | CHAR | 12 | Equivalent of a handwritten signature |
| FIXINGDATE | Fixing date | DATE | 8 | Fixing date |
| SETTLELIABILITYFLAG | Liability settlement order | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Order of liability settlement between Clearing and Trading Members |
| INITIALPRICE | Initial price | FLOAT | 17 | Price indicated by the user |
| ORDCANCELREASON | Cancel reason | [TOrderCancelReason](#eTOrderCancelReason) | 2 | Order cancellation reason |
| COMPLIANCEID | Тип ввода заявки | CHAR | 1 | Маркировка способа создания заявки |


#### PRICEMOVELIMIT - Price move limits (not updateable)

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| UPPERLIMIT | Upper limit | FLOAT | 17 |  |
| LOWERLIMIT | Lower limit | FLOAT | 17 |  |


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


#### SECTRANSFERS - Orders for transfer (updateable)

The table contains orders for money or security transfers which have been entered by the firm since the beginning of the current trading session.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ORDERNO** | **Order number** | **INTEGER** | **12** | **Order ID in the Trading System** |
| ORDERTIME | Order time | TIME | 6 | Order registration time |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Current order status |
| BUYSELL | D/W | [TSecTransferBuySell](#eTSecTransferBuySell) | 1 | Order direction - "deposit to account / withdraw from account" |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| USERID | User ID | CHAR | 12 | ID of the user who has entered the order |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the order is entered |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm ID |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| MATCHREF | Matching reference | CHAR | 10 | Matching reference text |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in the currency of settlement |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| WITHDRAWTIME | Withdrawal time | TIME | 6 |  |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| BANKID | Settlement organization | CHAR | 12 |  |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| TRANINFO | Transfer details | CHAR | 210 |  |
| TRANTYPE | Transaction code | CHAR | 4 | Transaction Information |


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
| FACEVALUE | Face value | FLOAT | 17 | Face value of one Security, expressed in the currency, in which the Security is nominated |
| FACEUNIT | Currency of instrument | CHAR | 4 | Currency in which security is denominated |
| PREVPRICE | Last Close Price | FLOAT | 17 | Price of the last trade of the previous trading day |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals in the Value field |
| PREVWAPRICE | Previous WA price | FLOAT | 17 | The weighted average price of the previous trading session |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| LATNAME | English name | CHAR | 30 | Name of the security in English |
| PREVLOTSIZE | Previous lot size | INTEGER | 8 | Previous number of securities in one lot |
| LOTSIZECHANGEDATE | Date when the lot size changed | DATE | 8 |  |
| ORIGINTRADINGSTATUS | Trading status | [TTradingStatus](#eTTradingStatus) | 1 | Security trading status. During the break shows the actual status of the trading session (never changes to "Break"). |
| ASSET | Asset | CHAR | 12 |  |
| FIXINGDATE | Fixing date | DATE | 8 | Fixing date |
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
| NUMNEGDEALS | Number of negotiated trades | INTEGER | 9 | Number of negotiated deals during the trading day |
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


#### SEC_SETTLECODE_STATS - Negdeal orderbook (updateable)

Orderbook for negotiated deals.
Two request formats are available:
1. specify Trading board ID only (BOARDID) to get orderbook for all instruments traded on that board;
2. specify both Trading board and Security ID (SECBOARD+SECCODE) to get orderbook for a particular security traded on the specified board.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **SETTLECODE** | **Settlement code** | **CHAR** | **12** | **Settlement code for the trade** |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| BID | Bid | FLOAT | 17 | Best bid price |
| OFFER | Offer | FLOAT | 17 | Best offer price |
| BIDDEPTH | Best bid depth | INTEGER | 16 | Total unmatched volume of all active buy orders at the current best bid price, expressed in number of securities |
| OFFERDEPTH | Best offer depth | INTEGER | 16 | Volume of all sell orders at the best price, expressed in lots |
| BIDDEPTHT | Total bid depth | INTEGER | 16 | Total unmatched volume of all active buy orders, expressed in lots |
| OFFERDEPTHT | Total offer depth | INTEGER | 16 | Total unmatched volume of all active sell orders (expressed in lots) |
| NUMBIDS | Buy orders | INTEGER | 6 | Number of buy orders in the queue of the Trading System |
| NUMOFFERS | Sell orders | INTEGER | 6 | Number of sell orders in the queue of the Trading System |


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


#### STOPLIST - Firm stop list (updateable)

The table contains information about clients under sanctions

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **DETAILS** | **Details** | **CHAR** | **20** | **Client taxpayer number or passport number or other document** |
| **SUBDETAILS** | **Subdetails** | **CHAR** | **20** | **Client taxpayer number or passport number or other document** |


#### TESYSTIME - Trading System time (updateable, clear on update)

Table consists of one row with Trading System current date and time. This information is usually used to synchronize client time with the server time.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TIME | Time | TIME | 6 | Time on the trading/clearing system server |
| DATE | Date | DATE | 8 | Date on the trading/clearing system server |
| TOMORROWDATE | Tomorrow date | DATE | 8 |  |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time on the trading/clearing system server, microseconds |


#### TRADES - Trades (updateable)

Table contains information on all trades registered in the Trading System for a trading firm since the beginning of the current trading session. Each Trade is represented by one row.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRADENO** | **Trade number** | **INTEGER** | **12** | **Trade number in the Trading System** |
| ORDERNO | Order number | INTEGER | 12 | Number of order from which the trade originates |
| TRADETIME | Time | TIME | 6 | Time when the trade was registered by the Trading System |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell / Sell-Buy / Buy - Sell"** |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| USERID | User ID | CHAR | 12 | ID of the user who concluded the trade |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the trade is registered |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Rate | FLOAT | 17 | Currency exchange rate |
| QUANTITY | Lots | INTEGER | 16 | Trade volume, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in the currency of settlement |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Period of the trading session when the trade was concluded |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| TRADETYPE | Type | [TTradeType](#eTTradeType) | 1 | Trade type |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| COMMISSION | Total commission | FIXED | 16.2 | Trade commission, rub. |
| REPORATE | Rate, % | FLOAT | 17 |  |
| CLEARINGCENTERCOMM | Clearing commission | FIXED | 16.2 | Clearing commission, rub. |
| EXCHANGECOMM | Exchange commission | FIXED | 16.2 | Exchange commission, rub. |
| TRADINGSYSTEMCOMM | Technical access commission | FIXED | 16.2 | Technical access commission, rub. |
| CLIENTCODE | Client code | CHAR | 12 | Client code specified by the trader when entering an order |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the trade was registered by the Trading System, microseconds |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| BASEPRICE | Base price | FLOAT | 17 | Base price could be specified for SWAP negotiated deals |
| PARENTTRADENO | Parent trade | INTEGER | 12 | Parent trade number for SWAP trades |
| HIDDENQTYORDER | Trade by iceberg-order | [TYesNo](#eTYesNo) | 1 | Set to 'Y' if trade originates from an iceberg order |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| SYSTEMREF | System reference | CHAR | 12 | Additional data transferred by the trading system |
| BANKID | Settlement organization | CHAR | 12 |  |
| TRADEDATE | Trade date | DATE | 8 |  |
| CLEARINGFIRMID | Clearing firm | CHAR | 12 | Firm ID of clearing member |
| CLEARINGBANKACCID | Clearing bank account | CHAR | 12 | Clearing account ID in the settlement house |
| MAKERFLAG | Active/Passive | [TMakerTaker](#eTMakerTaker) | 1 |  |
| CPORDERNO | Counterparty order number | INTEGER | 12 | Counterparty order number for this trade. Only applicable to negotiated deals. |
| TRANINFO | Transfer details | CHAR | 210 |  |
| SETTLELIABILITYFLAG | Liability settlement trade | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Trade of liability settlement between Clearing and Trading Members |
| STATUS | Status | [TTradeStatus](#eTTradeStatus) | 1 | Trade status |
| TRANTYPE | Transaction code | CHAR | 4 | Transaction Information |
| FIXINGDATE | Fixing date | DATE | 8 | Fixing date |
| CLEARINGTRDACCID | Clearing account | CHAR | 12 | Clearing account number |


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


#### TRADINGSTATUS - Состояния торговой сессии по инструменту (updateable)

Логирование состояний торговой сессии в разбивке по инструментам

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| TIME | Time | TIME | 6 |  |
| TRADINGSTATUS | Trading status | [TTradingStatus](#eTTradingStatus) | 1 | Security trading status |
| EVENTTYPE | Event | CHAR | 2 | Event type. For list of all types see the TRDTIMETYPES table. |
| TRADINGSESSION | Trading session | CHAR | 1 |  |


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
| TRDACCTYPE | Trading account type | CHAR | 1 | Trading account type |
| CLEARINGTRDACCID | Clearing account | CHAR | 12 | Clearing account number |
| CLEARINGFIRMID | Clearing firm | CHAR | 12 | Firm ID of clearing member |


#### TRDACCTYPES - Types of trading/clearing accounts (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRDACCTYPE** | **Trading account type** | **CHAR** | **1** | **Trading account type** |
| NAME | Name | CHAR | 30 | Type name |
| LATNAME | English name | CHAR | 30 | Type name in English |
| OWN | Own account (Yes/No) | [TYesNo](#eTYesNo) | 1 |  |
| CLIENT | Client account (Yes/No) | [TYesNo](#eTYesNo) | 1 |  |
| TRUST | Trust management (Yes/No) | [TYesNo](#eTYesNo) | 1 |  |
| ISSUING | Issuing account (Yes/No) | [TYesNo](#eTYesNo) | 1 |  |
| TREASURY | Treasury account (Yes/No) | [TYesNo](#eTYesNo) | 1 |  |
| DESCRIPTION | Description | CHAR | 128 | Type description |
| LATDESCRIPTION | English description | CHAR | 128 | Type description in English |


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


#### USERGROUPS - User groups (updateable)

Table contains information about groups of users

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| USERGROUP | Group | CHAR | 12 | Group ID the user belongs to |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **USERGROUP** | **Group** | **CHAR** | **12** | **Group ID the user belongs to** |
| RESTRICTIONON | Restrictions | [TYesNo](#eTYesNo) | 1 | Status of restrictions set for the group |
| SECUNIQACCESSTYPE | Type of access by security code | [TUAccessListType](#eTUAccessListType) | 1 | Type of access list used to set restrictions by security ID |
| BOARDACCESSTYPE | Type of access by board ID | [TUAccessListType](#eTUAccessListType) | 1 | Type of access list used to set restrictions by board ID |
| SECACCESSTYPE | Type of access by security and board | [TUAccessListType](#eTUAccessListType) | 1 | Type of access list used to set restrictions by security and board |
| TRATELIMIT | Rate Limit | INTEGER | 6 | Transaction rate limit for specified time interval |


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
| CODMODESUBSCR | COD-Mode Subscr. | [TCodMode](#eTCodMode) | 1 | Type of Cancel on Disconnect mode subscription (COD-mode). COD-mode - cancel active orders on disconnect or logoff from Trading System. Available types are "Not used", "Always" and "On Demand". |
| CODMODE | COD-mode | [TOnOff](#eTOnOff) | 1 | Status of Cancel on Disconnect mode. |
| MASTERUSER1 | Master User ID 1 | CHAR | 12 | First Master User ID for Sponsored Market Access |
| MASTERUSER2 | Master User ID2 | CHAR | 12 | Second Master User ID for Sponsored Market Access |
| CODMODE_DC | CODCD mode | [TOnOff](#eTOnOff) | 1 | Status of Cancel on Drop-Copy Disconnect mode. |
| MASTERUSERFLAG | Master | [TYesNo](#eTYesNo) | 1 | This user is the SMA Master User |
| RESTRICTIONON | Restrictions | [TYesNo](#eTYesNo) | 1 | Status of restrictions set for the user |
| SECUNIQACCESSTYPE | Type of access by security code | [TUAccessListType](#eTUAccessListType) | 1 | Type of access list used to set restrictions by security ID |
| BOARDACCESSTYPE | Type of access by board ID | [TUAccessListType](#eTUAccessListType) | 1 | Type of access list used to set restrictions by board ID |
| SECACCESSTYPE | Type of access by security and board | [TUAccessListType](#eTUAccessListType) | 1 | Type of access list used to set restrictions by security and board |
| TRATELIMIT | Rate limit | INTEGER | 6 | Transaction rate limit for specified time interval |
| USERALIAS | User alias | CHAR | 12 |  |
| PWDCNG_ON_LOGON | Change password on next logon | [TYesNo](#eTYesNo) | 1 |  |
| IPGATEWAY | Gateway | CHAR | 20 |  |
| IPCLIENT | Workstation | CHAR | 20 |  |
| LOGGEDON | Active | [TBoolInt](#eTBoolInt) | 1 | Flag indicating whether the user is currently logged-on |
| EXTIPCLIENT | External ip address | CHAR | 20 |  |
| MSGSETNO | Message set | INTEGER | 4 | Message set version |


#### USER_CLIENT - Links of client codes to users (updateable)

Client codes available to users

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **USERID** | **User ID** | **CHAR** | **12** |  |
| **CLIENTCODE** | **Client code** | **CHAR** | **12** | **Client code assigned by the broker** |
| USERLIMITSTATUS | Status | [TUserLimitStatus](#eTUserLimitStatus) | 1 | Client code to a user link status |


#### USER_TRDACC - Trader-account (not updateable)

List of links of user accounts to trading accounts

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| **USERID** | **User ID** | **CHAR** | **12** |  |
| **TRDACCID** | **Trading account** | **CHAR** | **12** | **Trading account number** |


#### U_BOARD_BLACK_LIST - Black list for boards (updateable)

List of prohibited trading boards

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SMALIMITSOWNERTYPE** | **SMA limits owner type** | [**TSMALimitsOwnerType**](#eTSMALimitsOwnerType) | **1** |  |
| **USERID** | **User ID / Group ID** | **CHAR** | **12** | **User ID or group ID** |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |


#### U_BOARD_WHITE_LIST - White list for boards (updateable)

List of allowed trading boards

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SMALIMITSOWNERTYPE** | **SMA limits owner type** | [**TSMALimitsOwnerType**](#eTSMALimitsOwnerType) | **1** |  |
| **USERID** | **User ID / Group ID** | **CHAR** | **12** | **User ID or group ID** |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |


#### U_HOLD_LIMITS - User holding limits (updateable)

Set of user holding limits on maximum and/or net daily buy and sell position

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SMALIMITSOWNERTYPE** | **SMA limits owner type** | [**TSMALimitsOwnerType**](#eTSMALimitsOwnerType) | **1** |  |
| **USERID** | **User ID / Group ID** | **CHAR** | **12** | **User ID or group ID** |
| **TRDACCID** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| PLANNEDLIMITBUY | Buy Limit | INTEGER | 16 | Max planned position in securities for buy side (long position) |
| PLANNEDLIMITSELL | Sell Limit | INTEGER | 16 | Max planned position in securities for sell side (short position) |
| PLANNEDBUY | Planned Buy | INTEGER | 16 | Current planned position in securities for buy side (long position) |
| PLANNEDSELL | Planned Sell | INTEGER | 16 | Current planned position in securities for sell side (short position) |
| PLANNEDNETTOLIMITBUY | Buy Limit (net) | INTEGER | 16 | Max planned net-position in securities for buy side (long position) |
| PLANNEDNETTOLIMITSELL | Sell Limit (net) | INTEGER | 16 | Max planned net-position in securities for sell side (short position) |
| PLANNEDNETTOBUY | Planned Buy (net) | INTEGER | 16 | Current planned net-position in securities for buy side (long position) |
| PLANNEDNETTOSELL | Planned Sell (net) | INTEGER | 16 | Current planned net-position in securities for sell side (short position) |
| USERLIMITSTATUS | Status | [TUserLimitStatus](#eTUserLimitStatus) | 1 | User limit status |


#### U_ORDER_LIMITS - Order limits (updateable)

Set of user order limits

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SMALIMITSOWNERTYPE** | **SMA limits owner type** | [**TSMALimitsOwnerType**](#eTSMALimitsOwnerType) | **1** |  |
| **USERID** | **User ID / Group ID** | **CHAR** | **12** | **User ID or group ID** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| PRICEBOUNDUP | Price limit up | FIXED | 9.2 | Upper price limit for one security for orders (in percent from current price) |
| PRICEBOUNDDOWN | Price limit down | FIXED | 9.2 | Lower price limit for one security for orders (in percent from current price) |
| MAXQTY | Max order quantity | INTEGER | 16 | Max order quantity |
| MAXORDERVAL | Max order value | FIXED | 16.2 | Max order value, expressed in the currency of settlement |
| MAXMKTQTY | Max market order quantity | INTEGER | 16 | Max market order quantity |
| MAXMKTORDERVAL | Max market order value | FIXED | 16.2 | Max market order value, expressed in the currency of settlement |
| MAXORDVALTODAY | Max Orders value today | FIXED | 16.2 | Maximum sum of orders value, expressed in the currency of settlement |
| CURORDVALTODAY | Current orders value | FIXED | 16.2 | Current sum of orders value, expressed in the currency of settlement |
| USERLIMITSTATUS | Status | [TUserLimitStatus](#eTUserLimitStatus) | 1 | User limit status |


#### U_POSN_LIMITS - User position limits (updateable)

Set of user limits on maximum and/or net daily buy and sell position

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SMALIMITSOWNERTYPE** | **SMA limits owner type** | [**TSMALimitsOwnerType**](#eTSMALimitsOwnerType) | **1** |  |
| **USERID** | **User ID / Group ID** | **CHAR** | **12** | **User ID or group ID** |
| **TRDACCID** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| PLANNEDLIMITBUY | Buy Limit | FIXED | 16.2 | Max position value for buy orders, expressed in the currency of settlement |
| PLANNEDLIMITSELL | Sell Limit | FIXED | 16.2 | Max position value for sell orders, expressed in the currency of settlement |
| PLANNEDBUY | Planned Buy | FIXED | 16.2 | Current position value for buy orders, expressed in the currency of settlement |
| PLANNEDSELL | Planned Sell | FIXED | 16.2 | Current position value for sell orders, expressed in the currency of settlement |
| PLANNEDNETTOLIMITBUY | Buy Limit (net) | FIXED | 16.2 | Max net-position value for buy orders, expressed in the currency of settlement |
| PLANNEDNETTOLIMITSELL | Sell Limit (net) | FIXED | 16.2 | Max net-position value for sell orders, expressed in the currency of settlement |
| PLANNEDNETTOBUY | Planned Buy (net) | FIXED | 16.2 | Current net-position value for buy orders, expressed in the currency of settlement |
| PLANNEDNETTOSELL | Planned Sell (net) | FIXED | 16.2 | Current net-position value for sell orders, expressed in the currency of settlement |
| USERLIMITSTATUS | Status | [TUserLimitStatus](#eTUserLimitStatus) | 1 | User limit status |


#### U_SECUNIQ_BLACK_LIST - Black list for instruments (seccode) (updateable)

List of prohibited instruments, by security ID

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SMALIMITSOWNERTYPE** | **SMA limits owner type** | [**TSMALimitsOwnerType**](#eTSMALimitsOwnerType) | **1** |  |
| **USERID** | **User ID / Group ID** | **CHAR** | **12** | **User ID or group ID** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |


#### U_SECUNIQ_WHITE_LIST - White list for instruments (seccode) (updateable)

List of allowed instruments, by security ID

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SMALIMITSOWNERTYPE** | **SMA limits owner type** | [**TSMALimitsOwnerType**](#eTSMALimitsOwnerType) | **1** |  |
| **USERID** | **User ID / Group ID** | **CHAR** | **12** | **User ID or group ID** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |


#### U_SEC_BLACK_LIST - Users security on boards black access list (updateable)

Users security on boards black access list

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SMALIMITSOWNERTYPE** | **SMA limits owner type** | [**TSMALimitsOwnerType**](#eTSMALimitsOwnerType) | **1** |  |
| **USERID** | **User ID / Group ID** | **CHAR** | **12** | **User ID or group ID** |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |


#### U_SEC_WHITE_LIST - Users security on boards white access list (updateable)

Users security on boards white access list

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| **SMALIMITSOWNERTYPE** | **SMA limits owner type** | [**TSMALimitsOwnerType**](#eTSMALimitsOwnerType) | **1** |  |
| **USERID** | **User ID / Group ID** | **CHAR** | **12** | **User ID or group ID** |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |


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


#### CHECK_SINGLE_LIMIT - Check Single Limit

Check Single Limit for a bank account. Cancel all orders if the Single Limit is negative.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |


#### CODMODE_SWITCH - Cancel on Disconnect on|off

Switch on|off Cancel on Disconnect mode

No input fields  


#### COMPLEX_NEGDEAL - Enter negotiated deal order without confirmation

Make transfers between two own clients of the firm or between the firm and one of its clients

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction: B - buy S - sell for SWAP orders: B - sell/buy S - buy/sell |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Own firm is specified |
| PRICE | Rate | FLOAT | 17 | Currency exchange rate |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| CPACCOUNT | Counterparty's trading account | CHAR | 12 | Counterparty's trading account |
| CPBROKERREF | Counterparty's broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| CPCLIENTCODE | ID of a counterparty's client | CHAR | 12 | ID of a counterparty's client, assigned by the counterparty |


#### COMPLEX_TRANSFER - Enter money transfer order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Position | CHAR | 12 | Trading account number |
| BUYSELL | D/W | [TSecTransferBuySell](#eTSecTransferBuySell) | 1 | Transfer direction: withdraw from a counterparty account or deposit to it |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm ID |
| VALUE | Value | FIXED | 16.2 | Value, expressed in the currency of settlement |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| CPACCOUNT | Counterparty position | CHAR | 12 | Counterparty trading account |
| CPBROKERREF | Counterparty's broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| CPCLIENTCODE | ID of a counterparty's client | CHAR | 12 | ID of a counterparty's client, assigned by the counterparty |
| TRANSFERTYPE | Transfer type | [TTransferType](#eTTransferType) | 1 |  |


#### FORCE_USER_CHANGE_PASSWORD - Force user to change password on next logon

Force user to change password on next logon

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| USERID | User ID | CHAR | 12 |  |


#### MESSAGE_SEND - Send message

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| USERIDTO | To user | CHAR | 12 |  |
| FIRMIDTO | To firm | CHAR | 12 | Firm ID |
| URGENCY | Importance | [TUrgency](#eTUrgency) | 1 | Message urgency or importance |
| MESSAGE | Text | CHAR | 256 |  |


#### NEGDEAL - Enter negotiated deal order / OTC negotiated deal

Enter negotiated deal order / OTC negotiated deal

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell / Sell-Buy / Buy - Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | ID of the firm the order is addressed to |
| PRICE | Rate | FLOAT | 17 | Currency exchange rate |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| ACCEPTEDORDERNO | To order no | INTEGER | 12 | Number of the counterparty negotiated deal order begin accepts (if the order is send in reply to the quote), otherwise fill with spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| BASEPRICE | Base price | FLOAT | 17 | Base price for the instrument |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| CPUSERALIAS | Counterparty user alias | CHAR | 12 | Alias of the user the order is addressed to |


#### ORDER - Enter order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell / Sell-Buy / Buy - Sell" |
| MKTLIMIT | Type | [TMktLimit](#eTMktLimit) | 1 | Order type: "limit/market" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, fill or kill, withdraw remainder |
| COMPLIANCEID | Тип ввода заявки | CHAR | 1 | Маркировка способа создания заявки |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Rate | FLOAT | 17 | Price for one security. For market orders must be set to 0. |
| QUANTITY | Lots | INTEGER, NOT NULL | 16 | Volume, expressed in lots |
| HIDDEN | Lots hidden | INTEGER | 16 |  |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |


#### ORDER_AMEND - Amend order

Change parameters of an active order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell / Sell-Buy / Buy - Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| PRICE | Rate | FLOAT | 17 | Currency exchange rate |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CANCELORIGONREJECT | Withdraw the original order | [TYesNo](#eTYesNo) | 1 | Conditional or unconditional withdrawal of the original order. 'Y' - withdraw the old order, even if the new order will be rejected. 'N' - withdraw the old order only if the new order is successfully accepted by the system. |
| COMPLIANCEID | Тип ввода заявки | CHAR | 1 | Маркировка способа создания заявки |


#### SET_USER_PASSWORD - Change user password

Transaction for firm administrators to change passwords of other firm users

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| USERID | User ID | CHAR | 12 |  |
| NEWPW | New password | CHAR | 10 |  |


#### SET_U_HOLD_LIMIT - User holding limits

Set user limits on holdings

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PLANNEDLIMITBUY | Buy Limit | INTEGER | 16 | Max buy planned position in securities (long position) |
| PLANNEDLIMITSELL | Sell Limit | INTEGER | 16 | Max sell planned position in securities (short position) |
| PLANNEDNETTOLIMITBUY | Buy Limit (net) | INTEGER | 16 | Max buy planned net position in securities (long position) |
| PLANNEDNETTOLIMITSELL | Sell Limit (net) | INTEGER | 16 | Max sell planned net position in securities (short position) |
| USERLIMITSTATUS | Status | [TUserLimitStatus](#eTUserLimitStatus) | 1 | User limit status |


#### SET_U_LIMIT_PARAMS - Basic user limits

Set or update basic user limits

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |
| TRATELIMIT | Rate Limit | INTEGER | 6 | Transaction rate limit for specified time interval |
| RESTRICTIONON | Yes/No | [TYesNo](#eTYesNo) | 1 | Switch on/off limits specified for a user |


#### SET_U_ORDER_LIMIT - Order limits

Set user limits for orders

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICEBOUNDUP | Price deviation up | FIXED | 9.2 | Price deviation from the current price (in percent) |
| PRICEBOUNDDOWN | Price deviation down | FIXED | 9.2 | Price deviation down from the current price (in percent) |
| MAXQTY | Max order quantity | INTEGER | 16 | Max order quantity |
| MAXORDERVAL | Max order value | FIXED | 16.2 | Max order value, expressed in the currency of settlement |
| MAXMKTQTY | Max market order quantity | INTEGER | 16 | Max market order quantity |
| MAXMKTORDERVAL | Max market order value | FIXED | 16.2 | Max market order value, expressed in the currency of settlement |
| MAXORDVALTODAY | Max Orders value today | FIXED | 16.2 | Maximum sum of orders value, expressed in the currency of settlement |
| USERLIMITSTATUS | Status | [TUserLimitStatus](#eTUserLimitStatus) | 1 | User limit status |


#### SET_U_POSN_LIMIT - User position limits

Set user limits on positions

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| PLANNEDLIMITBUY | Buy Limit | FIXED | 16.2 | Max buy position value, expressed in the currency of settlement |
| PLANNEDLIMITSELL | Sell Limit | FIXED | 16.2 | Max sell position value, expressed in the currency of settlement |
| PLANNEDNETTOLIMITBUY | Buy Limit (net) | FIXED | 16.2 | Max buy net position value, expressed in the currency of settlement |
| PLANNEDNETTOLIMITSELL | Sell Limit (net) | FIXED | 16.2 | Max sell net position value, expressed in the currency of settlement |
| USERLIMITSTATUS | Status | [TUserLimitStatus](#eTUserLimitStatus) | 1 | User limit status |


#### USER_HEARTBEAT - HEARTBEAT

User heartbeat. Minimum interval - 1 second.

No input fields  


#### USER_LOGOFF - Logoff user

Transaction for firm administrators to force logoff of other firm users

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| USERID | User ID | CHAR | 12 |  |


#### USER_TRADE_SUSP - Suspend user's trading operations

The transaction is used to control own firm's user access to trading operations.
Transaction is available to firm manager only.
If trading is not allowed, user can not enter or withdraw orders, but still can get trading data from the system.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| USERID | User ID | CHAR | 12 |  |
| WITHDRAW | With order withdrawal | [TYesNo](#eTYesNo) | 1 |  |


#### USER_TRADE_UNSUSP - Unsuspend user's trading operations

The transaction is used to control own firm's user access to trading operations.
Transaction is available to firm manager only.
If trading is not allowed, user can not enter or withdraw orders, but still can get trading data from the system.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| USERID | User ID | CHAR | 12 |  |


#### WD_NEGDEAL - Withdraw negotiated deal orders

Withdraw one or more active (not yet accepted) negotiated deals. When several parameters are given then the logical AND operator is used.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| DEALNO | Order number | INTEGER | 12 | Order ID or a string with blanks |
| USERID | User ID | CHAR | 12 | User ID or a string with blanks |
| FIRMID | Firm | CHAR | 12 | Firm ID or a string with blanks |


#### WD_ORDERS - Withdraw orders

Withdraw active (not completely matched) orders. When several parameters are given then the logical AND operator is used.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TWBuySell](#eTWBuySell) | 1 | Withdraw orders of given direction or both sell & buy orders if space is given |
| ACCOUNT | Trading account | CHAR | 12 | Withdraw orders by a trading account |
| SECBOARD | Board | CHAR | 4 | Security board ID. Must be specified together with Security ID. |
| SECCODE[*](#refs) | Security | CHAR | 12 | Withdraw orders by Security ID |
| TRADERID | Trader | CHAR | 12 | Withdraw orders by User ID |
| FIRMID | Firm | CHAR | 12 | Withdraw orders by Firm ID |
| EXTREF | External user ID | CHAR | 12 | ID of an external user who submitted an order, or spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |


#### WD_ORDER_BY_NUMBER - Withdraw order by number

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |


Key fields are marked in **bold**.  
Fields that contain security code are marked with asterisk (*).  
Repeated field groups are marked with plus sign (+).

---
The document is created with ASTSExplorer.exe 30.01.2024 14:29:34
