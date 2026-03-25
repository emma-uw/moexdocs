---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: RFS — Request for stream
sidebar_label: RFS — Request for stream
---

## Information objects of market 'RFS' - 'Request for stream'

---


### Enumerated Types

#### TAuctionBuySell - Направленность аукциона/котировок (size: 1, type: ekGroup)

Перечень допустимых значений, определяющих направленность аукционов и котировок

| Constant | Value | Description |
| --- | --- | --- |
| B | B | Buy |
| S | S | Sell |
|  |  | Любая |


#### TAuctionStatus - Auction status (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| A | Active | Auction started |
| M | Matched | Deal done |
| C | Cancelled | Auction cancelled |
| V |  | Validating |
| R | Rejected | Order rejected |
| F | Finished | Auction finished |


#### TBoolInt - Logical type (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| 0 |  | No |
| 1 | Yes | Yes |


#### TBuySell - Direction (size: 1, type: ekGroup)

Available quote directions

| Constant | Value | Description |
| --- | --- | --- |
| B | B | Buy |
| S | S | Sell |


#### TLanguage - Language of Trading System messages (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| R | Rus | Russian |
| E | Eng | English |
| U | Ua | Ukrainian |


#### TMakerTaker - Кем выставлена котировка (size: 1, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| T | Тейкер | Котировка тейкера |
| M | Мейкер | Котировка мейкера |


#### TRfsEventType - События RFS (size: 2, type: ekCombo)

| Constant | Value | Description |
| --- | --- | --- |
| 4 |  | Старт торгов |
| 5 |  | Окончание торгов |
| x |  | Открытие аукционов |
| y |  | Окончание аукционов |


#### TRFSQuoteStatus - Статус котировки (size: 1, type: ekGroup)

Перечень возможных значений статуса котировки

| Constant | Value | Description |
| --- | --- | --- |
| O | Act | Active |
| W | - | Withdrawn |
| R | -TS | Rejected by the Trading System |
| C | -C | Cancelled by the Trading System |
| E | -М | Ошибка |
| B | +К | Buy |
| S | +П | Sell |
| V | ? | Валидируется |
| H | * | Обрабатывается |
| F | -F | Завершено по времени |


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
| D | Deleted | Deleted |


#### TTradingStatus - Security trading status (size: 1, type: ekGroup)

List of available security trading statuses

| Constant | Value | Description |
| --- | --- | --- |
| N | N | Not traded right now |
| B | B | Break |
| T |  | Trading session |
| Q |  | Постановка квот |


#### TTrdAccType - Trading account type (size: 1, type: ekGroup)

List of available types of trading accounts

| Constant | Value | Description |
| --- | --- | --- |
| M | Own | Own account |
| N | Client | Client account (individual) |
| O | Client | Client account (multiple) |
| R | Own | Own account of non-credit organizations |
| S | TM | Trust management account of non-credit organizations |
| T | TM | Trust management account |
| V |  | Clients of levels 2 and 3 |


#### TYesNo - Logical operator (size: 1, type: ekCheck)

| Constant | Value | Description |
| --- | --- | --- |
| N |  | No |
| Y | Yes | Yes |

---


## Interface 'Broker' - 'RFS users interface, v.1'

---


### Tables

#### AUCTIONS - RFS auctions (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **AUCTIONID** | **Auction ID** | **INTEGER** | **12** | **Auction identifier** |
| USERID | User ID | CHAR | 12 | Код участника - инициатора аукциона |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| OWNSTATUS | Статус для инициатора | [TAuctionStatus](#eTAuctionStatus) | 1 | Статус аукциона для инициатора. Должен траслироваться только инициатору аукциона |
| WINSTATUS | Статус для мейкера | [TAuctionStatus](#eTAuctionStatus) | 1 | Статус аукциона. Должен траслироваться только мейкеру-победителю в аукционе |
| PUBSTATUS | Публичный статус | [TAuctionStatus](#eTAuctionStatus) | 1 | Статус аукциона для публикации всем участникам торгов |
| STARTTIME | Start | TIME | 6 | Auction start time |
| ENDTIME | Stop | TIME | 6 | Auction stop time |
| DIRECTION | Направленность | [TAuctionBuySell](#eTAuctionBuySell) | 1 | Направленность аукциона |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| FULLAMOUNT | FA | [TYesNo](#eTYesNo) | 1 | Признак, что инициатор аукциона является конечным потребителем заявленного объема. |
| ALIAS | Tag | CHAR | 12 | Псевдоним инициатора аукциона |
| BESTBID | Лучшая цена покупки | FLOAT | 10 | Best bid price |
| BESTOFFER | Лучшая цена продажи | FLOAT | 10 | Best offer price |
| PRICECHANGES | Количество изменений лучших котировок | INTEGER | 5 | Счетчик количества изменений лучших котировок с момента начала аукциона |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| ANONYMOUS | Anonymous | [TYesNo](#eTYesNo) | 1 | Не раскрывать имя инициатора аукциона |
| MATCHEDQUOTENO | Исполненная котировка № | INTEGER | 12 | Идентификационный номер котировки в Торговой Системе RFS, которая привела к сделке |


#### BOARDS - Trading boards (updateable)

Table contains information on trading boards. The term "Trading Board", as we use it, means a set of trading rules, including the trading methods used (i.e. order-driven market, quote-driven market, call-auction-type trading etc.), order types allowed, trading schedule applied, settlement rules and procedures applied etc

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **BOARDID** | **Trading board ID** | **CHAR** | **4** | **Trading board ID** |
| BOARDNAME | Board | CHAR | 30 | Trading board name |
| LATNAME | English name | CHAR | 30 | Board name in English |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not allowed" |


#### CURRENCY - Currencies (not updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **CURRCODE** | **Currency of settlements** | **CHAR** | **4** | **Currency code of the settlements** |
| CURRENCYNAME | Name | CHAR | 30 | Наименование валюты |


#### FIRMS - Firms (updateable)

Table lists all the firms

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **FIRMID** | **Firm code** | **CHAR** | **12** | **Firm ID** |
| FIRMNAME | Firm | CHAR | 30 | Short firm name |
| TYPE | Firm type | INTEGER | 10 | Тип фирмы |
| INN | TIN | CHAR | 12 | Taxpayer Identification Number |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not allowed" |


#### QUOTEBOOK - Aggregated quotebook (updateable, clear on update)

Таблица содержит информацию о курсах котировок (отдельно на покупку и на продажу) по данному аукциону

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| AUCTIONID | Auction ID | INTEGER | 12 | Auction identifier |


| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **AUCTIONID** | **Auction ID** | **INTEGER** | **12** | **Auction identifier** |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Quote direction** |
| **PRICE** | **Price** | **FLOAT** | **10** | **Buy or Sell price for one security** |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |


#### QUOTES - Котировки (updateable)

Таблица содержит информацию о собственных котировках участника

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **QUOTENO** | **Quote number** | **INTEGER** | **12** | **Quote ID number in RFS trading system** |
| TIME | Время котировки | TIME | 6 | Время регистрации котировки в торговой системе |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the order was registered at the Trading System, microseconds |
| STATUS | Status | [TRFSQuoteStatus](#eTRFSQuoteStatus) | 1 | Текущий статус котировки |
| AUCTIONID | Auction ID | INTEGER | 12 | Auction identifier |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| BUYSELL | Направленность | [TAuctionBuySell](#eTAuctionBuySell) | 1 | Quote direction |
| BUYPRICE | Buy price | FLOAT | 10 | Instrument buy price |
| SELLPRICE | Sell price | FLOAT | 10 | Instrument sell price |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the order was entered |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| USERID | User ID | CHAR | 12 | ID of the user who has entered the order |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| LIFETIME | Order lifetime | TIME | 6 | Time when the order will be automatically withdrawn |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| EXTMATCHRESULT | Информация о регистрации заявки в режиме RFSM | CHAR | 255 | Информация о результате регистрации внесистемной заявки в режиме RFSM в торговой системе REBUS |
| UPDATETIME | Update time | TIME | 6 | Time when the order was updated last time (matched, cancelled) |
| UPDATE_MICROSECONDS | Update time microseconds | INTEGER | 6 | Time when the order was updated last time (matched, cancelled), microseconds |
| MAKERTAKERFLAG | Кем выставлена | [TMakerTaker](#eTMakerTaker) | 1 | Признак роли участника, выставившего котировку |


#### SECURITIES - General market data (updateable)

Справочник финансовых инструментов

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **SECBOARD** | **Board** | **CHAR** | **4** | **Board ID for the security** |
| **SECCODE[*](#refs)** | **Security ID** | **CHAR** | **12** | **Security ID** |
| SECNAME | Name | CHAR | 30 | Name of the security |
| LATNAME | English name | CHAR | 30 | Name of the security in English |
| FACEVALUE | Face value | FLOAT | 17 | Face value of one Security, expressed in the currency, in which the Security is nominated |
| FACEUNIT | Currency of instrument | CHAR | 4 | Currency in which security is denominated |
| REMARKS | Remarks | CHAR | 8 | Примечание |
| SHORTNAME | Security | CHAR | 10 | Краткое наименование |
| LOTSIZE | Lot size | INTEGER | 8 | Number of securities in one lot |
| MINSTEP | Order's minimum price step | FLOAT | 10 | Minimum price increment for orders, not applicable to orders at WA price |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not allowed" |
| DECIMALS | Number of decimals | INTEGER | 2 | Number of decimals in the Value field (is used to format PRICE-type fields) |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| SETTLECODE | Settlement code | CHAR | 12 | Settlement code for the trade |
| TRADINGSTATUS | Trading status | [TTradingStatus](#eTTradingStatus) | 1 | Security trading status |
| MINQTY | Minimum value | INTEGER | 16 | Minimum auction value, lots |
| MINPRICE | Нижняя граница курса | FLOAT | 16 | Минимально возможная цена по данному инструменту |
| MAXPRICE | Верхняя граница курса | FLOAT | 16 | Максимально возможная цена по данному инструменту |
| BASEPRICE | Base price | FLOAT | 10 | Базовый курс |


#### SYSTIME - Trading System time (updateable, clear on update)

Table consists of one row with Trading System current date and time. This information is usually used to synchronize client time with the server time.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| TIME | Time | TIME | 6 | Time on the Trading System server |
| DATE | Date | DATE | 8 | Date on the Trading System server |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time on the Trading System server, microseconds |


#### TRADES - Trades (updateable)

Таблица содержит информацию о сделках на покупку/продажу.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRADENO** | **Trade number** | **INTEGER** | **12** | **Trade number in the Trading System** |
| **BUYSELL** | **Direction** | [**TBuySell**](#eTBuySell) | **1** | **Quote direction** |
| QUOTENO | Котировка № | INTEGER | 12 | Номер котировки, на основании которой заключена сделка |
| TRADETIME | Time | TIME | 6 | Time when the trade was registered by the Trading System |
| MICROSECONDS | Microseconds | INTEGER | 6 | Time when the trade was registered by the Trading System, microseconds |
| AUCTIONID | Auction ID | INTEGER | 12 | Auction identifier |
| USERID | User ID | CHAR | 12 | ID of the user who concluded the trade |
| FIRMID | Firm | CHAR | 12 | ID of the trading firm on whose behalf the trade is registered |
| ACCOUNT | Trading account | CHAR | 12 | Trading account |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| CURRENCYID | Settlement currency | CHAR | 4 | Settlement currency |
| PRICE | Price | FLOAT | 10 | Курс валютного инструмента |
| QUANTITY | Lots | INTEGER | 16 | Trade volume, expressed in lots |
| SETTLEDATE | Settlement date | DATE | 8 | Trade settlement date |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CLIENTCODE | Client code | CHAR | 12 | Client code specified by the trader when entering an order |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |


#### TRADETIME - Trading schedule (updateable)

Table contains information on Time Events triggering changes in the trading status of market, trading board, group of traded instruments or security

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TIME** | **Time** | **TIME** | **6** | **Time the event is scheduled to execute at** |
| **BOARDID** | **Board** | **CHAR** | **4** | **ID of a trading board the event is concerned with** |
| **SECCODE[*](#refs)** | **Security** | **CHAR** | **12** | **Security ID** |
| **EVENTTYPE** | **Событие RFS** | [**TRfsEventType**](#eTRfsEventType) | **2** | **Тип события RFS** |
| STATUS | Status | [TTimeStatus](#eTTimeStatus) | 1 | Event status - flag showing whether the event has already happened or not |


#### TRDACC - Trading accounts (updateable)

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **TRDACCID** | **Trading account** | **CHAR** | **12** | **Trading account number** |
| **FIRMID** | **Firm** | **CHAR** | **12** | **Firm ID** |
| TRDACCTYPE | Trading account type | [TTrdAccType](#eTTrdAccType) | 1 | Trading account type |
| DESCRIPTION | Description | CHAR | 30 | Описание |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not allowed" |


#### USERS - Users (updateable)

Table contains information on users registered in the Trading System as being employees of a current trading firm. Each row corresponds to one such user.

No input fields  

| Output field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| **USERID** | **User ID** | **CHAR** | **12** | **Код участника** |
| USERNAME | User name | CHAR | 30 | Наименование |
| FIRMID | Firm | CHAR | 12 | Firm ID |
| STATUS | Status | [TStatus](#eTStatus) | 1 | Flag: "Trading operations allowed/not allowed" |
| USERTYPE | Type of user | INTEGER | 10 |  |
| IPGATEWAY | Gateway | CHAR | 20 |  |
| IPCLIENT | Workstation | CHAR | 20 |  |
| RFSLP | Liquidity provider | [TYesNo](#eTYesNo) | 1 |  |
| LOGGEDON | Active | [TBoolInt](#eTBoolInt) | 1 |  |


---


### Transactions

#### AUCTION_CANCEL - Отмена аукциона

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| AUCTIONID | Auction ID | INTEGER | 12 | Auction identifier |


#### AUCTION_START - Старт нового аукциона

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| DIRECTION | Направленность аукциона | [TAuctionBuySell](#eTAuctionBuySell) | 1 | Направленность аукциона |
| QUANTITY | Lots | INTEGER, NOT NULL | 16 | Volume, expressed in lots |
| DURATION | Auction duration | INTEGER | 12 |  |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| FULLAMOUNT | FA | [TYesNo](#eTYesNo) | 1 | Full amount |
| ANONYMOUS | Anonymous | [TYesNo](#eTYesNo) | 1 | Не раскрывать имя инициатора аукциона |


#### AUCTION_TAKE - Заключение сделки по аукциону

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| AUCTIONID | Auction ID | INTEGER | 12 | Auction identifier |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| BUYSELL | Direction | [TBuySell](#eTBuySell) | 1 | Quote direction |
| QUANTITY | Lots | INTEGER | 16 | Volume, expressed in lots |
| PRICE | Price | FLOAT | 10 |  |


#### CHANGE_LANGUAGE - Change the language of the Trading System messages

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| LANGUAGEID | Language code | [TLanguage](#eTLanguage) | 1 | Language code. Available codes: R - Russian, E - English |


#### QUOTES_WD - Withdraw quotes

Withdraw active (not completely matched) quotes. When several parameters are given then the logical AND operator is used.

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| QUOTENO | Quote number | INTEGER | 12 | Number of a quote being withdrawn |
| AUCTIONID | Auction ID | INTEGER | 12 | Auction identifier |
| ACCOUNT | Trading account | CHAR | 12 | Withdraw orders by a trading account |
| SECBOARD | Board | CHAR | 4 | Security board ID. Must be specified together with Security ID. |
| SECCODE[*](#refs) | Security | CHAR | 12 | Withdraw orders by Security ID |
| USERID | Trader | CHAR | 12 | Withdraw orders by User ID |
| FIRMID | Firm | CHAR | 12 | Withdraw orders by Firm ID |
| EXTREF | External user ID | CHAR | 12 | ID of an external user who submitted an order, or spaces |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |


#### QUOTE_CREATE - Enter quote

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| AUCTIONID | Auction ID | INTEGER | 12 | Auction identifier |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| BUYSELL | Направленность аукциона | [TAuctionBuySell](#eTAuctionBuySell) | 1 | Quote direction |
| BUYPRICE | Курс покупки | FLOAT | 10 |  |
| SELLPRICE | Курс продажи | FLOAT | 10 |  |
| QUANTITY | Lots | INTEGER, NOT NULL | 16 | Volume, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| LIFETIME | Order lifetime | TIME | 6 | Time when the order will be automatically withdrawn |


#### QUOTE_PLACE - Замена котировки

Ввод новой котировки с замещением предыдущей.
Предыдущая котировка поставленная этим пользователем будет безусловно снята

| Input field | Description | Type | Size | Remarks |
| --- | --- | --- | --- | --- |
| AUCTIONID | Auction ID | INTEGER | 12 | Auction identifier |
| ACCOUNT | Trading account | CHAR | 12 | Trading account number |
| SECBOARD | Board | CHAR | 4 | Board ID for the security |
| SECCODE[*](#refs) | Security | CHAR | 12 | Security ID |
| BUYSELL | Направленность аукциона | [TAuctionBuySell](#eTAuctionBuySell) | 1 | Quote direction |
| BUYPRICE | Курс покупки | FLOAT | 10 |  |
| SELLPRICE | Курс продажи | FLOAT | 10 |  |
| QUANTITY | Lots | INTEGER, NOT NULL | 16 | Volume, expressed in lots |
| BROKERREF | Broker reference | CHAR | 20 | Additional information entered by the trading firm (usually - [client code]/[client instruction number]) |
| EXTREF | External user ID | CHAR | 12 | A reference field which may be used as a back-feed by an external system. May contain, for example, a user ID of the external system user who entered the original order into that external system. |
| CLIENTCODE | Client code | CHAR | 12 | Client code assigned by the broker |
| LIFETIME | Order lifetime | TIME | 6 | Time when the order will be automatically withdrawn |


#### USER_HEARTBEAT - HEARTBEAT

User heartbeat. Minimum interval - 1 second.

No input fields  


Key fields are marked in **bold**.  
Fields that contain security code are marked with asterisk (*).  
Repeated field groups are marked with plus sign (+).

---
The document is created with ASTSExplorer.exe 28.08.2020 18:39:02
