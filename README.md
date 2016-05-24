Heroku Postico Plugin
================================

[![npm version](https://badge.fury.io/js/heroku-postico.svg)](http://badge.fury.io/js/heroku-postico)
[![Dependency Status](https://gemnasium.com/jemcode/heroku-postico.svg)](https://gemnasium.com/jemcode/heroku-postico)
[![Code Climate](https://codeclimate.com/github/jemcode/heroku-postico/badges/gpa.svg)](https://codeclimate.com/github/jemcode/heroku-postico)

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

## About Jemcode

[<img src="https://www.jemco.de/logo.svg" width="400" alt="Jemcode">][hire]

Heroku Postico is maintained and funded by Jemcode Limited. We are [available for hire][hire].

[hire]: https://www.jemco.de?utm_source=github
