---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе Broker
sidebar_label: Broker · v51 → v52
---

﻿

# Изменения в интерфейсе Broker

[Показать все изменения](#nowhere)  


## Изменения в описании таблиц

| [TABLE CLIENTCODES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft7mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CATEGORY](#ft7mo14) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [CLIENTCODES](#t7m).CATEGORY | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Категория клиента |
| Size | 20 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE EXT_ORDERBOOK](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft13mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CALLOPTIONYIELD](#ft13mo10) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [EXT_ORDERBOOK](#t13m).CALLOPTIONYIELD | Статус: Добавлено |
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

| [TABLE SECACCINT](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft32mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [IMPLIEDFLAG](#ft32mo8) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECACCINT](#t32m).IMPLIEDFLAG | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Прогнозное значение |
| Size | 1 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE SECURITIES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft35mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [CALLOPTIONDATE](#ft35mo85) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [CALLOPTIONYIELD](#ft35mo98) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [CALLOPTIONDURATION](#ft35mo99) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t35m).CALLOPTIONDATE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дата колл-опциона |
| Description | Дата колл-опциона |
| Size | 8 |
| Type | DATE |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECURITIES](#t35m).CALLOPTIONYIELD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Доходность к колл-опциону по срвзв. |
| Description | Доходность к дате колл-опциона по средневзвешенной цене |
| Size | 9.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECURITIES](#t35m).CALLOPTIONDURATION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Дюрация к колл-опциону |
| Description | Дюрация к дате колл-опциона, исходя из доходности по средневзвешенной цене / рыночной, если нет средневзвешенной |
| Size | 7.2 |
| Type | FIXED |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE UNDERWRITERS](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft52mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ISDEFAULT](#ft52mo4) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [UNDERWRITERS](#t52m).ISDEFAULT | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Андеррайтер по умолчанию |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 06.12.2024 11:08:10
