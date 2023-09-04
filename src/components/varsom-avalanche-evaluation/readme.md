# varsom-avalanche-eval-problem2

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                   | Description | Type           | Default     |
| ----------------------- | --------------------------- | ----------- | -------------- | ----------- |
| `Attachments`           | --                          |             | `Attachment[]` | `undefined` |
| `AvalancheDangerName`   | `avalanche-danger-name`     |             | `string`       | `undefined` |
| `AvalancheDangerTID`    | `avalanche-danger-t-i-d`    |             | `number`       | `undefined` |
| `AvalancheEvaluation1`  | `avalanche-evaluation-1`    |             | `string`       | `undefined` |
| `AvalancheProblemName1` | `avalanche-problem-name-1`  |             | `string`       | `undefined` |
| `AvalancheProblemName2` | `avalanche-problem-name-2`  |             | `string`       | `undefined` |
| `AvalancheProblemName3` | `avalanche-problem-name-3`  |             | `string`       | `undefined` |
| `AvalancheProblemTID1`  | `avalanche-problem-t-i-d-1` |             | `number`       | `undefined` |
| `AvalancheProblemTID2`  | `avalanche-problem-t-i-d-2` |             | `number`       | `undefined` |
| `AvalancheProblemTID3`  | `avalanche-problem-t-i-d-3` |             | `number`       | `undefined` |
| `CanPublish`            | `can-publish`               |             | `boolean`      | `undefined` |
| `Comment`               | `comment`                   |             | `string`       | `undefined` |
| `ValidExposition`       | `valid-exposition`          |             | `string`       | `undefined` |
| `ValidHeightFrom`       | `valid-height-from`         |             | `number`       | `undefined` |
| `ValidHeightRelative`   | `valid-height-relative`     |             | `string`       | `undefined` |
| `ValidHeigtTo`          | `valid-heigt-to`            |             | `number`       | `undefined` |
| `shortVersion`          | `short-version`             |             | `string`       | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observation)

### Depends on

- [varsom-key-value](../varsom-key-value)
- [varsom-attachment](../varsom-attachment)

### Graph
```mermaid
graph TD;
  varsom-avalanche-evaluation --> varsom-key-value
  varsom-avalanche-evaluation --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-avalanche-evaluation
  style varsom-avalanche-evaluation fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
