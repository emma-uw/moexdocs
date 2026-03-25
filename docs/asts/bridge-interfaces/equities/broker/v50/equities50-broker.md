---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Equities50 — Bonds and Equities market interface, v.50
sidebar_label: Equities50 — Bonds and Equities market interface, v.50
---

## Information objects of market 'Equities50' - 'Bonds and Equities market interface, v.50'

---


### Enumerated Types

#### TAcceptDecline - Confirmation (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | Accept | Accept |
| D | Decline | Decline |


#### TActiveStatus - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| A | Active | Active |
| D | Deleted | Deleted |


#### TAuctStatus - Status (size: 1, type: ekGroup)

Status

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Active |
| N |  | Not active |
| H |  | Hidden |
| E |  | Undefined |
| C |  | Canceled |


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


#### TClearingType - Clearing type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Not identified (no settlement instruction has been sent yet) |
| S | S | Simple (quick) |
| M | М | Multilateral |
| E | E | External |
| C | C | Central |


#### TCodMode - COD-Mode Subscription (size: 1, type: ekGroup)

Type of Cancel on Disconnect mode subscription (COD-mode). COD-mode - cancel active orders on disconnect or logoff from Trading System. Available types are "Not used", "Always" and "On Demand".

| Constant | Value | Description |
| --- | --- | --- |
| N | Not used | COD functionality is not available |
| A | Always | COD-mode is always on |
| O | On demand | COD-mode can be activated on demand |
| W | Technical mode 1 | COD-mode is always on, logoff inactive user |
| C | Technical mode 2 | COD-mode is always on, logoff inactive user without order withdrawal |


#### TCompensation - Compensation direction (size: 1, type: ekGroup)

| Constant | Value | Description |
| --- | --- | --- |
| B | Pay | Pay compensation |
| S | Get | Get compensation |


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


#### TDPValIndicator - Order availability flag (size: 1, type: ekCombo)

Flag that shows the availability of buy or sell orders on the dark pool auction

| Constant | Value | Description |
| --- | --- | --- |
|  | - | No orders |
| S | Small | The total value of orders is less than N*minimum order value |
| M | Much | The total value of orders is greater than N*minimum order value |
| Y | Yes | There are orders |


#### TEarlySettle - Settlement status flag (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| Y | Settled | Settled |
| N |  | Not settled |
| P | In process | In process of settlement |


#### TExtIntType - Liquidity type (size: 1, type: ekCombo)

Order liqudity type - Internal liqudity or External Quote

| Constant | Value | Description |
| --- | --- | --- |
| E | E | External quote |
| I | I | Internal liquidity only |
|  |  |  |


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


#### TImmCancel - Order processing condition (size: 1, type: ekGroup)

List of available conditions of order processing:

"Append to the orderbook" - after matching the remainder of the limit order is appended to the aggregate orderbook (the priority of the order in the orderbook is determined by price and then, for the orders with equal prices - by the entry time), for market orders with this option the unmatched remainder is automatically withdrawn;

"Immediately or cancel" - the order is matched only if it could be fully matched immediately, otherwise the order is canceled.
A book or cancel order (BOC order) is one that is entered in the order book if it cannot be executed immediately. If a book or cancel order can be executed immediately, the order is rejected. BOC orders in the order book are deleted at the start of an auction. During the auction, incoming BOC orders are rejected

"Withdraw unmatched remainder" - the order is matched as best it immediately could, the unmatched remainder is canceled (applicable to limit orders only)

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Append to the orderbook |
| N | N | Immediately or cancel |
| W | W | Withdraw unmatched remainder |
| B | B | A book or cancel order |


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


#### TMMOrder - Order target flag (size: 1, type: ekCombo)

Order target flag (applies to limit orders only)

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Default |
| M | M | Market-maker order |
| S | S | Stabilization order |


#### TMMQuoteType - Market-maker's obligations to support liquidity (size: 1, type: ekCombo)

List of available types of market-maker's obligations to support liquidity of a security

| Constant | Value | Description |
| --- | --- | --- |
| N |  | No obligations |
| A | A | Obligation to support liquidity on both buy- and sell- directions |
| B | B | Obligation to support liquidity on only one (either buy or sell) direction |
|  |  | Not applicable |


#### TNegdealEntry - Negotiated deal entry method (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| Q | By qty | Quantity (and price) |
| V | By amount | Amount of money |
|  |  | Not defined |


#### TOnOff - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| N | Off | Off |
| Y | On | On |


#### TOpenRepoStatus - Open REPO status of a trade (size: 1, type: ekCombo)

List of possible REPO with open date statuses of a trade

| Constant | Value | Description |
| --- | --- | --- |
| Y | Yes | REPO trade with open date |
|  | No | Not a REPO trade with open date |
| S | Finalized | Finalized REPO trade with open date |


#### TOperationType - Direction of a Transfer transaction (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| K | D | Deposit |
| D | W | Withdraw |


#### TOrderActivationType - Order activation event type (size: 1, type: ekGroup)

The type of event for order activation

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Regular order |
| T | TA | Order with activation time |
| C | CA | Order to Close Auction |


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
| T | Time | Order activation time hasn't come yet |
| D | -D | Cancelled by Trading System on user's disconnect (COD) |
| E | Event | Waitng for an event to start |
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
| L | CA | Closing auction |
| D | DP | Dark pool |
| I | DA | Discrete auction |
| E | PCA | Close Auction Price Trading |
|  | - | Undefined |
| K |  | Money market auctions |


#### TPriceEntryType - Price type (size: 1, type: ekGroup)

Available types of price to be indicated during order submission

| Constant | Value | Description |
| --- | --- | --- |
| P |  | "Conventional" price |
| Y | Y | Yield as price |
| W | W | Weighted-average price as price |


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


#### TRepoFlag - REPO order flag (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
|  |  | Normal order |
| R | REPO | REPO order |


#### TReportKind - Type of settlement instruction (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| 1 | Norm. | Normal instruction |
| N | Spec. | Special instruction (i.e. instruction for settlement of several trades) |
| S | Quick | Instruction for quick settlement ("simple clearing") |


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
| E | Early | Settlement instruction ID for early settlement |
| O | Closed | Settle instruction for REPO trade with Open Date |


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


#### TSettled - Settlement status flag (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| S | Settled | Settled |
| U |  | Not settled |
| P | In process | In process of settlement |


#### TSMALimitsOwnerType - SMA limits owner type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| U |  | User |
| G |  | Group |


#### TSplitFlag - Price split flag (size: 1, type: ekGroup)

List of possible values of the price split flag. Note: for market orders only the "Split allowed" ("S") value is applicable.

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


#### TTradingRestriction - (size: 1, type: ekCombo)

Possibility of making transactions with residents/non-residents

| Constant | Value | Description |
| --- | --- | --- |
| 0 |  | the possibility of performing operations (transactions) with residents has not been determined |
| 1 | 1 | Operations (transactions) are allowed only with unfriendly non-residents |
| 2 | 2 | Operations (transactions) are allowed only with residents |


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
| H | CCPR1 | First part of deal for REPO with CCP |
| h | CR2 | Second part of deal for REPO with CCP |
| J | NCR1 | REPO with CCP first leg |
| j | NCR2 | REPO with CCP second leg |
| L | RP | Refund payments |
| F | T | Money/Securities transfer |


#### TValueEntryType - Order value entry method (size: 1, type: ekGroup)

Available methods of specifying order value when entering order

| Constant | Value | Description |
| --- | --- | --- |
| Q | Q | By quantity |
| V | V | By value |


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


## Interface 'Broker' - 'Interface for brokerage systems, v.50'

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
| FLOATINGRATE | Floating rate | [TFloatingRate](#eTFloatingRate) | 1 | Floating or fixed REPO rate flag |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |


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
| MATDATE | Maturity date | DATE | 8 |  |
| STATUS | Auction status | [TAuctStatus](#eTAuctStatus) | 1 | Auction status |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Направленность аукциона - "купля/продажа" |
| UNDERWRITER | Firm | CHAR | 12 | Firm ID |
| LOW | Minimum | FLOAT | 17 | Цена аукциона минимальная |
| HIGH | Maximum | FLOAT | 17 | Цена аукциона максимальная |
| WAPRICE | Средневзвешенная | FLOAT | 17 | Цена аукциона средвзвешенная |


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


#### BCMESSAGES - Messages (updateable)

Table contains information on all messages received by the firm since the Trading Session start

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| URGENCY | Importance | [TUrgency](#eTUrgency) | 1 | Message urgency or importance |
| FROMUSER | From | CHAR | 12 | User ID of the message sender |
| MSGTIME | Time | CHAR | 8 | Time when the message was dispatched |
| MSGTEXT | Text | CHAR | 256 | Text of the message |


#### BENCHMARKS - Benchmarks (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **BENCHMARK** | **Benchmark** | **CHAR** | **12** | **Benchmark identifier** |
| DESCRIPTION | Benchmark name | CHAR | 128 |  |
| VALUE | Benchmark value, % | FLOAT | 10 |  |
| ASSET | Asset | CHAR | 12 |  |
| STARTDATE | Date when the benchmark started | DATE | 8 |  |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| NEXTVALUE | Next day benchmark value, % | FLOAT | 10 |  |


#### BOARDS - Trading boards (updateable)

Table contains information on trading boards. The term "Trading Board", as we use it, means a set of trading rules, including the trading methods used (i.e. order-driven market, quote-driven market, call-auction-type trading etc.), order types allowed, trading schedule applied, settlement rules and procedures applied etc

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **BOARDID** | **Trading board ID** | **CHAR** | **4** | **Trading board ID** |
| BOARDNAME | Board | CHAR | 30 | Trading board name |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "trading/clearing operations allowed/not allowed" |
| CURRCODE | Currency | CHAR | 4 | Currency code |
| MARKETID | Market | CHAR | 4 | Market ID this board belongs to |
| LATNAME | English name | CHAR | 30 | Board name in English |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark id |


#### CLIENTCODES - Brokers' clients (updateable)

Table contains information on clients of a broker firm that are registered in the Trading System

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CLIENTCODE** | **Client code** | **CHAR** | **12** | **Client code assigned by the broker** |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| DETAILS | Details | CHAR | 20 | Client taxpayer number or passport number or other document |
| CLIENTTYPE | Type | CHAR | 2 | Form of client identification |
| SUBDETAILS | Subdetails | CHAR | 20 | Client's client taxpayer number or passport number or other document |
| QINVESTOR | Qualified Investor | [TYesNo](#eTYesNo) | 1 | Qualified Investor |
| STATUS | Status | [TUserLimitStatus](#eTUserLimitStatus) | 1 | ClientCode Status |
| CROSSTRADING | Cross trading | [TCrossTrading](#eTCrossTrading) | 1 |  |
| CLEARINGFIRMID | Clearing firm | CHAR | 12 | Firm ID of clearing member |
| BLOCKCLIENTTE | Trading blocked | [TYesNo](#eTYesNo) | 1 | Flag that indicates if trading access is blocked |
| TRADINGRESTRICTION | Residents/Non-residents permission | [TTradingRestriction](#eTTradingRestriction) | 1 | Possibility of making transactions with residents/non-residents |


#### CLIENTCODETYPE - Client code types (not updateable)

Directory of client code types

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ID** | **Client type** | **CHAR** | **2** | **Form of client identification** |
| DESCRIPTION | Description | CHAR | 128 |  |


#### COMPLEXPRODUCTTYPES - Complex financial product (not updateable)

Directory of types of complex financial products

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ID** | **Complex financial product** | **INTEGER** | **10** | **Complex financial product type** |
| DESCRIPTION | Description | CHAR | 255 |  |


#### CURRENCY - Currencies (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CURRCODE** | **Currency** | **CHAR** | **4** | **Currency code** |
| CURRENCYNAME | Name | CHAR | 30 |  |
| CROSSRATE | Exchange rate | FLOAT | 17 | Exchange rate of the currency to rub., expressed in rub. with float point |
| ASSET | Asset | CHAR | 12 |  |


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
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| SCHEMANAME | Scheme | CHAR | 20 | Name of the market-making scheme |
| AGREEMENT | Agreement number | CHAR | 12 | Number (ID) of a market-making agreement |
| AGREEMENTDATE | Agreement date | DATE | 8 | Date of the market-making agreement conclusion |
| MINSPREADVOLUMEBUY | MGF-buy | INTEGER | 16 | Market-maker's minimal guaranteed fill (minimal total number of lots in active market-maker orders obligatory for the market-maker) on buy side |
| MINSPREADVALUEBUY | MGF-buy, rub. | FIXED | 16.2 | Market-maker's minimal guaranteed fill (minimal total value in rub. in active market-maker orders obligatory for the market-maker) on buy side |
| MINSPREADVOLUMESELL | MGF-sell | INTEGER | 16 | Market-maker's minimal guaranteed fill (minimal total number of lots in active market-maker orders obligatory for the market-maker) on sell side |
| MINSPREADVALUESELL | MGF-sell, rub. | FIXED | 16.2 | Market-maker's minimal guaranteed fill (minimal total value in rub. in active market-maker orders obligatory for the market-maker) on sell side |
| MAXTRADESVOLUME | Threshold value, lots | INTEGER | 16 | When the threshold value of trades is exceeded then the market-maker's obligations either change from two-sided to one-sided or he/she is released from obligations. Expressed in lots. |
| MAXTRADESVALUE | Threshold value, rub. | FIXED | 16.2 | When the threshold value of trades is exceeded then the market-maker's obligations either change from two-sided to one-sided or he/she is released from obligations. Expressed in rub. |
| MINPASSIVETRADESVALUE | Min. passive value, rub. | FIXED | 16.2 | Minimum value of passive trades, in rub. |
| MAXSPREADPERC | Max spread, % | FLOAT | 8 | Maximum spread allowed for the market-maker |
| MAXSPREADPERC1 | Max spread-buy, % | FLOAT | 8 | Maximum spread allowed for the market-maker's buy orders |
| MAXSPREADPERC2 | Max spread-sell, % | FLOAT | 8 | Maximum spread allowed for the market-maker's sell orders |
| MAXSPREADPRICE | Max spread | FLOAT | 17 |  |
| MINKEEPTIME | Min time | TIME | 6 | Minimum time to support obligations |
| MINKEEPPERCENT | Min % of fulfillment | FIXED | 9.2 | Minimal percentage of fulfillment |
| CURRENTSPREADPERC | Spread, % | FLOAT | 8 | Current market-maker's spread (difference between Minimum buy and Maximum sell prices in active market-maker's orders) |
| CURRENTSPREADPERC1 | Spread-buy, % | FLOAT | 8 |  |
| CURRENTSPREADPERC2 | Spread-sell, % | FLOAT | 8 |  |
| CURRENTSPREADPRICE | Spread | FLOAT | 17 | Current spread, rub. |
| CURRENTMINBUYPRICE | Best bid price | FLOAT | 17 | Best price of active limit buy orders |
| CURRENTMAXSELLPRICE | Best ask price | FLOAT | 17 | Best price of active limit sell orders |
| TOTALBUYVOLUME | Buy volume | INTEGER | 16 | Total volume of active limit buy-orders, expressed in lots |
| TOTALSELLVOLUME | Sell volume | INTEGER | 16 | Total volume of active limit sell-orders, expressed in lots |
| PUBLICPRICE | Current price | FLOAT | 17 | Current settlement price |
| TOTALBREACHTIME | Total breach time | TIME | 6 | Total time during the current Trading Session when the market-maker was not complying with his/her obligations |
| TOTALKEEPTIME | Compliance time | TIME | 6 | Total time during the current Trading Session when the market-maker was complying with his/her obligations |
| TOTALKEEPTIME1 | Compliance time-buy | TIME | 6 | Compliance time for buy orders |
| TOTALKEEPTIME2 | Compliance time-sell | TIME | 6 | Compliance time for sell orders |
| FACTTRADESVOLUME | Volume | INTEGER | 16 | Total volume of trades, in lots |
| FACTTRADESVALUE | Value, rub. | FIXED | 16.2 | Total value of trades, in rub. |
| FACTPASSIVETRADESVOLUME | Passive volume | INTEGER | 16 | Total volume of passive trades, expressed in lots |
| FACTPASSIVETRADESVALUE | Passive value, rub. | FIXED | 16.2 | Total value of passive trades, in rub. |
| QUOTETYPE | Type of obligation | [TMMQuoteType](#eTMMQuoteType) | 1 | Type of market-maker's obligation to support liquidity of a security (not required, both buy- and sell- orders, one direction) |
| FACTKEEPPERCENT | % of fulfillment | FIXED | 9.2 | Fulfillment percentage |
| FACTKEEPPERCENT1 | % of fulfillment-buy | FIXED | 9.2 | Fulfillment percentage to buy |
| FACTKEEPPERCENT2 | % of fulfillment-sell | FIXED | 9.2 | Fulfillment percentage to sell |
| LEFTKEEPTIME | Left time to fulfillment | TIME | 6 | Time left to fulfill obligations |
| UPDATETIME | Update time | TIME | 6 | Update time |
| PROCESSED | Obligations fulfilled | [TYesNo](#eTYesNo) | 1 | Flag showing if obligations are being fulfilled |
| INDICATOR1 | CB REPO rate ON, % | FLOAT | 6 |  |
| INDICATOR2 | ReRepo rate ON, % | FLOAT | 6 |  |
| INDICATOR3 | MosPrime rate ON, % | FLOAT | 6 |  |
| MINSHAREISSUES | Min.obligations for share issues | INTEGER | 4 | Minimum obligation on the number of share issues |
| COMPLETESHAREISSUES | Fulfilled for share issues | INTEGER | 4 | Fulfilled for the number of share issues |


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
| EVENINGSESSION | Availability in additional evening session | [TYesNo](#eTYesNo) | 1 | Flag that shows if a firm is available for trading in additional evening session |
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
| INDEXCROSSRATE | Rate | FIXED | 9.4 | Index currency exchange rate |


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
| PRICE | Price | FLOAT | 17 | Price |
| YIELD | Yield | FIXED | 9.2 | Yield, based on the trade price |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |


#### NEGDEALS - Negotiated deal orders (updateable)

Table contains information on all negotiated deals submitted or received by the trading firm since the beginning of the trading session

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **DEALNO** | **Order No.** | **INTEGER** | **12** | **Negotiated deal order number (ID) in the Trading System** |
| DEALTIME | Order time | TIME | 6 | Time when the trade was registered by the Trading System |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Status of a negotiated trade |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | Trader who entered the order |
| FIRMID | Firm | CHAR | 12 | Firm on which behalf the order was entered |
| CPFIRMID | Counterparty | CHAR | 12 | Firm the order is addressed to |
| ACCOUNT | Trading account | CHAR | 12 | Trading account from which the order was entered |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| YIELD | Yield | FIXED | 9.2 | Yield at the order price |
| PRICE2 | Buyback price | FLOAT | 17 | Buyback price for the second REPO leg |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| VALUE | Value | FIXED | 16.2 | Deal value, expressed in the currency of settlement |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in the currency of settlement |
| QUOTENO | Counter-order | INTEGER | 12 | Number of the counter-order, 0 if no order |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed as percentage |
| REPOENTRY | REPO order entry type | [TRepoEntry](#eTRepoEntry) | 1 | Parameter combination specified at the entry of REPO order |
| REPOVALUE | Value / REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| REPO2VALUEBALANCE | Balance of the REPO buy-back value | FIXED | 16.2 | Value of the unmatched part of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| REPOTERM | Term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STARTDISCOUNT | REPO initial discount, % | FLOAT | 17 | Either indicated explicitly or calculated by the Trading System based on other REPO order parameters. |
| LOWERDISCOUNT | Low limit of REPO discount, % | FLOAT | 17 | Optional parameter that can be specified at order entry. When current discount becomes lower than this limit then the initial seller has a margin call for cash transfer. |
| UPPERDISCOUNT | Upper limit of REPO discount, % | FLOAT | 17 | Optional parameter that can be specified at order entry. When current discount exceeds than this limit then the initial buyer has a margin call for securities transfer. |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Block collaterals on a special account for REPO trades |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading session period in which the order was entered |
| CLIENTCODE | Client code | CHAR | 12 | Short client code which was indicated when entering the trade |
| UPDATETIME | Update time | TIME | 6 | Time when the order was updated last time (matched, cancelled) |
| BALANCE | Lots left | INTEGER | 16 | Volume of unmatched part of an order, expressed in lots |
| ORIGINREPOVALUE | REPO value specified by the user | FIXED | 16.2 | Initial REPO value that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty. |
| ORIGINQUANTITY | Number of lots as specified by the user | INTEGER | 16 | Initial number of lots that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty. |
| ORIGINDISCOUNT | Original discount specified by the user | FLOAT | 17 | Initial REPO discount that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty. |
| ENTRYDATE | Registration date | DATE | 8 | Order registration date |
| ACTIVATIONDATE | Activation date | DATE | 8 | Order activation date |
| ACTIVATIONTIME | Activation time | TIME | 6 | Order activation time |
| ORIGINVALUE | Amount of money | FIXED | 16.2 | Initial amount of money that was specified by the user. Applicable only to negotiated deal without number of lots. |
| NEGDEALENTRY | Negdeal entry type | [TNegdealEntry](#eTNegdealEntry) | 1 | Parameter combination specified at the entry of negotiated deal: number of lots or amount of money. |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| BASEPRICE | Base price | FLOAT | 17 | Base price could be specified for SWAP negotiated deals |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| SYSTEMREF | System reference | CHAR | 12 | Additional data transferred by the trading system |
| BANKID | Settlement organization | CHAR | 12 |  |
| LSECCODE | Basket asset | CHAR | 12 |  |
| REPOVALUEBALANCE | REPO value left | FIXED | 16.2 | REPO value of unmatched part of an order, calculated in the currency of settlement for the current date |
| SETTLELIABILITYFLAG | Liability settlement order | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Order of liability settlement between Clearing and Trading Members |
| ORDCANCELREASON | Cancel reason | [TOrderCancelReason](#eTOrderCancelReason) | 2 | Order cancellation reason |
| TRADINGSESSION | Trading session | CHAR | 1 | ID of trading session when order was registered |
| CPUSERALIAS | Counterparty user alias | CHAR | 12 | Alias of the user the order is addressed to |
| FLOATINGRATE | Floating rate | [TFloatingRate](#eTFloatingRate) | 1 | Floating or fixed REPO rate flag |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| PARENTTRADENO | Parent trade No. | INTEGER | 12 | Parent trade number in the Trading system |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |
| OPENREPO2VALUE | Open REPO buy-back value at T+1 | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg at T+1 date for REPO trades with open date, expressed in the currency of settlement |
| OPENREPO2DATE | Open REPO T+1 date | DATE | 8 | Т+1 date for REPO trades with open date |
| OPENREPO3DATE | Open REPO T+2 date | DATE | 8 | Т+2 date for REPO trades with open date |
| OPENREPO3INCOME | T+1/T+2 income for Open REPO | FIXED | 16.2 | REPO trade income from Т+1 to Т+2 for REPO trades with open date, expressed in the currency of settlement |


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
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | Trader who entered the order |
| FIRMID | Firm | CHAR | 12 | Firm on which behalf the order was entered |
| CPFIRMID | Counterparty | CHAR | 12 | Firm the order is addressed to |
| ACCOUNT | Trading account | CHAR | 12 | Trading account from which the order was entered |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| YIELD | Yield | FIXED | 9.2 | Yield at the order price |
| PRICE2 | Buyback price | FLOAT | 17 | Buyback price for the second REPO leg |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| VALUE | Value | FIXED | 16.2 | Order value, expressed in the currency of settlement |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in the currency of settlement |
| QUOTENO | Counter-order | INTEGER | 12 | Number of the counter-order, 0 if no order |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents |
| REPOENTRY | REPO order entry type | [TRepoEntry](#eTRepoEntry) | 1 | Parameter combination specified at the entry of REPO order |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| REPO2VALUEBALANCE | Balance of the REPO buy-back value | FIXED | 16.2 | Value of the unmatched part of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STARTDISCOUNT | REPO initial discount, % | FLOAT | 17 | Either indicated explicitly or calculated by the Trading System based on other REPO order parameters. |
| LOWERDISCOUNT | Low limit of REPO discount, % | FLOAT | 17 | Optional parameter that can be specified at order entry. When current discount becomes lower than this limit then the initial seller has a margin call for cash transfer. |
| UPPERDISCOUNT | Upper limit of REPO discount, % | FLOAT | 17 | Optional parameter that can be specified at order entry. When current discount exceeds than this limit then the initial buyer has a margin call for securities transfer. |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Block collaterals on a special account for REPO trades |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading period during which the trade was registered |
| CLIENTCODE | Client code | CHAR | 12 | Short client code which was indicated when entering the trade |
| UPDATETIME | Update time | TIME | 6 | Time when the order was updated last time (matched, cancelled) |
| BALANCE | Lots left | INTEGER | 16 | Volume of unmatched part of an order, expressed in lots |
| ORIGINREPOVALUE | REPO value specified by the user | FIXED | 16.2 | Initial REPO value that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |
| ORIGINQUANTITY | Number of lots as specified by the user | INTEGER | 16 | Initial number of lots that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty. |
| ORIGINDISCOUNT | Original discount specified by the user | FLOAT | 17 | Initial REPO discount that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty. |
| ENTRYDATE | Registration date | DATE | 8 | Order registration date |
| ACTIVATIONDATE | Activation date | DATE | 8 | Order activation date |
| ACTIVATIONTIME | Activation time | TIME | 6 | Order activation time |
| ORIGINVALUE | Amount of money | FIXED | 16.2 | Initial amount of money that was specified by the user. Applicable only to negotiated deal number of lots. |
| NEGDEALENTRY | Negdeal entry type | [TNegdealEntry](#eTNegdealEntry) | 1 | Parameter combination specified at the entry of negotiated deal: number of lots or amount of money. |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| BASEPRICE | Base price | FLOAT | 17 | Base price could be specified for SWAP negotiated deals |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| SYSTEMREF | System reference | CHAR | 12 | Additional data transferred by the trading system |
| BANKID | Settlement organization | CHAR | 12 |  |
| LSECCODE | Basket asset | CHAR | 12 |  |
| REPOVALUEBALANCE | REPO value left | FIXED | 16.2 | REPO value of unmatched part of an order, calculated in the currency of settlement for the current date |
| SETTLELIABILITYFLAG | Liability settlement order | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Order of liability settlement between Clearing and Trading Members |
| ORDCANCELREASON | Cancel reason | [TOrderCancelReason](#eTOrderCancelReason) | 2 | Order cancellation reason |
| TRADINGSESSION | Trading session | CHAR | 1 | ID of trading session when order was registered |
| CPUSERALIAS | Counterparty user alias | CHAR | 12 | Alias of the user the order is addressed to |
| FLOATINGRATE | Floating rate | [TFloatingRate](#eTFloatingRate) | 1 | Floating or fixed REPO rate flag |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| PARENTTRADENO | Parent trade No. | INTEGER | 12 | Parent trade number in the Trading system |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |
| OPENREPO2VALUE | Open REPO buy-back value at T+1 | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg at T+1 date for REPO trades with open date, expressed in the currency of settlement |
| OPENREPO2DATE | Open REPO T+1 date | DATE | 8 | Т+1 date for REPO trades with open date |
| OPENREPO3DATE | Open REPO T+2 date | DATE | 8 | Т+2 date for REPO trades with open date |
| OPENREPO3INCOME | T+1/T+2 income for Open REPO | FIXED | 16.2 | REPO trade income from Т+1 to Т+2 for REPO trades with open date, expressed in the currency of settlement |


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
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, immediately or cancel, withdraw remainder, book or cancel order |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | ID of the user who has entered the order |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the order was entered |
| ACCOUNT | Trading account | CHAR | 12 | Trading account for which the order was entered |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| HIDDEN | Hidden lots | INTEGER | 16 |  |
| BALANCE | Lots left | INTEGER | 16 | Volume of unmatched part of an order, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Order value, expressed in the currency of settlement. This value does not include the exchange commission nor the accrued interest. |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| LINKEDORDER | Amended order number | INTEGER | 12 | ID of the order that was replaced by the given order |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest calculated for the trade date (expressed in the currency of settlement) |
| ENTRYTYPE | Price type | [TPriceEntryType](#eTPriceEntryType) | 1 | Price entry type - "price/yield/WA price" |
| YIELD | Yield | FIXED | 9.2 | Yield, calculated based on order price |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading session period during which the order was entered |
| PRICE2 | Buyback price | FLOAT | 17 | Buyback price for the second REPO leg |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| ACTIVATIONTIME | Activation time | TIME | 6 | Order activation time |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| MARKETMAKER | Market-maker | [TYesNo](#eTYesNo) | 1 | Market-maker's order |
| UPDATETIME | Update time | TIME | 6 | Time when the order was updated last time (matched, cancelled) |
| UPDATE_MICROSECONDS | Update time microseconds | INTEGER | 6 | Time when the order was updated last time (matched, cancelled), microseconds |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the order was registered at the Trading System, microseconds |
| REPOFLAG | REPO order flag | [TRepoFlag](#eTRepoFlag) | 1 |  |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| REPOVALUEBALANCE | REPO value left | FIXED | 16.2 | REPO value of unmatched part of an order, calculated in the currency of settlement for the current date |
| REPO2VALUEBALANCE | Balance of the REPO buy-back value | FIXED | 16.2 | Value of the unmatched part of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| STARTDISCOUNT | Start discount, % | FLOAT | 17 |  |
| UPDUSERID | Updater user ID | CHAR | 12 | Identifier of the user, who have updated the order |
| VALUEENTRYTYPE | Value type | [TValueEntryType](#eTValueEntryType) | 1 |  |
| ACTIVATIONTYPE | Activation event type | [TOrderActivationType](#eTOrderActivationType) | 1 | Type of activation order's event |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| SYSTEMREF | System reference | CHAR | 12 | Additional data transferred by the trading system |
| BANKID | Settlement organization | CHAR | 12 |  |
| STABORDER | Stabilization order | [TYesNo](#eTYesNo) | 1 | Order to support price level |
| INTORDERNO | Internal Order No | INTEGER | 12 | Internal order number in the trading system. Can be used to identify own orders in the anonymous FAST market data feed. |
| ASP | Signature | CHAR | 12 | Equivalent of a handwritten signature |
| SETTLELIABILITYFLAG | Liability settlement order | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Order of liability settlement between Clearing and Trading Members |
| INITIALPRICE | Initial price | FLOAT | 17 | Price indicated by the user |
| ORDCANCELREASON | Cancel reason | [TOrderCancelReason](#eTOrderCancelReason) | 2 | Order cancellation reason |
| TRADINGSESSION | Trading session | CHAR | 1 | ID of trading session when order was registered |
| VISIBILITYFACTOR | Visible factor | FIXED | 5.2 | Visible part in the total order value, expressed in % |
| REPO2VALUE | REPO buy-back value | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| VISIBLEREPOVALUE | Visible REPO value | FIXED | 16.2 | Visible REPO value of unmatched part of an order |
| LIQUIDITYTYPE | Liquidity type | [TExtIntType](#eTExtIntType) | 1 | Order liquidity type - Internal liquidity or External quote |
| PREMATCHEDBALANCE | Pre Matched Balance | INTEGER | 16 | Total volume of lots in pre-matched trades |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
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
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, immediately or cancel, withdraw remainder, book or cancel order |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | ID of the user who has entered the order |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the order was entered |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| HIDDEN | Hidden lots | INTEGER | 16 |  |
| BALANCE | Lots left | INTEGER | 16 | Volume of unmatched part of an order, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Order value, expressed in the currency of settlement. This value does not include the exchange commission nor the accrued interest. |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| LINKEDORDER | Amended order number | INTEGER | 12 | ID of the order that was replaced by the given order |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest calculated for the trade date (expressed in the currency of settlement) |
| ENTRYTYPE | Price type | [TPriceEntryType](#eTPriceEntryType) | 1 | Price entry type - "price/yield/WA price" |
| YIELD | Yield | FIXED | 9.2 | Yield, calculated based on order price |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading session period during which the order was entered |
| PRICE2 | Buyback price | FLOAT | 17 | Buyback price for the second REPO leg |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| ACTIVATIONTIME | Activation time | TIME | 6 | Order activation time |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| MARKETMAKER | Market-maker | [TYesNo](#eTYesNo) | 1 | Market-maker's order |
| UPDATETIME | Update time | TIME | 6 | Time when the order was updated last time (matched, cancelled) |
| UPDATE_MICROSECONDS | Update time microseconds | INTEGER | 6 | Time when the order was updated last time (matched, cancelled), microseconds |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the order was registered at the Trading System, microseconds |
| REPOFLAG | REPO order flag | [TRepoFlag](#eTRepoFlag) | 1 |  |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| REPOVALUEBALANCE | REPO value left | FIXED | 16.2 | REPO value of unmatched part of an order, calculated in the currency of settlement for the current date |
| REPO2VALUEBALANCE | Balance of the REPO buy-back value | FIXED | 16.2 | Value of the unmatched part of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| STARTDISCOUNT | Start discount, % | FLOAT | 17 |  |
| UPDUSERID | Updater user ID | CHAR | 12 | Identifier of the user, who have updated the order |
| VALUEENTRYTYPE | Value type | [TValueEntryType](#eTValueEntryType) | 1 |  |
| ACTIVATIONTYPE | Activation event type | [TOrderActivationType](#eTOrderActivationType) | 1 | Type of activation order's event |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| SYSTEMREF | System reference | CHAR | 12 | Additional data transferred by the trading system |
| BANKID | Settlement organization | CHAR | 12 |  |
| STABORDER | Stabilization order | [TYesNo](#eTYesNo) | 1 | Order to support price level |
| INTORDERNO | Internal order number | INTEGER | 12 | Internal order number in the trading system. Can be used to identify own orders in the anonymous FAST market data feed. |
| ASP | Signature | CHAR | 12 | Equivalent of a handwritten signature |
| SETTLELIABILITYFLAG | Liability settlement order | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Order of liability settlement between Clearing and Trading Members |
| INITIALPRICE | Initial price | FLOAT | 17 | Price indicated by the user |
| ORDCANCELREASON | Cancel reason | [TOrderCancelReason](#eTOrderCancelReason) | 2 | Order cancellation reason |
| LSECCODE | Basket asset | CHAR | 12 |  |
| TRADINGSESSION | Trading session | CHAR | 1 | ID of trading session when order was registered |
| VISIBILITYFACTOR | Visible part % | FIXED | 5.2 | Visible part in the total order value, expressed in % |
| REPO2VALUE | REPO buy-back value | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| VISIBLEREPOVALUE | Visible REPO value | FIXED | 16.2 | Visible REPO value of unmatched part of an order |
| LIQUIDITYTYPE | Liquidity type | [TExtIntType](#eTExtIntType) | 1 | Order liquidity type - Internal liquidity or External quote |
| PREMATCHEDBALANCE | Pre Matched Balance | INTEGER | 16 | Total volume of lots in pre-matched trades |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| COMPLIANCEID | Тип ввода заявки | CHAR | 1 | Маркировка способа создания заявки |


#### PRICEMOVELIMIT - Price move limits (not updateable)

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| DISCOUNT | Discount | FLOAT | 17 | Discount, expressed in % |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| UPPERLIMIT | Upper limit | FLOAT | 17 |  |
| LOWERLIMIT | Lower limit | FLOAT | 17 |  |


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
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| PRICE | Price | FLOAT | 17 | Buy or Sell price for one security |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |


#### QUOTES - Orders in negdeal mode with no counterparty specified (updateable)

Table contains information on all orders submitted by the trading firms in negdeal mode with no counterparty specified (quotes) since the beginning of the trading session. Each row corresponds to one quote.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **QUOTENO** | **Quote number** | **INTEGER** | **12** | **Order number** |
| QUOTETIME | Time | TIME | 6 |  |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Status of an order in negdeal mode with no counterparty specified |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| USERID | User ID | CHAR | 12 |  |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| PRICE2 | Buyback price | FLOAT | 17 | Buyback price for the second REPO leg |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Trading period during which the trade was registered |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| REPO2VALUEBALANCE | Balance of the REPO buy-back value | FIXED | 16.2 | Value of the unmatched part of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| DISCOUNT | REPO initial discount, % | FLOAT | 17 | REPO initial discount, % |
| REPOENTRY | REPO order entry type | [TRepoEntry](#eTRepoEntry) | 1 | Parameter combination specified at the entry of REPO order |
| ORIGINREPOVALUE | REPO value specified by the user | FIXED | 16.2 | Initial REPO value that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |
| ORIGINQUANTITY | Number of lots as specified by the user | INTEGER | 16 | Initial number of lots that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |
| ORIGINDISCOUNT | Original discount specified by the user | FLOAT | 17 | Initial REPO discount that was specified by the user. Applicable only to extended REPO-M mode. For other types of orders or if no value was given - empty |


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
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in the currency of settlement |
| STATUS | Status | [TReportStatus](#eTReportStatus) | 1 | Settlement instruction status |
| COMMISSION | Commission | FIXED | 16.2 | Trade commission, rub. |
| WITHDRAWTIME | Withdraw time | TIME | 6 | Time at which the settlement instruction was withdrawn |
| REPORTTYPE | Settlement instruction type | [TReportType](#eTReportType) | 1 |  |
| REPORTKIND | Type of the settlement instruction | [TReportKind](#eTReportKind) | 1 | Settlement instruction execution type |
| NUMTRADES | Number of trades | INTEGER | 4 |  |
| COMPVAL | Compensation value | FIXED | 16.2 | Compensation value, expressed in the currency of the trade |
| COMPBS | Compensation | [TCompensation](#eTCompensation) | 1 | Compensation direction |
| ACCURATE | Accurate calculation | [TYesNo](#eTYesNo) | 1 | Accurate calculation mode |


#### REPO_DISCOUNT - Repo discounts (not updateable)

Discounts for auctions with Central Bank

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BOARDID | Board | CHAR | 4 | Trading board ID |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **MINREPOTERM** | **Minimum term** | **INTEGER** | **4** | **REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive.** |
| MAXREPOTERM | Maximum term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| DISCOUNT | Discount | FLOAT | 17 | Discount, expressed in % |
| LOWERDISCOUNT | Lower limit of REPO discount, % | FLOAT | 17 | Lower limit of REPO discount, % |
| UPPERDISCOUNT | Upper limit of REPO discount, % | FLOAT | 17 | Upper limit of REPO discount, % |


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
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |


#### REPO_QUOTEBOOK - REPO quotebook (updateable, clear on update)

Table contains information on current best buy and sell quotes for REPO operations with a particular security. Each row represents one buy or sell quote.
Two request formats are available: 1. specify Trading board ID only (BOARDID) to get REPO quotebook for all instruments traded on that board; 2. specify both Trading board and Security ID (SECBOARD+SECCODE) to get REPO quotebook for a particular security traded on the specified board.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BOARDID | Board | CHAR | 4 | Trading board ID |
| SECBOARD | Board | CHAR | 4 | Trading board ID |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| MINREPOTERM | Minimum REPO term | INTEGER | 4 | Minimum REPO term in days or empty |
| MAXREPOTERM | Maximum REPO term | INTEGER | 4 | Maximum REPO term in day or empty |
| MINREPORATE | Minimum REPO rate | FLOAT | 17 | Minimum REPO rate in percents or empty |
| MAXREPORATE | Maximum REPO rate | FLOAT | 17 | Maximum REPO rate in percents or empty |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| QUOTENO | Order | INTEGER | 12 | Quote ID |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| PRICE | Price | FLOAT | 17 | Price |
| PRICE2 | Buyback price | FLOAT | 17 | Buyback price for the second REPO leg |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REPOVALUE | REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| DISCOUNT | Discount | FLOAT | 17 | Discount, expressed in % |


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


#### SECTRANSFERS - Orders for transfer (updateable)

The table contains orders for money or security transfers which have been entered by the firm since the beginning of the current trading session.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ORDERNO** | **Order number** | **INTEGER** | **12** | **Order ID** |
| ORDERTIME | Order time | TIME | 6 | Order registration time |
| STATUS | Status | [TOrderStatus](#eTOrderStatus) | 1 | Current order status |
| BUYSELL | D/W | [TSecTransferBuySell](#eTSecTransferBuySell) | 1 | Order direction - "deposit to account / withdraw from account" |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | ID of the user who has entered the order |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the order is entered |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm ID |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| MATCHREF | Matching reference | CHAR | 10 | Matching reference text |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in the currency of settlement |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| WITHDRAWTIME | Withdrawal time | TIME | 6 |  |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| BALANCE | Lots left | INTEGER | 16 | Volume of unmatched part of an order, expressed in lots |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| BANKID | Settlement organization | CHAR | 12 |  |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| TRANINFO | Transfer details | CHAR | 210 |  |
| TRANTYPE | Transaction code | CHAR | 4 | Transaction Information |
| TRADINGSESSION | Trading session | CHAR | 1 | ID of trading session when order was registered |


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
| ASSET | Asset | CHAR | 12 |  |
| LISTLEVEL | Listing level | INTEGER | 1 |  |
| COMMENTS | Comments | CHAR | 128 |  |
| DIVIDENDVALUE | Dividend value | FLOAT | 17 | Dividend value, expressed in the currency of settlement |
| DIVIDENDDATE | Dividend date | DATE | 8 | Date of the divident recepient list closure |
| SUBORDBOND | Subordination | [TYesNo](#eTYesNo) | 1 | Subordination flag (liabilities will be met after meeting requirements of all creditors) |
| LOTDIVIDER | Lot divider | INTEGER | 8 | Indicates trading in 1/LotDivider fractions of LotSize. For example, LotSize=1 and LotDivider=100 combination for USD/RUB has a meaning of trading in quantities of 1 cent. |
| GCPOOLID | Pool ID | CHAR | 12 |  |
| HIGHRISK | High risk | [TYesNo](#eTYesNo) | 1 |  |
| QINVESTOR | For qualified investors | [TQInvestor](#eTQInvestor) | 1 |  |
| COUPONSTARTDATE | Start date of the coupon period | DATE | 8 | Start date of the coupon period |
| COMPLEXPRODUCT | Complex financial product | INTEGER | 10 | Complex financial product type |
| RECORD_DATE_CALC | Depository commission record date | DATE | 8 | Date of fixing the register of owners for charging a commission for depository services |
| ACTION_DATE_CALC | Depository commission charge date | DATE | 8 | Planned date of the depository services commission charging |
| STRATEGIC | Strategic asset | [TYesNo](#eTYesNo) | 1 |  |
| VARIABLEFACEVALUE | Variable face value | [TYesNo](#eTYesNo) | 1 | Security with variable face value |
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
| COUNTERPRICE | Counterparty price | FLOAT | 17 | Counterparty price for one security. If the counterparty price is given then all orders with a "at counterparty price" flag will be satisfied at this price. This is used for buy-back auctions. |
| MIN_CURR_LAST | Minimum current price | FLOAT | 17 | Minimum current price |
| MIN_CURR_LAST_TIME | Min. cur. price change time | TIME | 6 | Change time of the minimum current price |
| CLOSING_AUCTION_PRICE | CA price | FLOAT | 17 | Closing auction price. Displays the expected price of the auction with all the currently registered orders during the auction. Displays the closing auction price after the auction. |
| CLOSING_AUCTION_VOLUME | CA volume | INTEGER | 16 | Closing auction volume. Expected (actual) number of securities in trades at the specified closing auction price. |
| DPVALINDICATORBUY | Bid flag (dark pools) | [TDPValIndicator](#eTDPValIndicator) | 1 | Flag that shows the availability of buy orders on the dark pool auction |
| DPVALINDICATORSELL | Sell flag (dark pools) | [TDPValIndicator](#eTDPValIndicator) | 1 | Flag that shows the availability of sell orders on the dark pool auction. |
| SETTLEDATE1 | Settlement date 1 | DATE | 8 | Settlement date for a trade or the first part of a REPO/swap trade |
| NFAPRICE | NSMA Price | FLOAT | 17 | National Securities Market Association Price |
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


#### SEC_SETTLECODE_STATS - Negdeal orderbook (updateable)

Orderbook for negotiated deals.
Two request formats are available:
1. specify Trading board ID only (BOARDID) to get orderbook for all instruments traded on that board;
2. specify both Trading board and Security ID (SECBOARD+SECCODE) to get orderbook for a particular security traded on the specified board.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| BOARDID | Board | CHAR | 4 | Trading board ID |


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
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |


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
| **SUBDETAILS** | **Subdetails** | **CHAR** | **20** | **Client's client taxpayer number or passport number or other document** |


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
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell"** |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| USERID | User ID | CHAR | 12 | ID of the user who concluded the trade |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the trade is registered |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Trade volume, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in the currency of settlement |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest for the trade date, calculated based on the number of securities in the trade. Expressed in the currency of settlement. |
| YIELD | Yield | FIXED | 9.2 | Yield, based on the trade price |
| PERIOD | Period | [TPeriod](#eTPeriod) | 1 | Period of the trading session when the trade was concluded |
| PRICE2 | Buyback price | FLOAT | 17 | Buyback price for the second REPO leg |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| TRADETYPE | Type | [TTradeType](#eTTradeType) | 1 | Trade type |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| COMMISSION | Total commission | FIXED | 16.2 | Trade commission, rub. |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| ACCRUED2 | Accrued interest for the buy-back | FIXED | 16.2 | Accrued interest on the buy-back date, expressed in the currency of settlement |
| REPOVALUE | Value / REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| REPO2VALUEBALANCE | Balance of the REPO buy-back value | FIXED | 16.2 | Value of the unmatched part of the 2nd (buy-back) REPO leg, expressed in the currency of settlement |
| REPOTERM | Term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STARTDISCOUNT | REPO initial discount, % | FLOAT | 17 | Discount, expressed in % |
| LOWERDISCOUNT | Low limit of REPO discount, % | FLOAT | 17 | Discount, expressed in % |
| UPPERDISCOUNT | Upper limit of REPO discount, % | FLOAT | 17 | Discount, expressed in % |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Block collaterals on a special account for REPO trades |
| CLEARINGCENTERCOMM | Clearing commission | FIXED | 16.2 | Clearing commission, rub. |
| EXCHANGECOMM | Exchange commission | FIXED | 16.2 | Exchange commission, rub. |
| TRADINGSYSTEMCOMM | Technical access commission | FIXED | 16.2 | Technical access commission, rub. |
| CLIENTCODE | Client code | CHAR | 12 | Client code specified by the trader when entering an order |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the trade was registered by the Trading System, microseconds |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| BASEPRICE | Base price | FLOAT | 17 | Base price could be specified for SWAP negotiated deals |
| PARENTTRADENO | Parent trade | INTEGER | 12 | Parent trade number in the Trading System for REPO trades |
| HIDDENQTYORDER | Trade by iceberg-order | [TYesNo](#eTYesNo) | 1 | Set to 'Y' if trade originates from an iceberg order |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| SYSTEMREF | System reference | CHAR | 12 | Additional data transferred by the trading system |
| BANKID | Settlement organization | CHAR | 12 |  |
| TRADEDATE | Trade date | DATE | 8 |  |
| LSECCODE | Basket asset | CHAR | 12 |  |
| CLEARINGFIRMID | Clearing firm | CHAR | 12 | Firm ID of clearing member |
| CLEARINGBANKACCID | Clearing bank account | CHAR | 12 | Clearing account ID in the settlement house |
| MAKERFLAG | Active/Passive | [TMakerTaker](#eTMakerTaker) | 1 |  |
| CPORDERNO | Counterparty order number | INTEGER | 12 | Counterparty order number for this trade. Only applicable to negotiated deals. |
| TRANINFO | Transfer details | CHAR | 210 |  |
| SETTLELIABILITYFLAG | Liability settlement trade | [TTradeSettleLiabilityFlag](#eTTradeSettleLiabilityFlag) | 1 | Trade of liability settlement between Clearing and Trading Members |
| STATUS | Status | [TTradeStatus](#eTTradeStatus) | 1 | Trade status |
| TRANTYPE | Transaction code | CHAR | 4 | Transaction Information |
| FACEAMOUNT | FaceAmount | FIXED | 16.2 | Value of trade by face value, expressed in the currency of settlement |
| CLEARINGTRDACCID | Clearing account | CHAR | 12 | Clearing account number |
| TRADINGSESSION | Trading session | CHAR | 1 | ID of trading session when trade was concluded |
| FLOATINGRATE | Floating rate | [TFloatingRate](#eTFloatingRate) | 1 | Floating or fixed REPO rate flag |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| CANCELREASON | Cancel reason | [TOrderCancelReason](#eTOrderCancelReason) | 2 | Trade cancellation reason |
| DEPOSITINTENT | Deposit trade type | [TDepositIntent](#eTDepositIntent) | 1 | Deposit trade type |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |
| OPENREPO2VALUE | Open REPO buy-back value at T+1 | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg at T+1 date for REPO trades with open date, expressed in the currency of settlement |
| OPENREPO2DATE | Open REPO T+1 date | DATE | 8 | Т+1 date for REPO trades with open date |
| OPENREPO3DATE | Open REPO T+2 date | DATE | 8 | Т+2 date for REPO trades with open date |
| OPENREPO3INCOME | T+1/T+2 income for Open REPO | FIXED | 16.2 | REPO trade income from Т+1 to Т+2 for REPO trades with open date, expressed in the currency of settlement |


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


#### TRADING_SESSION - Trading sessions (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **ID** | **Trading session** | **CHAR** | **1** |  |
| NAME | Name of trading session | CHAR | 30 |  |
| SHORTNAME | Short name | CHAR | 10 |  |


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
| BANKIDT0 | T0 settlement organization | CHAR | 12 |  |
| BANKIDTPLUS | T+ settlement organization | CHAR | 12 |  |
| DEPUNITID | Depo account partition | CHAR | 17 |  |
| GCPLINKTRDACCID | Linked T+ trading account for GCP issue | CHAR | 12 | Trading account number |
| EXTUID | Unique section Id | CHAR | 12 | Unique section Id, used in NSD |
| EXTSECREQUEST | Security selection to the partition enabled | [TYesNo](#eTYesNo) | 1 |  |


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
| DEPOSIT | Deposit (Yes/No) | [TYesNo](#eTYesNo) | 1 | Trading/clearing account for Deposit market |


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


#### UNDERWRITERS - Underwriters (updateable)

The table contains information about the company involved in the auction, which is the underwriter in the placement of the security.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| STATUS | Status | [TActiveStatus](#eTActiveStatus) | 1 | Current state of the underwriter entry |


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


#### USTRADES - Unsettled trades (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRADENO** | **Trade ID** | **INTEGER** | **12** | **Trade number in the Trading System** |
| TRADEDATE | Trade date | DATE | 8 |  |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date. For open date REPO - not later than. |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Order direction - "Buy / Sell"** |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| VALUE | Value | FIXED | 16.2 | Trade value, expressed in the currency of settlement |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| CPTRDACCID | Counterparty trading account | CHAR | 12 | Counterparty trading account ID |
| REPORTNO | Settlement instruction ID | INTEGER | 12 | ID of a settlement instruction sent by the firm to settle this trade |
| CPREPORTNO | Counterparty settlement instruction ID | INTEGER | 12 | ID of a settlement instruction sent by the counterparty firm to settle this trade |
| STATUS | Status | [TUSTradeStatus](#eTUSTradeStatus) | 1 | Unsettled trade status |
| ACCRUEDINT | Value of accrued interest | FIXED | 16.2 | Accrued interest, expressed in the currency of settlement |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| REPOTRADENO | REPO trade ID | INTEGER | 12 | ID of the first REPO part for REPO without CCP. For REPO with CCP: ID of the second trade part in the record for the first trade part and vice versa. |
| PRICE1 | REPO price 1 | FLOAT | 17 | Price of the first REPO leg |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| PRICE2 | REPO price 2 | FLOAT | 17 | Buyback price for the second REPO leg |
| COMMISSION | Commission | FIXED | 16.2 | Trade commission, rub. |
| SETTLETIME | Settlement time | TIME | 6 |  |
| BALANCE | Trade balance | INTEGER | 16 | Volume of unmatched part of an order, expressed in lots |
| AMOUNT | Total amount | FIXED | 16.2 | Total value of the trade expressed in rub.. Can be positive or negative, depending on the trade type (sell or buy). For "ordinary" trades – the same as the trade value. For REPO trades is calculated as the sum of REPO Profit and REPO Value for the current date. For the first REPO leg equals to the value of REPO trade, for the second REPO leg equals to "return" value of the REPO trade. |
| REPOVALUE | Value / REPO value | FIXED | 16.2 | REPO value calculated in the currency of settlement for the current date |
| REPOTERM | Term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| REPO2VALUEBALANCE | Balance of the REPO buy-back value | FIXED | 16.2 | Current value of the 2nd (buy-back) REPO leg calculated for the settlement date, expressed in the currency of settlement |
| RETURNVALUE | REPO return value | FIXED | 16.2 | Value due to be paid during settlement of the second (buy-back) REPO leg |
| DISCOUNT | Discount | FLOAT | 17 | Initial discount for the first REPO leg and current discount for the second REPO leg |
| LOWERDISCOUNT | Low limit of REPO discount, % | FLOAT | 17 | Low limit of REPO discount, % |
| UPPERDISCOUNT | Upper limit of REPO discount, % | FLOAT | 17 | Discount, expressed in % |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Block collaterals on a special account for REPO trades |
| URGENCYFLAG | Settle today | [TYesNo](#eTYesNo) | 1 | The "Must be settled today" flag |
| TYPE | Unsettled trade type | [TUSTradeType](#eTUSTradeType) | 1 |  |
| OPERATIONTYPE | Operation | [TOperationType](#eTOperationType) | 1 | Operation type: deposit/withdraw |
| EXPECTEDDISCOUNT | Discount after deposit, % | FLOAT | 17 | Discount after deposit, expressed in % |
| EXPECTEDQUANTITY | Quantity after deposit | INTEGER | 16 | Quantity after deposit, expressed in lots |
| EXPECTEDREPOVALUE | Value after deposit | FIXED | 16.2 | REPO value after deposit calculated in the currency of settlement |
| EXPECTEDREPO2VALUE | Repurchase value after deposit | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg after deposit, expressed in the currency of settlement |
| EXPECTEDRETURNVALUE | Return value after deposit | FIXED | 16.2 | REPO return value after deposit, expressed in the currency of settlement |
| CLIENTCODE | Client code | CHAR | 12 | Code of a client on whose behalf the order was entered |
| NEXTDAYSETTLE | Settle next day | [TYesNo](#eTYesNo) | 1 | The "Settle next day" flag |
| ORDERNO | Order | INTEGER | 12 | Number of order from which the trade originates |
| REPOTRADETRADEDATE | Date of conslusion | DATE | 8 | For margin calls only. Date of REPO trade conclusion. Empty in other cases. |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| SETTLED | Settlement status | [TSettled](#eTSettled) | 1 | Settlement status |
| CLEARINGTYPE | Type of clearing | [TClearingType](#eTClearingType) | 1 | Clearing type |
| CLEARINGTIME | Clearing time | TIME | 6 | Time when clearing was finished |
| REPORTCOMMISSION | Report commission | FIXED | 16.2 | Value of commission fee for sending a quick settlement instruction, in rub. |
| COUPONPAYMENT | Coupon payment | FIXED | 16.2 | Value of coupon payment since the last security trading day |
| COUPONPAYMENTDATE | Coupon payment date | DATE | 8 | Date of the last coupon payment |
| PRINCIPALPAYMENT | Principal debt payment | FIXED | 16.2 | Value of the principal debt (amortization) payment since the last security trading day |
| PRINCIPALPAYMENTDATE | Date of principal debt payment | DATE | 8 | Date of the last principal debt (amortization) payment |
| CONFIRMED | Confirmation status | [TYesNo](#eTYesNo) | 1 |  |
| CPCONFIRMED | Counterparty confirmation status | [TYesNo](#eTYesNo) | 1 |  |
| CONFIRMREPORT | ID of confirmation instruction | INTEGER | 12 | ID of the confirmation instruction for an OTC trade |
| CONFIRMTIME | Time of confirmation | TIME | 6 |  |
| BANKACCID | Bank account | CHAR | 12 | Settlement account/code ID in the settlement house |
| PRECISEBALANCE | Precise quantity | INTEGER | 16 |  |
| BANKID | Settlement organization | CHAR | 12 |  |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| COMPVAL | Compensation value | FIXED | 16.2 | Compensation value, expressed in the currency of the trade |
| PARENTTRADENO | Parent trade | INTEGER | 12 | Parent trade number in the Trading System for REPO trades |
| CLEARINGFIRMID | Clearing firm | CHAR | 12 | Firm ID of clearing member |
| CLEARINGBANKACCID | Clearing bank account | CHAR | 12 | Clearing account ID in the settlement house |
| CLEARINGTRDACCID | Clearing account | CHAR | 12 | Clearing account number |
| EARLYSETTLESTATUS | Early settle | [TEarlySettle](#eTEarlySettle) | 1 | Status of early settled REPO with CCP trade |
| EARLYSETTLEREPORTNO | Settlement instruction ID for early settlement | INTEGER | 12 | ID of a settlement instruction for a REPO with CCP trade sent by the firm |
| EARLYSETTLECPREPORTNO | Counterparty settlement instruction ID for early settlement | INTEGER | 12 | ID of a settlement instruction for a REPO with CCP trade sent by the counterparty firm |
| DUEDATE | Due date | DATE | 8 | Trade due date |
| FLOATINGRATE | Floating rate | [TFloatingRate](#eTFloatingRate) | 1 | Floating or fixed REPO rate flag |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| SYSTEMREF | System reference | CHAR | 12 | Additional data transferred by the trading system |
| DEPOSITINTENT | Deposit trade type | [TDepositIntent](#eTDepositIntent) | 1 | Deposit trade type |
| BENCHMARKVALUE | Benchmark value | FLOAT | 10 | The value of the indicator that was used today to calculate the interest on this trade |
| BENCHMARKCHANGEDATE | Benchmark change date | DATE | 8 | The nearest date for determining the new value of the benchmark |
| OPENREPOSTATUS | Open REPO status | [TOpenRepoStatus](#eTOpenRepoStatus) | 1 |  |
| OPENREPO2VALUE | Open REPO buy-back value at T+1 | FIXED | 16.2 | Value of the 2nd (buy-back) REPO leg at T+1 date for REPO trades with open date, expressed in the currency of settlement |
| OPENREPOREPORTNO | Отчет на закрытие сделки РЕПО с "Открытой датой" | INTEGER | 12 | Номер отчета на закрытие сделки РЕПО с "Открытой датой" |
| OPENREPO2DATE | Open REPO T+1 date | DATE | 8 | Т+1 date for REPO trades with open date |
| OPENREPO3DATE | Open REPO T+2 date | DATE | 8 | Т+2 date for REPO trades with open date |
| OPENREPO3INCOME | T+1/T+2 income for Open REPO | FIXED | 16.2 | REPO trade income from Т+1 to Т+2 for REPO trades with open date, expressed in the currency of settlement |


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
| VALPOSITION | Initial value | FIXED | 16.2 | Initial value, expressed in the currency of settlement |


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
| GPOSVALLIMIT | Maximum gross value | FIXED | 16.2 | Maximum gross value, expressed in the currency of settlement |
| GPOSVAL | Current gross value | FIXED | 16.2 | Current gross value, expressed in the currency of settlement |


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


#### U_TRDACC_BOARD_RESTR - User Trdacc-Board restrictions (updateable)

User Trade Account restrictions by Board

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
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| USERLIMITSTATUS | Status | [TUserLimitStatus](#eTUserLimitStatus) | 1 | User limit status |


---


### Transactions

#### AUCTION_MKT_ORDER - Enter a market order during the auction

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| COMPLIANCEID | Тип ввода заявки | CHAR | 1 | Маркировка способа создания заявки |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| ORDERVALUE | Order value | FIXED | 16.2 | Order value, expressed in the currency of settlement |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |


#### BKT_REPO_NEGDEAL - REPO with basket negotiated deal entry

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| REPOORDERVALUE | Repo value | FIXED | 16.2 | Repo value in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| ACCEPTEDORDERNO | ID of a deal to accept | INTEGER | 12 | Accepted counterparty's negotiated deal number (if an order is send in reply to negotiated deal) or white spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| LSECCODE | Basket asset | CHAR | 12 |  |


#### CANCEL_TRADE - Cancel trade or margin call

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NUMTRADES | Number of trades | INTEGER | 2 |  |
| COMPVAL | Compensation value | FIXED | 16.2 | Compensation value, expressed in the currency of the trade |
| COMPBS | Compensation | [TCompensation](#eTCompensation) | 1 | Compensation direction |
| TRADENO[+](#refs) | Trade # | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL[+](#refs) | Direction | [TBuySell](#eTBuySell) | 1 | Trade direction |


#### CCP_REPO_COMPLEX_NEGDEAL - In-house REPO with CCP negotiated deal entry

Conclude a REPO with CCP trade between the broker and its client or between two broker's clients. Only one order should be entered to conclude a trade. Trade is concluded right after order registration.
Requirements to order parameters are the same as to negotiated deal orders in REPO with CCP mode.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| CPACCOUNT | Counterparty trading account | CHAR | 12 | Counterparty trading account |
| CPBROKERREF | Counterparty's broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| REPOORDERVALUE | Repo value | FIXED | 16.2 | Repo value in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| CPCLIENTCODE | ID of a counterparty's client | CHAR | 12 | ID of a counterparty's client, assigned by the counterparty |
| DISCOUNT | Discount | FLOAT | 17 | Discount, expressed in % |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |


#### CCP_REPO_NEGDEAL - REPO with CCP negotiated deal entry

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| REPOORDERVALUE | Repo value | FIXED | 16.2 | Repo value in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| ACCEPTEDORDERNO | ID of a deal to accept | INTEGER | 12 | Accepted counterparty's negotiated deal number (if an order is send in reply to negotiated deal) or white spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| DISCOUNT | Discount | FLOAT | 17 | Discount, expressed in % |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |


#### CCP_REPO_ORDER - Enter REPO with CCP order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| MKTLIMIT | Type | [TMktLimit](#eTMktLimit) | 1 | Order type: "limit/market" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, immediately or cancel, withdraw remainder, book or cancel order |
| PRICEYIELDENTERTYPE | Price indication type | [TPriceEntryType](#eTPriceEntryType) | 1 | Price indication type: "price/yield/WA" |
| MMORDER | Order target flag | [TMMOrder](#eTMMOrder) | 1 | Can be set for limit orders only. Market-maker flag can be specified for the user who has market-maker rights for a specified security. |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security. For market orders must be empty. |
| QUANTITY | Lots | INTEGER, NOT NULL | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| ORDERVALUE | Order value | FIXED | 16.2 | Order value, expressed in the currency of settlement |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| LSECCODE | Basket asset | CHAR | 12 |  |
| VISIBILITYFACTOR | Visible part % | FIXED | 5.2 | Visible part in the total order value, expressed in % |


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


#### COMPLEX_CASHTRANSFER - Enter money transfer order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | D/W | [TSecTransferBuySell](#eTSecTransferBuySell) | 1 | Transfer direction: withdraw from a counterparty account or deposit to it |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm ID |
| VALUE | Value | FIXED | 16.2 | Value, expressed in the currency of settlement |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| CPACCOUNT | Counterparty trading account | CHAR | 12 | Counterparty trading account |
| CPBROKERREF | Counterparty's broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| CPCLIENTCODE | ID of a counterparty's client | CHAR | 12 | ID of a counterparty's client, assigned by the counterparty |
| TRANSFERTYPE | Transfer type | [TTransferType](#eTTransferType) | 1 |  |


#### COMPLEX_NEGDEAL - In-house negotiated deal entry

Make transfers between two own clients of the firm or between the firm and one of its clients

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Own firm is specified |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| CPACCOUNT | Counterparty's trading account | CHAR | 12 | Counterparty's trading account |
| CPBROKERREF | Counterparty's broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| CPCLIENTCODE | ID of a counterparty's client | CHAR | 12 | ID of a counterparty's client, assigned by the counterparty |


#### COMPLEX_REPORT - Margin call execution instruction entry

Used for:
- enter instruction for margin call execution
- enter settlement instruction for deferred debts and claims.

Collaterals and money positions are verified. Instruction contains net value of the number of trades and their net sum.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NUMTRADES | Number of trades | INTEGER | 2 |  |
| CLEARINGTYPE | Type of clearing | [TClearingType](#eTClearingType) | 1 |  |
| TRADENO[+](#refs) | Trade # | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL[+](#refs) | Direction | [TBuySell](#eTBuySell) | 1 | Trade direction - "Buy / Sell" |


#### COMPLEX_TRANSFER - Internal security transfer

Transfer securities between own trading accounts. The trading system generates two opposite transfer orders (SECTRANSFERS table), matches them and registers two transfer trades in the TRADES table.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | D/W | [TSecTransferBuySell](#eTSecTransferBuySell) | 1 | Transfer direction: withdraw from a counterparty account or deposit to it |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm ID |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| CPACCOUNT | Counterparty trading account | CHAR | 12 | Counterparty trading account |
| CPBROKERREF | Counterparty's broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| CPCLIENTCODE | ID of a counterparty's client | CHAR | 12 | ID of a counterparty's client, assigned by the counterparty |
| TRANSFERTYPE | Transfer type | [TTransferType](#eTTransferType) | 1 |  |
| SETTLECODE | Settlement code | CHAR | 12 | Transfer settlement code |


#### CONFIRM_PREMATCH_TRADE - Confirm/decline trade

The transaction is using for confirm or decline trade liquidity provider

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRADENO | Trade # | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| ACCEPTDECLINE | Confirmation | [TAcceptDecline](#eTAcceptDecline) | 1 | Confirmation |


#### CONFIRM_REPORT - Confirm an OTC trade

Enter confirmation of an OTC trade

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NUMTRADES | Number of trades | INTEGER | 2 |  |
| TRADENO[+](#refs) | Trade # | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL[+](#refs) | Direction | [TBuySell](#eTBuySell) | 1 | Trade direction - "Buy / Sell" |


#### EARLY_SETTLE - Early settlement

Send a settlement instruction for early settlement REPO with CCP trades from the USTRADES table

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRADENO | Trade # | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |


#### EXT_REPO_COMPLEX_NEGDEAL - In-house REPO negotiated deal entry

Conclude a REPO trade between the dealer and its client or between two dealer's clients. Only one order should be entered to conclude a trade. Trade is concluded right after order entry. Requirements to order parameters are the same as to negotiated deal orders in extended REPO-M mode.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| CPACCOUNT | Counterparty trading account | CHAR | 12 | Counterparty trading account |
| CPBROKERREF | Counterparty's broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| REPOORDERVALUE | Repo value | FIXED | 16.2 | Repo value in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STARTDISCOUNT | REPO initial discount, % | FLOAT | 17 | Either indicated explicitly or calculated by the Trading System based on other REPO order parameters. |
| LOWERDISCOUNT | Low limit of REPO discount, % | FLOAT | 17 | Optional parameter that can be specified at order entry. When current discount becomes lower than this limit then the initial seller has a margin call for money transfer. |
| UPPERDISCOUNT | Upper limit of REPO discount, % | FLOAT | 17 | Optional parameter that can be specified at order entry. When current discount exceeds than this limit then the initial buyer has a margin call for securities transfer. |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Flag showing if blocking of securities as a collateral on a special account for the term of REPO Operation is required. Currently applicable to the Government Securities market only. For other markets must be set to 'N'. |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| CPCLIENTCODE | ID of a counterparty's client | CHAR | 12 | ID of a counterparty's client, assigned by the counterparty |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |


#### EXT_REPO_NEGDEAL - REPO negotiated deal entry

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty Firm ID |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| REPOORDERVALUE | Repo value | FIXED | 16.2 | Repo value in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STARTDISCOUNT | REPO initial discount, % | FLOAT | 17 | Either indicated explicitly or calculated by the Trading System based on other REPO order parameters. |
| LOWERDISCOUNT | Low limit of REPO discount, % | FLOAT | 17 | Optional parameter that can be specified at order entry. When current discount becomes lower than this limit then the initial seller has a margin call for money transfer. |
| UPPERDISCOUNT | Upper limit of REPO discount, % | FLOAT | 17 | Optional parameter that can be specified at order entry. When current discount exceeds than this limit then the initial buyer has a margin call for securities transfer. |
| BLOCKSECURITIES | Block collaterals | [TYesNo](#eTYesNo) | 1 | Flag showing if blocking of securities as a collateral on a special account for the term of REPO Operation is required. Currently applicable to the Government Securities market only. For other markets must be set to 'N'. |
| ACCEPTEDQUOTENO | ID of a quote to accept | INTEGER | 12 | Number of the anonymous negotiated deal order (quote) being accepted (if the order is sent in reply to the quote), otherwise fill with spaces |
| ACCEPTEDORDERNO | ID of a deal to accept | INTEGER | 12 | Accepted counterparty's negotiated deal number (if an order is send in reply to negotiated deal) or white spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| BENCHMARK | Benchmark | CHAR | 12 | Benchmark identifier |
| ISOPENREPO | REPO with "OpenDate" | [TIsOpenRepo](#eTIsOpenRepo) | 1 |  |


#### EXT_REPO_QUOTE - Enter REPO order with no counterparty specified

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| WITHDRAWFLAG | Withdraw active orders | [TYesNo](#eTYesNo) | 1 | "Y" - withdraw active quotes of own firm having the same security ID and settlement code as in this order; "N" - do not withdraw any orders. |
| REPORATE | Rate / Spread, % | FLOAT | 17 | REPO rate (fixed rate mode) or spread (floating rate mode), expressed in % |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REPOORDERVALUE | Repo value | FIXED | 16.2 | Repo value in the currency of settlement |
| REPOTERM | REPO term | INTEGER | 4 | REPO term expressed in calendar days. The term starts on the next day after the first REPO leg settlement and ends on the day of the second REPO leg settlement inclusive. |
| STARTDISCOUNT | REPO initial discount, % | FLOAT | 17 | Discount, expressed in % |


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


#### NEGDEAL - Enter negotiated deal order

Enter negotiated deal order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CPFIRMID | Counterparty | CHAR | 12 | ID of the firm the order is addressed to |
| PRICE | Price | FLOAT | 17 | Price for one security. If not given then this order is considered to be "at counterparty's price". |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| MATCHREF | Matching reference | CHAR | 10 | Identical text value entered by both trade parties |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| REFUNDRATE | Refund rate, % | FIXED | 9.2 | Fixed refund rate in case of default on the second REPO leg, expressed in percents. Note: refund rate must be the same in opposite order in order to be matched. Fixed refund rate can be specified only for 'B' and 'R' settlement codes, in other cases this field should be filled with spaces. |
| ACCEPTEDQUOTENO | ID of a quote to accept | INTEGER | 12 | Number of the anonymous negotiated deal order (quote) being accepted (if the order is sent in reply to the quote), otherwise fill with spaces |
| ACCEPTEDORDERNO | ID of a deal to accept | INTEGER | 12 | Accepted counterparty's negotiated deal number (if an order is send in reply to negotiated deal) or white spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| VALUE | Value | FIXED | 16.2 | Order value, expressed in the currency of settlement |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| CPUSERALIAS | Counterparty user alias | CHAR | 12 | Alias of the user the order is addressed to |


#### OPENREPO_SETTLE - Finalize REPO trade with open date

Send a settlement instruction to finalize REPO trade with open date. Confirmation from the counterparty is not required.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TRADENO | Trade # | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |


#### ORDER - Enter order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| MKTLIMIT | Type | [TMktLimit](#eTMktLimit) | 1 | Order type: "limit/market" |
| SPLITFLAG | Price type | [TSplitFlag](#eTSplitFlag) | 1 | Order type option: "allow/not allow price split" |
| IMMCANCEL | Order processing type | [TImmCancel](#eTImmCancel) | 1 | Append to orderbook, immediately or cancel, withdraw remainder, book or cancel order |
| PRICEYIELDENTERTYPE | Price indication type | [TPriceEntryType](#eTPriceEntryType) | 1 | Price indication type: "price/yield/WA" |
| MMORDER | Order target flag | [TMMOrder](#eTMMOrder) | 1 | Can be set for limit orders only. Market-maker flag can be specified for the user who has market-maker rights for a specified security. |
| ACTIVATIONTYPE | Activation event type | [TOrderActivationType](#eTOrderActivationType) | 1 | Type of activation order's event |
| LIQUIDITYTYPE | Liquidity type | [TExtIntType](#eTExtIntType) | 1 | Order liquidity type - Internal liquidity or External quote |
| COMPLIANCEID | Тип ввода заявки | CHAR | 1 | Маркировка способа создания заявки |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security. For market orders must be empty. |
| QUANTITY | Lots | INTEGER, NOT NULL | 16 | Quantity, expressed in lots |
| HIDDEN | Lots hidden | INTEGER | 16 |  |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| ORDERVALUE | Order value | FIXED | 16.2 | Order value, expressed in the currency of settlement |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| ACTIVATIONTIME | Activation time | TIME | 6 | If not specified then the field should be filled with spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |


#### ORDER_AMEND - Amend order

Change parameters of an active order

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| ORDERNO | Order | INTEGER | 12 | Order ID in the Trading System |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CANCELORIGONREJECT | Withdraw the original order | [TYesNo](#eTYesNo) | 1 | Conditional or unconditional withdrawal of the original order. 'Y' - withdraw the old order, even if the new order will be rejected. 'N' - withdraw the old order only if the new order is successfully accepted by the system. |
| COMPLIANCEID | Тип ввода заявки | CHAR | 1 | Маркировка способа создания заявки |


#### QUOTE - Enter quote

Quote (negdeal order with no counterparty specified) entry

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Price | FLOAT | 17 | Price for one security |
| QUANTITY | Lots | INTEGER | 16 | Quantity, expressed in lots |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| WITHDRAWFLAG | Withdraw active orders | [TYesNo](#eTYesNo) | 1 | "Y" - withdraw active quotes of own firm having the same security ID and settlement code as in this order; "N" - do not withdraw any orders. |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |


#### REPORT - Enter a settlement instruction

Send a settlement instruction for several unsettled trades from the USTRADES table

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| NUMTRADES | Number of trades | INTEGER | 2 |  |
| CLEARINGTYPE | Type of clearing | [TClearingType](#eTClearingType) | 1 |  |
| TRADENO[+](#refs) | Trade # | INTEGER | 12 | Trade number in the Trading System |
| BUYSELL[+](#refs) | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |


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
| VALPOSITION | Initial value | FIXED | 16.2 | Initial value, expressed in the currency of settlement |


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
| PRICEBOUNDUP | Price deviation | FIXED | 9.2 | Price deviation from the current price (in percent) |
| PRICEBOUNDDOWN | Lower price bound | FIXED | 9.2 | Lower price bound for one security for orders (in percent from Last price) |
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
| GPOSVALLIMIT | Maximum gross value | FIXED | 16.2 | Maximum gross value, expressed in the currency of settlement |


#### SET_U_TRDACC_BOARD_RESTR - Set user Trdacc - Board Restrictions

Set or update user trade account restrictions by board

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| SMALIMITSOWNERTYPE | SMA limits owner type | [TSMALimitsOwnerType](#eTSMALimitsOwnerType) | 1 |  |
| USERID | User ID / Group ID | CHAR | 12 | User ID or group ID |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
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


#### WD_QUOTE - Withdraw quotes

Withdraw active (not fully matched) quotes. When several parameters are given then the logical AND operator is used.

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

Withdraw active (not yet accepted) settlement instructions. When several parameters are given then the logical AND operator is used.

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
The document is created with ASTSExplorer.exe 06.05.2024 11:45:37
