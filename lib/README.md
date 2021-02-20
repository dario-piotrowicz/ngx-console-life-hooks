# Ngx Console Life Hooks

### Angular - Automatically console.log lifecycle hooks

\
This is a very minimalistic library which contains a single
class decorator that you can use to automatically log in the console the component's life cycle hooks.
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

### Options

Additionally there are some extra options you can use to can use to fine tune the directive to your prefereces
(those options need to be provided as fields of an
object passed as the decorator's argument).

| Option              | Description                                                                                                | Possible Values                                                           | Default Value |
| ------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------- |
| `phase`             | which phase of the lifecycle to console log                                                                | `before`, `after`, `beforeAndAfter`                                       | `before`      |
| `logNonImplemented` | whether to log lifecycle hooks not implemented by the component                                            | `true`, `false`                                                           | `false`       |
| `exclude`           | which lifecycle hooks should not be logged (useful alongisde `logNonImplemented` to reduce the log output) | `null` or a list containing strings with the precise lifecycle hook names | `null`        |
| `colorScheme`       | color scheme for the console logs                                                                          | `none`, `terminal`, `default`                                             | `default`     |

\
&NewLine;

### Links

You can find a very simple demo application [here](https://ngx-console-life-hooks.netlify.app)

And the github repository for the library (which includes the demo application) is [here](https://github.com/dario-piotrowicz/ngx-console-life-hooks)
