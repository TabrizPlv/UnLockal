import {IsNotEmpty} from 'class-validator';

export class ListingDto {
    @IsNotEmpty()
    productDescription : string;
}