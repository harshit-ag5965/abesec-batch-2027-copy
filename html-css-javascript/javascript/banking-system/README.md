Make a empty directory `banking-system` inside any of your directories.

`cd banking-system`

`npm init -y`

`npm install typescript @types/node --save-dev`

`npx tsc --init` => this will create `tsconfig.json`

Make changes to your `tsconfig.json` file.
`"outDir": "./dist"`
`"target": "es6"`

Make changes in `script` tag in `package.json`

```json
"scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

Build your project using `npx run build` and for running use `npm start`
