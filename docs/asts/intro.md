---
title: ASTS
sidebar_label: ASTS
sidebar_position: 1
---

# ASTS

This section of MOEX Docs provides the reference for ASTS Bridge interface specifications—the gateway interfaces used by participants to connect their systems to Moscow Exchange markets.

## What is ASTS?

**ASTS** (Automated Trading System) is the trading and clearing platform used by Moscow Exchange for equities, FX, and other markets. It powers order routing, market data, and settlement workflows used by brokers and other participants.

## What is ASTS Bridge?

**ASTS Bridge** is the connectivity package that enables participants to integrate their software with ASTS. It includes:

- Interface specifications that describe the structures, messages, and protocols exposed by the system
- The **ASTS Client** demo application, which can be used to explore interface structure and generate descriptions for the version you use

Specifications are published for informational purposes. You can obtain equivalent descriptions for your interface version via the **MTEStructure** function in your software or by exporting structure from the ASTS Client demo.

## Bridge interfaces and broker-only usage

You must use only the **broker** interfaces. When connecting, specify the interface in the `INTERFACE` connection parameter using one of these patterns:

| INTERFACE value | Purpose |
|-----------------|---------|
| `IFCBrokerXX` | FX and securities trading (see Currency and Equities specs) |
| `IFCBrokerXXR` | FX clearing (see RiskCur specs) |
| `IFCBroker_XX` | Deposit/credit operations (see GKO specs) |
| `IFCAuxBrkXX` | Securities trading auxiliary functions (see Auxiliary specs) |

Here `XX` is the interface version number.

## Versioning

Published interface specifications correspond to currently supported production versions. Always use the latest supported version when integrating.

## Next steps

- [Bridge Interfaces README](./bridge-interfaces/readme-from-ftp) — FTP source and overview of the interface documentation
- Explore the **Bridge Interfaces** section in the sidebar for interface specifications by market (Currency, Equities, Auxiliary) and version

## Support

For technical questions about ASTS Bridge, contact Moscow Exchange Support: +7 (495) 733-95-07, [help@moex.com](mailto:help@moex.com).
