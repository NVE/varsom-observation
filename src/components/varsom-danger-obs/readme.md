# varsom-danger-obs

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute           | Description | Type           | Default     |
| ---------------- | ------------------- | ----------- | -------------- | ----------- |
| `Attachments`    | --                  |             | `Attachment[]` | `undefined` |
| `Comment`        | `comment`           |             | `string`       | `undefined` |
| `DangerSignName` | `danger-sign-name`  |             | `string`       | `undefined` |
| `DangerSignTID`  | `danger-sign-t-i-d` |             | `number`       | `undefined` |
| `GeoHazardName`  | `geo-hazard-name`   |             | `string`       | `undefined` |
| `GeoHazardTID`   | `geo-hazard-t-i-d`  |             | `number`       | `undefined` |
| `shortVersion`   | `short-version`     |             | `string`       | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-key-value](../varsom-key-value)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-danger-obs --> varsom-key-value
  varsom-danger-obs --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-danger-obs
  style varsom-danger-obs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
