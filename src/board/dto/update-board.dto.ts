import { PartialType } from '@nestjs/mapped-types';
import { CreateBoardDto } from './create-board.dto';

export class UpdateBoardDto extends PartialType(CreateBoardDto) {}
// create event dto를 상속받음으로써 그 요소들을 optional하게 받을 수 있다.
// 똑같은 요소를 그대로 적어서 ?를 붙이는 것보다, 이렇게 기존 클래스를 상속받으면 됨
