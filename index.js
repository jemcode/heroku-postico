exports.topics = [{
  name: 'postico',
  description: 'enables heroku postgres settings to be easily added to postico or pg commander'
}];

exports.commands = [
  require('./commands/postico/add'),
];
