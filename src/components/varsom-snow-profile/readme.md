# varsom-snow-surface



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description | Type           | Default     |
| ------------------ | -------------------- | ----------- | -------------- | ----------- |
| `Aspect`           | `aspect`             |             | `number`       | `undefined` |
| `Attachments`      | --                   |             | `Attachment[]` | `undefined` |
| `Comment`          | `comment`            |             | `string`       | `undefined` |
| `Copyright`        | `copyright`          |             | `string`       | `undefined` |
| `GeoHazardName`    | `geo-hazard-name`    |             | `string`       | `undefined` |
| `GeoHazardTID`     | `geo-hazard-t-i-d`   |             | `number`       | `undefined` |
| `Photographer`     | `photographer`       |             | `string`       | `undefined` |
| `RegistrationName` | `registration-name`  |             | `string`       | `undefined` |
| `RegistrationTID`  | `registration-t-i-d` |             | `number`       | `undefined` |
| `Url`              | `url`                |             | `string`       | `undefined` |
| `shortVersion`     | `short-version`      |             | `string`       | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-label](../varsom-label)
- [varsom-key-value](../varsom-key-value)

### Graph
```mermaid
graph TD;
  varsom-snow-profile --> varsom-label
  varsom-snow-profile --> varsom-key-value
  varsom-observation --> varsom-snow-profile
  style varsom-snow-profile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
