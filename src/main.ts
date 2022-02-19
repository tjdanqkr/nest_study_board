import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'production'
      ? '.production.env'
      : process.env.NODE_ENV === 'stage'
      ? '.stage.env'
      : '.development.env',
  ),
});

async function bootstrap() {
  Logger.verbose(`mode : ${process.env.NODE_ENV}, `);
  Logger.verbose(`mode : ${process.env.DATABASE_PASSWORD}, `);
  Logger.verbose(`${__dirname}`);
  const app = await NestFactory.create(AppModule);
  const port = 3000;

  await app.listen(port);
  Logger.log(`Application Start Port : ${port}`);
}
bootstrap();
