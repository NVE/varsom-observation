# varsom-avalanche-eval-problem



<!-- Auto Generated Below -->


## Properties

| Property                       | Attribute                         | Description | Type           | Default     |
| ------------------------------ | --------------------------------- | ----------- | -------------- | ----------- |
| `Attachments`                  | --                                |             | `Attachment[]` | `undefined` |
| `AvalCauseExtName`             | `aval-cause-ext-name`             |             | `any`          | `undefined` |
| `AvalCauseExtTID`              | `aval-cause-ext-t-i-d`            |             | `any`          | `undefined` |
| `AvalCauseName`                | `aval-cause-name`                 |             | `any`          | `undefined` |
| `AvalCauseTID`                 | `aval-cause-t-i-d`                |             | `any`          | `undefined` |
| `AvalProbabilityName`          | `aval-probability-name`           |             | `any`          | `undefined` |
| `AvalProbabilityTID`           | `aval-probability-t-i-d`          |             | `any`          | `undefined` |
| `AvalReleaseHeightName`        | `aval-release-height-name`        |             | `any`          | `undefined` |
| `AvalReleaseHeightTID`         | `aval-release-height-t-i-d`       |             | `any`          | `undefined` |
| `AvalTriggerSimpleName`        | `aval-trigger-simple-name`        |             | `any`          | `undefined` |
| `AvalTriggerSimpleTID`         | `aval-trigger-simple-t-i-d`       |             | `any`          | `undefined` |
| `AvalancheEvalProblemID`       | `avalanche-eval-problem-i-d`      |             | `any`          | `undefined` |
| `AvalancheExtName`             | `avalanche-ext-name`              |             | `any`          | `undefined` |
| `AvalancheExtTID`              | `avalanche-ext-t-i-d`             |             | `any`          | `undefined` |
| `AvalancheProbabilityAutoText` | `avalanche-probability-auto-text` |             | `any`          | `undefined` |
| `AvalancheProblemAutoText`     | `avalanche-problem-auto-text`     |             | `any`          | `undefined` |
| `Comment`                      | `comment`                         |             | `any`          | `undefined` |
| `DestructiveSizeExtName`       | `destructive-size-ext-name`       |             | `any`          | `undefined` |
| `DestructiveSizeExtTID`        | `destructive-size-ext-t-i-d`      |             | `any`          | `undefined` |
| `shortVersion`                 | `short-version`                   |             | `any`          | `undefined` |


## Dependencies

### Used by

 - [varsom-avalanche-evaluation2](../varsom-avalanche-evaluation2)
 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-label-small](../varsom-label-small)
- [varsom-key-value](../varsom-key-value)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-avalanche-eval-problem --> varsom-label-small
  varsom-avalanche-eval-problem --> varsom-key-value
  varsom-avalanche-eval-problem --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-avalanche-evaluation2 --> varsom-avalanche-eval-problem
  varsom-observation --> varsom-avalanche-eval-problem
  style varsom-avalanche-eval-problem fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
