import { IsNotEmpty } from 'class-validator';

export class UpdateListingDto {
  @IsNotEmpty()
  productName: string;

  @IsNotEmpty()
  productDescription: string;

  @IsNotEmpty()
  productPrice : number;

  @IsNotEmpty()
  productImages: string[];
}
