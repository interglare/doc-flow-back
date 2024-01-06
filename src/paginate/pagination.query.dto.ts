import { IsInt } from 'class-validator';

export class PaginationQueryDto {
  @IsInt()
  limit: number;

  @IsInt()
  page: number;
}
