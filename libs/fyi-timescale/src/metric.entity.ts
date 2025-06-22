import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Metric{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column('float')
    value: number;

    @CreateDateColumn()
    timestamp: Date;
}