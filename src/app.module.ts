import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeORM.config';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`${path.resolve()}/env/.${process.env.NODE_ENV}.env`],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeORMConfig()),
    BoardsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
