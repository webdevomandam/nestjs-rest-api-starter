import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.APP_HOST,
      port: +process.env.APP_ORT,
      username: process.env.APP_USERNAME,
      password: process.env.APP_PASSWORD,
      database: process.env.APP_DATABASE,
      entities: ['dist/**/**.entity{.ts,.js}'],
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
