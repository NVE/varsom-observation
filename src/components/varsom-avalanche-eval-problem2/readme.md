# varsom-avalanche-eval-problem2



<!-- Auto Generated Below -->


## Properties

| Property                        | Attribute                            | Description | Type           | Default     |
| ------------------------------- | ------------------------------------ | ----------- | -------------- | ----------- |
| `Attachments`                   | --                                   |             | `Attachment[]` | `undefined` |
| `AvalCauseAttributeCrystalName` | `aval-cause-attribute-crystal-name`  |             | `string`       | `undefined` |
| `AvalCauseAttributeCrystalTID`  | `aval-cause-attribute-crystal-t-i-d` |             | `number`       | `undefined` |
| `AvalCauseAttributeLightName`   | `aval-cause-attribute-light-name`    |             | `string`       | `undefined` |
| `AvalCauseAttributeLightTID`    | `aval-cause-attribute-light-t-i-d`   |             | `number`       | `undefined` |
| `AvalCauseAttributeSoftName`    | `aval-cause-attribute-soft-name`     |             | `string`       | `undefined` |
| `AvalCauseAttributeSoftTID`     | `aval-cause-attribute-soft-t-i-d`    |             | `number`       | `undefined` |
| `AvalCauseAttributeThinName`    | `aval-cause-attribute-thin-name`     |             | `string`       | `undefined` |
| `AvalCauseAttributeThinTID`     | `aval-cause-attribute-thin-t-i-d`    |             | `number`       | `undefined` |
| `AvalCauseDepthName`            | `aval-cause-depth-name`              |             | `string`       | `undefined` |
| `AvalCauseDepthTID`             | `aval-cause-depth-t-i-d`             |             | `number`       | `undefined` |
| `AvalCauseName`                 | `aval-cause-name`                    |             | `string`       | `undefined` |
| `AvalCauseTID`                  | `aval-cause-t-i-d`                   |             | `number`       | `undefined` |
| `AvalProbabilityName`           | `aval-probability-name`              |             | `string`       | `undefined` |
| `AvalProbabilityTID`            | `aval-probability-t-i-d`             |             | `number`       | `undefined` |
| `AvalPropagationName`           | `aval-propagation-name`              |             | `string`       | `undefined` |
| `AvalPropagationTID`            | `aval-propagation-t-i-d`             |             | `number`       | `undefined` |
| `AvalTriggerSimpleName`         | `aval-trigger-simple-name`           |             | `string`       | `undefined` |
| `AvalTriggerSimpleTID`          | `aval-trigger-simple-t-i-d`          |             | `number`       | `undefined` |
| `AvalancheExtName`              | `avalanche-ext-name`                 |             | `string`       | `undefined` |
| `AvalancheExtTID`               | `avalanche-ext-t-i-d`                |             | `number`       | `undefined` |
| `Comment`                       | `comment`                            |             | `string`       | `undefined` |
| `DestructiveSizeName`           | `destructive-size-name`              |             | `string`       | `undefined` |
| `DestructiveSizeTID`            | `destructive-size-t-i-d`             |             | `number`       | `undefined` |
| `ExposedHeight1`                | `exposed-height-1`                   |             | `number`       | `undefined` |
| `ExposedHeight2`                | `exposed-height-2`                   |             | `number`       | `undefined` |
| `ExposedHeightComboName`        | `exposed-height-combo-name`          |             | `string`       | `undefined` |
| `ExposedHeightComboTID`         | `exposed-height-combo-t-i-d`         |             | `number`       | `undefined` |
| `ValidExposition`               | `valid-exposition`                   |             | `string`       | `undefined` |
| `shortVersion`                  | `short-version`                      |             | `string`       | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-label-small](../varsom-label-small)
- [varsom-key-value](../varsom-key-value)
- [varsom-exposed-height](../varsom-exposed-height)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-avalanche-eval-problem2 --> varsom-label-small
  varsom-avalanche-eval-problem2 --> varsom-key-value
  varsom-avalanche-eval-problem2 --> varsom-exposed-height
  varsom-avalanche-eval-problem2 --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-avalanche-eval-problem2
  style varsom-avalanche-eval-problem2 fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
