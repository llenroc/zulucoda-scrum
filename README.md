# zulucoda-scrum

A simple application that facilitates the Scrum Methodology.

MVP: The application allows Product Owners to:

* Add stories to a backlog
* Estimate stories
* Assign stories to team members
* Move stories out of the backlog and into new states such as todo, in progress and done

### Live Demo http://zulucoda-scrum.mfbproject.co.za/

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [Stack Used](#stack-used)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)
>Warning: Make sure you're using the latest version of Node.js and NPM

## Installing

* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm start`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# Stack Used:

* Angular*Webpack workflow
* ES6
* SASS
* Bootstrap
* Jasmine (Test)
* Karma (Test Runner)
* Babel (ES6)

# License

[MIT](/LICENSE)
