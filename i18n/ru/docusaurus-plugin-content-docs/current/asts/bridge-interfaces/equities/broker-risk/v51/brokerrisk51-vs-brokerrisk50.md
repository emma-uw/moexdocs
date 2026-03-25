---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе BrokerRisk
sidebar_label: BrokerRisk · v50 → v51
---

﻿

# Изменения в интерфейсе BrokerRisk

[Показать все изменения](#nowhere)  


## Изменения в описании перечислимых типов

| [ENUM TDepAccType](#nowhere) | Статус: Изменено |
| --- | --- |


| Константа | Статус | Новое значение |
| --- | --- | --- |
| P | Добавлено | #4, "Ин. ном. держателя (без огр.)" |
| Q | Добавлено | #5, "Ин. ном. держателя (c огр.)" |
| R | Добавлено | #6, "Брокерский" |

## Изменения в описании таблиц

| [TABLE ASSETS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft1mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [FLOATINGRATEPCTRISKFACTOR](#ft1mo39) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ASSETS](#t1m).FLOATINGRATEPCTRISKFACTOR | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Коэффициент учета процентного риска |
| Size | 6.3 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE RMPOSTYPE](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft16mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft16mo1) | Изменено |  |  |  |  |  |  |  | + |  |  |  |  |
| 2 | [PARTIALPERCENTRISK](#ft16mo6) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RMPOSTYPE](#t16m).RMPOSTYPE | Статус: Изменено |
| --- | --- |

| Свойство | Новое значение | Старое значение |
| --- | --- | --- |
| Key | Да | Нет |

| OUT [RMPOSTYPE](#t16m).PARTIALPERCENTRISK | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Частичный учет процентного риска |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE TRANTYPES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft30mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CLEARINGPROC](#ft30mo4) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [RMPOSTYPE](#ft30mo5) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRANTYPES](#t30m).CLEARINGPROC | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Прекращение обязательств |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [TRANTYPES](#t30m).RMPOSTYPE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип открытой позиции |
| Description | Тип открытой позиции по активу в дате исполнения |
| Size | 1 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE TRDACC](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft31mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ENABLEGTTORDER](#ft31mo24) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRDACC](#t31m).ENABLEGTTORDER | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | GTT заявки |
| Description | Будут ли активные заявки данного ТКС, оставшиеся неисполненными в ОС, переходить в ВС |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 08.08.2024 18:27:15
