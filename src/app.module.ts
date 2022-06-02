import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';

@Module({
  imports: [
    //Enable to load environmental variables inside the .env file
    ConfigModule.forRoot(),
    //Database connection
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.YOUR_DB_HOST,
      port: +process.env.YOUR_DB_PORT,
      username: process.env.YOUR_DB_USERNAME,
      password: process.env.YOUR_DB_PASSWORD,
      database: process.env.YOUR_DB_NAME,
      entities: ['dist/**/**.entity{.ts,.js}'],
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
