import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './Category';
import { Suburb } from './Suburb';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column({
    name: 'contact_name',
  })
  contactName: string;

  @Column({
    name: 'contact_phone',
  })
  contactPhone: string;

  @Column({
    name: 'contact_email',
  })
  contactEmail: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
  })
  creationTimestamp: string;

  @ManyToOne(() => Category)
  @JoinColumn({
    name: 'category_id',
  })
  category: Category

  @ManyToOne(() => Suburb)
  @JoinColumn({
    name: 'suburb_id',
  })
  suburb: Suburb
}