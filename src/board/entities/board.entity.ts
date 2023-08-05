import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  post_id: number;

  @PrimaryColumn()
  email: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  write_DT: Date;
}
