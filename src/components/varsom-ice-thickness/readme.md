# varsom-ice-thickness



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute           | Description | Type                  | Default     |
| -------------------- | ------------------- | ----------- | --------------------- | ----------- |
| `Attachments`        | --                  |             | `Attachment[]`        | `undefined` |
| `Comment`            | `comment`           |             | `any`                 | `undefined` |
| `DtObsTime`          | `dt-obs-time`       |             | `any`                 | `undefined` |
| `HardCodedImg`       | `hard-coded-img`    |             | `any`                 | `undefined` |
| `IceHeightAfter`     | `ice-height-after`  |             | `any`                 | `undefined` |
| `IceHeightBefore`    | `ice-height-before` |             | `any`                 | `undefined` |
| `IceThicknessLayers` | --                  |             | `IceThicknessLayer[]` | `undefined` |
| `IceThicknessSum`    | `ice-thickness-sum` |             | `any`                 | `undefined` |
| `LocationName`       | `location-name`     |             | `any`                 | `undefined` |
| `ObsLocationId`      | `obs-location-id`   |             | `any`                 | `undefined` |
| `SlushSnow`          | `slush-snow`        |             | `any`                 | `undefined` |
| `SnowDepth`          | `snow-depth`        |             | `any`                 | `undefined` |
| `regId`              | `reg-id`            |             | `any`                 | `undefined` |
| `shortVersion`       | `short-version`     |             | `any`                 | `undefined` |
| `strings`            | `strings`           |             | `any`                 | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-label](../varsom-label)
- [varsom-ice-thickness-layer](../varsom-ice-thickness-layer)
- [varsom-key-value](../varsom-key-value)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-ice-thickness --> varsom-label
  varsom-ice-thickness --> varsom-ice-thickness-layer
  varsom-ice-thickness --> varsom-key-value
  varsom-ice-thickness --> varsom-attachment
  varsom-ice-thickness-layer --> varsom-key-value
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-ice-thickness
  style varsom-ice-thickness fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*