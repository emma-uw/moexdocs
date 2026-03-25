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

| [TABLE NEGDEALS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft18mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CPUSERALIAS](#ft18mo64) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [NEGDEALS](#t18m).CPUSERALIAS | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Псевдоним адресата |
| Description | Псевдоним пользователя, которому адресована заявка |
| Size | 12 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ONENEGDEAL](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft19mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CPUSERALIAS](#ft19mo64) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONENEGDEAL](#t19m).CPUSERALIAS | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Псевдоним адресата |
| Description | Псевдоним пользователя, которому адресована заявка |
| Size | 12 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ONEORDER](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft20mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#ft20mo76) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONEORDER](#t20m).COMPLIANCEID | Статус: Добавлено |
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


[Изменения в выходных полях](#ft21ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ID](#ft21ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft21ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERCOMPLIANCEID](#t21a).ID | Статус: Добавлено |
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

| OUT [ORDERCOMPLIANCEID](#t21a).DESCRIPTION | Статус: Добавлено |
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


[Изменения в выходных полях](#ft21mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#ft21mo76) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERS](#t21m).COMPLIANCEID | Статус: Добавлено |
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

| [TRANS AUCTION_MKT_ORDER](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa0mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#fa0mi11) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [AUCTION_MKT_ORDER](#a0m).COMPLIANCEID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| NOT NULL | Нет |
| VarBlock | Нет |

| [TRANS ORDER](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa24mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#fa24mi11) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [ORDER](#a24m).COMPLIANCEID | Статус: Добавлено |
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


[Изменения во входных полях](#fa25mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COMPLIANCEID](#fa25mi14) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [ORDER_AMEND](#a25m).COMPLIANCEID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип ввода заявки |
| Description | Маркировка способа создания заявки |
| Size | 1 |
| Type | CHAR |
| NOT NULL | Нет |
| VarBlock | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 30.01.2024 15:03:42
