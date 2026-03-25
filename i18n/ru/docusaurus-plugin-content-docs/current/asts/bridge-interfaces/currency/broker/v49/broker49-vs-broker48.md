---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе Broker
sidebar_label: Broker · v48 → v49
---

﻿

# Изменения в интерфейсе Broker

[Показать все изменения](#nowhere)  


## Изменения в описании таблиц

| [TABLE ONEORDER](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft17mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#ft17mo76) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONEORDER](#t17m).COMPLIANCEID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ORDERCOMPLIANCEID](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Справочник маркировки заявок по типу ввода |
| Updateable | Нет |
| ClearOnUpdate | Нет |
| SystemIndex | 0 |


[Изменения в выходных полях](#ft18ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ID](#ft18ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft18ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERCOMPLIANCEID](#t18a).ID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [ORDERCOMPLIANCEID](#t18a).DESCRIPTION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Описание |
| Size | 128 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ORDERS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft18mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#ft18mo76) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERS](#t18m).COMPLIANCEID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

## Изменения в описании транзакций

| [TRANS ORDER](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa9mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#fa9mi11) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [ORDER](#a9m).COMPLIANCEID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| NOT NULL | Нет |
| VarBlock | Нет |

| [TRANS ORDER_AMEND](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa10mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#fa10mi14) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [ORDER_AMEND](#a10m).COMPLIANCEID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| NOT NULL | Нет |
| VarBlock | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 29.01.2024 11:38:43
