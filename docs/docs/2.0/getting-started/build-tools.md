---
layout: default
title: Build tools
description: Learn how to use UI Kit's included npm scripts to build our documentation, compile source code, run tests, and more.
group: getting-started
---

## Tooling setup
UI Kit uses [NPM scripts](https://docs.npmjs.com/misc/scripts) for its build system. Our [package.json](https://github.com/efellemedia/ui-kit/blob/master/package.json) includes convenient methods for working with the framework, including compiling code, running tests, and more.

To use our build system and run our documentation locally, you'll need a copy of UI Kit's source files and Node. Follow these steps and you should be ready to rock:

1. [Download and install Node](https://nodejs.org/download/), which we use to manage our dependencies.
2. Navigate to the root `/` directory and run `npm install` or `yarn` to install our local dependencies listed in [package.json](https://github.com/efellemedia/ui-kit/blob/master/package.jsonn).
4. [Install Ruby][install-ruby], install [Bundler][gembundler] with `gem install bundler`, and finally run `bundle install`. This will install all Ruby dependencies, such as Jekyll and plugins.
  - **Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.

When completed, you'll be able to run the various commands provided from the command line.

[install-ruby]: https://www.ruby-lang.org/en/documentation/installation/
[gembundler]: https://bundler.io/

## Using NPM scripts
Our [package.json](https://github.com/efellemedia/ui-kit/blob/master/package.json) includes the following commands and tasks:

| Task | Description |
| --- | --- |
| `dev` | Runs webpack through Laravel Mix and compiles assets |
| `watch` | Runs `dev` and watches files for changes |
| `production` | Compiles assets and minifies files for production use |

## Local documentation

Running our documentation locally requires the use of Jekyll, a decently flexible static site generator that provides us: basic includes, Markdown-based files, templates, and more. Here's how to get it started:

1. Run through the [tooling setup](#tooling-setup) above to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. From the docs `/docs` directory, run `jekyll serve` in the command line.
3. Open <http://localhost:4000> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

## Troubleshooting

Should you encounter problems with installing dependencies, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.
