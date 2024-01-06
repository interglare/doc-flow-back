import { IsEnum, IsInt, IsString } from 'class-validator';
import { PaginationQueryDto } from './../../paginate/pagination.query.dto';

export class GetUsersQueryDto extends PaginationQueryDto {
  @IsInt()
  age?: number;

  @IsString()
  @IsEnum(['f', 'm', 'u'])
  gender?: string;
}
