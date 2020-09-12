module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DB_USER || 'user',
        password: process.env.DB_PASS || 'pass',
        database: 'dustvale',
        schema: 'public'
      },
      options: {
        strict: true,
      },
    },
  },
});
