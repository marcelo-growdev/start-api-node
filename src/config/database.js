require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const reconnectOptions = {
  max_retries: 999,
  onRetry(count) {
    console.log(`connection lost, trying to reconnect (${count})`);
  },
};

module.exports = {
  url: process.env.DATABASE_URL,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
  logging: process.env.DB_LOGGING,
  reconnect: reconnectOptions || true,
  autoreconnect: true,
  dialect: process.env.DB_DIALECT,
  storage: process.env.DB_STORAGE,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max: 30,
    min: 0,
    idle: 20000,
    acquire: 20000,
  },
};
