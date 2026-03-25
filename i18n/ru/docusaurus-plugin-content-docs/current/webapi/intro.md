---
sidebar_position: 1
---

# WebAPI

Раздел описывает материалы **WebAPI** МосБиржи в каталоге `ClientsAPI/WebAPI` на [FTP МосБиржи](ftp://ftp.moex.com/pub/ClientsAPI/WebAPI/).

| Раздел | На сайте |
| --- | --- |
| PDF по подключению | [Руководство по подключению](./connection-guide) (русский) — **iframe** |
| XSD регистрации клиентов | [Регистрация клиентов](./client-registration/schema) — **Markdown**-справочник + [скачать XSD](/webapi/ClientRegistration/MoexClients.xsd) |
| Проверка дублей ИИА | [Дубли ИИА](./iia-duplicates/overview) — PDF (**iframe**) + [запрос](./iia-duplicates/iia-check-request) / [ответ](./iia-duplicates/iia-check-response) в Markdown |
| HTML «API Logins Management» | Страницы в разделе **API Logins Management** (генерация из HTML на FTP; см. `README` репозитория) |

**Обновление:** исходники PDF/XSD в `docusaurus/static/webapi/` (`sync_webapi_static.py`). Markdown из XSD — `scripts/xsd_outline_to_md.py`. HTML — `scripts/webapi_html_to_md.py`. Сборка из `docusaurus/`.
