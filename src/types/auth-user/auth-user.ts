export interface AuthUser {
  name: string;
  email: string;
  loginTime: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  age: number;
  password: string;
  confirmPassword?: string;
  notification: boolean;
}

export interface LoginUser {
  email: string;
  password: string;
}
