---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе BrokerRisk
sidebar_label: BrokerRisk · v49 → v50
---

﻿

# Изменения в интерфейсе BrokerRisk

[Показать все изменения](#nowhere)  


## Изменения в описании таблиц

| [TABLE ASSETS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft1mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [GCPOOLCOLLATERALPERCENT](#ft1mo38) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ASSETS](#t1m).GCPOOLCOLLATERALPERCENT | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Частичный прием в обеспечение в ИП |
| Description | Значение в процентах от размера активов, внесенных в имущественный пул, которое принимается в обеспечение |
| Size | 6.3 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE RMPOSTYPE](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Типы открытых позиций |
| Description | Типы открытых позиций по активу в дате исполнения |
| Updateable | Нет |
| ClearOnUpdate | Нет |
| SystemIndex | 0 |


[Изменения в выходных полях](#ft16ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft16ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft16ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [LATDESCRIPTION](#ft16ao3) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [CALCPERCENTRISK](#ft16ao4) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [ASCOLLATERAL](#ft16ao5) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RMPOSTYPE](#t16a).RMPOSTYPE | Статус: Добавлено |
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

| OUT [RMPOSTYPE](#t16a).DESCRIPTION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Описание |
| Size | 50 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RMPOSTYPE](#t16a).LATDESCRIPTION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Англ. описание |
| Size | 50 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RMPOSTYPE](#t16a).CALCPERCENTRISK | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Расчет процентного риска |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RMPOSTYPE](#t16a).ASCOLLATERAL | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Учет в качестве обеспечения |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE RM_HOLD](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft17mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft17mo16) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RM_HOLD](#t17m).RMPOSTYPE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип открытой позиции |
| Description | Тип открытой позиции по активу в дате исполнения |
| Size | 1 |
| Type | CHAR |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE RM_POSN](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft20mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft20mo14) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RM_POSN](#t20m).RMPOSTYPE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип открытой позиции |
| Description | Тип открытой позиции по активу в дате исполнения |
| Size | 1 |
| Type | CHAR |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE RM_PRICERANGE_FIRM](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft22mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COLLATERAL](#ft22mo9) | Удалено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [ZERO_RTL](#ft22mo10) | Удалено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RM_PRICERANGE_FIRM](#t22m).COLLATERAL | Статус: Удалено |
| --- | --- |

| Свойство | Старое значение |
| --- | --- |
| Caption | Прием в обеспечение |
| Description | Признак приема актива в обеспечение |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNoSpace |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RM_PRICERANGE_FIRM](#t22m).ZERO_RTL | Статус: Удалено |
| --- | --- |

| Свойство | Старое значение |
| --- | --- |
| Caption | Признак обнуления нижней границы |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 08.05.2024 15:02:09
