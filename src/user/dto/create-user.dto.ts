import { Contains, IsIn, Length } from 'class-validator';
import { Module } from '@nestjs/common';

export class CreateUserDto {
  @Contains('@', { message: '이메일 형식을 올바르게 입력해주세요.' })
  email: string;
  @Length(8, 255, { message: '비밀번호는 8자리 이상이어야 합니다.' })
  pw: string;
  user_name: string;
  refresh_token: string;
}
