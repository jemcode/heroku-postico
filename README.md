Heroku Postico Plugin
================================

This plugin is to quickly and easily add your application Postgres connection details to [Postico](https://eggerapps.at/postico/) - _"A Modern PostgreSQL Client for OS X"._

Also compatible with [PG Commander](https://eggerapps.at/pgcommander/), Postico's predecessor.

From Postico v0.22 onwards, this plugin will automatically use the app name as the connection nickname. Thanks [Jakob](https://github.com/jakob)!

## Installation

```sh
$ heroku plugins:install heroku-postico
$ heroku help postico
```

## Usage

To add (or open existing) connections:

```sh
$ heroku postico:open
```
or

```sh
$ heroku postico:open --app <app_name>
```
or from within an application with multiple remotes

```sh
$ heroku postico:open --remote <remote_name>
```
