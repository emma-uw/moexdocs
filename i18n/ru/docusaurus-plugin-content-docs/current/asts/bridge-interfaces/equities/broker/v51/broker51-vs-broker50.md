---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе Broker
sidebar_label: Broker · v50 → v51
---

﻿

# Изменения в интерфейсе Broker

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

| [TABLE NEGDEALS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft19mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#ft19mo78) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [NEGDEALS](#t19m).OPENREPOEVERGREENTERM | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период до исполнения второй части РЕПО |
| Description | Период до исполнения второй части сделки РЕПО с открытой датой |
| Size | 4 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE ONENEGDEAL](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft20mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#ft20mo78) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [ONENEGDEAL](#t20m).OPENREPOEVERGREENTERM | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период до исполнения второй части РЕПО |
| Description | Период до исполнения второй части сделки РЕПО с открытой датой |
| Size | 4 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE TRADES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft43mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#ft43mo78) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRADES](#t43m).OPENREPOEVERGREENTERM | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период до исполнения второй части РЕПО |
| Description | Период до исполнения второй части сделки РЕПО с открытой датой |
| Size | 4 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE TRDACC](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft48mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ENABLEGTTORDER](#ft48mo24) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [TRDACC](#t48m).ENABLEGTTORDER | Статус: Добавлено |
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

| [TABLE USTRADES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft57mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#ft57mo91) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [USTRADES](#t57m).OPENREPOEVERGREENTERM | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период до исполнения второй части РЕПО |
| Description | Период до исполнения второй части сделки РЕПО с открытой датой |
| Size | 4 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

## Изменения в описании транзакций

| [TRANS CCP_REPO_COMPLEX_NEGDEAL](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa3mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#fa3mi24) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [CCP_REPO_COMPLEX_NEGDEAL](#a3m).OPENREPOEVERGREENTERM | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период до исполнения второй части РЕПО |
| Description | Период до исполнения второй части сделки РЕПО с открытой датой |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | Нет |
| VarBlock | Нет |

| [TRANS CCP_REPO_NEGDEAL](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa4mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#fa4mi23) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [CCP_REPO_NEGDEAL](#a4m).OPENREPOEVERGREENTERM | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период до исполнения второй части РЕПО |
| Description | Период до исполнения второй части сделки РЕПО с открытой датой |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | Нет |
| VarBlock | Нет |

| [TRANS EXT_REPO_COMPLEX_NEGDEAL](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa17mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#fa17mi30) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [EXT_REPO_COMPLEX_NEGDEAL](#a17m).OPENREPOEVERGREENTERM | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период до исполнения второй части РЕПО |
| Description | Период до исполнения второй части сделки РЕПО с открытой датой |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | Нет |
| VarBlock | Нет |

| [TRANS EXT_REPO_NEGDEAL](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения во входных полях](#fa18mi)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [OPENREPOEVERGREENTERM](#fa18mi30) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| IN [EXT_REPO_NEGDEAL](#a18m).OPENREPOEVERGREENTERM | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Период до исполнения второй части РЕПО |
| Description | Период до исполнения второй части сделки РЕПО с открытой датой |
| Size | 4 |
| Type | INTEGER |
| NOT NULL | Нет |
| VarBlock | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 08.08.2024 18:25:52
