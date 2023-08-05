import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  email: string;

  @Column()
  pw: string;

  @Column()
  user_name: string;

  @Column()
  refresh_token: string;
}
