import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarvelHeroesModule } from './marvel-heroes/marvel-heroes.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MarvelHeroesModule],
})
export class AppModule { }
