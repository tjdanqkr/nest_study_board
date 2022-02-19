import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const typeORMConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: String(process.env.DATABASE_HOST),
//   port: 5432,
//   username: String(process.env.DATABASE_USERNAME),
//   password: String(process.env.DATABASE_PASSWORD),
//   database: String(process.env.DATABASE_NAME),
//   entities: [__dirname + '/../**/*.entity.{js,ts}'],
//   synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE),
// };

export const typeORMConfig = (): TypeOrmModuleOptions => {
  console.log(process.env);
  const a: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE),
  };
  console.log(a);
  return a;
};
