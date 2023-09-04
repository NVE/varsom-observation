# varsom-avalanche-eval-problem

<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                   | Description | Type           | Default     |
| ------------------------ | --------------------------- | ----------- | -------------- | ----------- |
| `ActivityInfluencedName` | `activity-influenced-name`  |             | `string`       | `undefined` |
| `ActivityInfluencedTID`  | `activity-influenced-t-i-d` |             | `number`       | `undefined` |
| `Attachments`            | --                          |             | `Attachment[]` | `undefined` |
| `CasualtiesNum`          | `casualties-num`            |             | `number`       | `undefined` |
| `Comment`                | `comment`                   |             | `string`       | `undefined` |
| `DamageExtentName`       | `damage-extent-name`        |             | `string`       | `undefined` |
| `DamageExtentTID`        | `damage-extent-t-i-d`       |             | `number`       | `undefined` |
| `DeadNum`                | `dead-num`                  |             | `number`       | `undefined` |
| `DtEndTime`              | `dt-end-time`               |             | `string`       | `undefined` |
| `EvacuatedNum`           | `evacuated-num`             |             | `number`       | `undefined` |
| `ForecastAccurateName`   | `forecast-accurate-name`    |             | `string`       | `undefined` |
| `ForecastAccurateTID`    | `forecast-accurate-t-i-d`   |             | `number`       | `undefined` |
| `GeoHazardName`          | `geo-hazard-name`           |             | `string`       | `undefined` |
| `GeoHazardTID`           | `geo-hazard-t-i-d`          |             | `number`       | `undefined` |
| `HarmedNum`              | `harmed-num`                |             | `number`       | `undefined` |
| `IncidentHeader`         | `incident-header`           |             | `string`       | `undefined` |
| `IncidentIngress`        | `incident-ingress`          |             | `string`       | `undefined` |
| `IncidentText`           | `incident-text`             |             | `string`       | `undefined` |
| `IncidentURLs`           | --                          |             | `Url[]`        | `undefined` |
| `InvolvedNum`            | `involved-num`              |             | `number`       | `undefined` |
| `LocalKnowledgeName`     | `local-knowledge-name`      |             | `string`       | `undefined` |
| `LocalKnowledgeTID`      | `local-knowledge-t-i-d`     |             | `number`       | `undefined` |
| `LocalTouristName`       | `local-tourist-name`        |             | `string`       | `undefined` |
| `LocalTouristTID`        | `local-tourist-t-i-d`       |             | `number`       | `undefined` |
| `MaterialDamages`        | `material-damages`          |             | `boolean`      | `undefined` |
| `RescueName`             | `rescue-name`               |             | `string`       | `undefined` |
| `RescueTID`              | `rescue-t-i-d`              |             | `number`       | `undefined` |
| `SafetyGearName`         | `safety-gear-name`          |             | `string`       | `undefined` |
| `SafetyGearTID`          | `safety-gear-t-i-d`         |             | `number`       | `undefined` |
| `SlopeActivityName`      | `slope-activity-name`       |             | `string`       | `undefined` |
| `SlopeActivityTID`       | `slope-activity-t-i-d`      |             | `number`       | `undefined` |
| `TrafficObstructed`      | `traffic-obstructed`        |             | `boolean`      | `undefined` |
| `shortVersion`           | `short-version`             |             | `string`       | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-label](../varsom-label)
- [varsom-key-value](../varsom-key-value)
- [varsom-url](../varsom-url)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-incident --> varsom-label
  varsom-incident --> varsom-key-value
  varsom-incident --> varsom-url
  varsom-incident --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-incident
  style varsom-incident fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
