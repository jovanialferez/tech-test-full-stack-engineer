import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('suburbs')
export class Suburb {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  postcode: string;
}