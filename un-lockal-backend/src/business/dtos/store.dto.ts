import {IsNotEmpty} from 'class-validator';

export class StoreDto {
    @IsNotEmpty()
    storeTitle : string;

    @IsNotEmpty()
    storeDescription : string;

    @IsNotEmpty()
    storeImageURL : string;
}