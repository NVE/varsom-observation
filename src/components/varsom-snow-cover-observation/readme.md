# varsom-water-level2

<!-- Auto Generated Below -->

## Properties

| Property                | Attribute                 | Description | Type           | Default     |
| ----------------------- | ------------------------- | ----------- | -------------- | ----------- |
| `Attachments`           | --                        |             | `Attachment[]` | `undefined` |
| `Comment`               | `comment`                 |             | `any`          | `undefined` |
| `CriticalLayerExists`   | `critical-layer-exists`   |             | `any`          | `undefined` |
| `CriticalLayerLocation` | `critical-layer-location` |             | `any`          | `undefined` |
| `CriticalLayerName`     | `critical-layer-name`     |             | `any`          | `undefined` |
| `CriticalLayerTID`      | `critical-layer-t-i-d`    |             | `any`          | `undefined` |
| `DepthHoarThickness`    | `depth-hoar-thickness`    |             | `any`          | `undefined` |
| `SnowPilotRef`          | `snow-pilot-ref`          |             | `any`          | `undefined` |
| `shortVersion`          | `short-version`           |             | `any`          | `undefined` |
| `strings`               | `strings`                 |             | `any`          | `undefined` |

## Dependencies

### Depends on

- [varsom-label](../varsom-label)
- [varsom-key-value](../varsom-key-value)
- [varsom-attachment](../varsom-attachment)

### Graph

```mermaid
graph TD;
  varsom-snow-cover-observation --> varsom-label
  varsom-snow-cover-observation --> varsom-key-value
  varsom-snow-cover-observation --> varsom-attachment
  varsom-attachment --> varsom-key-value
  style varsom-snow-cover-observation fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
