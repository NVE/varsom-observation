# varsom-danger-obs



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute           | Description | Type  | Default     |
| ---------------- | ------------------- | ----------- | ----- | ----------- |
| `Comment`        | `comment`           |             | `any` | `undefined` |
| `DangerSignName` | `danger-sign-name`  |             | `any` | `undefined` |
| `DangerSignTID`  | `danger-sign-t-i-d` |             | `any` | `undefined` |
| `GeoHazardName`  | `geo-hazard-name`   |             | `any` | `undefined` |
| `GeoHazardTID`   | `geo-hazard-t-i-d`  |             | `any` | `undefined` |
| `strings`        | `strings`           |             | `any` | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observasjon)

### Depends on

- [varsom-key-value](../varsom-key-value)

### Graph
```mermaid
graph TD;
  varsom-danger-obs --> varsom-key-value
  varsom-observation --> varsom-danger-obs
  style varsom-danger-obs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
