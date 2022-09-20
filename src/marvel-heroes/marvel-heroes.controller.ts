import { Controller, DefaultValuePipe, Get, HttpStatus, Param, ParseIntPipe, Query } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { MarvelHeroesService } from './marvel-heroes.service';

@Controller('marvel-heroes')
export class MarvelHeroesController {

    constructor(
        private readonly marvelHeroesService: MarvelHeroesService
    ) { }

    @Get('get/paginated?')
    getMarvelHeroesByPage(
        @Query(
            'page',
            new DefaultValuePipe(1),
            new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) page: number,
        @Query(
            'size',
            new DefaultValuePipe(5),
            new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) pageSize: number
    ) {
        return this.marvelHeroesService.getHeroesByPage(page, pageSize).pipe(map(data => data.data))
    }

}

