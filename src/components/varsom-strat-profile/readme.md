# varsom-snow-surface



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                  | Default     |
| -------------- | --------------- | ----------- | --------------------- | ----------- |
| `Attachments`  | --              |             | `Attachment[]`        | `undefined` |
| `Layers`       | --              |             | `StratProfileLayer[]` | `undefined` |
| `TotalDepth`   | `total-depth`   |             | `any`                 | `undefined` |
| `shortVersion` | `short-version` |             | `any`                 | `undefined` |
| `strings`      | `strings`       |             | `any`                 | `undefined` |


## Dependencies

### Used by

 - [varsom-snow-profile2](../varsom-snow-profile2)

### Depends on

- [varsom-strat-profile-layer](../varsom-strat-profile-layer)

### Graph
```mermaid
graph TD;
  varsom-strat-profile --> varsom-strat-profile-layer
  varsom-snow-profile2 --> varsom-strat-profile
  style varsom-strat-profile fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
