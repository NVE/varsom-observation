# varsom-attachment



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description | Type      | Default     |
| -------------------- | ---------------------- | ----------- | --------- | ----------- |
| `Aspect`             | `aspect`               |             | `any`     | `undefined` |
| `AttachmentId`       | `attachment-id`        |             | `any`     | `undefined` |
| `AttachmentMimeType` | `attachment-mime-type` |             | `any`     | `undefined` |
| `Comment`            | `comment`              |             | `any`     | `undefined` |
| `Copyright`          | `copyright`            |             | `any`     | `undefined` |
| `CropImage`          | `crop-image`           |             | `boolean` | `undefined` |
| `GeoHazardName`      | `geo-hazard-name`      |             | `any`     | `undefined` |
| `GeoHazardTID`       | `geo-hazard-t-i-d`     |             | `any`     | `undefined` |
| `IsMainAttachment`   | `is-main-attachment`   |             | `any`     | `undefined` |
| `Photographer`       | `photographer`         |             | `any`     | `undefined` |
| `RegistrationName`   | `registration-name`    |             | `any`     | `undefined` |
| `RegistrationTID`    | `registration-t-i-d`   |             | `any`     | `undefined` |
| `Url`                | `url`                  |             | `any`     | `undefined` |
| `strings`            | `strings`              |             | `any`     | `undefined` |


## Dependencies

### Used by

 - [varsom-avalanche-activity-obs2](../varsom-avalanche-activity-obs2)
 - [varsom-compression-test](../varsom-compression-test)
 - [varsom-damage-obs](../varsom-damage-obs)
 - [varsom-danger-obs](../varsom-danger-obs)
 - [varsom-ice-cover-observation](../varsom-ice-cover-observation)
 - [varsom-ice-thickness](../varsom-ice-thickness)
 - [varsom-landslide-observation](../varsom-landslide-observation)
 - [varsom-observation](../varsom-observasjon)
 - [varsom-snow-cover-observation](../varsom-snow-cover-observation)
 - [varsom-snow-profile2](../varsom-snow-profile2)
 - [varsom-snow-surface-observation](../varsom-snow-surface-observation)
 - [varsom-water-level2](../varsom-water-level2)
 - [varsom-weather-observation](../varsom-weather-observation)

### Depends on

- [varsom-key-value](../varsom-key-value)

### Graph
```mermaid
graph TD;
  varsom-attachment --> varsom-key-value
  varsom-avalanche-activity-obs2 --> varsom-attachment
  varsom-compression-test --> varsom-attachment
  varsom-damage-obs --> varsom-attachment
  varsom-danger-obs --> varsom-attachment
  varsom-ice-cover-observation --> varsom-attachment
  varsom-ice-thickness --> varsom-attachment
  varsom-landslide-observation --> varsom-attachment
  varsom-observation --> varsom-attachment
  varsom-snow-cover-observation --> varsom-attachment
  varsom-snow-profile2 --> varsom-attachment
  varsom-snow-surface-observation --> varsom-attachment
  varsom-water-level2 --> varsom-attachment
  varsom-weather-observation --> varsom-attachment
  style varsom-attachment fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
