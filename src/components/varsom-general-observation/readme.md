# varsom-snow-surface

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute          | Description | Type           | Default     |
| --------------- | ------------------ | ----------- | -------------- | ----------- |
| `Attachments`   | --                 |             | `Attachment[]` | `undefined` |
| `Comment`       | `comment`          |             | `string`       | `undefined` |
| `GeoHazardName` | `geo-hazard-name`  |             | `string`       | `undefined` |
| `GeoHazardTID`  | `geo-hazard-t-i-d` |             | `number`       | `undefined` |
| `ObsComment`    | `obs-comment`      |             | `string`       | `undefined` |
| `ObsHeader`     | `obs-header`       |             | `string`       | `undefined` |
| `Urls`          | --                 |             | `Url[]`        | `undefined` |
| `shortVersion`  | `short-version`    |             | `string`       | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-label](../varsom-label)
- [varsom-label-small](../varsom-label-small)
- [varsom-key-value](../varsom-key-value)
- [varsom-url](../varsom-url)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-general-observation --> varsom-label
  varsom-general-observation --> varsom-label-small
  varsom-general-observation --> varsom-key-value
  varsom-general-observation --> varsom-url
  varsom-general-observation --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-general-observation
  style varsom-general-observation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
