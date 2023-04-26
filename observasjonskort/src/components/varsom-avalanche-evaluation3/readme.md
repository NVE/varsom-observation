# varsom-avalanche-evaluation3



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description | Type           | Default     |
| ---------------------- | ------------------------ | ----------- | -------------- | ----------- |
| `Attachments`          | --                       |             | `Attachment[]` | `undefined` |
| `AvalancheDangerName`  | `avalanche-danger-name`  |             | `any`          | `undefined` |
| `AvalancheDangerTID`   | `avalanche-danger-t-i-d` |             | `any`          | `undefined` |
| `AvalancheDevelopment` | `avalanche-development`  |             | `any`          | `undefined` |
| `AvalancheEvaluation`  | `avalanche-evaluation`   |             | `any`          | `undefined` |
| `ForecastComment`      | `forecast-comment`       |             | `any`          | `undefined` |
| `ForecastCorrectName`  | `forecast-correct-name`  |             | `any`          | `undefined` |
| `ForecastCorrectTID`   | `forecast-correct-t-i-d` |             | `any`          | `undefined` |
| `shortVersion`         | `short-version`          |             | `any`          | `undefined` |
| `strings`              | `strings`                |             | `any`          | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observasjon)

### Depends on

- [varsom-key-value](../varsom-key-value)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-avalanche-evaluation3 --> varsom-key-value
  varsom-avalanche-evaluation3 --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-avalanche-evaluation3
  style varsom-avalanche-evaluation3 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
