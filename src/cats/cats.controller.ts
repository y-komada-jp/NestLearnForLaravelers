import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    @Get(':name')
    async findAll(@Param('name') name: string): Promise<string> {
        return name;
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto): string {
        return createCatDto.name;
    }
}