---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе Broker
sidebar_label: Broker · v53 → v54
---

﻿

# Изменения в интерфейсе Broker

[Показать все изменения](#nowhere)  


## Изменения в описании перечислимых типов

| [ENUM TRMCheckFlags](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Флаги проверки |
| Size | 1 |
| Type | ekCombo |


| Константа | Статус | Новое значение |
| --- | --- | --- |
|  | Добавлено | #0, "Все проверки", " " |
| U | Добавлено | #1, "Без проверки ЕЛ", "+" |
| C | Добавлено | #2, "Без проверок", "-" |

## Изменения в описании транзакций

| [TRANS COMPLEX_TRANSFER](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa5mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMCHECKFLAGS](#fa5mi22) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [COMPLEX_TRANSFER](#a5m).RMCHECKFLAGS | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Флаги проверки |
| Size | 1 |
| Type | CHAR |
| Enum | TRMCheckFlags |
| NOT NULL | Нет |
| VarBlock | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 25.04.2025 16:31:44
