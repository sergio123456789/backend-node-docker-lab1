import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasModule } from './tareas/tareas.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TareasModule,
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST || 'db',
      port: parseInt(process.env.MYSQL_PORT ?? '3306', 10),
      username: process.env.MYSQL_USER || 'appuser',
      password: process.env.MYSQL_PASSWORD || 'changeme_app',
      database: process.env.MYSQL_DATABASE || 'appdb',
      autoLoadEntities: true, // Carga automática de entidades
      synchronize: false, // NUNCA true en producción
      logging: ['error'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
