# varsom-water-level2



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description | Type           | Default     |
| --------------------- | ----------------------- | ----------- | -------------- | ----------- |
| `Attachments`         | --                      |             | `Attachment[]` | `undefined` |
| `IsRiver`             | `is-river`              |             | `any`          | `undefined` |
| `MeasuredDischarge`   | `measured-discharge`    |             | `any`          | `undefined` |
| `WaterLevelDescribed` | `water-level-described` |             | `any`          | `undefined` |
| `WaterLevelRefName`   | `water-level-ref-name`  |             | `any`          | `undefined` |
| `WaterLevelRefTID`    | `water-level-ref-t-i-d` |             | `any`          | `undefined` |
| `WaterLevelValue`     | `water-level-value`     |             | `any`          | `undefined` |
| `shortVersion`        | `short-version`         |             | `any`          | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-label-small](../varsom-label-small)
- [varsom-key-value](../varsom-key-value)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-water-level --> varsom-label-small
  varsom-water-level --> varsom-key-value
  varsom-water-level --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-water-level
  style varsom-water-level fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
