# apie-stacktrace



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type             | Default     |
| ------------ | ------------- | ----------- | ---------------- | ----------- |
| `exceptions` | --            |             | `WrappedError[]` | `undefined` |
| `phpVersion` | `php-version` |             | `string`         | `undefined` |


## Dependencies

### Depends on

- [apie-exception-display](../apie-exception-display)
- [apie-stack-display](../apie-stack-display)

### Graph
```mermaid
graph TD;
  apie-stacktrace --> apie-exception-display
  apie-stacktrace --> apie-stack-display
  apie-exception-display --> apie-class-display
  apie-stack-display --> apie-render-code
  style apie-stacktrace fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
