import { Controller, Get, Post, Body, UseFilters, HttpStatus, HttpException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    async create(@Body() createCatDto: CreateCatDto) {
        throw new HttpException("エラーメッセージ", HttpStatus.FORBIDDEN);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        throw new HttpException("エラーメッセージ", HttpStatus.FORBIDDEN);
    }
}