# varsom-snow-surface



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type                 | Default     |
| ------------------ | ------------------- | ----------- | -------------------- | ----------- |
| `Comment`          | `comment`           |             | `any`                | `undefined` |
| `CylinderDiameter` | `cylinder-diameter` |             | `any`                | `undefined` |
| `Layers`           | --                  |             | `SnowDensityLayer[]` | `undefined` |
| `TareWeight`       | `tare-weight`       |             | `any`                | `undefined` |
| `strings`          | `strings`           |             | `any`                | `undefined` |


## Dependencies

### Used by

 - [varsom-snow-profile2](../varsom-snow-profile2)

### Depends on

- [varsom-snow-density-layer](../varsom-snow-density-layer)

### Graph
```mermaid
graph TD;
  varsom-snow-density --> varsom-snow-density-layer
  varsom-snow-profile2 --> varsom-snow-density
  style varsom-snow-density fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*