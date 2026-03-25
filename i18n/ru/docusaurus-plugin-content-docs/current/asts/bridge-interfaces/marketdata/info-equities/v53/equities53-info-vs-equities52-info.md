---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе Info
sidebar_label: Info · Equities v52 → v53
---

﻿

# Изменения в интерфейсе Info

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

| [TABLE SECURITIES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft12mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [WEEKENDSESSION](#ft12mo100) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t12m).WEEKENDSESSION | Статус: Добавлено |
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


[Изменения в выходных полях](#ft17mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft17mo8) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TESYSTIME](#t17m).TRADESESSIONDATE | Статус: Добавлено |
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

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 07.02.2025 10:55:08
