import { Injectable } from '@nestjs/common';

@Injectable()
export class MarvelHeroesService {

    getHeroesByPage(page: number) {
        throw new Error('Method not implemented.');
    }
}
