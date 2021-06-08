# aops-blog-env

A barebones AoPS blog environment built in Vite.

## About

Suggested by [forester2015](https://artofproblemsolving.com/community/user/546163),
this aims to make CSS development on AoPS easier. It will also eliminate the need
for "display blogs" on AoPS to show off CSS, as you can just put this in a GitHub
pages, a replit, etc.

## Usage

You will need [NodeJS](https://nodejs.org/en/) and
[Yarn](https://www.npmjs.com/package/yarn). To install the dependencies, run

```
yarn install
```

To start a dev server to work on the CSS (make a new `style.css` file), run

```
yarn dev
```

To build everything into a bundle (for example, to show off your CSS), run

```
yarn build
```

To easily preview the bundle locally, run

```
yarn preview
```

### Without Vite
Although vite is extremely useful, this can be used without Vite too. Just use
a static host like replit or `file:///<directory path on your computer>` and it
should work. However, with Vite is the recommended method.

## Copying

Really, most of this code is made by AoPS, and thus, they have copyright for it.
They probably wouldn't anyone you making money off of this, or claiming credit
for it, or anything like that. However, if you think this is useful, please give
us (sealsrock and forester2015) credit in your CSS file(s) made with this.
