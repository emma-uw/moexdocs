---
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Изменения в интерфейсе Broker
sidebar_label: Broker · v49 → v50
---

﻿

# Изменения в интерфейсе Broker

[Показать все изменения](#nowhere)  


## Изменения в описании таблиц

| [TABLE CLIENTCODETYPE](#nowhere) | Статус: Добавлено |
| --- | --- |


| Свойство | Новое значение |
| --- | --- |
| Caption | Типы клиентов |
| Description | Справочник типов кодов клиентов |
| Updateable | Нет |
| ClearOnUpdate | Нет |
| SystemIndex | 0 |


[Изменения в выходных полях](#ft7ao)

| № | Поле | Статус | Pos | Caption | Descr | Size | Type | Enum | DefVal | Key | SecCode | !NULL | VarBlock | NotSharp |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | [ID](#ft7ao1) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | [DESCRIPTION](#ft7ao2) | Добавлено |  |  |  |  |  |  |  |  |  |  |  |  |

| OUT [CLIENTCODETYPE](#t7a).ID | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Тип клиента |
| Description | Форма идентификации клиента |
| Size | 2 |
| Type | CHAR |
| Key | Да |
| SecCode | Нет |
| NotSharp | Нет |

| OUT [CLIENTCODETYPE](#t7a).DESCRIPTION | Статус: Добавлено |
| --- | --- |

| Свойство | Новое значение |
| --- | --- |
| Caption | Описание |
| Size | 128 |
| Type | CHAR |
| Key | Нет |
| SecCode | Нет |
| NotSharp | Нет |

Документ создан при помощи ExIfcCmp.dll (ASTSExplorer.exe) 06.05.2024 11:42:31
