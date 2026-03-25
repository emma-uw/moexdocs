---
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: IIA duplicates — response schema
sidebar_label: Response schema
---

Auto-generated from **`iia_check_response.xsd`**. [Download XSD](/webapi/IIAduplicates/iia_check_response.xsd) · [FTP](ftp://ftp.moex.com/pub/ClientsAPI/WebAPI/IIAduplicates/iia_check_response.xsd). Regenerate: `scripts/xsd_outline_to_md.py`.

## Global elements

| Name | Type | Ref | minOccurs | maxOccurs | Notes |
| --- | --- | --- | --- | --- | --- |
| `DOC_REQUISITES` | `DOC_REQUISITES_Type` | — | 1 | 1 | Блок информации о документе |
| `MICEX_DOC` | — | — | 1 | 1 | Корневой элемент (root element) XML документа. |
| `CLIENTS` | — | — | 1 | 1 | Блок данных ответа |

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

### `FIRMFULLNAME_Type`

Тип: "Полное наименование фирмы"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 1 |
| `maxLength` | 200 |

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

### `RESCODE_Type`

Тип "Результат обработки: 0 - ОК иначе код ошибки"

**Restriction base:** `xs:integer`

### `RESMESSAGEE_Type`

Тип "Текстовое описание результата обработки"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `maxLength` | 255 |

### `UNIFIRMID_Type`

Тип: "Уникод фирмы"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `length` | 10 |
| `pattern` | [0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9] |

### `YES_NO_Type`

Тип: " "Y"-YES, "N"-NO"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `pattern` | [N]\|[Y] |
| `enumeration` | Y |
| `enumeration` | N |

## Named complex types

### `DOC_REQUISITES_Type`

Реквизиты документа в системе электронного документооборота

**Attributes**

| Name | Type | Use | Default | Fixed | Notes |
| --- | --- | --- | --- | --- | --- |
| `DOC_DATE` | `DATE_FORMAT` | required |  |  | Дата формирования файла |
| `DOC_TIME` | `xs:time` | optional |  |  | Время формирования файла |
| `DOC_NO` | `` | required |  |  | Уникальный учетный номер документа в системе электронного документооборота |
| `DOC_TYPE_ID` | `` | required |  |  | Идентификатор типа документа в системе электронного документооборота |
| `SENDER_ID` | `` | required |  |  | Идентификатор отправителя |
| `SENDER_NAME` | `FIRMNAME_Type` | optional |  |  | Краткое наименование отправителя |
| `RECEIVER_ID` | `UNIFIRMID_Type` | required |  |  | Идентификатор получателя |
| `REMARKS` | `REMARKS_Type` | optional |  |  | Текст примечания к файлу |
