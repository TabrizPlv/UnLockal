import { IsNotEmpty } from 'class-validator';

export class ListingDto {
  @IsNotEmpty()
  productName: string;

  @IsNotEmpty()
  productDescription: string;

  @IsNotEmpty()
  productPrice : number;

  @IsNotEmpty()
  productImages: string[];
}
