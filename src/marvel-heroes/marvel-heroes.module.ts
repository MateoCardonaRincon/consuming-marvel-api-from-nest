import { Module } from '@nestjs/common';
import { MarvelHeroesService } from './marvel-heroes.service';
import { MarvelHeroesController } from './marvel-heroes.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [MarvelHeroesService],
  controllers: [MarvelHeroesController],
  imports: [
    HttpModule
      .registerAsync({
        useFactory: () => ({
          timeout: 5000,
          maxRedirects: 5,
        })
      })
  ]
})
export class MarvelHeroesModule { }
