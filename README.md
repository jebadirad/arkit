<img src="https://raw.githubusercontent.com/dyatko/arkit/master/arkit.svg?sanitize=true" alt="arkit" valign="top" /> `🇸🇪arkitektur`

## Visualises JavaScript, TypeScript and Flow codebases as meaningful and committable architecture diagrams

[![NPM](https://img.shields.io/npm/v/arkit.svg?style=flat-square)](https://www.npmjs.com/package/arkit)
[![Downloads](https://img.shields.io/npm/dt/arkit.svg?style=flat-square)](https://www.npmjs.com/package/arkit)
[![Travis](https://img.shields.io/travis/dyatko/arkit.svg?style=flat-square)](https://travis-ci.org/dyatko/arkit)
[![Test coverage](https://img.shields.io/codeclimate/coverage/dyatko/arkit.svg?style=flat-square)](https://codeclimate.com/github/dyatko/arkit/code)
[![Technical debt](https://img.shields.io/codeclimate/tech-debt/dyatko/arkit.svg?style=flat-square)](https://codeclimate.com/github/dyatko/arkit/issues)
![Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/arkit.svg?style=flat-square)

- Supports JavaScript, Node.js, TypeScript and Flow code
- Identifies, connects and groups configured architectural components
- Visualises all components or some segments of the architecture
- Exports codebase visualisation as Plant UML, SVG or PNG diagram
- Integrates into development flow, so your CI, VCS, README and PRs are happy

### Usage

Add arkit to your project using NPM or Yarn:

```sh
npm install arkit --save-dev
yarn add arkit --dev
```

### Configuration

Arkit can be configured using basic CLI arguments or advanced JSON, JS module or package.json configuration.

##### Basic CLI arguments

```console
user@machine:~$ npx arkit --help
Usage: arkit [options] [dir]

A CLI tool to visualise a JavaScript, TypeScript or Flow codebase architecture

Options:
  -V, --version            output the version number
  -f, --first [file ...]   First component file patterns, e.g. src/index.js
  -o, --output [file ...]  Output file paths or type, e.g. arkit.svg or puml
  -h, --help               output usage information
```

##### Advanced arkit.json with JSON schema

```json
{
  "$schema": "https://raw.githubusercontent.com/dyatko/arkit/master/schema.json",
  "components": [
    {
        "type": "JavaScript",
        "patterns": ["**/*.js", "**/*.jsx"]
    },
    {
        "type": "TypeScript",
        "patterns": ["**/*.ts", "**/*.tsx"]
    }
  ],
  "excludePatterns": ["node_modules/**", "test/**", "tests/**", "**/*.test.*", "**/*.spec.*"],
  "output": {
    "path": "arkit.svg"
  }
}
```

**See all possible JSON configuration options in the examples below**

### Real-world examples

##### Simple diagram: [Express.js](test/express) with zero config
![Express example](https://raw.githubusercontent.com/dyatko/arkit/master/test/express/express.svg?sanitize=true)

##### Complex diagram: [ReactDOM](test/react-dom) with [JSON config](test/react-dom/arkit.json)
![ReactDOM example](https://raw.githubusercontent.com/dyatko/arkit/master/test/react-dom/arkit.svg?sanitize=true)
