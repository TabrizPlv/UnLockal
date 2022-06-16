import {IsNotEmpty, IsNumber, IsNumberString,} from 'class-validator';

export class CreateStoreDto {
    @IsNotEmpty()
    username : string;

    @IsNotEmpty()
    storeTitle : string;

    @IsNotEmpty()
    storeDescription : string;
}