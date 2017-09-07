module.exports = function(env) {
  const ENV = env && env.ENV || process.env.NODE_ENV || 'dev';

  switch (ENV) {
    case 'prod':
    case 'production':
      return require('./config/webpack.prod.config');
    case 'test':
    case 'testing':
      return require('./config/webpack.test.config');
    case 'dev':
    case 'development':
    default:
      return require('./config/webpack.dev.config');
  }
}
