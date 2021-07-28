import {
  IsDate,
  MaxLength,
  IsNotEmpty,
  IsOptional,
  IsIn,
  Validate,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { TransformToDate } from '../../../shared/utils';
import { PaymentTypes } from '../enums/payment-types.enum';
import { CpfUnique, CpfValid } from '../rules';

export class ICreateStudentDTO {
  @IsNotEmpty()
  name: string;

  @MaxLength(15)
  @IsNotEmpty()
  @Validate(CpfUnique)
  @Validate(CpfValid)
  cpf: string;

  @Transform(({ value }) => TransformToDate(value))
  @IsDate()
  @IsOptional()
  birthdate: Date;

  @IsIn(Object.values(PaymentTypes))
  @IsNotEmpty()
  payment_method: string;
}
