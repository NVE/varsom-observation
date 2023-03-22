# varsom-ice-thickness



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute                | Description | Type  | Default     |
| --------------------- | ------------------------ | ----------- | ----- | ----------- |
| `Comment`             | `comment`                |             | `any` | `undefined` |
| `IceCapacityName`     | `ice-capacity-name`      |             | `any` | `undefined` |
| `IceCapacityTID`      | `ice-capacity-t-i-d`     |             | `any` | `undefined` |
| `IceCoverAfterName`   | `ice-cover-after-name`   |             | `any` | `undefined` |
| `IceCoverAfterTID`    | `ice-cover-after-t-i-d`  |             | `any` | `undefined` |
| `IceCoverBeforeName`  | `ice-cover-before-name`  |             | `any` | `undefined` |
| `IceCoverBeforeTID`   | `ice-cover-before-t-i-d` |             | `any` | `undefined` |
| `IceCoverName`        | `ice-cover-name`         |             | `any` | `undefined` |
| `IceCoverTID`         | `ice-cover-t-i-d`        |             | `any` | `undefined` |
| `IceSkateabilityName` | `ice-skateability-name`  |             | `any` | `undefined` |
| `IceSkateabilityTID`  | `ice-skateability-t-i-d` |             | `any` | `undefined` |
| `strings`             | `strings`                |             | `any` | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observasjon)

### Depends on

- [varsom-key-value](../varsom-key-value)

### Graph
```mermaid
graph TD;
  varsom-ice-cover-observation --> varsom-key-value
  varsom-observation --> varsom-ice-cover-observation
  style varsom-ice-cover-observation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
