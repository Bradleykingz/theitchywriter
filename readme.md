<p align="center">
  <a href="https://github.com/fabe/gatsby-universal">
    <img
      src="https://i.imgur.com/MFWrZSx.png"
      height="80"
      alt="gatsby-universal"
      title="gatsby-universal"
    />
  </a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/fabe/gatsby-universal">
    <img
      src="https://circleci.com/gh/fabe/gatsby-universal.svg?style=svg"
      alt="CircleCI"
    />
  </a>
  <a href="https://greenkeeper.io/">
    <img
      src="https://badges.greenkeeper.io/fabe/gatsby-universal.svg"
      alt="Greenkeeper badge"
    />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"
      alt="styled with prettier"
    />
  </a>
  <a href="https://app.netlify.com/sites/the-kenyan-dev/deploys">
    <img
      src="https://api.netlify.com/api/v1/badges/22dd12e0-5574-42cb-829b-aa9c8cffdffd/deploy-status"
      alt="Netlify Status"
    />
  </a>
</p>

<p align="center">
  Source code for <a href="https://thekenyandev.com">The Kenyan Dev</a>, borrowed from Gatsby Universal.
</p>

***

## Features

- [X] 🤩 Page Transitions, component-based (with no-js support)
- [X] 👮‍♂️ `IntersectionObserver`, component-based (with polyfill)
- [X] 🌿 React Context for global UI state, with SSR
- [X] 💅 [`styled-components`](https://www.styled-components.com/) v4
- [X] 💯 Optimized with [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) (including test)
- [X] 🔥 Code Splitting of CSS and JS (component based)
- [X] 🔪 Inline SVG support
- [X] ⚙️ One config file for site-wide settings
- [X] 💙 Most social + meta tags in one component
- [X] 🖼 All favicons generated, only one icon file needed
- [X] 🌐 Offline support
- [X] 📄 Manifest support
- [X] 🗺 Sitemap support
- [X] 📱 Generated media queries for easy use
- [X] 😎 [Prettier](https://prettier.io/) for code style
- [X] 👷‍♂️ [CircleCI](https://circleci.com/) support
- [X] 🐙 Schema JSONLD
- [X] 🔎 [`size-plugin`](https://github.com/GoogleChromeLabs/size-plugin) to keep an eye on your bundle sizes
- [X] 👨‍🏫 ESLint (based on [`eslint-plugin-react`](./.eslintrc))

Do you have suggestions or feedback? [Open an issue](https://github.com/fabe/gatsby-universal/issues/new)!

## Lighthouse scores (on [Netlify](https://netlify.com))

[![Lighthouse scores (on Netlify)](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)](https://circleci.com/gh/fabe/gatsby-universal)

## Usage

[![Edit on CodeSandbox](https://cdn.rawgit.com/fabe/1dd805eed0153b47aba2b50cea2469ec/raw/64b0ea90c2a425d3847da908053f5f337128259b/edit-on-codesandbox-32px.svg)](https://codesandbox.io/s/github/fabe/gatsby-universal)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/fabe/gatsby-universal)

```bash
# Installation with `gatsby-cli`
gatsby new my-site https://github.com/fabe/gatsby-universal

# Installation with `git clone`
git clone git@github.com:fabe/gatsby-universal.git my-site
cd my-site
yarn install

# To develop
yarn develop

# To build
yarn build

# To test SSR (for Lighthouse etc.)
yarn ssr

# To format JS (precommit)
yarn format

# To generate favicons (included in `build`)
yarn build:favicons
```

## Author
* Bradley ([@bradleykingz](https://twitter.com/bradleyukingz))
* Forked from Fabian Schultz ([@fschultz_](https://twitter.com/fschultz_)) - [Stink Studios](https://stinkstudios.com)
