# varsom-metadata



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type            | Default     |
| --------- | --------- | ----------- | --------------- | ----------- |
| `Layers`  | --        |             | `SnowTempObs[]` | `undefined` |
| `strings` | `strings` |             | `any`           | `undefined` |


## Dependencies

### Depends on

- [varsom-snow-temp-obs](../varsom-snow-temp-obs)

### Graph
```mermaid
graph TD;
  varsom-snow-temp --> varsom-snow-temp-obs
  varsom-snow-temp-obs --> varsom-key-value
  style varsom-snow-temp fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
