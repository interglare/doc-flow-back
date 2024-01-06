import { IsEnum, IsInt, IsString } from 'class-validator';
import { PaginationQueryDto } from 'src/paginate/pagination.query.dto';

export class GetUsersQueryDto extends PaginationQueryDto {
  @IsInt()
  age?: number;

  @IsString()
  @IsEnum(['f', 'm', 'u'])
  gender?: string;
}
