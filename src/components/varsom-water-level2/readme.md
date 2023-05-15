# varsom-water-level2



<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                     | Description | Type                      | Default     |
| -------------------------- | ----------------------------- | ----------- | ------------------------- | ----------- |
| `Attachments`              | --                            |             | `Attachment[]`            | `undefined` |
| `Comment`                  | `comment`                     |             | `any`                     | `undefined` |
| `MarkingReferenceName`     | `marking-reference-name`      |             | `any`                     | `undefined` |
| `MarkingReferenceTID`      | `marking-reference-t-i-d`     |             | `any`                     | `undefined` |
| `MarkingTypeName`          | `marking-type-name`           |             | `any`                     | `undefined` |
| `MarkingTypeTID`           | `marking-type-t-i-d`          |             | `any`                     | `undefined` |
| `MeasurementReferenceName` | `measurement-reference-name`  |             | `any`                     | `undefined` |
| `MeasurementReferenceTID`  | `measurement-reference-t-i-d` |             | `any`                     | `undefined` |
| `MeasurementTypeName`      | `measurement-type-name`       |             | `any`                     | `undefined` |
| `MeasurementTypeTID`       | `measurement-type-t-i-d`      |             | `any`                     | `undefined` |
| `MeasuringToolDescription` | `measuring-tool-description`  |             | `any`                     | `undefined` |
| `ObservationTimingName`    | `observation-timing-name`     |             | `any`                     | `undefined` |
| `ObservationTimingTID`     | `observation-timing-t-i-d`    |             | `any`                     | `undefined` |
| `WaterAstrayName`          | `water-astray-name`           |             | `any`                     | `undefined` |
| `WaterAstrayTID`           | `water-astray-t-i-d`          |             | `any`                     | `undefined` |
| `WaterLevelMeasurement`    | --                            |             | `WaterLevelMeasurement[]` | `undefined` |
| `WaterLevelMethodName`     | `water-level-method-name`     |             | `any`                     | `undefined` |
| `WaterLevelMethodTID`      | `water-level-method-t-i-d`    |             | `any`                     | `undefined` |
| `WaterLevelStateName`      | `water-level-state-name`      |             | `any`                     | `undefined` |
| `WaterLevelStateTID`       | `water-level-state-t-i-d`     |             | `any`                     | `undefined` |
| `shortVersion`             | `short-version`               |             | `any`                     | `undefined` |
| `strings`                  | `strings`                     |             | `any`                     | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-label](../varsom-label)
- [varsom-key-value](../varsom-key-value)
- [varsom-water-measurement](../varsom-water-measurement)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-water-level2 --> varsom-label
  varsom-water-level2 --> varsom-key-value
  varsom-water-level2 --> varsom-water-measurement
  varsom-water-level2 --> varsom-attachment
  varsom-water-measurement --> varsom-label-small
  varsom-water-measurement --> varsom-key-value
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-water-level2
  style varsom-water-level2 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*