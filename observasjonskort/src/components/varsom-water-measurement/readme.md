# varsom-water-measurement



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description | Type           | Default     |
| ------------------- | --------------------- | ----------- | -------------- | ----------- |
| `Attachments`       | --                    |             | `Attachment[]` | `undefined` |
| `Comment`           | `comment`             |             | `any`          | `undefined` |
| `DtMeasurementTime` | `dt-measurement-time` |             | `any`          | `undefined` |
| `WaterLevelValue`   | `water-level-value`   |             | `any`          | `undefined` |
| `strings`           | `strings`             |             | `any`          | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observasjon)
 - [varsom-water-level2](../varsom-water-level2)

### Depends on

- [varsom-label-small](../varsom-label-small)
- [varsom-key-value](../varsom-key-value)

### Graph
```mermaid
graph TD;
  varsom-water-measurement --> varsom-label-small
  varsom-water-measurement --> varsom-key-value
  varsom-observation --> varsom-water-measurement
  varsom-water-level2 --> varsom-water-measurement
  style varsom-water-measurement fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
