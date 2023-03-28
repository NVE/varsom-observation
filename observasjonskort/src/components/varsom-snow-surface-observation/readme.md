# varsom-snow-surface



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute                     | Description | Type  | Default     |
| ------------------------- | ----------------------------- | ----------- | ----- | ----------- |
| `Comment`                 | `comment`                     |             | `any` | `undefined` |
| `FootPenetration`         | `foot-penetration`            |             | `any` | `undefined` |
| `HeightLimitLayeredSnow`  | `height-limit-layered-snow`   |             | `any` | `undefined` |
| `NewSnowDepth24`          | `new-snow-depth-2-4`          |             | `any` | `undefined` |
| `NewSnowLine`             | `new-snow-line`               |             | `any` | `undefined` |
| `SkiConditionsName`       | `ski-conditions-name`         |             | `any` | `undefined` |
| `SkiConditionsTID`        | `ski-conditions-t-i-d`        |             | `any` | `undefined` |
| `SnowDepth`               | `snow-depth`                  |             | `any` | `undefined` |
| `SnowDriftName`           | `snow-drift-name`             |             | `any` | `undefined` |
| `SnowDriftTID`            | `snow-drift-t-i-d`            |             | `any` | `undefined` |
| `SnowLine`                | `snow-line`                   |             | `any` | `undefined` |
| `SnowSurfaceName`         | `snow-surface-name`           |             | `any` | `undefined` |
| `SnowSurfaceTID`          | `snow-surface-t-i-d`          |             | `any` | `undefined` |
| `SurfaceRoughnessName`    | `surface-roughness-name`      |             | `any` | `undefined` |
| `SurfaceWaterContentName` | `surface-water-content-name`  |             | `any` | `undefined` |
| `SurfaceWaterContentTID`  | `surface-water-content-t-i-d` |             | `any` | `undefined` |
| `strings`                 | `strings`                     |             | `any` | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observasjon)

### Depends on

- [varsom-label](../varsom-label)
- [varsom-key-value](../varsom-key-value)

### Graph
```mermaid
graph TD;
  varsom-snow-surface-observation --> varsom-label
  varsom-snow-surface-observation --> varsom-key-value
  varsom-observation --> varsom-snow-surface-observation
  style varsom-snow-surface-observation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
