// Application: Register Use Case
import { User, RegisterInput } from '@/domain/auth/User';
import { IAuthService } from '@/domain/auth/AuthService';

export class RegisterUseCase {
  constructor(private authService: IAuthService) {}

  async execute(input: RegisterInput): Promise<User> {
    // Business logic and validation
    if (!input.email || !input.password || !input.name) {
      throw new Error('Email, password, and name are required');
    }

    if (input.password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email)) {
      throw new Error('Invalid email format');
    }

    return this.authService.register({
      email: input.email.toLowerCase().trim(),
      password: input.password,
      name: input.name.trim(),
    });
  }
}
