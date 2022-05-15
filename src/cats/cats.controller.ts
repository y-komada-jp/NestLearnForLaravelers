import { Controller, Get, Post, Param, Body, UseFilters, HttpStatus, HttpException, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';
import { SamplePipe } from 'src/common/pipe/sample.pipe';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { LoggingInterceptor } from 'src/common/interceptor/logging.interceptor';

@Controller('cats')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', SamplePipe) id: number) {
        return this.catsService.findOne(id);
    }
}