import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {

  @IsString()
  public name: string;

  @IsString()
  public phoneNumber: string;

  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}


export class LoginUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
