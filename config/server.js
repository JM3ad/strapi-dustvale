module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8066),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '14ee652d1dbdf447aac6223d532b4073'),
    },
  },
});
