export class HeroDto {

    id: number

    name: string

    description: string

    thumbnail: ThumbnailType
}

interface ThumbnailType {
    path: string
    extension: string
}