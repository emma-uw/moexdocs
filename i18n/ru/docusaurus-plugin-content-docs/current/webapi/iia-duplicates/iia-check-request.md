---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Дубли ИИА — схема запроса
sidebar_label: Схема запроса
---

Auto-generated from **`iia_check_request.xsd`**. [Download XSD](/webapi/IIAduplicates/iia_check_request.xsd) · [FTP](ftp://ftp.moex.com/pub/ClientsAPI/WebAPI/IIAduplicates/iia_check_request.xsd). Regenerate: `scripts/xsd_outline_to_md.py`.

## Global elements

| Name | Type | Ref | minOccurs | maxOccurs | Notes |
| --- | --- | --- | --- | --- | --- |
| `DOC_REQUISITES` | `DOC_REQUISITES_Type` | — | 1 | 1 | Блок информации о документе |
| `MICEX_DOC` | — | — | 1 | 1 | Корневой элемент (root element) XML документа. |
| `CLIENT` | — | — | 1 | 1 | Блок данных о клиенте |

## Named simple types

### `DATE_FORMAT`

Формат даты типа "01.12.2015"

**Restriction base:** `xs:date`

### `DOCNO_Type`

Тип: "Уникальный учетный номер документа в системе электронного документооборота"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 1 |
| `maxLength` | 12 |
| `pattern` | [A-Z,0-9,//]{1,12} |

### `DOCTYPEID_Type`

Тип: "Идентификатор типа документа в системе электронного документооборота"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 1 |
| `maxLength` | 12 |

### `FIRMID_Type`

Тип: "Идентификатор фирмы"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 1 |
| `maxLength` | 12 |

### `FIRMNAME_Type`

Тип: "Краткое наименование фирмы"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 1 |
| `maxLength` | 30 |

### `PASSPORT_RF_TYPE`

Тип: "№ и серия паспорта гражданина РФ"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `length` | 12 |
| `pattern` | [0-9][0-9][' '][0-9][0-9][' '][0-9][0-9][0-9][0-9][0-9][0-9] |

### `PASSPORT_USSR_TYPE`

Тип: "№ и серия паспорта гражданина СССР"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 11 |
| `maxLength` | 16 |
| `pattern` | [ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ][ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ]?[ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ]?[ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ]?[ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ]?[ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ]?[-][АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ][АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ][' '][0-9][0-9][0-9][0-9][0-9][0-9] |

### `REMARKS_Type`

Тип: "Примечание к документу в системе электронного документооборота"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 1 |
| `maxLength` | 120 |

### `UNIFIRMID_Type`

Тип: "Уникод фирмы"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `length` | 10 |
| `pattern` | [0-9]{10,10} |

## Named complex types

### `DOC_REQUISITES_Type`

Реквизиты документа в системе электронного документооборота

**Attributes**

| Name | Type | Use | Default | Fixed | Notes |
| --- | --- | --- | --- | --- | --- |
| `DOC_DATE` | `DATE_FORMAT` | required |  |  | Дата формирования файла |
| `DOC_TIME` | `xs:time` | optional |  |  | Время формирования файла |
| `DOC_NO` | `DOCNO_Type` | required |  |  | Уникальный учетный номер документа в системе электронного документооборота |
| `DOC_TYPE_ID` | `` | required |  |  | Идентификатор типа документа в системе электронного документооборота |
| `SENDER_ID` | `UNIFIRMID_Type` | required |  |  | Идентификатор отправителя |
| `SENDER_NAME` | `FIRMNAME_Type` | optional |  |  | Краткое наименование отправителя |
| `RECEIVER_ID` | `FIRMID_Type` | required |  |  | Идентификатор получателя |
| `REMARKS` | `REMARKS_Type` | optional |  |  | Текст примечания к файлу |

### `INDIVIDUAL_PERS_Type`

Данные для идентификации физического лица

**Content model**

_choice_

| Element | Type | Ref | minOccurs | maxOccurs | Notes |
| --- | --- | --- | --- | --- | --- |
| `PASSPORT_RF` | — | — | 1 | 1 | Данные паспорта гражданина РФ (в формате: две цифры + пробел + две цифры + пробел + 6 цифр) |
| `PASSPORT_USSR` | — | — | 1 | 1 | Данные паспорта гражданина СССР (в формате: до 6 римских цифр (в латинском регистре) + '-' +2 буквы кирилицей + пробел + 6 цифр) |
