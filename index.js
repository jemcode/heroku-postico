'use strict';
let openurl = require('openurl');
let h       = require('heroku-cli-util');

exports.topics = [{
  name: 'postico',
  description: 'enables heroku postgres settings to be easily added to postico or pg commander'
}];

exports.commands = [
  {
    topic: 'postico',
    command: 'add',
    description: 'adds a postgres connection to your postico or pg commander app',
    help: '',
    needsApp: true,
    needsAuth: true,
    // args: [{name: 'key'}],

    run: h.command(function* (context, heroku) {
      let config = yield heroku.apps(context.app).configVars().info();
      if (!config.DATABASE_URL) {
        console.error('App does not have DATABASE_URL');
        process.exit(1);
      }

      openurl.open(config.DATABASE_URL);
    })
  }
];
