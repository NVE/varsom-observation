# varsom-metadata



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description | Type  | Default     |
| --------------------- | ----------------------- | ----------- | ----- | ----------- |
| `competenceLevelName` | `competence-level-name` |             | `any` | `undefined` |
| `dateOfLastUpdate`    | `date-of-last-update`   |             | `any` | `undefined` |
| `dateOfRegistration`  | `date-of-registration`  |             | `any` | `undefined` |
| `geoHazardName`       | `geo-hazard-name`       |             | `any` | `undefined` |
| `moh`                 | `moh`                   |             | `any` | `undefined` |
| `nickname`            | `nickname`              |             | `any` | `undefined` |
| `observerGroupName`   | `observer-group-name`   |             | `any` | `undefined` |
| `strings`             | `strings`               |             | `any` | `undefined` |


## Dependencies

### Used by

 - [varsom-observation](../varsom-observasjon)

### Depends on

- [varsom-key-value](../varsom-key-value)

### Graph
```mermaid
graph TD;
  varsom-metadata --> varsom-key-value
  varsom-observation --> varsom-metadata
  style varsom-metadata fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
