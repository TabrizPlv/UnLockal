import {IsNotEmpty} from 'class-validator';


export class UpdateStoreDto {
    @IsNotEmpty()
    storeTitle : string;

    @IsNotEmpty()
    storeDescription : string;
}