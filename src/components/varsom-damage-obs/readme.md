# varsom-damage-obs



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute           | Description | Type           | Default     |
| ---------------- | ------------------- | ----------- | -------------- | ----------- |
| `Attachments`    | --                  |             | `Attachment[]` | `undefined` |
| `Comment`        | `comment`           |             | `string`       | `undefined` |
| `DamagePosition` | `damage-position`   |             | `any`          | `undefined` |
| `DamageTypeName` | `damage-type-name`  |             | `string`       | `undefined` |
| `DamageTypeTID`  | `damage-type-t-i-d` |             | `number`       | `undefined` |
| `GeoHazardName`  | `geo-hazard-name`   |             | `string`       | `undefined` |
| `GeoHazardTID`   | `geo-hazard-t-i-d`  |             | `number`       | `undefined` |
| `shortVersion`   | `short-version`     |             | `any`          | `undefined` |
| `strings`        | `strings`           |             | `any`          | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-key-value](../varsom-key-value)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-damage-obs --> varsom-key-value
  varsom-damage-obs --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-damage-obs
  style varsom-damage-obs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
