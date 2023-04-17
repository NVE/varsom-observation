# varsom-snow-surface



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute          | Description | Type           | Default     |
| --------------- | ------------------ | ----------- | -------------- | ----------- |
| `Attachments`   | --                 |             | `Attachment[]` | `undefined` |
| `Comment`       | `comment`          |             | `any`          | `undefined` |
| `GeoHazardName` | `geo-hazard-name`  |             | `any`          | `undefined` |
| `GeoHazardTID`  | `geo-hazard-t-i-d` |             | `any`          | `undefined` |
| `ObsComment`    | `obs-comment`      |             | `any`          | `undefined` |
| `ObsHeader`     | `obs-header`       |             | `any`          | `undefined` |
| `Urls`          | --                 |             | `Url[]`        | `undefined` |
| `strings`       | `strings`          |             | `any`          | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observasjon)

### Depends on

- [varsom-label](../varsom-label)
- [varsom-label-small](../varsom-label-small)
- [varsom-key-value](../varsom-key-value)
- [varsom-url](../varsom-url)

### Graph
```mermaid
graph TD;
  varsom-general-observation --> varsom-label
  varsom-general-observation --> varsom-label-small
  varsom-general-observation --> varsom-key-value
  varsom-general-observation --> varsom-url
  varsom-observation --> varsom-general-observation
  style varsom-general-observation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
