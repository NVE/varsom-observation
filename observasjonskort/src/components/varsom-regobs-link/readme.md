# varsom-avalanche-eval-problem



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description | Type           | Default     |
| ------------------------ | --------------------------- | ----------- | -------------- | ----------- |
| `ActivityInfluencedName` | `activity-influenced-name`  |             | `any`          | `undefined` |
| `ActivityInfluencedTID`  | `activity-influenced-t-i-d` |             | `any`          | `undefined` |
| `Attachments`            | --                          |             | `Attachment[]` | `undefined` |
| `Comment`                | `comment`                   |             | `any`          | `undefined` |
| `DamageExtentName`       | `damage-extent-name`        |             | `any`          | `undefined` |
| `DamageExtentTID`        | `damage-extent-t-i-d`       |             | `any`          | `undefined` |
| `DtLandSlideTime`        | `dt-land-slide-time`        |             | `any`          | `undefined` |
| `DtLandSlideTimeEnd`     | `dt-land-slide-time-end`    |             | `any`          | `undefined` |
| `ForecastAccurateName`   | `forecast-accurate-name`    |             | `any`          | `undefined` |
| `ForecastAccurateTID`    | `forecast-accurate-t-i-d`   |             | `any`          | `undefined` |
| `GeoHazardName`          | `geo-hazard-name`           |             | `any`          | `undefined` |
| `GeoHazardTID`           | `geo-hazard-t-i-d`          |             | `any`          | `undefined` |
| `LandSlideName`          | `land-slide-name`           |             | `any`          | `undefined` |
| `LandSlideSizeName`      | `land-slide-size-name`      |             | `any`          | `undefined` |
| `LandSlideSizeTID`       | `land-slide-size-t-i-d`     |             | `any`          | `undefined` |
| `LandSlideTID`           | `land-slide-t-i-d`          |             | `any`          | `undefined` |
| `LandSlideTriggerName`   | `land-slide-trigger-name`   |             | `any`          | `undefined` |
| `LandSlideTriggerTID`    | `land-slide-trigger-t-i-d`  |             | `any`          | `undefined` |
| `StartLat`               | `start-lat`                 |             | `any`          | `undefined` |
| `StartLong`              | `start-long`                |             | `any`          | `undefined` |
| `StopLat`                | `stop-lat`                  |             | `any`          | `undefined` |
| `StopLong`               | `stop-long`                 |             | `any`          | `undefined` |
| `Urls`                   | --                          |             | `any[]`        | `undefined` |
| `shortVersion`           | `short-version`             |             | `any`          | `undefined` |
| `strings`                | `strings`                   |             | `any`          | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observasjon)

### Depends on

- [varsom-label](../varsom-label)
- [varsom-key-value](../varsom-key-value)
- [varsom-url](../varsom-url)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-landslide-observation --> varsom-label
  varsom-landslide-observation --> varsom-key-value
  varsom-landslide-observation --> varsom-url
  varsom-landslide-observation --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-landslide-observation
  style varsom-landslide-observation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
