import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MarvelHeroesService } from './marvel-heroes.service';

@Controller('marvel-heroes')
export class MarvelHeroesController {

    constructor(
        private readonly marvelHeroesService: MarvelHeroesService
    ) { }

    @Get('get/:page')
    getMarvelHeroesByPage(@Param('page', ParseIntPipe) page: number) {
        return this.marvelHeroesService.getHeroesByPage(page)
    }

}

