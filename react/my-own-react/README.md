## Steps if you want to create everything from scratch.

### Step 1:

- Create an empty directory let's say `my-own-react`.
- Create a simple `index.html` file.
- Put the below HTML boilerplate code inside it.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

- Add a script tag before closing body tag.

```html
<script>
  const heading = document.createElement('h1');
  heading.innerHTML = 'Hello, world!';

  const root = document.getElementById('root');
  root.appendChild(heading);
</script>
```

- Your final `index.html` should look like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
    <script>
      const heading = document.createElement('h1');
      heading.innerHTML = 'Hello, world!';

      const root = document.getElementById('root');
      root.appendChild(heading);
    </script>
  </body>
</html>
```

Just simply see this on the browser, you should see `Hello, world!`.

### Step 2: Using React.js script files in `index.html`

- Search React CDN on Google, open the first link you see and try to copy two script tags.
- You should see something like this, copy these two lines and put them inside `index.html` before closing body tag.

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

- Create a new `App.js` file inside `my-own-react`.
- Put the following code inside `App.js`.

```js
const headingTag = React.createElement('h1', {}, 'Hello, world!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingTag);
```

- Import `App.js` inside `index.html` using `script` tag.
- Your final `index.html` should look like this.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script src="App.js"></script>
  </body>
</html>
```

- And now you should see the same output on the browser i.e. `Hello, world!`.

## Awesome 🥳

## Step 3:

- Run `npm init`, it will give you some prompts, just press enter for all or if you want to change anything you can do as per your understanding.
- This will create a `package.json` file inside the root directory of your project.
- Just remove `"main": "App.js",` from `package.json`.
- Now, first thing is, we want to run this entire project as a server instead of directly running `index.html` file in the browser.
- For this, we need a bundler and here we will be using `parcel`. You can read more about parcel [here](https://parceljs.org/).
- Just hit `npm install parcel`, this will take a few seconds and download parcel in your project.
- As soon as you run this, you will notice that this will create `node_modules` folder in your project and `package.json` will also be updated with `parcel` dependency.
- Now, it's time to run the project using parcel.
- Run `npx parcel index.html`.
- You should see something like this `Server running at http://localhost:1234`, simply follow this link and you should see `Hello, world!`.

## Step 4:

Now, let's get rid of React scripts for using React and instead let's convert this to a project.

- At this moment, your `index.html` file should look like this.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
    <script src="App.js"></script>
  </body>
</html>
```

- Now, we will install `react` dependencies like we installed `parcel`.
- Run `npm install react react-dom`. This will download `react` and `react-dom` and you would be able to see them inside `node_modules` as well as in `package.json`.
- Now, stop the server `Ctrl + C` on Windows or `control + C` on Mac and restart the server using `npx parcel index.html`.
- Follow http://localhost:1234 , you will see an empty screen.
- Check for console (`Right Click` -> `Inspect` -> `Console`)
- You should see an error.

```js
Uncaught ReferenceError: React is not defined
    at App.js:1:20
```

- At this moment, you should understand what's the problem. This means we have `react` present in the `node_modules` but in order to use it, we need to import.
- Add import statement in `App.js` for `React` and `ReactDOM` like so.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
```

- Your final `App.js` should like this:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';

const headingTag = React.createElement('h1', {}, 'Hello, world!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingTag);
```

- You can save it, ideally, `parcel` should take care of updates and you don't need to restart the server again. Or you can restart as well.
- Now, go to browser again and you will notice an error like this:

```js
@parcel/transformer-js: Browser scripts cannot have imports or exports.
/Users/aakashverma/Documents/innoskrit-classes/abesec/abesec-batch-2027/react/my-own-react/App.js:7:1
  6 |
> 7 | import React from 'react';
>   | ^^^^^^^^^^^^^^^^^^^^^^^^^^
  8 | import ReactDOM from 'react-dom/client';
  9 |
/Users/aakashverma/Documents/innoskrit-classes/abesec/abesec-batch-2027/react/my-own-react/index.html:11:5
  10 |     <div id="root"></div>
> 11 |     <script src="App.js"></script>
>    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
> 12 |   </body>
>    | ^^^^^^^^^
> 13 | </html>
>    | ^^^^^^^
> 14 |
>    | ^ The environment was originally created here
💡 Add the type="module" attribute to the <script> tag.
📝 Learn more
```

- To resolve this, just add `type=module` inside script tag in `index.html`.
- Your final `index.html` should look like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="App.js"></script>
  </body>
</html>
```

- And that's it 😎, we have now very similar project what we have when we create a React App using `create-react-app` command.
