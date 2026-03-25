---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: MDepAux04 — Дополнительные функции ТС рынка ДКО, v.04
sidebar_label: MDepAux04 — Дополнительные функции ТС рынка ДКО, v.04
---

## Information objects of market 'MDepAux04' - 'Дополнительные функции ТС рынка ДКО, v.04'

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


#### TAgreementType - Agreement type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| O | O | Other |
| R | M | Minimum balance agreement |
| S | S | Specification |
| G | G | General agreement |
|  |  | Not set |


#### TBuySell - Order direction (size: 1, type: ekGroup)

Available order directions

| Constant | Value | Description |
| --- | --- | --- |
| B | B | Raise funds |
| S | S | Place funds |


#### TCPListType - Partner list type (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | Allow list | Allow list |
| D | Deny list | Deny list |


#### TLanguage - Language of Trading System messages (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| R | Rus | Russian |
| E | Eng | English |


#### TQuoteStatus - Quote status (size: 1, type: ekGroup)

Available quote statuses

| Constant | Value | Description |
| --- | --- | --- |
| O | Act | Active |
| W | - | Withdrawn |
| R | -TS | Rejected by the Trading System |
| C | -C | Cancelled by the Trading System |
| D | -D | Cancelled by Trading System on user's disconnect (COD) |
| I | Counter negdeals | Waiting for counter negdeals |
| J | Closed | Inactive (withdrawn) with matched orders |


#### TSecStatus - Security status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A |  | Operations are allowed |
| S | S | Operations are suspended |
| N | B | Suspended for trading, settlement is allowed |


#### TTradingStatus - Security trading status (size: 1, type: ekGroup)

List of available security trading statuses

| Constant | Value | Description |
| --- | --- | --- |
| N | N | Not traded right now |
| T |  | Trading session |


#### TYesNo - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| N |  | No |
| Y | Yes | Yes |

---


## Interface 'Broker' - 'Users interface, auxiliary functions, v.04'

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


#### NEGDEALQUOTELINK - Quotes and negdeals correspondence (updateable)

Table contains list of quote IDs with correspondent negdeal IDs

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| QUOTENO | Quote number | INTEGER | 12 | Quote ID number |
| ORDERNO | Order | INTEGER | 12 | Order ID |
| LIFETIME | Order lifetime | TIME | 6 | Time when the order will be automatically withdrawn |


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
| CPLISTID | ID of list | INTEGER | 12 | ID of the counterparty list |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the quote was registered at the Trading System, microseconds |
| UPDATETIME | Update time | TIME | 6 | Time when the quote was updated last time (cancelled) |
| UPDATE_MICROSECONDS | Update time microseconds | INTEGER | 6 | Time when the quote was updated last time (cancelled), microseconds |
| VALUE | Value | FIXED | 16.2 | Value, expressed in the currency of settlement |
| REPOTERM | Deposit term | INTEGER | 4 | Deposit term expressed in calendar days. The term starts on the next day after the first deposit leg settlement and ends on the day of the second deposit leg settlement inclusive. |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| AMOUNTINDICATOR | Full amount indicator | [TYesNo](#eTYesNo) | 1 | Indicates that minimum order value equals to the sum of funds being placed |
| SHOWBESTBID | Show best bid for quote | [TYesNo](#eTYesNo) | 1 | Show best price of bid orders for this quote |
| BESTBID | Best bid rate, % | FLOAT | 17 | Best price of bid orders expressed in percents |
| AGREEMENTTYPE | Agreement type | [TAgreementType](#eTAgreementType) | 1 |  |
| CLOSEONTRADEVALUE | Close quote automatically | [TYesNo](#eTYesNo) | 1 | Close quote automatically when designated trade value is achieved |


#### QUOTEBOOK - Quotes (updateable)

Таблица содержит информацию о Котировках РПС/Намерениях, поданных участниками торгов в Систему торгов с начала текущего дня. Каждая квота представлена в таблице одной строкой.

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
| VALUE | Value | FIXED | 16.2 | Value, expressed in the currency of settlement |
| REPOTERM | Deposit term | INTEGER | 4 | Deposit term expressed in calendar days. The term starts on the next day after the first deposit leg settlement and ends on the day of the second deposit leg settlement inclusive. |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| AMOUNTINDICATOR | Full amount indicator | [TYesNo](#eTYesNo) | 1 | Indicates that minimum order value equals to the sum of funds being placed |
| BESTBID | Best bid rate, % | FLOAT | 17 | Best price of bid orders expressed in percents |
| AGREEMENTTYPE | Agreement type | [TAgreementType](#eTAgreementType) | 1 |  |


#### QUOTE_FIRM - Firms (updateable)

This table contains additional information about the participating firms

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| CPLISTID | ID of list | INTEGER | 12 | ID of the counterparty list |


#### QUOTE_SEC - Securities (updateable)

The table contains current quote-based market information for securities.

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
| TRADINGSTATUS | Trading status | [TTradingStatus](#eTTradingStatus) | 1 | Security trading status |
| SECTYPE | Type of security | CHAR | 1 | Type of security |


#### REJECTED_QUOTE - Rejected quotes (updateable)

Table contains information on quotes submitted by current firm and rejected by counterparties

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| QUOTENO | Quote number | INTEGER | 12 | Quote ID number |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| REJECTTIME | Reject time | TIME | 6 | Time when quote was rejected |


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


#### QUOTE_AMEND - Amend quotes

Amend previously entered quotes

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| QUOTENO | Quote number | INTEGER | 12 | Quote ID number |
| SHOWBESTBID | Show best bid for quote | [TYesNo](#eTYesNo) | 1 | Show best price of bid orders for this quote |


#### QUOTE_DEPOSIT - Enter deposit quote

It is used to enter deposit quotes into the Trading system.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Order direction - "Buy / Sell" |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| PRICE | Deposit rate, % | FLOAT | 17 | Deposit rate, expressed in % |
| QUOTEVAL | Value | FIXED | 16.2 | Value, expressed in the currency of settlement |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| REPOTERM | Deposit term | INTEGER | 4 | Deposit term expressed in calendar days. The term starts on the next day after the first deposit leg settlement and ends on the day of the second deposit leg settlement inclusive. |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |
| CPLISTID | ID of list | INTEGER | 12 | ID of the counterparty list |
| CPFIRMID | Counterparty | CHAR | 12 | Counterparty firm |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - client instruction number) |
| TRDACCID | Trading account | CHAR | 12 | Trading account number |
| AMOUNTINDICATOR | Full amount indicator | [TYesNo](#eTYesNo) | 1 | Indicates that minimum order value equals to the sum of funds being placed |
| SHOWBESTBID | Show best bid for quote | [TYesNo](#eTYesNo) | 1 | Show best price of bid orders for this quote |
| AGREEMENTTYPE | Agreement type | [TAgreementType](#eTAgreementType) | 1 |  |
| CLOSEONTRADEVALUE | Close quote automatically | [TYesNo](#eTYesNo) | 1 | Close quote automatically when designated trade value is achieved |


#### QUOTE_DEPOSIT_NEGDEAL - Enter negotiated deal deposit order

Enter negotiated deal deposit order

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
| REPORATE | Deposit rate, % | FLOAT | 17 | Deposit rate, expressed in % |
| REPOORDERVALUE | Deposit value | FIXED | 16.2 | Deposit value in the currency of settlement |
| REPOTERM | Deposit term | INTEGER | 4 | Deposit term expressed in calendar days. The term starts on the next day after the first deposit leg settlement and ends on the day of the second deposit leg settlement inclusive. |
| ACCEPTEDQUOTENO | ID of a quote to accept | INTEGER | 12 | Number of quote being accepted (if the order is sent in reply to the quote), otherwise fill with spaces |
| TRDACCFIRMID | Firm for trading account | CHAR | 12 | Firm identificator for trading account |
| BENCHMARKID | Benchmark | CHAR | 12 | Benchmark identifier |
| LIFETIME | Order lifetime | TIME | 6 | Time when the order will be automatically withdrawn |


#### QUOTE_REJECT - Reject quotes

Reject received quotes

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| QUOTENO | Quote number | INTEGER | 12 | Quote ID number |


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
The document is created with ASTSExplorer.exe 05.08.2024 16:39:36
