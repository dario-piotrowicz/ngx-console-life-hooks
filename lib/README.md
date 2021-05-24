# Ngx Console Life Hooks

### Angular - Automatically console.log lifecycle hooks

\
This is a very minimalistic library which contains a single
class decorator that you can use to automatically log in the console a component's lifecycle hooks.
\
\
All you need to do is to install the library (as a dev dependency since you in theory this decorator should only be useful for debugging purposes) and add the decorator to the components you're interested in.

\
&NewLine;

## Installation

`npm install --save-dev ngx-console-life-hooks`

\
&NewLine;

## Usage

```js
import { ConsoleHooks } from "src/lib/console-hooks";

@ConsoleHooks()
@Component({
  selector: "app-component",
})
export class AppComponent {
  // ...
}
```

\
&NewLine;

## Options

Additionally there are some extra options you can use to fine-tune the decorator's behavior according to your preference
(those options need to be provided as fields of an
object passed as the decorator's argument).

| Option              | Description                                                                                                | Possible Values                                                                                                        | Default Value |
| ------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- |
| `componentName`     | overrides the name of the component printed in the console logs                                            | any string                                                                                                             | null          |
| `phase`             | which phase of the lifecycle to console log                                                                | `'before'`, `'after'`, `'beforeAndAfter'`                                                                              | `'before'`    |
| `logNonImplemented` | whether to log lifecycle hooks not implemented by the component                                            | `true`, `false`                                                                                                        | `false`       |
| `include`           | which lifecycle hooks should be logged (useful alongisde `logNonImplemented` to reduce the log output)     | `null` or a list containing strings with the precise lifecycle hook names                                              | `null`        |
| `exclude`           | which lifecycle hooks should not be logged (useful alongisde `logNonImplemented` to reduce the log output) | `null` or a list containing strings with the precise lifecycle hook names                                              | `null`        |
| `colorScheme`       | color scheme for the logs                                                                                  | string containing one of the [available color schemes](https://ngx-console-life-hooks.netlify.app/colors-docs/schemes) | `'default'`   |
| `customColors`      | custom set of colors for the logs                                                                          | object representing the colors to use, [read more here](https://ngx-console-life-hooks.netlify.app/colors-docs/custom) | `null`        |
| `indent`            | how much indentation to apply to the console log                                                           | `0`, `1`, `2`, `3`, `4` and `5`                                                                                        | `0`           |
| `logTime`           | include the current time (in ISO format) in the logs                                                       | `true`, `false`                                                                                                        | `false`       |

\
_Note:_

- if you set `componentName` to an empty string (or anything `falsy` for that matter) it will be ignored and the normal component name will be used instead
- `include` and `exclude` are opposite options and cannot be used together, if you do so the decorator will throw an error
- if you add a non-implemented hook to the `include` list the decorator will not log it unless the `logNonImplemented` option is set to `true` (an error will be logged instead)
- if you specify a truthy `customColors` any possible value provided for `colorScheme` will be ignored
  \
  &NewLine;

## Links

You can find a very simple demo application [here](https://ngx-console-life-hooks.netlify.app)

And the github repository for the library (which includes the demo application) is [here](https://github.com/dario-piotrowicz/ngx-console-life-hooks)
