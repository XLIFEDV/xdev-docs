---
title: Migration / Integration Notes
sidebar_position: 3
---

# Migration / Integration Notes

Advanced Freecam is designed to be **fully compatible with the core architecture of Classic Freecam**.

Because Advanced Freecam builds directly on top of the Classic Freecam foundation, migrating existing integrations is usually straightforward.

Most existing configurations and developer workflows can be reused without major changes.

---

# Migrating from Classic Freecam

If you are already using **Classic Freecam**, switching to Advanced Freecam typically requires only a few adjustments.

The core camera system remains the same, meaning:

- base movement behavior is identical
- core configuration structure is preserved
- developer overrides continue to work

In most cases, migration simply involves replacing the resource and updating configuration settings if necessary.

---

# Configuration Compatibility

Many configuration values used in Classic Freecam are also present in Advanced Freecam.

These include:

- camera movement parameters
- zoom configuration
- distance limits
- camera activation settings
- override systems

Advanced Freecam introduces additional configuration sections related to:

- UI systems
- visual controls
- environment control
- PostFX and camera effects
- settings persistence

These additional options are optional and do not affect the base camera functionality.

---

# Integration with Existing Systems

Advanced Freecam can be integrated with existing server systems through the override architecture.

Common integrations include:

- framework notifications
- screenshot tools
- custom camera logic
- player permission systems

The override system allows developers to connect Advanced Freecam to their existing infrastructure without modifying the core resource.

---

# Recommended Migration Steps

When migrating from Classic Freecam:

1. Install the Advanced Freecam resource.
2. Review the new configuration sections.
3. Verify existing overrides and integrations.
4. Enable any additional UI or visual features as needed.

This ensures that the system behaves correctly in your environment.

---

# Compatibility Considerations

Advanced Freecam is designed to remain lightweight and compatible with most server setups.

However, developers should verify the following when integrating the system:

- framework compatibility
- notification integrations
- screenshot systems
- custom camera overrides

Testing the camera in your environment ensures a smooth transition.

---

# Summary

Advanced Freecam extends the functionality of Classic Freecam without replacing its core architecture.

Because of this design, migration is simple and existing integrations remain compatible while providing access to additional cinematic features.