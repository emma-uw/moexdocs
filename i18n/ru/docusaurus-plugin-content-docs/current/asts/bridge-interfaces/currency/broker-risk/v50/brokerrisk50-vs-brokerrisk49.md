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

| [TABLE RMPOSTYPE](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Типы открытых позиций |
| Description | Типы открытых позиций по активу в дате исполнения |
| Updateable | Нет |
| ClearOnUpdate | Нет |
| SystemIndex | 0 |


[Изменения в выходных полях](#ft11ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft11ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft11ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [LATDESCRIPTION](#ft11ao3) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [CALCPERCENTRISK](#ft11ao4) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [ASCOLLATERAL](#ft11ao5) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RMPOSTYPE](#t11a).RMPOSTYPE | Статус: Добавлено |
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

| OUT [RMPOSTYPE](#t11a).DESCRIPTION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Описание |
| Size | 50 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RMPOSTYPE](#t11a).LATDESCRIPTION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Англ. описание |
| Size | 50 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [RMPOSTYPE](#t11a).CALCPERCENTRISK | Статус: Добавлено |
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

| OUT [RMPOSTYPE](#t11a).ASCOLLATERAL | Статус: Добавлено |
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

| [TABLE RM_POSN](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft12mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [RMPOSTYPE](#ft12mo14) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RM_POSN](#t12m).RMPOSTYPE | Статус: Добавлено |
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


[Изменения в выходных полях](#ft14mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [COLLATERAL](#ft14mo9) | Удалено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [RM_PRICERANGE_FIRM](#t14m).COLLATERAL | Статус: Удалено |
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

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 08.05.2024 17:16:27
