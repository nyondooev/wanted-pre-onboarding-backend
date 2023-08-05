export class CreateBoardDto {
  post_id: number;
  email: string;
  title: string;
  content: string;
  write_DT: Date;
  // ? 을 붙이면 optional한 내용
}
