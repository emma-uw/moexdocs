---
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
format: md
title: Справочник схемы MoexClients
sidebar_label: MoexClients (таблицы)
---

Auto-generated from **`MoexClients.xsd`**. [Download XSD](/webapi/ClientRegistration/MoexClients.xsd) · [FTP](ftp://ftp.moex.com/pub/ClientsAPI/WebAPI/ClientRegistration/MoexClients.xsd). Regenerate: `scripts/xsd_outline_to_md.py`.

## Global elements

| Name | Type | Ref | minOccurs | maxOccurs | Notes |
| --- | --- | --- | --- | --- | --- |
| `CLIENT_CODE` | — | — | 1 | 1 | Блок данных идентификации клиента |
| `CLIENT_CODE_MAIN` | `CLIENT_CODE_MAIN_Type` | — | 1 | 1 | Блок данных идентификации клиента-брокера |
| `DOC_REQUISITES` | `DOC_REQUISITES_Type` | — | 1 | 1 | Блок информации о документе |
| `REPRESENTATIVE_PERS` | `REPRESENTATIVE_PERS_Type` | — | 1 | 1 | Блок данных с идентификацией законного представителя клиента |
| `MICEX_DOC` | — | — | 1 | 1 | Корневой элемент (root element) XML документа. |
| `CLIENTS` | — | — | 1 | 1 | Блок данных отчета. |
| `CLIENT` | — | — | 1 | 1 | Блок данных о клиенте |
| `CLIENT_MARKETS` | — | — | 1 | 1 | Блок данных идентификации клиента на каждом из рынков |
| `CLIENT_MARKETS_MAIN` | `CLIENT_MARKETS_MAIN_Type` | — | 1 | 1 | Блок данных идентификации клиента-брокера на рынке |
| `CLIENT_INFO` | — | — | 1 | 1 | Блок данных с информацией о клиенте |
| `CLIENT_SIMPLE` | — | — | 1 | 1 | Блок данных о клиентах участника или субброкера |
| `CLIENT_DU` | — | — | 1 | 1 | Блок данных об учредителях доверительного управления, в интересах которых Клиент Участника выступает в качестве управляющего |
| `CLIENT_PF` | — | — | 1 | 1 | Блок данных о фондах, в интересах которых Участник или клиент Участника, выступает в качестве Управляющего |

## Named simple types

### `BANKLICENSE_Type`

Тип: "Номер банковской лицензии"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 1 |
| `maxLength` | 6 |
| `pattern` | [0-9]{1,6} |

### `BIC_TYPE`

Банковский идентификационный код

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 8 |
| `maxLength` | 9 |
| `pattern` | [0-9]{8,9} |

### `CATEGORY_TYPE`

Категория клиента

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `maxLength` | 5 |

### `CLIENTCODEDESCR_Type`

Тип: "Описание для краткого кода клиента"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 1 |
| `maxLength` | 200 |
| `pattern` | [a-zA-Z0-9]{1,200} |

### `CLIENTCODE_Type`

Тип: "Краткий код клиента"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 1 |
| `maxLength` | 12 |
| `pattern` | [a-zA-Z0-9_]{1,12} |

### `CLIENTOPERATION_Type`

Тип: "Операция над клиентом"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `length` | 1 |
| `enumeration` | A |
| `enumeration` | U |
| `enumeration` | L |
| `enumeration` | R |
| `enumeration` | M |
| `enumeration` | D |

### `COUNTRYCODE_Type`

Тип: "Код страны"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `length` | 3 |

### `CROSSTRADES_TYPE`

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `enumeration` | Y |
| `enumeration` | N |
| `enumeration` | P |
| `enumeration` | X |
| `enumeration` | U |
| `enumeration` | K |

### `CURRENCYID_Type`

Тип: "Идентификатор валюты"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `maxLength` | 3 |
| `minLength` | 1 |

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

### `FOREIGN_DOC_TYPE`

Тип документа иностранноого гражданина

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `length` | 1 |
| `enumeration` | 6 |
| `enumeration` | 7 |

### `Float20.6_Type`

Тип: "Вещественное число 20.6"

**Restriction base:** `xs:decimal`

| Facet | Value |
| --- | --- |
| `fractionDigits` | 6 |
| `totalDigits` | 20 |

### `INN_LEGAL_Type`

Тип: "ИНН юридического лица"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `length` | 10 |
| `pattern` | [0-9]{10} |

### `INN_PHIS_Type`

Тип: "ИНН физического лица"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `length` | 12 |
| `pattern` | [0-9]{12} |

### `KIO_TYPE`

Тип: "КИО"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 4 |
| `maxLength` | 20 |
| `pattern` | [0]{3}[0-9a-zA-Zа-яА-Я._#/ -]{1,17} |
| `pattern` | [0-9a-zA-Z._#/-]{7,10} |

### `MARKETID_Type`

Тип: "Идентификатор рынка"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 2 |
| `maxLength` | 4 |
| `enumeration` | CU |
| `enumeration` | SE |
| `enumeration` | FO |
| `enumeration` | PF |
| `enumeration` | CO |
| `enumeration` | DE |

### `PASSPORT_RF_TYPE`

Тип: "№ и серия паспорта гражданина РФ"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `length` | 12 |
| `pattern` | [0-9]{2}[ ][0-9]{2}[ ][0-9]{6} |

### `PASSPORT_USSR_TYPE`

Тип: "№ и серия паспорта гражданина СССР"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 11 |
| `maxLength` | 16 |
| `pattern` | [ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ][ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ]?[ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ]?[ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ]?[ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ]?[ABCDEFGHIJKLMNOPQRSTUVWXYZАВСЕНКМОРТХ]?[-][АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ][АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ][ ][0-9][0-9][0-9][0-9][0-9][0-9] |

### `REMARKS_Type`

Тип: "Примечание к документу в системе электронного документооборота"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `minLength` | 1 |
| `maxLength` | 120 |

### `RISKLEVEL_TYPE`

Категория уровня риска клиента

**Restriction base:** `xs:integer`

| Facet | Value |
| --- | --- |
| `enumeration` | 0 |
| `enumeration` | 1 |
| `enumeration` | 2 |
| `enumeration` | 3 |
| `enumeration` | 4 |

### `TRD_RESTR`

Тип: "Возможность осуществления операций (сделок) с резидентами"

**Restriction base:** `xs:integer`

| Facet | Value |
| --- | --- |
| `enumeration` | 1 |
| `enumeration` | 2 |

### `UNIFIRMID_Type`

Тип: "Уникод фирмы"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `length` | 10 |
| `pattern` | [0-9]{10} |

### `YES_NO_Type`

Тип: " "Y"-YES, "N"-NO"

**Restriction base:** `xs:string`

| Facet | Value |
| --- | --- |
| `enumeration` | Y |
| `enumeration` | N |

## Named complex types

### `CLIENT_CODE_MAIN_Type`

Данные для идентификации клиента-брокера

**Attributes**

| Name | Type | Use | Default | Fixed | Notes |
| --- | --- | --- | --- | --- | --- |
| `UniClientCode` | `CLIENTCODE_Type` | optional |  |  | Единый краткий код Клиента |

**Content model**

_sequence_

| Element | Type | Ref | minOccurs | maxOccurs | Notes |
| --- | --- | --- | --- | --- | --- |
| — | — | `CLIENT_MARKETS_MAIN` | 0 | 1 |  |

### `CLIENT_CODE_Type`

Данные для идентификации клиента

**Attributes**

| Name | Type | Use | Default | Fixed | Notes |
| --- | --- | --- | --- | --- | --- |
| `UniClientCode` | `CLIENTCODE_Type` | optional |  |  | Единый краткий код Клиента |

**Content model**

_sequence_

| Element | Type | Ref | minOccurs | maxOccurs | Notes |
| --- | --- | --- | --- | --- | --- |
| — | — | `CLIENT_MARKETS` | 0 | unbounded |  |

### `CLIENT_MARKETS_MAIN_Type`

Данные для идентификации клиента-брокера на рынке

**Attributes**

| Name | Type | Use | Default | Fixed | Notes |
| --- | --- | --- | --- | --- | --- |
| `ClientCode` | `CLIENTCODE_Type` | required |  |  | Краткий код клиента |
| `MarketId` | `MARKETID_Type` | required |  |  | Идентификатор рынка. Возможные значения: SE - Фондовый рынок ПАО Московская Биржа; CU - Валютный рынок и рынок драгоценн |

### `CLIENT_MARKETS_Type`

Данные для идентификации клиента на каждом из рынков

**Attributes**

| Name | Type | Use | Default | Fixed | Notes |
| --- | --- | --- | --- | --- | --- |
| `ClientCode` | `CLIENTCODE_Type` | required |  |  | Краткий код клиента |
| `MarketId` | `MARKETID_Type` | required |  |  | Идентификатор рынка. Возможные значения: SE - Фондовый рынок ПАО Московская Биржа; CU - Валютный рынок и рынок драгоценн |
| `isIISContract` | `YES_NO_Type` | optional |  |  | С клиентом заключен договор на ведение индивидуального инвестиционного счета |
| `isCrossTrades` | `CROSSTRADES_TYPE` | optional |  |  | Разрешить совершение кросс-сделок для указанного рынка. Этот параметр переопределяет для указанного рынка значение парам |
| `ClientCodeDescr` | `` | optional |  |  | Наименование для краткого кода клиента |
| `isMainGroupDU` | `YES_NO_Type` | optional | N |  | Если этот параметр установлен в Y, то данный краткий код клиента на указанном рынке выступает в качестве управляющего дл |
| `NumPortfolio` | `` | optional |  |  | Номер портфеля для ДУ нереза |
| `NdsPayer` | `` | optional |  |  | Только для рынка "УРОЖАЙ". Плательщик НДС: 1 – плательщик 0 – не плательщик |
| `CoCategory` | `` | optional |  |  | Только для рынка "УРОЖАЙ". Категория клиента: 1 – Сельхозтоваропроизводитель 2 – Имущественный клиент 3 – Безимущественн |
| `irc` | `` | optional |  |  | Код получателя дохода (КПД)- IRC - income recipient code (ID ФПД) буквенно-числовой код для обезличенной передачи информ |
| `NSDClientCode` | `` | optional |  |  | Код зарегистрированного в НРД клиента Участника |
| `Chap3RateDvca` | `` | optional |  |  | Применяемая ставка по дивидендам US-бумаг для клиента Участника по главе 3 |
| `Chap3RateIntr` | `` | optional |  |  | Применяемая ставка по купонным доходам US-бумаг для клиента Участника по главе 3 |
| `Chap4Status` | `` | optional |  |  | Статус клиента Участника по главе 4 |
| `isFond_NPF_Reserv` | `YES_NO_Type` | optional |  |  | НПФ сами являясь участниками торгов могут размещать средства |
| `ClientCodeSE` | `` | optional |  |  | Привязка КТК на Фондовом рынке к Срочному рынку (передается и имеет смысл только на Срочном рынке) |
| `ClientCodeSEStatus` | `` | optional |  |  |  |
| `Category` | `CATEGORY_TYPE` |  |  |  | Категория клиента |
| `RiskLevel` | `RISKLEVEL_TYPE` | optional |  |  | Категория уровня риска клиента |
| `isCrossTradesDU` | `YES_NO_Type` |  |  |  | Признак разрешения проведения кросс-сделок ДУ на фондовом рынке между ПИФ одной УК |

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

**Attributes**

| Name | Type | Use | Default | Fixed | Notes |
| --- | --- | --- | --- | --- | --- |
| `isIISContract` | `YES_NO_Type` | optional | N |  | С клиентом заключен договор на ведение индивидуального инвестиционного счета. Это значение может быть изменено для конкр |
| `INN` | `INN_PHIS_Type` | optional |  |  | ИНН индивидуального предпринимателя (для площадки УРОЖАЙ) |
| `FIO` | `` | optional |  |  | Фамилия И.О. индивидуального предпринимателя (для площадки УРОЖАЙ) |

**Content model**

_choice_

| Element | Type | Ref | minOccurs | maxOccurs | Notes |
| --- | --- | --- | --- | --- | --- |
| `PASSPORT_RF` | — | — | 1 | 1 | Данные паспорта гражданина РФ (в формате: две цифры + пробел + две цифры + пробел + 6 цифр) |
| `PASSPORT_USSR` | — | — | 1 | 1 | Данные паспорта гражданина СССР (в формате: до 6 римских цифр (в латинском регистре) + '-' +2 буквы кирилицей + пробел + 6 цифр) |
| `BIRTH_CERTIFICATE` | — | — | 1 | 1 | Свидетельство о рождении (свободный формат) |
| `OTHER_DOC` | — | — | 1 | 1 | Другой документ (свободный формат) |

### `KIO_DOC_Type`

КИО: код иностранной организации

**Attributes**

| Name | Type | Use | Default | Fixed | Notes |
| --- | --- | --- | --- | --- | --- |
| `DocNo` | `KIO_TYPE` | required |  |  |  |
| `INFO_BAN` | `YES_NO_Type` | optional | N |  | В отношении регистрируемого лица, являющегося клиентом иностранной организации-брокера или доверительного управляющего,  |

### `LEGAL_PERS_DU_Type`

Данные для идентификации юридического лица ДУ

**Attributes**

| Name | Type | Use | Default | Fixed | Notes |
| --- | --- | --- | --- | --- | --- |
| `isInsureLicense` | `YES_NO_Type` | optional | N |  | Наличие у клиента лицензии на осуществление страхования соответствующего вида |
| `isCurrencyLicense` | `YES_NO_Type` | optional | N |  | Наличие у клиента валютной банковской лицензии |
| `BankLicense` | `BANKLICENSE_Type` | optional |  |  | Номер лицензии на осуществление банковских операций, выданной клиенту, являющемуся кредитной организацией |
| `ShortName` | `` | optional |  |  | Краткое наименование в соответствии с Уставом (для площадки УРОЖАЙ) |
| `BIC` | `BIC_TYPE` | optional |  |  | Банковский идентификационный код |

**Content model**

_choice_

| Element | Type | Ref | minOccurs | maxOccurs | Notes |
| --- | --- | --- | --- | --- | --- |
| `INN` | — | — | 1 | 1 | ИНН |
| `KIO` | `KIO_DOC_Type` | — | 1 | 1 | Код иностранной организации (должен начинаться с '000') |

### `LEGAL_PERS_Type`

Данные для идентификации юридического лица

**Attributes**

| Name | Type | Use | Default | Fixed | Notes |
| --- | --- | --- | --- | --- | --- |
| `isSelfFirm` | `YES_NO_Type` | optional | N |  | Если равно Y, то юридическая информация данного клиента совпадает с юридической информацией участника торгов, к которому |
| `isInsureLicense` | `YES_NO_Type` | optional | N |  | Наличие у клиента лицензии на осуществление страхования соответствующего вида |
| `isCurrencyLicense` | `YES_NO_Type` | optional | N |  | Наличие у клиента валютной банковской лицензии |
| `BankLicense` | `BANKLICENSE_Type` | optional |  |  | Номер лицензии на осуществление банковских операций, выданной клиенту, являющемуся кредитной организацией |
| `isMainBroker` | `YES_NO_Type` | optional | N |  | Может ли данный клиент выступать в качестве брокера для клиентов 2-го уровня. |
| `isMainSingleDU` | `YES_NO_Type` | optional | N |  | Может ли данный клиент выступать в качестве управляющего для одного учредителея ДУ. |
| `isMainGroupDU` | `YES_NO_Type` | optional | N |  | Может ли данный клиент выступать в качестве управляющего для группы учредителей ДУ. |
| `isMainPF` | `YES_NO_Type` | optional | N |  | Может ли данный клиент выступать в качестве управляющего для фондов клиентов. |
| `ShortName` | `` | optional |  |  | Краткое наименование в соответствии с Уставом (для площадки УРОЖАЙ) |
| `isMainNotRezDU` | `YES_NO_Type` | optional | N |  | Может ли данный клиент выступать в качестве ДУ нерезидента |
| `NonresidentTaxCode` | `` | optional |  |  | Код налогоплательщика в стране регистрации |
| `SwiftCode` | `` | optional |  |  | BIC Бенефициарного собственника доходов |
| `ClearingUnicode` | `UNIFIRMID_Type` | optional |  |  | Уникод участника клиринга |
| `LEI` | `` | optional |  |  | Международный код идентификации юридического лица, pre-LEI/LEI |
| `BIC` | `BIC_TYPE` | optional |  |  | Банковский идентификационный код |

**Content model**

_choice_

| Element | Type | Ref | minOccurs | maxOccurs | Notes |
| --- | --- | --- | --- | --- | --- |
| `INN` | — | — | 1 | 1 | ИНН |
| `KIO` | `KIO_DOC_Type` | — | 1 | 1 | Код иностранной организации (должен начинаться с '000') |

### `REPRESENTATIVE_PERS_Type`

Данные для идентификации законного представителя клиента

**Content model**

_choice_

| Element | Type | Ref | minOccurs | maxOccurs | Notes |
| --- | --- | --- | --- | --- | --- |
| `PassportRF` | — | — | 1 | 1 | Данные паспорта гражданина РФ (в формате: две цифры + пробел + две цифры + пробел + 6 цифр) |
| `PassportUSSR` | — | — | 1 | 1 | Данные паспорта гражданина СССР (в формате: до 6 римских цифр (в латинском регистре) + '-' +2 буквы кирилицей + пробел + 6 цифр) |
| `OtherDoc` | — | — | 1 | 1 | Другой документ (свободный формат) |
