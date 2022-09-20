import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
const md5 = require('crypto-js/md5');

@Injectable()
export class MarvelHeroesService {

    constructor(
        private readonly httpService: HttpService
    ) { }

    getHeroesByPage(page: number, pageSize: number): Observable<AxiosResponse<any>> {

        if (page <= 0 || pageSize <= 0) {
            throw new BadRequestException("'page' and 'size' parameters must be greater than zero")
        }

        const ts = new Date().getTime()

        const apiKey = process.env.API_KEY

        const privateKey = process.env.PRIVATE_KEY

        const hash = md5(ts + privateKey + apiKey).toString()

        const offset = pageSize * (page - 1)

        const rootPath = 'http://gateway.marvel.com/v1/public/characters?'

        return this.httpService.get(`${rootPath}ts=${ts}&apikey=${apiKey}&hash=${hash}&offset=${offset}&limit=${pageSize}`);
    }
}
