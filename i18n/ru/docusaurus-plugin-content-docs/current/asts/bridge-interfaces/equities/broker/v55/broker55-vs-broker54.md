---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе Broker
sidebar_label: Broker · v54 → v55
---

﻿

# Изменения в интерфейсе Broker

[Показать все изменения](#nowhere)  


## Изменения в описании перечислимых типов

| [ENUM TIndexIndicator](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Служебный тип |
| Size | 1 |
| Type | ekGroup |


| Константа | Статус | Новое значение |
| --- | --- | --- |
| 0 | Добавлено | #0, "SecNormal" |
| 1 | Добавлено | #1, "SecIndex" |

| [ENUM TMktLimit](#nowhere) | Статус: Изменено |
| --- | --- |


| Константа | Статус | Новое значение |
| --- | --- | --- |
| W | Добавлено | #3, "Заявка по среднему лимиту", "С" |

## Изменения в описании таблиц

| [TABLE SECDERIV](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Производные инструменты |
| Description | Производные финансовые инструменты |
| Updateable | Нет |
| ClearOnUpdate | Нет |
| SystemIndex | 0 |


[Изменения в выходных полях](#ft33ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [SECINDEXFLAG](#ft33ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [SECBOARD](#ft33ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | [SECCODE](#ft33ao3) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | [DERIVTYPE](#ft33ao4) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | [LSECBOARD](#ft33ao6) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | [LSECCODE](#ft33ao7) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | [QUANTITY](#ft33ao8) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 | [DORDER](#ft33ao9) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 | [SETTLECODE](#ft33ao10) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | [DREVERSE](#ft33ao11) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECDERIV](#t33a).SECINDEXFLAG | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Бум/Инд. |
| Size | 1 |
| Type | INDEXFLAG |
| Enum | TIndexIndicator |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECDERIV](#t33a).SECBOARD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Режим производного инструмента |
| Description | Идентификатор режима торгов для производного финансового инструмента |
| Size | 4 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECDERIV](#t33a).SECCODE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Производный инструмент |
| Description | Идентификатор производного финансового инструмента |
| Size | 12 |
| Type | CHAR |
| Key | Нет |
| SecCode | Да |
| NotSharp | Нет |

| OUT [SECDERIV](#t33a).DERIVTYPE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип производного инструмента |
| Size | 1 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECDERIV](#t33a).LSECBOARD | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Режим, доп. огр. |
| Description | Идентификатор режима торгов для инструмента дополнительного ограничения |
| Size | 4 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECDERIV](#t33a).LSECCODE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Базовый инструмент |
| Description | Идентификатор базового финансового инструмента |
| Size | 12 |
| Type | CHAR |
| Key | Нет |
| SecCode | Да |
| NotSharp | Нет |

| OUT [SECDERIV](#t33a).QUANTITY | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Лоты |
| Description | Количество ценных бумаг, выраженное в лотах |
| Size | 16 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECDERIV](#t33a).DORDER | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Порядковый номер |
| Description | Порядковый номер сделки с базовым инструментом |
| Size | 1 |
| Type | INTEGER |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECDERIV](#t33a).SETTLECODE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Код расчетов |
| Description | Код расчетов по сделке с базовым инструментом |
| Size | 12 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [SECDERIV](#t33a).DREVERSE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Обратное направление |
| Description | Обратное направление сделки с базовым инструментом |
| Size | 1 |
| Type | CHAR |
| Enum | TYesNo |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

| [TABLE SECURITIES](#nowhere) | Статус: Изменено |
| --- | --- |


[Изменения в выходных полях](#ft35mo)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [MAINSESSIONWAPRICE](#ft35mo101) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [SECURITIES](#t35m).MAINSESSIONWAPRICE | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Оценка за основную сессию |
| Description | Средневзвешенная цена за основную сессию |
| Size | 17 |
| Type | FLOAT |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 26.08.2025 1:03:25
