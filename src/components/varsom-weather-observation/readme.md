# varsom-weather

<!-- Auto Generated Below -->

## Properties

| Property            | Attribute             | Description | Type           | Default     |
| ------------------- | --------------------- | ----------- | -------------- | ----------- |
| `AirTemperature`    | `air-temperature`     |             | `any`          | `undefined` |
| `Attachments`       | --                    |             | `Attachment[]` | `undefined` |
| `CloudCover`        | `cloud-cover`         |             | `any`          | `undefined` |
| `Comment`           | `comment`             |             | `any`          | `undefined` |
| `PrecipitationName` | `precipitation-name`  |             | `any`          | `undefined` |
| `PrecipitationTID`  | `precipitation-t-i-d` |             | `any`          | `undefined` |
| `WindDirection`     | `wind-direction`      |             | `any`          | `undefined` |
| `WindDirectionName` | `wind-direction-name` |             | `any`          | `undefined` |
| `WindSpeed`         | `wind-speed`          |             | `any`          | `undefined` |
| `shortVersion`      | `short-version`       |             | `any`          | `undefined` |
| `strings`           | `strings`             |             | `any`          | `undefined` |

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
  varsom-weather-observation --> varsom-label
  varsom-weather-observation --> varsom-key-value
  varsom-weather-observation --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-weather-observation
  style varsom-weather-observation fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
