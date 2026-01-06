---
title: FAQ
description: Frequently Asked Questions about XDEV products
sidebar_position: 999
---

# Frequently Asked Questions (FAQ)

This page answers the most common questions about **XDEV documentation, scripts, and usage**.

---

## General

### What is XDEV?

XDEV (XDEVELOPMENT) is a development brand focused on high-quality FiveM scripts and systems.  
All products are designed with performance, stability, and long-term maintainability in mind.

---

### Who is this documentation for?

This documentation is intended for:

- Server owners
- Developers
- Technical staff
- Script integrators

Basic FiveM knowledge is recommended.

---

## Documentation

### Why is the documentation structured into many sections?

Instead of a single long README, the documentation is split into smaller, focused pages to:

- Improve readability
- Make navigation easier
- Allow future expansion without breaking structure

Each section covers one specific topic.

---

### Why do some pages look very minimal?

The documentation focuses on **clarity over visuals**.  
Only information that is required for understanding and usage is included.

---

## Scripts & Usage

### Why can’t I open the POS Device sometimes?

Common reasons include:

- You already have an active session
- The target player is already involved in another session
- The target player is no longer online
- The system detected an invalid state

These checks exist to prevent exploits and UI desync.

---

### Can multiple players use the POS Device at the same time?

Yes, as long as they are **not targeting the same player**.  
Each session is isolated and validated independently.

---

### Is client-side data safe to use?

Client-side exports (like device state) are **informational only**.  
All security-critical logic is handled server-side.

---

## Configuration

### Why is configuration split into multiple files/pages?

Configuration options are grouped by purpose:

- System settings
- Debug options
- UI configuration
- Event triggers

This keeps the documentation clean and easier to maintain.

---

### Do I need to configure everything?

No.  
Default configuration values are safe and production-ready.  
Only modify options if you know what they do.

---

## Support

### Where can I get support?

If you need help or want to report an issue:

- Join the Discord server
- Use the support channels
- Provide logs and clear reproduction steps

---

### Can I request new features?

Feature requests are welcome, but implementation depends on:

- Feasibility
- Performance impact
- Maintenance cost

---

## Final Notes

If something is unclear or missing from the documentation, it can always be expanded.  
The docs are designed to grow alongside the product.