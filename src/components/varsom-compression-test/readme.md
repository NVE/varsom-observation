# varsom-compression-test

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                   | Description | Type           | Default     |
| ----------------------- | --------------------------- | ----------- | -------------- | ----------- |
| `Attachments`           | --                          |             | `Attachment[]` | `undefined` |
| `Comment`               | `comment`                   |             | `string`       | `undefined` |
| `ComprTestFractureName` | `compr-test-fracture-name`  |             | `string`       | `undefined` |
| `ComprTestFractureTID`  | `compr-test-fracture-t-i-d` |             | `number`       | `undefined` |
| `CompressionTestName`   | `compression-test-name`     |             | `string`       | `undefined` |
| `CompressionTestTID`    | `compression-test-t-i-d`    |             | `number`       | `undefined` |
| `FractureDepth`         | `fracture-depth`            |             | `number`       | `undefined` |
| `IncludeInSnowProfile`  | `include-in-snow-profile`   |             | `boolean`      | `undefined` |
| `PropagationName`       | `propagation-name`          |             | `string`       | `undefined` |
| `PropagationTID`        | `propagation-t-i-d`         |             | `number`       | `undefined` |
| `PstX`                  | `pst-x`                     |             | `number`       | `undefined` |
| `PstY`                  | `pst-y`                     |             | `number`       | `undefined` |
| `RbRelease`             | `rb-release`                |             | `number`       | `undefined` |
| `StabilityEvalName`     | `stability-eval-name`       |             | `string`       | `undefined` |
| `StabilityEvalTID`      | `stability-eval-t-i-d`      |             | `number`       | `undefined` |
| `TapsFracture`          | `taps-fracture`             |             | `number`       | `undefined` |
| `TapsFullPropagation`   | `taps-full-propagation`     |             | `number`       | `undefined` |
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
  varsom-compression-test --> varsom-key-value
  varsom-compression-test --> varsom-attachment
  varsom-attachment --> varsom-key-value
  varsom-observation --> varsom-compression-test
  style varsom-compression-test fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
