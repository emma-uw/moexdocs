---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе Info
sidebar_label: Info · Equities v55 → v56
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

| [TABLE BONDSUBTYPE](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Подвид облигации |
| Description | Классификатор подвида облигаций |
| Updateable | Нет |
| ClearOnUpdate | Нет |
| SystemIndex | 0 |
[Изменения в выходных полях](#ft4ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [BONDSUBTYPE](#ft4ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft4ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [BONDSUBTYPE](#t4a).BONDSUBTYPE | Статус: Добавлено |
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

| OUT [BONDSUBTYPE](#t4a).DESCRIPTION | Статус: Добавлено |
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
[Изменения в выходных полях](#ft5ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [BONDTYPE](#ft5ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft5ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [BONDTYPE](#t5a).BONDTYPE | Статус: Добавлено |
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

| OUT [BONDTYPE](#t5a).DESCRIPTION | Статус: Добавлено |
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


[Изменения в выходных полях](#ft6mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ZSPREAD](#ft6mo11) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [CALLOPTIONZSPREAD](#ft6mo12) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [EXT_ORDERBOOK](#t6m).ZSPREAD | Статус: Добавлено |
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

| OUT [EXT_ORDERBOOK](#t6m).CALLOPTIONZSPREAD | Статус: Добавлено |
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

| [TABLE ORDERBOOK](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft9mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CALLOPTIONYIELD](#ft9mo10) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ZSPREAD](#ft9mo11) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [CALLOPTIONZSPREAD](#ft9mo12) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ORDERBOOK](#t9m).CALLOPTIONYIELD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Доходность к колл-опциону |
| Description | Доходность к дате колл-опциона по цене котировки |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [ORDERBOOK](#t9m).ZSPREAD | Статус: Добавлено |
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

| OUT [ORDERBOOK](#t9m).CALLOPTIONZSPREAD | Статус: Добавлено |
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

| [TABLE SECURITIES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft12mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ZSPREADATPREVWAPRICE](#ft12mo86) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [BONDTYPE](#ft12mo87) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [BONDSUBTYPE](#ft12mo88) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [ZSPREAD](#ft12mo102) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [ZSPREADATWAPRICE](#ft12mo103) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [CALLOPTIONZSPREAD](#ft12mo104) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t12m).ZSPREADATPREVWAPRICE | Статус: Добавлено |
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

| OUT [SECURITIES](#t12m).BONDTYPE | Статус: Добавлено |
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

| OUT [SECURITIES](#t12m).BONDSUBTYPE | Статус: Добавлено |
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

| OUT [SECURITIES](#t12m).ZSPREAD | Статус: Добавлено |
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

| OUT [SECURITIES](#t12m).ZSPREADATWAPRICE | Статус: Добавлено |
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

| OUT [SECURITIES](#t12m).CALLOPTIONZSPREAD | Статус: Добавлено |
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

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 05.12.2025 12:07:59
