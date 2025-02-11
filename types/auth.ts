export type UserRole = "admin" | "teacher" | "parent"

export interface AuthFormData {
  email: string
  password: string
  name?: string
  role?: UserRole
}

