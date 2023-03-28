# varsom-avalanche-eval-problem2



<!-- Auto Generated Below -->


## Properties

| Property                 | Attribute                    | Description | Type    | Default     |
| ------------------------ | ---------------------------- | ----------- | ------- | ----------- |
| `AvalancheDangerName`    | `avalanche-danger-name`      |             | `any`   | `undefined` |
| `AvalancheDangerTID`     | `avalanche-danger-t-i-d`     |             | `any`   | `undefined` |
| `AvalancheDevelopment`   | `avalanche-development`      |             | `any`   | `undefined` |
| `AvalancheEvalProblems`  | --                           |             | `any[]` | `undefined` |
| `AvalancheEvaluation`    | `avalanche-evaluation`       |             | `any`   | `undefined` |
| `Comment`                | `comment`                    |             | `any`   | `undefined` |
| `ExposedClimateName`     | `exposed-climate-name`       |             | `any`   | `undefined` |
| `ExposedClimateTID`      | `exposed-climate-t-i-d`      |             | `any`   | `undefined` |
| `ExposedHeight1`         | `exposed-height-1`           |             | `any`   | `undefined` |
| `ExposedHeight2`         | `exposed-height-2`           |             | `any`   | `undefined` |
| `ExposedHeightComboName` | `exposed-height-combo-name`  |             | `any`   | `undefined` |
| `ExposedHeightComboTID`  | `exposed-height-combo-t-i-d` |             | `any`   | `undefined` |
| `ValidExposition`        | `valid-exposition`           |             | `any`   | `undefined` |
| `strings`                | `strings`                    |             | `any`   | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observasjon)

### Depends on

- [varsom-key-value](../varsom-key-value)
- [varsom-avalanche-eval-problem](../varsom-avalanche-eval-problem)

### Graph
```mermaid
graph TD;
  varsom-avalanche-evaluation2 --> varsom-key-value
  varsom-avalanche-evaluation2 --> varsom-avalanche-eval-problem
  varsom-avalanche-eval-problem --> varsom-label-small
  varsom-avalanche-eval-problem --> varsom-key-value
  varsom-observation --> varsom-avalanche-evaluation2
  style varsom-avalanche-evaluation2 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
