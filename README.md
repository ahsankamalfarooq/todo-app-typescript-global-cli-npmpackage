ahsan
=====

todo cli project-2

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ahsan.svg)](https://npmjs.org/package/ahsan)
[![Downloads/week](https://img.shields.io/npm/dw/ahsan.svg)](https://npmjs.org/package/ahsan)
[![License](https://img.shields.io/npm/l/ahsan.svg)](https://github.com/cli-todo-project-2-v-6/ahsan/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ahsan
$ ahsan COMMAND
running command...
$ ahsan (-v|--version|version)
ahsan/0.0.0 win32-x64 node-v14.18.0
$ ahsan --help [COMMAND]
USAGE
  $ ahsan COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ahsan hello [FILE]`](#ahsan-hello-file)
* [`ahsan help [COMMAND]`](#ahsan-help-command)
* [`ahsan improved-add [TODO]`](#ahsan-improved-add-todo)
* [`ahsan interact`](#ahsan-interact)
* [`ahsan list`](#ahsan-list)
* [`ahsan remove [INDEX]`](#ahsan-remove-index)

## `ahsan hello [FILE]`

describe the command here

```
USAGE
  $ ahsan hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ ahsan hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/cli-todo-project-2-v-6/ahsan/blob/v0.0.0/src/commands/hello.ts)_

## `ahsan help [COMMAND]`

display help for ahsan

```
USAGE
  $ ahsan help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `ahsan improved-add [TODO]`

Add new todo to list

```
USAGE
  $ ahsan improved-add [TODO]

OPTIONS
  -d, --done
```

_See code: [src/commands/improved-add.ts](https://github.com/cli-todo-project-2-v-6/ahsan/blob/v0.0.0/src/commands/improved-add.ts)_

## `ahsan interact`

Enter The Interacting Mode

```
USAGE
  $ ahsan interact
```

_See code: [src/commands/interact.ts](https://github.com/cli-todo-project-2-v-6/ahsan/blob/v0.0.0/src/commands/interact.ts)_

## `ahsan list`

print out all todos

```
USAGE
  $ ahsan list
```

_See code: [src/commands/list.ts](https://github.com/cli-todo-project-2-v-6/ahsan/blob/v0.0.0/src/commands/list.ts)_

## `ahsan remove [INDEX]`

Remove A Todo From List

```
USAGE
  $ ahsan remove [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/cli-todo-project-2-v-6/ahsan/blob/v0.0.0/src/commands/remove.ts)_
<!-- commandsstop -->
