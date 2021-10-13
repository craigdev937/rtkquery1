import { BaseEntity, Column, Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "todos"})
export class Todos extends BaseEntity {
    @PrimaryGeneratedColumn() id: number;
    @Column() text: string;
    @Column() active: boolean;
    @Column() done: boolean;
};






