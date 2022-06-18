import { IsNotEmpty } from 'class-validator';

export class UpdateListingDto {
  @IsNotEmpty()
  productDescription: string;
}
