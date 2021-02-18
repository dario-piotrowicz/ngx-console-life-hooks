# Ngx Console Life Hooks Demo App

This is the readme file for the demo angular application and the library building process, you can find the library's readme [here](./lib/README.md).

You can find the demo application deployed on at: \
[ngx-console-life-hooks.netlify.app](https://ngx-console-life-hooks.netlify.app)

### Building

In order to build the demo app simply run the standard
`npm run build` and the result will be outputted to _/dist_.

To build the library run `npm run build-lib` instead and in this case you will find the built files in _/dist-lib_.

### Publishing

In order to publish the library run `npm run publish`, this will build the library, copy the _package.json_ and _README&#46;md_ files into _/dist-lib_ and perform the npm publishing process.
