# Parcel Demo

This is a quick example of how to use Parcel.js to create a landing page with modern JavaScript (or TypeScript) and SCSS.

The demo is [here](https://parceldemo.netlify.app/).

## Installation

Get the dependencies:

```text
$ npm install
```

Run the project in development mode and serve it at `localhost:1234`:

```text
$ npm start
```

To build the production site, type this:

```text
$ npm run build
```

To connect this site to Netlify for deployment, type:

```text
$ npx netlify init
```

After the site is connected, you can deploy it with this command:

```text
$ npm run deploy
```

See the `package.json` file to learn how the scripts work.

## Static Files

Any files that should be copied to the build directory as-is can be put in the `static` directory. Examples of files that might go in there are `robots.txt` and `favicon.ico`. To make that work, it uses [this plugin](https://github.com/elwin013/parcel-reporter-static-files-copy) along with the settings in the `.parcelrc` file.

## ES5

Parcel automatically transpiles the JavaScript (or TypeScript) to ES5 because of this line in `package.json`:

```text
"browserslist": "defaults",
```

You can customize the output with [browserslist config](https://en.parceljs.org/javascript.html#default-babel-transforms).
