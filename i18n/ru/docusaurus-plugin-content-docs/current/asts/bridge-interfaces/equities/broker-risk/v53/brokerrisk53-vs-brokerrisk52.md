---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе BrokerRisk
sidebar_label: BrokerRisk · v52 → v53
---

﻿

# Изменения в интерфейсе BrokerRisk

[Показать все изменения](#nowhere)  


## Изменения в описании таблиц

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

| [TABLE RESYSTIME](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft15mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft15mo8) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RESYSTIME](#t15m).TRADESESSIONDATE | Статус: Добавлено |
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


[Изменения в выходных полях](#ft29mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [TRADESESSIONDATE](#ft29mo52) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRADES](#t29m).TRADESESSIONDATE | Статус: Добавлено |
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

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 06.02.2025 14:15:29
