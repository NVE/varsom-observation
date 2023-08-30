# varsom-ice-thickness



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute                | Description | Type           | Default     |
| --------------------- | ------------------------ | ----------- | -------------- | ----------- |
| `Attachments`         | --                       |             | `Attachment[]` | `undefined` |
| `Comment`             | `comment`                |             | `string`       | `undefined` |
| `IceCapacityName`     | `ice-capacity-name`      |             | `string`       | `undefined` |
| `IceCapacityTID`      | `ice-capacity-t-i-d`     |             | `number`       | `undefined` |
| `IceCoverAfterName`   | `ice-cover-after-name`   |             | `string`       | `undefined` |
| `IceCoverAfterTID`    | `ice-cover-after-t-i-d`  |             | `number`       | `undefined` |
| `IceCoverBeforeName`  | `ice-cover-before-name`  |             | `string`       | `undefined` |
| `IceCoverBeforeTID`   | `ice-cover-before-t-i-d` |             | `number`       | `undefined` |
| `IceCoverName`        | `ice-cover-name`         |             | `string`       | `undefined` |
| `IceCoverTID`         | `ice-cover-t-i-d`        |             | `number`       | `undefined` |
| `IceSkateabilityName` | `ice-skateability-name`  |             | `string`       | `undefined` |
| `IceSkateabilityTID`  | `ice-skateability-t-i-d` |             | `number`       | `undefined` |
| `shortVersion`        | `short-version`          |             | `string`       | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-label](../varsom-label)
- [varsom-key-value](../varsom-key-value)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-ice-cover-observation --> varsom-label
  varsom-ice-cover-observation --> varsom-key-value
  varsom-ice-cover-observation --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-ice-cover-observation
  style varsom-ice-cover-observation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
