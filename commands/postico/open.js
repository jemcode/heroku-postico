'use strict';
let openurl = require('openurl');
let cli     = require('heroku-cli-util');
let co      = require('co');

function* app (context, heroku) {
  let config = yield heroku.get(`/apps/${context.app}/config-vars`)

  if (!config.DATABASE_URL) {
    console.error('App does not have DATABASE_URL');
    process.exit(1);
  } else {
    console.log('Opening local Postgres app...');
    openurl.open(config.DATABASE_URL + '?nickname=' + context.app);
  }
}

module.exports = {
  topic: 'postico',
  command: 'open',
  description: 'adds and opens a postgres connection to your postico or pg commander app',
  help: '',
  needsApp: true,
  needsAuth: true,
  run: cli.command(co.wrap(app))
}
