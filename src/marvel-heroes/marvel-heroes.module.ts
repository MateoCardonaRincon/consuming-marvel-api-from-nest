import { Module } from '@nestjs/common';
import { MarvelHeroesService } from './marvel-heroes.service';
import { MarvelHeroesController } from './marvel-heroes.controller';

@Module({
  providers: [MarvelHeroesService],
  controllers: [MarvelHeroesController]
})
export class MarvelHeroesModule {}
