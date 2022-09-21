import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeroDto } from './dtos/heroe.dto';
const md5 = require('crypto-js/md5');

@Injectable()
export class MarvelHeroesService {

    constructor(
        private readonly httpService: HttpService
    ) { }

    getHeroesByPage(page: number, pageSize: number): Observable<HeroDto[]> {

        if (page <= 0 || pageSize <= 0) {
            throw new BadRequestException("'page' and 'size' parameters must be greater than zero")
        }

        const ts = new Date().getTime()

        const apiKey = process.env.API_KEY

        const privateKey = process.env.PRIVATE_KEY

        const hash = md5(ts + privateKey + apiKey).toString()

        const offset = pageSize * (page - 1)

        const rootPath = 'http://gateway.marvel.com/v1/public/characters?'

        const rawData = this.httpService.get(`${rootPath}ts=${ts}&apikey=${apiKey}&hash=${hash}&offset=${offset}&limit=${pageSize}`);

        const cleanData = rawData.pipe(
            map(observable =>
                observable.data.data.results
                    .map((item: HeroDto) => {
                        return {
                            id: item.id,
                            name: item.name,
                            description: item.description,
                            thumbnail: item.thumbnail.path + '.' + item.thumbnail.extension
                        }
                    })))

        return cleanData
    }
}
