# varsom-avalanche-activity-obs2



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                    | Description | Type           | Default     |
| ------------------------ | ---------------------------- | ----------- | -------------- | ----------- |
| `Aspect`                 | `aspect`                     |             | `number`       | `undefined` |
| `Attachments`            | --                           |             | `Attachment[]` | `undefined` |
| `AvalancheActivityObsID` | `avalanche-activity-obs-i-d` |             | `number`       | `undefined` |
| `AvalancheName`          | `avalanche-name`             |             | `string`       | `undefined` |
| `AvalancheTID`           | `avalanche-t-i-d`            |             | `number`       | `undefined` |
| `AvalancheTriggerName`   | `avalanche-trigger-name`     |             | `string`       | `undefined` |
| `AvalancheTriggerTID`    | `avalanche-trigger-t-i-d`    |             | `number`       | `undefined` |
| `Comment`                | `comment`                    |             | `string`       | `undefined` |
| `DestructiveSizeName`    | `destructive-size-name`      |             | `string`       | `undefined` |
| `DestructiveSizeTID`     | `destructive-size-t-i-d`     |             | `number`       | `undefined` |
| `DtAvalancheTime`        | `dt-avalanche-time`          |             | `number`       | `undefined` |
| `DtOffAvalancheTime`     | `dt-off-avalanche-time`      |             | `string`       | `undefined` |
| `EstimatedNumName`       | `estimated-num-name`         |             | `string`       | `undefined` |
| `EstimatedNumTID`        | `estimated-num-t-i-d`        |             | `number`       | `undefined` |
| `HeigthStartZone`        | `heigth-start-zone`          |             | `number`       | `undefined` |
| `SnowLine`               | `snow-line`                  |             | `number`       | `undefined` |
| `SnowLineName`           | `snow-line-name`             |             | `string`       | `undefined` |
| `TerrainStartZoneName`   | `terrain-start-zone-name`    |             | `string`       | `undefined` |
| `TerrainStartZoneTID`    | `terrain-start-zone-t-i-d`   |             | `number`       | `undefined` |
| `header`                 | `header`                     |             | `string`       | `undefined` |
| `shortVersion`           | `short-version`              |             | `string`       | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-key-value](../varsom-key-value)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-avalanche-activity-obs --> varsom-key-value
  varsom-avalanche-activity-obs --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-avalanche-activity-obs
  style varsom-avalanche-activity-obs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
