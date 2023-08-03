# varsom-metadata

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute       | Description | Type  | Default     |
| -------------- | --------------- | ----------- | ----- | ----------- |
| `Depth`        | `depth`         |             | `any` | `undefined` |
| `SnowTemp`     | `snow-temp`     |             | `any` | `undefined` |
| `shortVersion` | `short-version` |             | `any` | `undefined` |
| `strings`      | `strings`       |             | `any` | `undefined` |

## Dependencies

### Used by

- [varsom-snow-temp](../varsom-snow-temp)

### Depends on

- [varsom-key-value](../varsom-key-value)

### Graph

```mermaid
graph TD;
  varsom-snow-temp-obs --> varsom-key-value
  varsom-snow-temp --> varsom-snow-temp-obs
  style varsom-snow-temp-obs fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
