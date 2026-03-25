---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе Broker
sidebar_label: Broker · v52 → v53
---

﻿

# Изменения в интерфейсе Broker

[Показать все изменения](#nowhere)  


## Изменения в описании таблиц

| [TABLE ALL_TRADES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft0mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft0mo28) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [TRADEDATE](#ft0mo29) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ALL_TRADES](#t0m).TRADESESSIONDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата торговой сессии |
| Description | Дата торговой сессии, в которой была заключена сделка |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [ALL_TRADES](#t0m).TRADEDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата сделки |
| Description | Календарная дата заключения сделки |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE BANKACC](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft3mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [WEEKENDSESSION](#ft3mo32) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [BANKACC](#t3m).WEEKENDSESSION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Доступность в дополнительной сессии выходного дня |
| Description | Флаг допуска РК до торгов в дополнительной сессии выходного дня |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE FIRMS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft14mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [WEEKENDSESSION](#ft14mo15) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [FIRMS](#t14m).WEEKENDSESSION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Доступность в дополнительной сессии выходного дня |
| Description | Флаг допуска фирмы до торгов в дополнительной сессии выходного дня |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE NEGDEALS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft19mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft19mo79) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [NEGDEALS](#t19m).TRADESESSIONDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата торговой сессии |
| Description | Дата торговой сессии, в которой была зарегистрирована заявка |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ONENEGDEAL](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft20mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft20mo79) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONENEGDEAL](#t20m).TRADESESSIONDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата торговой сессии |
| Description | Дата торговой сессии, в которой была зарегистрирована заявка |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ONEORDER](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft21mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft21mo78) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ENTRYDATE](#ft21mo79) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONEORDER](#t21m).TRADESESSIONDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата торговой сессии |
| Description | Дата торговой сессии, в которой была зарегистрирована заявка |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [ONEORDER](#t21m).ENTRYDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата регистрации |
| Description | Календарная дата регистрации заявки |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ORDERS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft23mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft23mo78) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ENTRYDATE](#ft23mo79) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERS](#t23m).TRADESESSIONDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата торговой сессии |
| Description | Дата торговой сессии, в которой была зарегистрирована заявка |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [ORDERS](#t23m).ENTRYDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата регистрации |
| Description | Календарная дата регистрации заявки |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE QUOTES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft26mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft26mo25) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ENTRYDATE](#ft26mo26) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [QUOTES](#t26m).TRADESESSIONDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата торговой сессии |
| Description | Дата торговой сессии, в которой была зарегистрирована заявка |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [QUOTES](#t26m).ENTRYDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата регистрации |
| Description | Календарная дата регистрации заявки |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE SECURITIES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft35mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [WEEKENDSESSION](#ft35mo100) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t35m).WEEKENDSESSION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Доступность в дополнительной сессии выходного дня |
| Description | Флаг допуска бумаги до торгов в дополнительной сессии выходного дня |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE TESYSTIME](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft42mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft42mo8) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TESYSTIME](#t42m).TRADESESSIONDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата торговой сессии |
| Description | Дата текущей торговой сессии |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE TRADES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft43mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft43mo79) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRADES](#t43m).TRADESESSIONDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата торговой сессии |
| Description | Дата торговой сессии, в которой была заключена сделка |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE USTRADES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft57mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft57mo92) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [USTRADES](#t57m).TRADESESSIONDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата торговой сессии |
| Description | Дата торговой сессии, в которой была заключена сделка |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 06.02.2025 14:09:56
