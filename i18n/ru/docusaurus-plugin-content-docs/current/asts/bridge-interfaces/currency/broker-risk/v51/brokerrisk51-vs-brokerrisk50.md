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


| Константа | Статус | Старое значение |
| --- | --- | --- |
| I | Удалено | #1, "Клиентский" |
| O | Удалено | #2, "Корреспондентский" |
| D | Удалено | #3, "Счет по умолчанию для валютного рынка" |
| T | Удалено | #4, "Счет доверительного управления" |
| S | Удалено | #5, "Счет доверительного управления" |
| V | Удалено | #6, "Клиенты 2-го и 3-го уровней", "Клиенты 2, 3 ур." |

| [ENUM TPosnGroup](#nowhere) | Статус: Изменено |
| --- | --- |


| Константа | Статус | Старое значение |
| --- | --- | --- |
| T | Удалено | #3, "Позиции по сделкам", "Сделки" |
| S | Удалено | #4, "Позиции под исполнение", "Исп." |
| P | Удалено | #5, "Позиции по валютам", "Валюты" |
| X | Удалено | #7, "", "Промежуточный налог" |

## Изменения в описании таблиц

| [TABLE ASSETS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft0mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [FLOATINGRATEPCTRISKFACTOR](#ft0mo39) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ASSETS](#t0m).FLOATINGRATEPCTRISKFACTOR | Статус: Добавлено |
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


[Изменения в выходных полях](#ft11mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft11mo1) | Изменено |  |  |  |  |  |  |  | + |  |  |  |  |
| 2 | [PARTIALPERCENTRISK](#ft11mo6) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RMPOSTYPE](#t11m).RMPOSTYPE | Статус: Изменено |
| --- | --- |

| Свойство | Новое значение | Старое значение |
| --- | --- | --- |
| Key | Да | Нет |

| OUT [RMPOSTYPE](#t11m).PARTIALPERCENTRISK | Статус: Добавлено |
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

| [TABLE RM_HOLD_DETL](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Обязательства и требования по активам |
| Updateable | Да |
| ClearOnUpdate | Нет |
| SystemIndex | 0 |
[Изменения во входных полях](#ft12ai)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [FIRMID](#ft12ai2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
[Изменения в выходных полях](#ft12ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [FIRMID](#ft12ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ACCOUNT](#ft12ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [BANKACCID](#ft12ao3) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [ASSET1](#ft12ao6) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [ASSET2](#ft12ao7) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [DATE](#ft12ao8) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [ASSET1CREDITBALANCE](#ft12ao9) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [ASSET1DEBITBALANCE](#ft12ao10) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [ASSET1VALUE](#ft12ao11) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [ASSET1VALUECREDIT](#ft12ao12) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 | [ASSET1VALUEDEBIT](#ft12ao13) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 | [ASSET1VALUEBUY](#ft12ao14) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 | [ASSET1VALUESELL](#ft12ao15) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | [ASSET2CREDITBALANCE](#ft12ao16) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | [ASSET2DEBITBALANCE](#ft12ao17) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | [ASSET2VALUE](#ft12ao18) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | [ASSET2VALUECREDIT](#ft12ao19) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 | [ASSET2VALUEDEBIT](#ft12ao20) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 | [ASSET2VALUEBUY](#ft12ao21) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 20 | [ASSET2VALUESELL](#ft12ao22) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [RM_HOLD_DETL](#t12a).FIRMID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Фирма |
| Description | Идентификатор фирмы |
| Size | 12 |
| Type | CHAR |
| NOT NULL | Нет |
| VarBlock | Нет |

| OUT [RM_HOLD_DETL](#t12a).FIRMID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Фирма |
| Description | Идентификатор фирмы |
| Size | 12 |
| Type | CHAR |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ACCOUNT | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Торговый счет |
| Description | Номер торгового счета |
| Size | 12 |
| Type | CHAR |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).BANKACCID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Расчетный код |
| Description | Расчетный код в клиринговой организации |
| Size | 12 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET1 | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Актив1 (инструмент) |
| Size | 12 |
| Type | CHAR |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET2 | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Актив2 (для расчетов) |
| Size | 12 |
| Type | CHAR |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).DATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата расчетов |
| Size | 8 |
| Type | DATE |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET1CREDITBALANCE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Входящие требования (актив1) |
| Description | Требования на начало дня по активу1 |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET1DEBITBALANCE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Входящие обязательства (актив1) |
| Description | Обязательства на начало дня по активу1 |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET1VALUE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Нетто (актив1) |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET1VALUECREDIT | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Требования (актив1) |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET1VALUEDEBIT | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Обязательства (актив1) |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET1VALUEBUY | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Требования в заявках (актив1) |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET1VALUESELL | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Обязательства в заявках (актив1) |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET2CREDITBALANCE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Входящие требования (актив2) |
| Description | Требования на начало дня по активу2 |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET2DEBITBALANCE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Входящие обязательства (актив2) |
| Description | Обязательства на начало дня для актива2 |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET2VALUE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Нетто (актив2) |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET2VALUECREDIT | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Требования (актив2) |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET2VALUEDEBIT | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Обязательства (актив2) |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET2VALUEBUY | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Требования в заявках (актив2) |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_HOLD_DETL](#t12a).ASSET2VALUESELL | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Обязательства в заявках (актив2) |
| Size | 16.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 05.09.2024 16:48:13
