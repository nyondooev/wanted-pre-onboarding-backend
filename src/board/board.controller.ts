import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('/board')
export class BoardController {
  constructor(
    @InjectRepository(Board)
    private readonly repository: Repository<Board>,
  ) {}
  private boards: Board[] = [];
  @Get()
  async findAll() {
    return await this.repository.find();
  }
  // 메소드 앞에 async, 레포지토리 메소드 앞에 await
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id) {
    const post = await this.repository.findOne(id); //this.boards.find((board) => board.post_id === id);
  }
  @Post()
  async create(@Body(ValidationPipe) input: CreateBoardDto) {
    return await this.repository.save({
      ...input,
      write_DT: new Date(input.write_DT),
    });
  }
  @Patch(':id')
  async update(@Param('id') id, @Body() input: UpdateBoardDto) {
    const post = await this.repository.findOne({
      where: { email: 'ahfl1129@hanmail.net' },
    });
    return await this.repository.save({
      ...post,
      ...input,
      write_DT: input.write_DT ? new Date(input.write_DT) : post.write_DT,
    });
  }
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id) {
    const post = await this.repository.findOne(id);
    await this.repository.remove(post);
  }
}
