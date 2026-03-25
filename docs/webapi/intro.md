---
sidebar_position: 1
---

# WebAPI

This section documents MOEX **WebAPI** materials published under `ClientsAPI/WebAPI` on [MOEX FTP](ftp://ftp.moex.com/pub/ClientsAPI/WebAPI/).

| Area | In the site |
| --- | --- |
| Connection PDFs | [Connection guide](./connection-guide) (English) — **iframe** (same pattern as ASTS evening session) |
| Client registration XSD | [Client registration](./client-registration/schema) — generated **Markdown** reference + [download XSD](/webapi/ClientRegistration/MoexClients.xsd) |
| IIA duplicates | [IIA duplicates](./iia-duplicates/overview) — PDF (**iframe**) + **[request](./iia-duplicates/iia-check-request)** / **[response](./iia-duplicates/iia-check-response)** (generated Markdown) |
| API Logins Management HTML | Pages under **API Logins Management** (generate from FTP HTML; see repo `README`) |

**Ingest workflow:** PDFs/XSD sources live in `docusaurus/static/webapi/` (refresh with `scripts/sync_webapi_static.py`). Regenerate Markdown from XSD with `scripts/xsd_outline_to_md.py`. Run `scripts/webapi_html_to_md.py` for HTML. Build from the `docusaurus/` directory.
