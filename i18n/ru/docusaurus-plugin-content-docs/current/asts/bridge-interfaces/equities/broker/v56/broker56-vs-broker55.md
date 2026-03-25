---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе Broker
sidebar_label: Broker · v55 → v56
---

﻿

# Изменения в интерфейсе Broker

[Показать все изменения](#nowhere)  


## Изменения в описании перечислимых типов

| [ENUM TCSpecial](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Тип РК |
| Size | 1 |
| Type | ekCombo |


| Константа | Статус | Новое значение |
| --- | --- | --- |
| N | Добавлено | #0, "" |
| Y | Добавлено | #1, "Признак специального РК типа "C"", "С" |
| I | Добавлено | #2, "Признак специального РК типа "Ин"", "Ин" |

## Изменения в описании таблиц

| [TABLE ALL_TRADES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft0mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ZSPREAD](#ft0mo30) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ALL_TRADES](#t0m).ZSPREAD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред |
| Description | Z-спред, рассчитанный по цене сделки |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE BANKACC](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft3mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CSPECIAL](#ft3mo30) | Изменено |  |  |  |  |  | + |  |  |  |  |  |  |

| OUT [BANKACC](#t3m).CSPECIAL | Статус: Изменено |
| --- | --- |

| Свойство | Новое значение | Старое значение |
| --- | --- | --- |
| Enum | TCSpecial | TYesNo |

| [TABLE BONDSUBTYPE](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Подвид облигации |
| Description | Классификатор подвида облигаций |
| Updateable | Нет |
| ClearOnUpdate | Нет |
| SystemIndex | 0 |
[Изменения в выходных полях](#ft7ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [BONDSUBTYPE](#ft7ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft7ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [BONDSUBTYPE](#t7a).BONDSUBTYPE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Подвид облигации |
| Description | Классификатор подвида облигаций |
| Size | 2 |
| Type | INTEGER |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [BONDSUBTYPE](#t7a).DESCRIPTION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Описание |
| Size | 128 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE BONDTYPE](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Вид облигации |
| Description | Классификатор вида облигаций |
| Updateable | Нет |
| ClearOnUpdate | Нет |
| SystemIndex | 0 |
[Изменения в выходных полях](#ft8ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [BONDTYPE](#ft8ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft8ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [BONDTYPE](#t8a).BONDTYPE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Вид облигации |
| Description | Классификатор вида облигаций |
| Size | 2 |
| Type | INTEGER |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [BONDTYPE](#t8a).DESCRIPTION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Описание |
| Size | 128 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE EXT_ORDERBOOK](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft13mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ZSPREAD](#ft13mo11) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [CALLOPTIONZSPREAD](#ft13mo12) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [EXT_ORDERBOOK](#t13m).ZSPREAD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред |
| Description | Z-спред по цене котировки |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [EXT_ORDERBOOK](#t13m).CALLOPTIONZSPREAD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред к колл-опциону |
| Description | Z-спред к дате колл-опциона по цене котировки |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE NEGDEALS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft19mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [MATCHEDVALUE](#ft19mo80) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [PERCENTPERIOD](#ft19mo81) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [ZSPREAD](#ft19mo82) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [NEGDEALS](#t19m).MATCHEDVALUE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Исполненный объем |
| Description | Суммарный объем всех сделок данной заявки |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [NEGDEALS](#t19m).PERCENTPERIOD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период процентных выплат |
| Size | 4 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [NEGDEALS](#t19m).ZSPREAD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред |
| Description | Z-спред по цене заявки |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ONENEGDEAL](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft20mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [MATCHEDVALUE](#ft20mo80) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [PERCENTPERIOD](#ft20mo81) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [ZSPREAD](#ft20mo82) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONENEGDEAL](#t20m).MATCHEDVALUE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Исполненный объем |
| Description | Суммарный объем всех сделок данной заявки |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [ONENEGDEAL](#t20m).PERCENTPERIOD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период процентных выплат |
| Size | 4 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [ONENEGDEAL](#t20m).ZSPREAD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред |
| Description | Z-спред по цене заявки |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ONEORDER](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft21mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [MATCHEDVALUE](#ft21mo80) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ZSPREAD](#ft21mo81) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONEORDER](#t21m).MATCHEDVALUE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Исполненный объем |
| Description | Суммарный объем всех сделок данной заявки |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [ONEORDER](#t21m).ZSPREAD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред |
| Description | Z-спред по цене заявки |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ORDERS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft23mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [MATCHEDVALUE](#ft23mo80) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ZSPREAD](#ft23mo81) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERS](#t23m).MATCHEDVALUE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Исполненный объем |
| Description | Суммарный объем всех сделок данной заявки |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [ORDERS](#t23m).ZSPREAD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред |
| Description | Z-спред по цене заявки |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE SECURITIES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft36mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ZSPREADATPREVWAPRICE](#ft36mo86) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [BONDTYPE](#ft36mo87) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [BONDSUBTYPE](#ft36mo88) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [ZSPREAD](#ft36mo102) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [ZSPREADATWAPRICE](#ft36mo103) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [CALLOPTIONZSPREAD](#ft36mo104) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t36m).ZSPREADATPREVWAPRICE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред по оценке пред. дня |
| Description | Z-спред по оценке предыдущего торгового дня |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECURITIES](#t36m).BONDTYPE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Вид облигации |
| Description | Классификатор вида облигаций |
| Size | 2 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECURITIES](#t36m).BONDSUBTYPE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Подвид облигации |
| Description | Классификатор подвида облигаций |
| Size | 2 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECURITIES](#t36m).ZSPREAD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред |
| Description | Z-спред по цене сделки |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECURITIES](#t36m).ZSPREADATWAPRICE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред по оценке |
| Description | Z-спред по средневзвешенной цене |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECURITIES](#t36m).CALLOPTIONZSPREAD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред к колл-опциону по срвзв. |
| Description | Z-спред к дате колл-опциона по средневзвешенной цене |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE TRADES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft44mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [PERCENTPERIOD](#ft44mo80) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ZSPREAD](#ft44mo81) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRADES](#t44m).PERCENTPERIOD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период процентных выплат |
| Size | 4 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [TRADES](#t44m).ZSPREAD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Z-спред |
| Description | Z-спред, рассчитанный по цене сделки |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE USTRADES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft58mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [PERCENTPERIOD](#ft58mo93) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [PLANNEDINTEREST](#ft58mo94) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [USTRADES](#t58m).PERCENTPERIOD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период процентных выплат |
| Size | 4 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [USTRADES](#t58m).PLANNEDINTEREST | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Сумма будущих процентных выплат |
| Description | Сумма всех будущих невыплаченных процентных выплат |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

## Изменения в описании транзакций

| [TRANS CCP_REPO_COMPLEX_NEGDEAL](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa3mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [PERCENTPERIOD](#fa3mi25) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [CCP_REPO_COMPLEX_NEGDEAL](#a3m).PERCENTPERIOD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период процентных выплат |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | Нет |
| VarBlock | Нет |

| [TRANS CCP_REPO_NEGDEAL](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa4mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [PERCENTPERIOD](#fa4mi24) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [CCP_REPO_NEGDEAL](#a4m).PERCENTPERIOD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период процентных выплат |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | Нет |
| VarBlock | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 05.12.2025 12:05:54
