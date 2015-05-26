'use strict';
let openurl = require('openurl');
let h       = require('heroku-cli-util');

module.exports = {
  topic: 'postico',
  command: 'open',
  description: 'adds and opens a postgres connection to your postico or pg commander app',
  help: '',
  needsApp: true,
  needsAuth: true,

  run: h.command(function* (context, heroku) {
    let config = yield heroku.apps(context.app).configVars().info();
    if (!config.DATABASE_URL) {
      console.error('App does not have DATABASE_URL');
      process.exit(1);
    }

    console.log('Opening local Postgres app...');
    openurl.open(config.DATABASE_URL + '?nickname=' + context.app);
  })
};
