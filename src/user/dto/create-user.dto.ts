export class CreateUserDto {
  No: number;
  role: number;
  user_id: string;
  user_password: string;
  user_name?: string;
  user_email?: string;
  user_phone?: string;
  user_address?: string;
  user_birth?: string;
  create_at: Date;
}