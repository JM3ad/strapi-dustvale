module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || 'user',
        password: process.env.DB_PASS || 'pass',
        database: process.env.DB_NAME || 'dustvale',
        schema: 'public'
      },
      options: {
        strict: true,
      },
    },
  },
});
