export class CreateUserDto {
  readonly No: number;
  readonly role: number;
  readonly user_id: string;
  readonly user_password: string;
  readonly user_name?: string;
  readonly user_email?: string;
  readonly user_phone?: string;
  readonly user_address?: string;
  readonly user_birth?: string;
  readonly create_at: string;
}
