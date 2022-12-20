module.exports = {
    HOST: 'database-api.c6k58hloag9m.us-east-1.rds.amazonaws.com',
    USER: 'postgresDevGab',
    PASSWORD: 'DSAcurso',
    DB: "prefeitura",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };