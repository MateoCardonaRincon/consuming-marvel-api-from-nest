import { Controller, DefaultValuePipe, Get, HttpStatus, ParseIntPipe, Query } from '@nestjs/common';
import { MarvelHeroesService } from './marvel-heroes.service';

@Controller('marvel-heroes')
export class MarvelHeroesController {

    constructor(
        private readonly marvelHeroesService: MarvelHeroesService
    ) { }

    @Get('get/paginated?')
    getMarvelHeroesByPage(
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('size', new DefaultValuePipe(5), ParseIntPipe) pageSize: number
    ) {
        return this.marvelHeroesService.getHeroesByPage(page, pageSize)
    }

}

